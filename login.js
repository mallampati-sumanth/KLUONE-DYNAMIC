document.getElementById('signUp').addEventListener('click', () => {
    document.getElementById('container').classList.add('right-panel-active')
})

document.getElementById('signIn').addEventListener('click', () => {
    document.getElementById('container').classList.remove('right-panel-active')
})

// Signup Function
document.querySelector('.sign-up-container form').addEventListener('submit', async (e) => {
    e.preventDefault()
    const name = document.querySelector('.sign-up-container input[name="name"]').value
    const email = document.querySelector('.sign-up-container input[name="email"]').value
    const password = document.querySelector('.sign-up-container input[name="password"]').value

    try {
        const res = await fetch('http://127.0.0.1:5000/api/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email, password }),
            credentials: 'include'
        })
        const data = await res.json()
        if (res.ok) {
            alert(data.message)
            document.getElementById('container').classList.remove('right-panel-active')
        } else {
            alert(data.error || 'Signup failed!')
        }
    } catch (err) {
        console.error(err)
        alert("Signup failed! Make sure Flask server is running.")
    }
})

// Login Function
document.querySelector('.sign-in-container form').addEventListener('submit', async (e) => {
    e.preventDefault()
    const email = document.querySelector('.sign-in-container input[name="email"]').value
    const password = document.querySelector('.sign-in-container input[name="password"]').value

    try {
        const res = await fetch('http://127.0.0.1:5000/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password }),
            credentials: 'include'
        })
        const data = await res.json()
        if (res.ok) {
            // Store user data in sessionStorage
            sessionStorage.setItem('user', JSON.stringify(data.user));
            
            alert('Login successful!')
            // Small delay to ensure cookie is saved
            await new Promise(resolve => setTimeout(resolve, 500));
            
            // Redirect to admin dashboard if admin, otherwise home
            if (data.user.is_admin) {
                window.location.href = 'admin.html'
            } else {
                window.location.href = 'index.html'
            }
        } else {
            alert(data.error || 'Invalid credentials')
        }
    } catch (err) {
        console.error(err)
        alert("Login failed! Make sure Flask server is running.")
    }
})

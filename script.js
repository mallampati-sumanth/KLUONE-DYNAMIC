document.addEventListener("DOMContentLoaded", () => {
  // Mobile Menu Toggle
  const menuToggle = document.querySelector(".mobile-menu-toggle")
  const mobileMenu = document.querySelector(".mobile-menu")

  menuToggle.addEventListener("click", () => {
    mobileMenu.classList.toggle("active")

    // Change icon based on menu state
    const icon = menuToggle.querySelector("i")
    if (mobileMenu.classList.contains("active")) {
      icon.classList.remove("fa-bars")
      icon.classList.add("fa-times")
    } else {
      icon.classList.remove("fa-times")
      icon.classList.add("fa-bars")
    }
  })

  // Mobile Dropdown Toggle
  const mobileDropdownToggles = document.querySelectorAll(".mobile-dropdown-toggle")

  mobileDropdownToggles.forEach((toggle) => {
    toggle.addEventListener("click", function (e) {
      e.preventDefault()
      const dropdownMenu = this.nextElementSibling
      dropdownMenu.classList.toggle("active")

      // Change icon based on dropdown state
      const icon = this.querySelector("i")
      if (dropdownMenu.classList.contains("active")) {
        icon.classList.remove("fa-chevron-down")
        icon.classList.add("fa-chevron-up")
      } else {
        icon.classList.remove("fa-chevron-up")
        icon.classList.add("fa-chevron-down")
      }
    })
  })

  // Carousel Functionality
  const slides = document.querySelectorAll(".carousel-slide")
  const indicators = document.querySelectorAll(".indicator")
  const prevBtn = document.querySelector(".prev-btn")
  const nextBtn = document.querySelector(".next-btn")
  let currentSlide = 0
  let slideInterval

  // Initialize carousel
  function initCarousel() {
    // Hide all slides
    slides.forEach((slide) => {
      slide.classList.remove("active")
    })

    // Deactivate all indicators
    indicators.forEach((indicator) => {
      indicator.classList.remove("active")
    })

    // Show current slide
    slides[currentSlide].classList.add("active")
    indicators[currentSlide].classList.add("active")

    // Animate text
    const texts = slides[currentSlide].querySelectorAll(".animate-text")
    texts.forEach((text) => {
      text.style.animation = "none"
      setTimeout(() => {
        text.style.animation = "fadeInUp 1s forwards 0.5s"
      }, 10)
    })
  }

  // Next slide
  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length
    initCarousel()
  }

  // Previous slide
  function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length
    initCarousel()
  }

  // Start automatic slideshow
  function startSlideshow() {
    slideInterval = setInterval(nextSlide, 5000)
  }

  // Stop automatic slideshow
  function stopSlideshow() {
    clearInterval(slideInterval)
  }

  // Event listeners for carousel controls
  nextBtn.addEventListener("click", () => {
    stopSlideshow()
    nextSlide()
    startSlideshow()
  })

  prevBtn.addEventListener("click", () => {
    stopSlideshow()
    prevSlide()
    startSlideshow()
  })

  // Event listeners for indicators
  indicators.forEach((indicator, index) => {
    indicator.addEventListener("click", () => {
      stopSlideshow()
      currentSlide = index
      initCarousel()
      startSlideshow()
    })
  })

  // Initialize carousel and start slideshow
  initCarousel()
  startSlideshow()

  // Toggle How to Use section
  const howToUseToggle = document.querySelector(".how-to-use .toggle-btn")
  const howToUseContent = document.querySelector(".how-to-use-content")

  howToUseToggle.addEventListener("click", () => {
    howToUseContent.classList.toggle("active")

    // Change icon based on content state
    const icon = howToUseToggle.querySelector("i")
    if (howToUseContent.classList.contains("active")) {
      icon.classList.remove("fa-plus")
      icon.classList.add("fa-minus")
    } else {
      icon.classList.remove("fa-minus")
      icon.classList.add("fa-plus")
    }
  })

  // Toggle Achievements section
  const achievementsToggle = document.querySelector(".achievements .toggle-btn")
  const achievementsContent = document.querySelector(".achievements-content")

  achievementsToggle.addEventListener("click", () => {
    achievementsContent.classList.toggle("active")

    // Change icon based on content state
    const icon = achievementsToggle.querySelector("i")
    if (achievementsContent.classList.contains("active")) {
      icon.classList.remove("fa-plus")
      icon.classList.add("fa-minus")
    } else {
      icon.classList.remove("fa-minus")
      icon.classList.add("fa-plus")
    }
  })

  // Animate on Scroll
  const animateElements = document.querySelectorAll(".animate-on-scroll")

  function checkIfInView() {
    const windowHeight = window.innerHeight
    const windowTopPosition = window.scrollY
    const windowBottomPosition = windowTopPosition + windowHeight

    animateElements.forEach((element) => {
      const elementHeight = element.offsetHeight
      const elementTopPosition = element.offsetTop
      const elementBottomPosition = elementTopPosition + elementHeight

      // Check if element is in view
      if (elementBottomPosition >= windowTopPosition && elementTopPosition <= windowBottomPosition) {
        const delay = element.getAttribute("data-delay") || 0
        setTimeout(() => {
          element.classList.add("animate")

          // If element has a specific animation class
          const animation = element.getAttribute("data-animation")
          if (animation) {
            element.classList.add(`animate__${animation}`)
          }
        }, delay)
      }
    })
  }

  // Check elements on load
  window.addEventListener("load", checkIfInView)

  // Check elements on scroll
  window.addEventListener("scroll", checkIfInView)

  // Counter Animation for Stats
  const statNumbers = document.querySelectorAll(".stat-number")

  function animateCounter(element) {
    const target = Number.parseInt(element.getAttribute("data-count"))
    const duration = 2000 // 2 seconds
    const step = target / (duration / 16) // 16ms is approx. one frame at 60fps
    let current = 0

    const timer = setInterval(() => {
      current += step
      element.textContent = Math.floor(current)

      if (current >= target) {
        element.textContent = target
        clearInterval(timer)
      }
    }, 16)
  }

  // Animate counters when they come into view
  function checkCounters() {
    statNumbers.forEach((counter) => {
      const position = counter.getBoundingClientRect()

      // If element is in viewport
      if (position.top < window.innerHeight && position.bottom >= 0 && !counter.classList.contains("animated")) {
        counter.classList.add("animated")
        animateCounter(counter)
      }
    })
  }

  // Check counters on scroll
  window.addEventListener("scroll", checkCounters)

  // Check counters on load
  window.addEventListener("load", checkCounters)

  // Back to Top Button
  const backToTopBtn = document.querySelector(".back-to-top")

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      backToTopBtn.classList.add("active")
    } else {
      backToTopBtn.classList.remove("active")
    }
  })

  // Smooth scrolling for navigation links
  const navLinks = document.querySelectorAll(".nav-links a, .mobile-nav-links a, .back-to-top a")

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      // Only if the link has a hash
      if (this.getAttribute("href").startsWith("#")) {
        e.preventDefault()

        // Close mobile menu if open
        if (mobileMenu.classList.contains("active")) {
          mobileMenu.classList.remove("active")
          const icon = menuToggle.querySelector("i")
          icon.classList.remove("fa-times")
          icon.classList.add("fa-bars")
        }

        // Get the target section
        const targetId = this.getAttribute("href")
        const targetSection = document.querySelector(targetId)

        if (targetSection) {
          // Scroll to target section
          window.scrollTo({
            top: targetSection.offsetTop - 70,
            behavior: "smooth",
          })

          // Update active link
          navLinks.forEach((navLink) => {
            navLink.classList.remove("active")
          })
          this.classList.add("active")
        }
      }
    })
  })

  // Highlight active nav link on scroll
  window.addEventListener("scroll", () => {
    const scrollPosition = window.scrollY

    // Get all sections
    const sections = document.querySelectorAll("section")

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 100
      const sectionHeight = section.offsetHeight
      const sectionId = section.getAttribute("id")

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        // Remove active class from all links
        navLinks.forEach((link) => {
          link.classList.remove("active")
        })

        // Add active class to corresponding link
        const activeLink = document.querySelector(`.nav-links a[href="#${sectionId}"]`)
        if (activeLink) {
          activeLink.classList.add("active")
        }
      }
    })
  })
})


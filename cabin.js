// API Configuration
const API_URL = 'http://127.0.0.1:5000/api';

// Fetch faculty cabin data from database
async function fetchCabinDataFromDatabase() {
    try {
        const response = await fetch(`${API_URL}/cabins`);
        const data = await response.json();
        
        if (data.cabins && data.cabins.length > 0) {
            console.log('✅ Cabin data loaded from database:', data.cabins.length, 'entries');
            return data.cabins;
        }
    } catch (error) {
        console.error('Error fetching cabin data from database:', error);
    }
    return null;
}

// Faculty data
let hodData = [
    {
        department: "Electronics and Communication Engineering",
        alias: ["ECE"],
        name: "Dr.I.Govardhani",
        cabin: "R-403",
        facultyList: [
           { sno: 1, name: "Dr.M.Venkata Narayana", designation: "Professor", room: "R102", cabin: "1B1" },
  { sno: 2, name: "Dr.M.Suman", designation: "Professor", room: "R403", cabin: "R403" },
  { sno: 3, name: "Dr.I.Govardhani", designation: "Professor", room: "L417", cabin: "" },
  { sno: 4, name: "Dr.K.Ch.Sri Kavya", designation: "Professor", room: "R611", cabin: "R611" },
  { sno: 5, name: "Dr.B.T.P.Madhav", designation: "Professor", room: "L709", cabin: "L709" },
  { sno: 6, name: "Dr.K.Sarat Kumar", designation: "Professor", room: "C222", cabin: "C222" },
  { sno: 7, name: "Dr.K.Hari Kishore", designation: "Professor", room: "C115", cabin: "C115" },
  { sno: 8, name: "Dr.M.Sridhar", designation: "Professor", room: "R102", cabin: "1A6" },
  { sno: 9, name: "Dr.D.Venkata Ratnam", designation: "Professor", room: "L701", cabin: "L701" },
  { sno: 10, name: "Dr.G.V.Subbarao", designation: "Professor", room: "L702", cabin: "L702" },
  { sno: 11, name: "Dr.M.Venu Gopala Rao", designation: "Professor", room: "C215B", cabin: "C215B" },
  { sno: 12, name: "Dr.V.Rajesh", designation: "Professor", room: "C302", cabin: "C302" },
  { sno: 13, name: "Dr.A.S.C.S.Sastry", designation: "Professor", room: "L409", cabin: "L409" },
  { sno: 14, name: "Dr. Md.Z Rahman", designation: "Professor", room: "R102", cabin: "1A10" },
  { sno: 15, name: "Dr.P.Venkat Vijay Kishore", designation: "Professor", room: "L703", cabin: "L703" },
  { sno: 16, name: "Dr.P.Pardhasaradhi", designation: "Professor", room: "R102", cabin: "1A11" },
  { sno: 17, name: "Dr.S.Koteswararao", designation: "Professor", room: "L702", cabin: "L702" },
  { sno: 18, name: "Dr.K.Srinivasarao", designation: "Professor", room: "L706", cabin: "L706" },
  { sno: 19, name: "Dr.M.Sujatha", designation: "Professor", room: "R102", cabin: "1A3" },
  { sno: 20, name: "Dr.P. Satya Srinivas Babu", designation: "Professor", room: "C611", cabin: "C611" },
  { sno: 21, name: "Dr.Habibulla Khan", designation: "Professor", room: "C106A", cabin: "C106A" },
  { sno: 22, name: "Dr.Santosh Kumar", designation: "Professor", room: "C610", cabin: "C610" },
  { sno: 23, name: "Dr.M.Ravi Kumar", designation: "Associate Professor", room: "R401", cabin: "4A14" },
  { sno: 24, name: "Dr.K.Ravi Kumar", designation: "Associate Professor", room: "L409", cabin: "L409" },
  { sno: 25, name: "Dr.G.Venkata Ganesh", designation: "Associate Professor", room: "R102", cabin: "1A5" },
  { sno: 26, name: "Dr.M.Siva Kumar", designation: "Associate Professor", room: "M001", cabin: "M001" },
  { sno: 27, name: "Dr.Syed Inthiyaz", designation: "Associate Professor", room: "C316", cabin: "C316" },
  { sno: 28, name: "Dr.Fazal Noorbasha", designation: "Associate Professor", room: "R102", cabin: "1A2" },
  { sno: 29, name: "Dr.Syed Shameem", designation: "Associate Professor", room: "R102", cabin: "1A9" },
  { sno: 30, name: "Dr.G.R.K.Prasad", designation: "Associate Professor", room: "C316", cabin: "C316" },
  { sno: 31, name: "Dr.D.Bhavana", designation: "Associate Professor", room: "R401", cabin: "4A17" },
  { sno: 32, name: "Dr.V.Subba Reddy", designation: "Associate Professor", room: "R401", cabin: "4A16" },
  { sno: 33, name: "Dr.C.Sreevardhan", designation: "Associate Professor", room: "L409", cabin: "L409" },
  { sno: 34, name: "Dr.B.Suresh", designation: "Associate Professor", room: "R501", cabin: "5A13" },
  { sno: 35, name: "Dr.Ch.Raghava Prasad", designation: "Associate Professor", room: "L409", cabin: "L409" },
  { sno: 36, name: "Dr.D.Sreenivasa Rao", designation: "Associate Professor", room: "R401", cabin: "4A1" },
  { sno: 37, name: "Dr.P.Saleem Akram", designation: "Associate Professor", room: "R401", cabin: "4A22" },
  { sno: 38, name: "Dr.China Satyanarayana", designation: "Associate Professor", room: "L701", cabin: "L701" },
  { sno: 39, name: "Dr.K.Rajesh Babu", designation: "Associate Professor", room: "R305", cabin: "3A4" },
  { sno: 40, name: "Dr.G.Sai Krishna Santosh", designation: "Associate Professor", room: "R305", cabin: "3A5" },
  { sno: 41, name: "Dr.A.V.Prabhu", designation: "Associate Professor", room: "R401", cabin: "4A24" },
  { sno: 42, name: "Dr.Sampad Kumar Panda", designation: "Associate Professor", room: "R501", cabin: "5A18" },
  { sno: 43, name: "Dr.R.S.Ernest Ravindran", designation: "Associate Professor", room: "R305", cabin: "3A10" },
  { sno: 44, name: "Dr.Y.Usha Devi", designation: "Associate Professor", room: "R305", cabin: "3A6" },
  { sno: 45, name: "Dr.K.Girija Sravani", designation: "Associate Professor", room: "L706", cabin: "L706" },
  { sno: 46, name: "Dr.M.Kasi Prasad", designation: "Associate Professor", room: "R501", cabin: "5A23" },
  { sno: 47, name: "Dr.N.Prabakaran", designation: "Associate Professor", room: "R305", cabin: "3A8" },
  { sno: 48, name: "Dr.Vipul Agarwal", designation: "Associate Professor", room: "R305", cabin: "3A12" },
  { sno: 49, name: "Dr.C.S. Preetham Reddy", designation: "Associate Professor", room: "R102", cabin: "1A8" },
  { sno: 50, name: "Dr.Bukya Balaji", designation: "Associate Professor", room: "R401", cabin: "4A18" },
  { sno: 51, name: "Dr.M.Muzammil Parvez", designation: "Associate Professor", room: "R401", cabin: "4A10" },
  { sno: 52, name: "Dr.P.Syam Sundar", designation: "Associate Professor", room: "R305", cabin: "3A1" },
  { sno: 53, name: "Dr.SV.Aswin Kumer", designation: "Associate Professor", room: "R401", cabin: "4A20" },
  { sno: 54, name: "Dr.R.Revathi", designation: "Associate Professor", room: "R401", cabin: "4A12" },
  { sno: 55, name: "Dr.S.Rooban", designation: "Associate Professor", room: "R401", cabin: "4A13" },
  { sno: 56, name: "Dr.Chella Santhosh", designation: "Associate Professor", room: "R401", cabin: "4A15" },
  { sno: 57, name: "Dr.S.Arunmetha", designation: "Associate Professor", room: "R401", cabin: "4B2" },
  { sno: 58, name: "Dr.E.Kiran Kumar", designation: "Associate Professor", room: "R305", cabin: "3A2" },
  { sno: 59, name: "Dr.Aravind Kilaru", designation: "Associate Professor", room: "R305", cabin: "3A4" },
  { sno: 60, name: "Dr.Aravindhan Alagarsamy", designation: "Associate Professor", room: "R401", cabin: "4A8" },
  { sno: 61, name: "Dr.Abhishek Pahuja", designation: "Associate Professor", room: "R501", cabin: "5A21" },
  { sno: 62, name: "Dr.Sumit Bhushan", designation: "Associate Professor", room: "R305", cabin: "3A9" },
  { sno: 63, name: "Dr.Vivekananthan Venkateswaran", designation: "Associate Professor", room: "C611", cabin: "C611" },
  { sno: 64, name: "Dr.SR Srither", designation: "Associate Professor", room: "R401", cabin: "4A11" },
  { sno: 65, name: "Dr.Sandip Swarnakar", designation: "Associate Professor", room: "R501", cabin: "5A19" },
  { sno: 66, name: "Dr.K.Sripath Roy", designation: "Assistant Professor", room: "C206", cabin: "C206" },
  { sno: 67, name: "Dr.K.Sony", designation: "Assistant Professor", room: "R401", cabin: "4A9" },
  { sno: 68, name: "Mr.P.Srikanth Reddy", designation: "Assistant Professor", room: "R106", cabin: "R106" },
  { sno: 69, name: "Dr.K.Uday Kiran", designation: "Assistant Professor", room: "C114B", cabin: "C114B" },
  { sno: 70, name: "Dr.K.Suresh Kumar", designation: "Assistant Professor", room: "R401", cabin: "4A21" },
  { sno: 71, name: "Dr.K.V.Sowmya", designation: "Assistant Professor", room: "C413", cabin: "C413" },
  { sno: 72, name: "Mr.M.Lakshmana Kumar", designation: "Assistant Professor", room: "C214B", cabin: "C214B" },
  { sno: 73, name: "Dr.S.Vamsee Krishna", designation: "Assistant Professor", room: "R102", cabin: "1A1" },
  { sno: 74, name: "Dr.Atul Kumar", designation: "Assistant Professor", room: "R102", cabin: "1A4" },
  { sno: 75, name: "Dr.SK.Hasane Ahammad", designation: "Assistant Professor", room: "L704A", cabin: "L704A" },
  { sno: 76, name: "Dr.Debajit Deb", designation: "Assistant Professor", room: "R305", cabin: "3A3" },
  { sno: 77, name: "Dr.Vasimalla Yesudasu", designation: "Assistant Professor", room: "R608", cabin: "R608" },
  { sno: 78, name: "Mr.M.Ajay Babu", designation: "Assistant Professor", room: "R005", cabin: "R005" },
  { sno: 79, name: "Dr.Nishant Kumar", designation: "Assistant Professor", room: "R401", cabin: "4A19" },
  { sno: 80, name: "Dr.Vyoma Singh", designation: "Assistant Professor", room: "R102", cabin: "1B4" },
  { sno: 81, name: "Dr.Balaji Ramachandran", designation: "Assistant Professor", room: "R401", cabin: "4A23" },
  { sno: 82, name: "Ms.P.Sivani", designation: "Assistant Professor", room: "R305", cabin: "3B4" },
  { sno: 83, name: "Mr.Sripathi Siva Prasad", designation: "Assistant Professor", room: "R608", cabin: "R608" },
  { sno: 84, name: "Dr.Sourabh Jain", designation: "Assistant Professor", room: "R401", cabin: "4B3" }
        ],
    },
    {
        department: "Computer Science Engineering",
        alias: ["CSE"],
        name: "Dr. T. Pavan Kumar",
        cabin: "Room 201",
        facultyList: [
            { sno: 1, name: "Dr. Tummala Pavan Kumar", designation: "Professor & HOD", cabin: 100 },
  { sno: 2, name: "Dr. Tirumala Kodanda Rama Krishna Rao", designation: "Professor", cabin: 101 },
  { sno: 3, name: "Dr. Senthil Athithan", designation: "Professor", cabin: 102 },
  { sno: 4, name: "Dr. Vinnakota S V Prabhakar", designation: "Professor", cabin: 103 },
  { sno: 5, name: "Dr. Vemuru Srikanth", designation: "Professor", cabin: 104 },
  { sno: 6, name: "Dr. Kottapalli Raja Sekhara Prasad", designation: "Professor", cabin: 105 },
  { sno: 7, name: "Dr. V. Shanmukhkumar Jagarlapudi", designation: "Professor", cabin: 106 },
  { sno: 8, name: "Dr. Yalla Prasanth", designation: "Professor", cabin: 107 },
  { sno: 9, name: "Dr. Kasula Venkata Durga Kiran", designation: "Professor", cabin: 108 },
  { sno: 10, name: "Dr. D. Haritha", designation: "Professor", cabin: 109 },
  { sno: 11, name: "Dr. B.V. Appa Rao", designation: "Professor", cabin: 110 },
  { sno: 12, name: "Dr. Ghali Venkata Subba Rao", designation: "Professor", cabin: 111 },
  { sno: 13, name: "Dr. Burra Vijay Babu", designation: "Professor", cabin: 112 },
  { sno: 14, name: "Dr. Gajula Siva Nageswara Rao", designation: "Professor", cabin: 113 },
  { sno: 15, name: "Dr. Kallipalli Venkata Raju", designation: "Professor", cabin: 114 },
  { sno: 16, name: "Dr. Kopparti V.V. Satyanarryana", designation: "Professor", cabin: 115 },
  { sno: 17, name: "Dr. Pabbisetti Satya Gouri Arunasri", designation: "Professor", cabin: 116 },
  { sno: 18, name: "Dr. Mohammed Ali Hussain", designation: "Professor", cabin: 117 },
  { sno: 19, name: "Dr. Ketavath Kumar Naik", designation: "Professor", cabin: 118 },
  { sno: 20, name: "Dr. Gurrampati Venkata Ramana Reddy", designation: "Professor", cabin: 119 },
  { sno: 21, name: "Dr. Kothamasu Kiran Kumar", designation: "Professor", cabin: 120 },
  { sno: 22, name: "Dr. Nulaka Srinivasu", designation: "Professor", cabin: 121 },
  { sno: 23, name: "Dr. P.V.R.D. Prasada Rao", designation: "Professor", cabin: 122 },
  { sno: 24, name: "Dr. Gera Pradeepini", designation: "Professor", cabin: 123 },
  { sno: 25, name: "Dr. Gandharba Swain", designation: "Professor", cabin: 124 },
  { sno: 26, name: "Dr. Pothuraju Raja Rajeswari", designation: "Professor", cabin: 125 },
  { sno: 27, name: "Dr. Kurapati Venkata Narasimha Rao", designation: "Professor", cabin: 126 },
  { sno: 28, name: "Dr. Atluri Vani", designation: "Professor", cabin: 127 },
  { sno: 29, name: "Dr. Shaik Sagar Imambi", designation: "Professor", cabin: 128 },
  { sno: 30, name: "Dr. Jonnadula Srinivasa Rao", designation: "Professor", cabin: 129 },
  { sno: 31, name: "Dr. Mohammed Moulana", designation: "Professor", cabin: 130 },
  { sno: 32, name: "Dr. Kolla Bhanu Prakash", designation: "Professor", cabin: 131 },
  { sno: 33, name: "Dr. Enireddy Vamsidhar", designation: "Professor", cabin: 132 },
  { sno: 34, name: "Dr. Tatavarthy Santhi Sri", designation: "Professor", cabin: 133 },
  { sno: 35, name: "Dr. Ch V Ramana Murthy", designation: "Professor", cabin: 134 },
  { sno: 36, name: "Dr. A K Velmurugan", designation: "Professor", cabin: 135 },
  { sno: 37, name: "Dr. P Venkata Chalapathi", designation: "Professor", cabin: 136 },
  { sno: 38, name: "Dr. Gottumukkala P. Saradhi Varma", designation: "Professor", cabin: 137 },
  { sno: 39, name: "Dr. Moparthi Nageswara Rao", designation: "Professor", cabin: 138 },
  { sno: 40, name: "Dr. Vithya Ganesan", designation: "Professor", cabin: 139 },
  { sno: 41, name: "Dr. Bhukya Srinivasa A Rao", designation: "Professor", cabin: 140 },
  { sno: 42, name: "Dr. Suryakanth V Gangasetty", designation: "Professor", cabin: 141 },
  { sno: 43, name: "Dr. Govind Divakaran", designation: "Professor", cabin: 142 },
  { sno: 44, name: "Dr. Sandeep Kumar Sahratia", designation: "Professor", cabin: 143 },
  { sno: 45, name: "Dr. Viswanathan Ramasamy", designation: "Professor", cabin: 144 },
  { sno: 46, name: "Dr. Kandepu Bala Venkata Brahmarao", designation: "Professor", cabin: 145 },
  { sno: 47, name: "Dr. Yogesh Kumar Sharma", designation: "Professor", cabin: 146 },
  { sno: 48, name: "Dr. N. Alangudi Balaji", designation: "Professor", cabin: 147 },
  { sno: 49, name: "Dr. V. Murugesh", designation: "Professor", cabin: 148 },
  { sno: 50, name: "Dr. Arpit Jain", designation: "Professor", cabin: 149 },
  { sno: 51, name: "Dr. Leena Arya", designation: "Professor", cabin: 150 },
  { sno: 52, name: "Dr. Ravi Rastogi", designation: "Professor", cabin: 151 },
  { sno: 53, name: "Dr. Dara Vikram", designation: "Professor", cabin: 152 },
  { sno: 54, name: "Dr. Khalim Amjad Meerja", designation: "Professor", cabin: 153 },
  { sno: 55, name: "Dr. Smitha Chowdary", designation: "Professor", cabin: 154 },
  { sno: 56, name: "Dr. Bobba Veeramallu", designation: "Professor", cabin: 155 },
  { sno: 57, name: "Dr. V. Viswanath Shenoi", designation: "Professor", cabin: 156 },
  { sno: 58, name: "Dr. Rajendra Kumar Ganiya", designation: "Professor", cabin: 157 },
  { sno: 59, name: "Dr. Dharmaiah Devarapalli", designation: "Professor", cabin: 158 },
  { sno: 60, name: "Dr. Penubaka Lakshman Kishan Kumar Reddy", designation: "Professor", cabin: 159 },
  { sno: 61, name: "Dr. Kurra Rajasekhara Rao", designation: "Professor", cabin: 161 },
  { sno: 62, name: "Dr. Vuyyuru Krishna Reddy", designation: "Professor", cabin: 162 },
  { sno: 63, name: "Dr. N.B.V. Prasad", designation: "Professor", cabin: 163 },
  { sno: 64, name: "Dr. Konda Jayarami Reddy", designation: "Professor", cabin: 164 },
  { sno: 65, name: "Dr. Chintala Radhika Rani", designation: "Associate Professor", cabin: 165 },
  { sno: 66, name: "Dr. Sk. Razia", designation: "Associate Professor", cabin: 166 },
  { sno: 67, name: "Dr. Talagadadevi Srinivasa Rao", designation: "Associate Professor", cabin: 167 },
  { sno: 68, name: "Dr. Venkata Vara Prasad Padyala", designation: "Associate Professor", cabin: 168 },
  { sno: 69, name: "Dr. Anne V Praveen Krishna", designation: "Associate Professor", cabin: 169 },
  { sno: 70, name: "Dr. Boddu Sekhar Babu", designation: "Associate Professor", cabin: 170 },
  { sno: 71, name: "Dr. K. Ruth Ramya", designation: "Associate Professor", cabin: 171 },
  { sno: 72, name: "Dr. Koneru Swapna", designation: "Associate Professor", cabin: 172 },
  { sno: 73, name: "Dr. P. Lakshmi Prasanna", designation: "Associate Professor", cabin: 173 },
  { sno: 74, name: "Dr. M. Venkateswarlu", designation: "Associate Professor", cabin: 174 },
  { sno: 75, name: "Dr. K. Ravindranadh", designation: "Associate Professor", cabin: 175 },
  { sno: 76, name: "Dr. N.V.S. Pavan Kumar", designation: "Associate Professor", cabin: 176 },
  { sno: 77, name: "Dr. B. Srinivasulu", designation: "Associate Professor", cabin: 177 },
  { sno: 78, name: "Dr. M. Ramesh", designation: "Associate Professor", cabin: 178 },
  { sno: 79, name: "Dr. T. Veerraju", designation: "Associate Professor", cabin: 179 },
  { sno: 80, name: "Dr. N. Udaya Bhaskar", designation: "Associate Professor", cabin: 180 },
  { sno: 81, name: "Dr. K. Sai Venkateswara Rao", designation: "Assistant Professor", cabin: 181 },
  { sno: 82, name: "Dr. K. Madhavi", designation: "Assistant Professor", cabin: 182 },
  { sno: 83, name: "Dr. D. Neeraja", designation: "Assistant Professor", cabin: 183 },
  { sno: 84, name: "Dr. Y. Padmavathi", designation: "Assistant Professor", cabin: 184 },
  { sno: 85, name: "Dr. K. Sunitha", designation: "Assistant Professor", cabin: 185 },
  { sno: 86, name: "Dr. P. Sunil Kumar", designation: "Assistant Professor", cabin: 186 },
  { sno: 87, name: "Dr. B. Jyothi", designation: "Assistant Professor", cabin: 187 },
  { sno: 88, name: "Dr. G. Suneetha", designation: "Assistant Professor", cabin: 188 },
  { sno: 89, name: "Dr. V. Sai Kumar", designation: "Assistant Professor", cabin: 189 },
  { sno: 90, name: "Dr. A. Pavan Kumar", designation: "Assistant Professor", cabin: 190 },
  { sno: 91, name: "Dr. C. Venkata Durga Prasad", designation: "Assistant Professor", cabin: 191 },
  { sno: 92, name: "Dr. S. Lakshmi Narayana", designation: "Assistant Professor", cabin: 192 },
  { sno: 93, name: "Dr. M. Ramana Murthy", designation: "Assistant Professor", cabin: 193 },
  { sno: 94, name: "Dr. T. Rajendra Kumar", designation: "Assistant Professor", cabin: 194 },
  { sno: 95, name: "Dr. V. Sudhakar", designation: "Assistant Professor", cabin: 195 },
  { sno: 96, name: "Dr. M. Venkata Rao", designation: "Assistant Professor", cabin: 196 },
  { sno: 97, name: "Dr. K. Nagendra", designation: "Assistant Professor", cabin: 197 },
  { sno: 98, name: "Dr. Y. Srinivas", designation: "Assistant Professor", cabin: 198 },
  { sno: 99, name: "Dr. P. Madhavi", designation: "Assistant Professor", cabin: 199 },
  { sno: 100, name: "Dr. C. Anjaneyulu", designation: "Assistant Professor", cabin: 200 },
  { sno: 101, name: "Dr. Bolledu Siva Nagaiah", designation: "Associate Professor", cabin: 201 },
  { sno: 102, name: "Dr. Swarna Kuchibhotla", designation: "Associate Professor", cabin: 202 },
  { sno: 103, name: "Dr. C Sreenivas Preetham Reddy", designation: "Associate Professor", cabin: 203 },
  { sno: 104, name: "Dr. Pellakuri Vidyullatha", designation: "Associate Professor", cabin: 204 },
  { sno: 105, name: "Dr. Aswin Kumer S V", designation: "Associate Professor", cabin: 205 },
  { sno: 106, name: "Dr. Mothukuri Radha", designation: "Associate Professor", cabin: 206 },
  { sno: 107, name: "Dr. Dinesh Kumar A", designation: "Associate Professor", cabin: 207 },
  { sno: 108, name: "Dr. Tumuluru Praveen", designation: "Associate Professor", cabin: 208 },
  { sno: 109, name: "Dr. Nikhat Parveen", designation: "Associate Professor", cabin: 209 },
  { sno: 110, name: "Dr. S Shanmugan", designation: "Associate Professor", cabin: 210 },
  { sno: 111, name: "Dr. V Daya Sagar Ketaraju", designation: "Associate Professor", cabin: 211 },
  { sno: 112, name: "Dr. Padmanaban K", designation: "Associate Professor", cabin: 212 },
  { sno: 113, name: "Dr. Kunda Venkata Prasad", designation: "Associate Professor", cabin: 213 },
  { sno: 114, name: "Dr. Marouthu Anusha", designation: "Associate Professor", cabin: 214 },
  { sno: 115, name: "Dr. Vijay Kumar Burugari", designation: "Associate Professor", cabin: 215 },
  { sno: 116, name: "Dr. Nallagatla Raghavendra Sai", designation: "Associate Professor", cabin: 216 },
  { sno: 117, name: "Dr. Jogendra Kumar", designation: "Associate Professor", cabin: 217 },
  { sno: 118, name: "Dr. P M Ashok Kumar", designation: "Associate Professor", cabin: 218 },
  { sno: 119, name: "Dr. Vidya Sagar Ponnam", designation: "Associate Professor", cabin: 219 },
  { sno: 120, name: "Dr. Kanike Raghavendra Kumar", designation: "Associate Professor", cabin: 220 },
  { sno: 121, name: "Dr. A Abdul Rahman", designation: "Associate Professor", cabin: 221 },
  { sno: 122, name: "Dr. Veerubhotla Siva Rama Krishna Sharma", designation: "Associate Professor", cabin: 222 },
  { sno: 123, name: "Dr. Veerraju Gampala", designation: "Associate Professor", cabin: 223 },
  { sno: 124, name: "Dr. Shankar Rajendran", designation: "Associate Professor", cabin: 224 },
  { sno: 125, name: "Dr. Murali Mohan Vutukuru", designation: "Associate Professor", cabin: 225 },
  { sno: 126, name: "Mr. Balajee R.M", designation: "Associate Professor", cabin: 226 },
  { sno: 127, name: "Dr. Sadam Kavitha", designation: "Associate Professor", cabin: 227 },
  { sno: 128, name: "Dr. Sangaraju Hrushikesava Raju", designation: "Associate Professor", cabin: 228 },
  { sno: 129, name: "Dr. Jyothi N.M", designation: "Associate Professor", cabin: 229 },
  { sno: 130, name: "Dr. Nilu Singh", designation: "Associate Professor", cabin: 230 },
  { sno: 131, name: "Dr. P. Ithaya Rani", designation: "Associate Professor", cabin: 231 },
  { sno: 132, name: "Dr. Ratna Kanth Nelapati", designation: "Associate Professor", cabin: 232 },
  { sno: 133, name: "Dr. Shaik Hasane Ahamad", designation: "Associate Professor", cabin: 233 },
  { sno: 134, name: "Dr. Batta Uma Maheswara Rao", designation: "Associate Professor", cabin: 234 },
  { sno: 135, name: "Dr. Movva Naga Venkata Kiran Babu", designation: "Associate Professor", cabin: 235 },
  { sno: 136, name: "Dr. Bandarupalli Mouleswara Rao", designation: "Associate Professor", cabin: 236 },
  { sno: 137, name: "Dr. Basaba Bikram Kumar", designation: "Associate Professor", cabin: 237 },
  { sno: 138, name: "Dr. S. Aravinth Seshadri", designation: "Associate Professor", cabin: 238 },
  { sno: 139, name: "Dr. Sathish Kumar Kannaiah", designation: "Associate Professor", cabin: 239 },
  { sno: 140, name: "Dr. Karyemsetty Nagarjuna", designation: "Associate Professor", cabin: 240 },
  { sno: 141, name: "Dr. Suneetha Bulla", designation: "Associate Professor", cabin: 241 },
  { sno: 142, name: "Dr. Raja Govindan", designation: "Associate Professor", cabin: 242 },
  { sno: 143, name: "Dr. S Srithar", designation: "Associate Professor", cabin: 243 },
  { sno: 144, name: "Dr. Akhilesh Kumar Dubey", designation: "Associate Professor", cabin: 244 },
  { sno: 145, name: "Dr. Thati Anuradha", designation: "Associate Professor", cabin: 245 },
  { sno: 146, name: "Dr. Kailasam Swathi", designation: "Associate Professor", cabin: 246 },
  { sno: 147, name: "Dr. Prashant Kumar Shukla", designation: "Associate Professor", cabin: 247 },
  { sno: 148, name: "Dr. Thatavarthi Satish", designation: "Associate Professor", cabin: 248 },
  { sno: 149, name: "Dr. Asesh Kumar Tripathy", designation: "Associate Professor", cabin: 249 },
  { sno: 150, name: "Dr. Basant Sah", designation: "Associate Professor", cabin: 250 },
  { sno: 151, name: "Dr. M.M. Yamuna Devi", designation: "Associate Professor", cabin: 301 },
  { sno: 152, name: "Dr. Iwin Thanakumar Joseph S", designation: "Associate Professor", cabin: 302 },
  { sno: 153, name: "Dr. Nesarani A", designation: "Associate Professor", cabin: 303 },
  { sno: 154, name: "Dr. Veera Ankal Vuyyuru", designation: "Associate Professor", cabin: 304 },
  { sno: 155, name: "Dr. A. Raja Basha", designation: "Associate Professor", cabin: 305 },
  { sno: 156, name: "Dr. Garikapati Bindu", designation: "Associate Professor", cabin: 306 },
  { sno: 157, name: "Dr. Mohammad Ishrat", designation: "Associate Professor", cabin: 307 },
  { sno: 158, name: "Dr. Jalaluddin Khan", designation: "Associate Professor", cabin: 308 },
  { sno: 159, name: "Dr. A.R. Deepa", designation: "Associate Professor", cabin: 309 },
  { sno: 160, name: "Dr. Ashish", designation: "Associate Professor", cabin: 310 },
  { sno: 161, name: "Dr. Vijaya Kumar Reddy Radha", designation: "Associate Professor", cabin: 311 },
  { sno: 162, name: "Dr. Veeraswamy Ammisetty", designation: "Associate Professor", cabin: 312 },
  { sno: 163, name: "Dr. Jagadish Gurrala", designation: "Associate Professor", cabin: 313 },
  { sno: 164, name: "Dr. Adapa Gopi", designation: "Associate Professor", cabin: 314 },
  { sno: 165, name: "Dr. Bechoo Lal", designation: "Associate Professor", cabin: 315 },
  { sno: 166, name: "Dr. Kapil Agarwal", designation: "Associate Professor", cabin: 316 },
  { sno: 167, name: "Dr. Anitha Pradhan", designation: "Associate Professor", cabin: 317 },
  { sno: 168, name: "Dr. Chippada Nagamani", designation: "Associate Professor", cabin: 318 },
  { sno: 169, name: "Dr. Vuda Sreenivasa Rao", designation: "Associate Professor", cabin: 319 },
  { sno: 170, name: "Dr. Vemula Venkata Jaya Rama Krishnaiah", designation: "Associate Professor", cabin: 320 },
  { sno: 171, name: "Dr. Anantharaman R", designation: "Associate Professor", cabin: 321 },
  { sno: 172, name: "Dr. R. Mahendran", designation: "Associate Professor", cabin: 322 },
  { sno: 173, name: "Dr. Shaik Khaja Mohiddin", designation: "Associate Professor", cabin: 323 },
  { sno: 174, name: "Dr. G.V. Sam Kumar", designation: "Associate Professor", cabin: 324 },
  { sno: 175, name: "Dr. Munish Kumar", designation: "Associate Professor", cabin: 325 },
  { sno: 176, name: "Dr. Satrughan Kumar", designation: "Associate Professor", cabin: 326 },
  { sno: 177, name: "Dr. Surya Kiran Chebrolu", designation: "Associate Professor", cabin: 327 },
  { sno: 178, name: "Dr. B. Annapurnna", designation: "Associate Professor", cabin: 328 },
  { sno: 179, name: "Dr. Kambala Vijaya Kumar", designation: "Associate Professor", cabin: 329 },
  { sno: 180, name: "Dr. T. Subha Mastan Rao", designation: "Associate Professor", cabin: 330 },
  { sno: 181, name: "Dr. Malladi Ravi Sankar", designation: "Associate Professor", cabin: 331 },
  { sno: 182, name: "Dr. B. Samatha", designation: "Associate Professor", cabin: 332 },
  { sno: 183, name: "Dr. Madabattula P J Santosh Kumar", designation: "Associate Professor", cabin: 333 },
  { sno: 184, name: "Dr. Pradeep Saxena", designation: "Associate Professor", cabin: 334 },
  { sno: 185, name: "Dr. Ganta Jacob Victor", designation: "Associate Professor", cabin: 335 },
  { sno: 186, name: "Dr. Goda Srinivasa Rao", designation: "Associate Professor", cabin: 336 },
  { sno: 187, name: "Dr. V. Sivaramaraju", designation: "Associate Professor", cabin: 337 },
  { sno: 188, name: "Dr. Kuraganti Santhi", designation: "Associate Professor", cabin: 338 },
  { sno: 189, name: "Dr. M Geetha", designation: "Associate Professor", cabin: 339 },
  { sno: 190, name: "Dr. Saravanan Shanmugam", designation: "Associate Professor", cabin: 340 },
  { sno: 191, name: "Dr. Venkateswarlu Sunkari", designation: "Associate Professor", cabin: 341 },
  { sno: 192, name: "Dr. Gaddameedi Dinesh Kumar", designation: "Asst Professor", cabin: 342 },
  { sno: 193, name: "Mr. Kabir Pasha Shaik Mohammed", designation: "Asst Professor", cabin: 343 },
  { sno: 194, name: "Ms. M.V.B.T. Santhi", designation: "Asst Professor", cabin: 344 },
  { sno: 195, name: "Dr. K.V. Chandra Sekhar", designation: "Asst Professor", cabin: 345 },
  { sno: 196, name: "Dr. Tangallamudi Srinivasa Rao", designation: "Asst Professor", cabin: 346 },
  { sno: 197, name: "Mr. M. Vishnuvardhan", designation: "Asst Professor", cabin: 347 },
  { sno: 198, name: "Dr. N. S.M. P. Latha Devi", designation: "Asst Professor", cabin: 348 },
  { sno: 199, name: "Dr. M. Raja Ambethkar", designation: "Asst Professor", cabin: 349 },
  { sno: 200, name: "Dr. M.V.V.K. Srinivas Prasad", designation: "Asst Professor", cabin: 350 },
  { sno: 201, name: "MR. LEKKALA KUMARA SWAMY", designation: "ASST PROFESSOR", cabin: 351 },
  { sno: 202, name: "MR.K.STEPHEN VICTOR", designation: "ASST PROFESSOR", cabin: 352 },
  { sno: 203, name: "MR. VENKATESWARA RAO LINGAMANENI", designation: "ASST PROFESSOR", cabin: 353 },
  { sno: 204, name: "Dr.M.GNANA KIRAN", designation: "ASST PROFESSOR", cabin: 354 },
  { sno: 205, name: "MR. BHIMAVARAPU RAGHAVENDRA RAO", designation: "ASST PROFESSOR", cabin: 355 },
  { sno: 206, name: "DR.G.CHARAN KUMAR", designation: "ASST PROFESSOR", cabin: 356 },
  { sno: 207, name: "DR.S.V.SUBRAHMANYAM", designation: "ASST PROFESSOR", cabin: 357 },
  { sno: 208, name: "DR.MUTYABOYINA LATHA", designation: "ASST PROFESSOR", cabin: 358 },
  { sno: 209, name: "DR.SONTI VENKATA NAGAMALLESWARA SASTRY", designation: "ASST PROFESSOR", cabin: 359 },
  { sno: 210, name: "DR.D.SATEESH KUMAR", designation: "ASST PROFESSOR", cabin: 360 },
  { sno: 211, name: "DR.TAMMA ESWARLAL", designation: "ASST PROFESSOR", cabin: 361 },
  { sno: 212, name: "MR. CHANUMOLU ANIL", designation: "ASST PROFESSOR", cabin: 362 },
  { sno: 213, name: "DR.N.KONDA REDDY", designation: "ASST PROFESSOR", cabin: 363 },
  { sno: 214, name: "DR.JAMPANI SATISH BABU", designation: "ASST PROFESSOR", cabin: 364 },
  { sno: 215, name: "Dr.DUKKIPATI SUDHA", designation: "ASST PROFESSOR", cabin: 365 },
  { sno: 216, name: "DR. GANI N THIMMA REDDY", designation: "ASST PROFESSOR", cabin: 366 },
  { sno: 217, name: "MR.C.M.A.K.ZEELAN BASHA", designation: "ASST PROFESSOR", cabin: 367 },
  { sno: 218, name: "MR.VIJAY KUMAR VASANTHAM", designation: "ASST PROFESSOR", cabin: 368 },
  { sno: 219, name: "DR.AVULA PAVANI", designation: "ASST PROFESSOR", cabin: 369 },
  { sno: 220, name: "Dr.NICHENAMETLA RAJESH", designation: "ASST PROFESSOR", cabin: 370 },
  { sno: 221, name: "DR.CHITTA M H SAI BABA", designation: "ASST PROFESSOR", cabin: 371 },
  { sno: 222, name: "MR.SORNAPUDI SANDEEP KUMAR", designation: "ASST PROFESSOR", cabin: 372 },
  { sno: 223, name: "Dr.SHAIK MOHAMMED GOUSE", designation: "ASST PROFESSOR", cabin: 373 },
  { sno: 224, name: "MR.ANUMALASETTY SATYA KALYAN", designation: "ASST PROFESSOR", cabin: 374 },
  { sno: 225, name: "DR.DAMA ANAND", designation: "ASST PROFESSOR", cabin: 375 },
  { sno: 226, name: "MR.SUDARSA DORABABU", designation: "ASST PROFESSOR", cabin: 376 },
  { sno: 227, name: "MS.PREMALATHA VELAGAPALLI", designation: "ASST PROFESSOR", cabin: 377 },
  { sno: 228, name: "MR.MADHAVARAPU CHANDAN", designation: "ASST PROFESSOR", cabin: 378 },
  { sno: 229, name: "Dr.BURAGADDA KIRAN KUMAR", designation: "ASST PROFESSOR", cabin: 379 },
  { sno: 230, name: "DR. SALLURI VENKATESWARLU", designation: "ASST PROFESSOR", cabin: 380 },
  { sno: 231, name: "MR.BANDA SAI SANDEEP", designation: "ASST PROFESSOR", cabin: 381 },
  { sno: 232, name: "DR.V.B.V.N.PRASAD", designation: "ASST PROFESSOR", cabin: 382 },
  { sno: 233, name: "DR.RAVIPATI KUMARA SWAMY", designation: "ASST PROFESSOR", cabin: 383 },
  { sno: 234, name: "DR.AMARA S A L G GOPALA GUPTA", designation: "ASST PROFESSOR", cabin: 384 },
  { sno: 235, name: "MS. CHODAVARAPU L N DEEPIKA", designation: "ASST PROFESSOR", cabin: 385 },
  { sno: 236, name: "DR.NERELLA SRIMANNARAYANA", designation: "ASST PROFESSOR", cabin: 386 },
  { sno: 237, name: "DR.MOHAN KUMAR CHANDOL", designation: "ASST PROFESSOR", cabin: 387 },
  { sno: 238, name: "MR.HARI KIRAN VEGE", designation: "ASST PROFESSOR", cabin: 388 },
  { sno: 239, name: "Dr.E.RAJESH KUMAR", designation: "ASST PROFESSOR", cabin: 389 },
  { sno: 240, name: "MS.SYED KARIMUNNISA", designation: "ASST PROFESSOR", cabin: 390 },
  { sno: 241, name: "Dr.T.GANESAN", designation: "ASST PROFESSOR", cabin: 391 },
  { sno: 242, name: "DR.NELLUTLA RAVINDER", designation: "ASST PROFESSOR", cabin: 392 },
  { sno: 243, name: "DR.TIRUTHAMARA SESHAIYER RAJESWARI", designation: "ASST PROFESSOR", cabin: 393 },
  { sno: 244, name: "DR.YELLA BHARGAVI", designation: "ASST PROFESSOR", cabin: 394 },
  { sno: 245, name: "MR.JONNALAGADDA SURYA KIRAN", designation: "ASST PROFESSOR", cabin: 395 },
  { sno: 246, name: "MS.U HARITA", designation: "ASST PROFESSOR", cabin: 396 },
  { sno: 247, name: "Dr.BHIMAVARAPU USHA RANI", designation: "ASST PROFESSOR", cabin: 397 },
  { sno: 248, name: "Dr.EDARA SREELATHA", designation: "ASST PROFESSOR", cabin: 398 },
  { sno: 249, name: "DR.DASARI RAMESH", designation: "ASST PROFESSOR", cabin: 399 },
  { sno: 250, name: "DR.PUVVADA NAGESH", designation: "ASST PROFESSOR", cabin: 400 },
  { sno: 251, name: "DR.M RADHA MADHAVI", designation: "ASST PROFESSOR", cabin: 251 },
  { sno: 252, name: "DR.KOLACHINA SRINIVAS", designation: "ASST PROFESSOR", cabin: 252 },
  { sno: 253, name: "PAGADALA RADHAKRISHNA", designation: "ASST PROFESSOR", cabin: 253 },
  { sno: 254, name: "TULLURI LAKSHMI CHENNAKESAVA GOUD", designation: "ASST PROFESSOR", cabin: 254 },
  { sno: 255, name: "ADAPA SIVA KRISHNA", designation: "ASST PROFESSOR", cabin: 255 },
  { sno: 256, name: "BOYALAPALLI ANIL KUMAR", designation: "ASST PROFESSOR", cabin: 256 },
  { sno: 257, name: "BOBBILI SATYANARAYANA MURTHY", designation: "ASST PROFESSOR", cabin: 257 },
  { sno: 258, name: "DR.PATHURI BINDU", designation: "ASST PROFESSOR", cabin: 258 },
  { sno: 259, name: "VENNAPUSA SAMBASIVA REDDY", designation: "ASST PROFESSOR", cabin: 259 },
  { sno: 260, name: "DR.MUTYALA SURESH", designation: "ASST PROFESSOR", cabin: 260 },
  { sno: 261, name: "DR.NALLEBOYINA VIJAYA", designation: "ASST PROFESSOR", cabin: 261 },
  { sno: 262, name: "DR.ANKITA TIWARI", designation: "ASST PROFESSOR", cabin: 262 },
  { sno: 263, name: "MOHAMMAD JAFFER RAZA", designation: "ASST PROFESSOR", cabin: 263 },
  { sno: 264, name: "MS.BHAVANI VASANTHA", designation: "ASST PROFESSOR", cabin: 264 },
  { sno: 265, name: "MS.VALASAPALLI MOUNIKA", designation: "ASST PROFESSOR", cabin: 265 },
  { sno: 266, name: "Dr.V DEEPAK", designation: "ASST PROFESSOR", cabin: 266 },
  { sno: 267, name: "DR.KOLLI DEEPTI", designation: "ASST PROFESSOR", cabin: 267 },
  { sno: 268, name: "MR.SHAIK SHAIKSHAVALI", designation: "ASST PROFESSOR", cabin: 268 },
  { sno: 269, name: "PISINI SAIVIJAY", designation: "ASST PROFESSOR", cabin: 269 },
  { sno: 270, name: "Dr.BELUGURU VENKATESWARULU", designation: "ASST PROFESSOR", cabin: 270 },
  { sno: 271, name: "MR.MADUPU RAM KUMAR", designation: "ASST PROFESSOR", cabin: 271 },
  { sno: 272, name: "DR.MAGANTI SYAMALA", designation: "ASST PROFESSOR", cabin: 272 },
  { sno: 273, name: "Dr.PARASA GAYATHRI", designation: "ASST PROFESSOR", cabin: 273 },
  { sno: 274, name: "SEEPANA VARAHA NARASIMHULU", designation: "ASST PROFESSOR", cabin: 274 },
  { sno: 275, name: "DR.CHOUDARAJU NEELIMA", designation: "ASST PROFESSOR", cabin: 275 },
  { sno: 276, name: "DR.CH BALAJI", designation: "ASST PROFESSOR", cabin: 276 },
  { sno: 277, name: "RAMISETTI D L N SWAMY", designation: "ASST PROFESSOR", cabin: 277 },
  { sno: 278, name: "BOLLIMUNTHA SIVA RAMA KRISHNA", designation: "ASST PROFESSOR", cabin: 278 },
  { sno: 279, name: "DR. DEVARAPALLI RAGHU", designation: "ASST PROFESSOR", cabin: 279 },
  { sno: 280, name: "Dr.KANAKALA V RAVI TEJA", designation: "ASST PROFESSOR", cabin: 280 },
  { sno: 281, name: "DR.KUKKAMALLA ANIL KUMAR", designation: "ASST PROFESSOR", cabin: 281 },
  { sno: 282, name: "HARI LAL BAHADUR", designation: "ASST PROFESSOR", cabin: 282 },
  { sno: 283, name: "MR.N NAVEEN", designation: "ASST PROFESSOR", cabin: 283 },
  { sno: 284, name: "DR.PELURU THAVITI RAJU", designation: "ASST PROFESSOR", cabin: 284 },
  { sno: 285, name: "MS.YAMINI TONDEPU", designation: "ASST PROFESSOR", cabin: 285 },
  { sno: 286, name: "DR.AMARA RAMA DEVI", designation: "ASST PROFESSOR", cabin: 286 },
  { sno: 287, name: "MR.JANJHYAM VENKATA NAGA RAMESH", designation: "ASST PROFESSOR", cabin: 287 },
  { sno: 288, name: "MR.TIRANDASU RAVI KUMAR", designation: "ASST PROFESSOR", cabin: 288 },
  { sno: 289, name: "DR.IRRINKI MOHAN KRISHNA", designation: "ASST PROFESSOR", cabin: 289 },
  { sno: 290, name: "MR.ANDE PAVAN KUMAR", designation: "ASST PROFESSOR", cabin: 290 },
  { sno: 291, name: "Dr.PUPPALA RAMYA", designation: "ASST PROFESSOR", cabin: 291 },
  { sno: 292, name: "MS.SMRITILEKHA DAS", designation: "ASST PROFESSOR", cabin: 292 },
  { sno: 293, name: "SARAVANA BABU J", designation: "ASST PROFESSOR", cabin: 293 },
  { sno: 294, name: "DR.TWINKLE DASARI", designation: "ASST PROFESSOR", cabin: 294 },
  { sno: 295, name: "DR.GUNNA VENKATESWARLU", designation: "ASST PROFESSOR", cabin: 295 },
  { sno: 296, name: "DR.KANTAM RAJESH KUMAR", designation: "ASST PROFESSOR", cabin: 296 },
  { sno: 297, name: "MS.PANGULURI MOUNICA", designation: "ASST PROFESSOR", cabin: 297 },
  { sno: 298, name: "MR.SAVARAM MYTHREYA", designation: "ASST PROFESSOR", cabin: 298 },
  { sno: 299, name: "MR.GARIGIPATI RAMA KRISHNA", designation: "ASST PROFESSOR", cabin: 299 },
  { sno: 300, name: "MS.GARIKIPATI NAGA LAKSHMI SOWJANYA", designation: "ASST PROFESSOR", cabin: 300 },
  { sno: 301, name: "MR.AREPALLI GOPI", designation: "ASST PROFESSOR", cabin: 301 },
  { sno: 302, name: "DR.SHAIDA FARHAD", designation: "ASST PROFESSOR", cabin: 302 },
  { sno: 303, name: "MS.PONNURU ANUSHA", designation: "ASST PROFESSOR", cabin: 303 },
  { sno: 304, name: "MR.SREEDHAR BURADA", designation: "ASST PROFESSOR", cabin: 304 },
  { sno: 305, name: "Dr. VENKATESWARLU CHANDU", designation: "ASST PROFESSOR", cabin: 305 },
  { sno: 306, name: "DR.KALAVACHARLA VEERA VENKATA RAJU", designation: "ASST PROFESSOR", cabin: 306 },
  { sno: 307, name: "MR.ARAVINDAN SRINIVASAN", designation: "ASST PROFESSOR", cabin: 307 },
  { sno: 308, name: "DR.VENKATESWARLU GUNDU", designation: "ASST PROFESSOR", cabin: 308 },
  { sno: 309, name: "Mr.T.KRISHNAN", designation: "ASST PROFESSOR", cabin: 309 },
  { sno: 310, name: "Ms.ANJANA DEVI AKURATHI", designation: "ASST PROFESSOR", cabin: 310 },
  { sno: 311, name: "Ms.SAI DURGA TEJASWI VINNAKOTA", designation: "ASST PROFESSOR", cabin: 311 },
  { sno: 312, name: "Dr.RENUKA KOLANDASAMY", designation: "ASST PROFESSOR", cabin: 312 },
  { sno: 313, name: "Ms.CHINNAM SABITHA", designation: "ASST PROFESSOR", cabin: 313 },
  { sno: 314, name: "Mr.BHAVANAM VENKATA SURESH REDDY", designation: "ASST PROFESSOR", cabin: 314 },
  { sno: 315, name: "MR.AGRAHARAM SIVA KUMAR REDDY", designation: "ASST PROFESSOR", cabin: 315 },
  { sno: 316, name: "MR.CHITTIBABU RAVELA", designation: "ASST PROFESSOR", cabin: 316 },
  { sno: 317, name: "MR.RUPANI RANJITH KUMAR", designation: "ASST PROFESSOR", cabin: 317 },
  { sno: 318, name: "MR.PALTHIYA ANANTHA RAO", designation: "ASST PROFESSOR", cabin: 318 },
  { sno: 319, name: "MS.APARNA S", designation: "ASST PROFESSOR", cabin: 319 },
  { sno: 320, name: "DR.K.MADHU MURTHY", designation: "ASST PROFESSOR", cabin: 320 },
  { sno: 321, name: "DR.BURRA VAMSI KRISHNA", designation: "ASST PROFESSOR", cabin: 321 },
  { sno: 322, name: "MR.TUSHAR KANTI DE", designation: "ASST PROFESSOR", cabin: 322 },
  { sno: 323, name: "MS.GUTTIKONDA PRASHANTI", designation: "ASST PROFESSOR", cabin: 323 },
  { sno: 324, name: "MR.ANANTHA RAO GOTTIMUKKALA", designation: "ASST PROFESSOR", cabin: 324 },
  { sno: 325, name: "MS.BOMMISETTI YAMINI SUPRIYA", designation: "ASST PROFESSOR", cabin: 325 },
  { sno: 326, name: "Ms.CHUNDURI LAVANYA", designation: "ASST PROFESSOR", cabin: 326 },
  { sno: 327, name: "Dr.PAVAN KUMAR BADA", designation: "ASST PROFESSOR", cabin: 327 },
  { sno: 328, name: "Dr.SAJJA TULASI KRISHNA", designation: "ASST PROFESSOR", cabin: 328 },
  { sno: 329, name: "Mr.POTTASIRI CHANDRA MOHANA RAI", designation: "ASST PROFESSOR", cabin: 329 },
  { sno: 330, name: "Mr.B.NAMASIVAYAM", designation: "ASST PROFESSOR", cabin: 330 },
  { sno: 331, name: "Ms.S N LAKSHMI MALLUVALASA", designation: "ASST PROFESSOR", cabin: 331 },
  { sno: 332, name: "Mr.ZULFIKAR ALI ANSARI", designation: "ASST PROFESSOR", cabin: 332 },
  { sno: 333, name: "Dr.SONALI BISWAS", designation: "ASST PROFESSOR", cabin: 333 },
  { sno: 334, name: "Mr.GOBINDA CHANDRA DAS", designation: "ASST PROFESSOR", cabin: 334 },
  { sno: 335, name: "Mr.NAGENDRA BABU RAJABOINA", designation: "ASST PROFESSOR", cabin: 335 },
  { sno: 336, name: "Mr.ANGALKUDITI SRINIVAS", designation: "ASST PROFESSOR", cabin: 336 },
  { sno: 337, name: "Ms.THONEPUDI HEMALATHA", designation: "ASST PROFESSOR", cabin: 337 },
  { sno: 338, name: "Dr.RAMA KRISHNA YELLAPRAGADA", designation: "ASST PROFESSOR", cabin: 338 },
  { sno: 339, name: "Dr.BANSODE GANPAT SADHU", designation: "ASST PROFESSOR", cabin: 339 },
  { sno: 340, name: "Mr.VUYYURU LAKSHMA REDDY", designation: "ASST PROFESSOR", cabin: 340 },
  { sno: 341, name: "Mr.TULASI RAJESH", designation: "ASST PROFESSOR", cabin: 341 },
  { sno: 342, name: "Dr.RAVI KUMAR GOGULAMUDI", designation: "ASST PROFESSOR", cabin: 342 },
  { sno: 343, name: "Mr.MYLAPALLI RAMESH", designation: "ASST PROFESSOR", cabin: 343 },
  { sno: 344, name: "Dr.ABHIJIT SANTRA", designation: "ASST PROFESSOR", cabin: 344 },
  { sno: 345, name: "Dr.SHAMEEM C C", designation: "ASST PROFESSOR", cabin: 345 },
  { sno: 346, name: "Dr.KARRI ARUNA BHASKAR", designation: "ASST PROFESSOR", cabin: 346 },
  { sno: 347, name: "Mr.DAYANIDHI MOHAPATRA", designation: "ASST PROFESSOR", cabin: 347 },
  { sno: 348, name: "Mr.JOHN DANA EBINEZER MARKAPURAPU", designation: "ASST PROFESSOR", cabin: 348 },
  { sno: 349, name: "Dr.M.SUPRIYA MENON", designation: "ASST PROFESSOR", cabin: 349 },
  { sno: 350, name: "Ms.POTHULA HYMAVATHI", designation: "ASST PROFESSOR", cabin: 350 },
  { sno: 351, name: "Dr.A.JAGDISH MOHAN RAO", designation: "ASST PROFESSOR", cabin: 401 },
  { sno: 352, name: "Mr.MIRIYALA MARKANDEYULU", designation: "ASST PROFESSOR", cabin: 402 },
  { sno: 353, name: "Mr.CHINTALAPUDI ANIL", designation: "ASST PROFESSOR", cabin: 403 },
  { sno: 354, name: "Mr.DINESHNATH GOPINATH", designation: "ASST PROFESSOR", cabin: 404 },
  { sno: 355, name: "Mr.THAMODHARAN ARUMUGAM", designation: "ASST PROFESSOR", cabin: 405 },
  { sno: 356, name: "Ms.MANDAVA MANJUSHA", designation: "ASST PROFESSOR", cabin: 406 },
  { sno: 357, name: "Ms.CHOPPARAPU GOWTHAMI", designation: "ASST PROFESSOR", cabin: 407 },
  { sno: 358, name: "MS.ALAPATI SMITHA KRANTHI", designation: "ASST PROFESSOR", cabin: 408 },
  { sno: 359, name: "Ms.DASARI MANASA", designation: "ASST PROFESSOR", cabin: 409 },
  { sno: 360, name: "Dr.MACHERLA PADMAVATHI", designation: "ASST PROFESSOR", cabin: 410 },
  { sno: 361, name: "Mr.ANANTHARAMAIAH VENGALA", designation: "ASST PROFESSOR", cabin: 411 },
  { sno: 362, name: "Mr.ARUMALLA NAGARAJU", designation: "ASST PROFESSOR", cabin: 412 },
  { sno: 363, name: "Ms.MANASA ADUSUMILLI", designation: "ASST PROFESSOR", cabin: 413 },
  { sno: 364, name: "Ms.CHALAMALASETTY SARVANI", designation: "ASST PROFESSOR", cabin: 414 },
  { sno: 365, name: "Mrs.LINGINEDI USHA SREE", designation: "ASST PROFESSOR", cabin: 415 },
  { sno: 366, name: "Dr.DHARMENDRA KUMAR PILLI", designation: "ASST PROFESSOR", cabin: 416 },
  { sno: 367, name: "Ms.INAKOLLU ASWANI", designation: "ASST PROFESSOR", cabin: 417 },
  { sno: 368, name: "Mr.KASTURI SAI SANDEEP", designation: "ASST PROFESSOR", cabin: 418 },
  { sno: 369, name: "Dr.KOPPURAVURI GURNADHA GUPTA", designation: "ASST PROFESSOR", cabin: 419 },
  { sno: 370, name: "Mr.RAJESH BINGU", designation: "ASST PROFESSOR", cabin: 420 },
  { sno: 371, name: "Ms.VUYYURU LALITHA", designation: "ASST PROFESSOR", cabin: 421 },
  { sno: 372, name: "Dr.IMRAN ALI", designation: "ASST PROFESSOR", cabin: 422 },
  { sno: 373, name: "Mr.DHANESH KUMAR", designation: "ASST PROFESSOR", cabin: 423 },
  { sno: 374, name: "Mr.GANDAVADI VENKATESH", designation: "ASST PROFESSOR", cabin: 424 },
  { sno: 375, name: "Ms.GORREPATI RAJANI REDDY", designation: "ASST PROFESSOR", cabin: 425 },
  { sno: 376, name: "Mr.KARANKI NAGA GOPI", designation: "ASST PROFESSOR", cabin: 426 },
  { sno: 377, name: "Mr.KRUPADANAM RAYI", designation: "ASST PROFESSOR", cabin: 427 },
  { sno: 378, name: "Mr.PALADUGU VENKATESWARA RAO", designation: "ASST PROFESSOR", cabin: 428 },
  { sno: 379, name: "Ms.KOWTHARAPU RADHA", designation: "ASST PROFESSOR", cabin: 429 },
  { sno: 380, name: "Dr.N.VEDAVATHI", designation: "ASST PROFESSOR", cabin: 430 },
  { sno: 381, name: "Ms.PRASANTHI VALLURI", designation: "ASST PROFESSOR", cabin: 431 },
  { sno: 382, name: "DR.WASIM KHAN", designation: "ASST PROFESSOR", cabin: 432 },
  { sno: 383, name: "Mr.B.SURENDRA BABU", designation: "ASST PROFESSOR", cabin: 433 },
  { sno: 384, name: "Dr.P.MURALI KRISHNA", designation: "ASST PROFESSOR", cabin: 434 },
  { sno: 385, name: "Mr.P.DINESH CHANDRA", designation: "ASST PROFESSOR", cabin: 435 },
  { sno: 386, name: "Mr.SUKHAM ROMEN SINGH", designation: "ASST PROFESSOR", cabin: 436 },
  { sno: 387, name: "Mr.A.SOMAYAJULA", designation: "ASST PROFESSOR", cabin: 437 },
  { sno: 388, name: "Ms.M.UMA MAHESWARI", designation: "ASST PROFESSOR", cabin: 438 },
  { sno: 389, name: "Mr.BAKKALA SANTHA KUMAR", designation: "ASST PROFESSOR", cabin: 439 },
  { sno: 390, name: "Mr.MYLAPALLI SRIKANTH", designation: "ASST PROFESSOR", cabin: 440 },
  { sno: 391, name: "Ms.NATHA PRIYA", designation: "ASST PROFESSOR", cabin: 441 },
  { sno: 392, name: "Ms.DEEPTHI NATHA", designation: "ASST PROFESSOR", cabin: 442 },
  { sno: 393, name: "Mr.Mr.RODDA DILIP KUMAR", designation: "ASST PROFESSOR", cabin: 443 },
  { sno: 394, name: "Mr.REKAPALLI SEETHARAM", designation: "ASST PROFESSOR", cabin: 444 },
  { sno: 395, name: "Dr.THELLA PREETHI PRIYANKA", designation: "ASST PROFESSOR", cabin: 445 },
  { sno: 396, name: "Dr. ANWAR AHMAD SHAIK", designation: "ASST PROFESSOR", cabin: 446 },
  { sno: 397, name: "Dr.NAVEEN MUKKAPATI", designation: "ASST PROFESSOR", cabin: 447 },
  { sno: 398, name: "Mr.SYED MOHAMMED AZMAL", designation: "ASST PROFESSOR", cabin: 448 },
  { sno: 399, name: "Dr.YELISETTY MADHAVILATHA", designation: "ASST PROFESSOR", cabin: 449 },
  { sno: 400, name: "Ms.SARIHADDU KAVITHA", designation: "ASST PROFESSOR", cabin: 450 },
  { sno: 401, name: "Ms.PRANEETHA ALUR", designation: "ASST PROFESSOR", cabin: 451 },
{ sno: 402, name: "Ms.SETTI RAJESWARI", designation: "ASST PROFESSOR", cabin: 452 },
{ sno: 403, name: "Dr.MOHD SHAMSH TABAREJ", designation: "ASST PROFESSOR", cabin: 453 },
{ sno: 404, name: "Mr.KISHORE DASARI", designation: "ASST PROFESSOR", cabin: 454 },
{ sno: 405, name: "Ms.ANUMULA SRUTHI", designation: "ASST PROFESSOR", cabin: 455 },
{ sno: 406, name: "Dr.PENUBAKA BALAJI", designation: "ASST PROFESSOR", cabin: 456 },
{ sno: 407, name: "Mr.RUDRA MANI BHUTIA", designation: "ASST PROFESSOR", cabin: 457 },
{ sno: 408, name: "Dr.PERURI VENKATA ANUSHA", designation: "ASST PROFESSOR", cabin: 458 },
{ sno: 409, name: "Dr.KODALI SADHANA", designation: "ASST PROFESSOR", cabin: 459 },
{ sno: 410, name: "Mr.CHEEKATY VENKATESWARA RAO", designation: "ASST PROFESSOR", cabin: 460 },
{ sno: 411, name: "Mr.BANGARU BALAKRISHNA", designation: "ASST PROFESSOR", cabin: 461 },
{ sno: 412, name: "Mr.MD MANAN MUJAHID", designation: "ASST PROFESSOR", cabin: 462 },
{ sno: 413, name: "Dr.S.V.SURESH BABU M", designation: "ASST PROFESSOR", cabin: 463 },
{ sno: 414, name: "Mr.SIVA RAMAIAH Y", designation: "ASST PROFESSOR", cabin: 464 },
{ sno: 415, name: "Dr.K.VENKATESWARA RAO", designation: "ASST PROFESSOR", cabin: 465 },
{ sno: 416, name: "Dr.S.PHANI KUMAR", designation: "ASST PROFESSOR", cabin: 466 },
{ sno: 417, name: "Dr.VENKATA RAO MADDUMALA", designation: "ASST PROFESSOR", cabin: 467 },
{ sno: 418, name: "Mr.DASARI VINAY KUMAR", designation: "ASST PROFESSOR", cabin: 468 },
{ sno: 419, name: "Mr.K.RAM BABU", designation: "ASST PROFESSOR", cabin: 469 },
{ sno: 420, name: "Ms.K.LALITHA VANISREE", designation: "ASST PROFESSOR", cabin: 470 },
{ sno: 421, name: "Dr.PHANEENDRA KUMAR B L N", designation: "ASST PROFESSOR", cabin: 471 },
{ sno: 422, name: "Dr.BALASUBRAMANI S", designation: "ASST PROFESSOR", cabin: 472 },
{ sno: 423, name: "Mr.ESWAR PATNALA", designation: "ASST PROFESSOR", cabin: 473 },
{ sno: 424, name: "Ms.THOTA LAKSHMI DEEPIKA ROY", designation: "ASST PROFESSOR", cabin: 474 },
{ sno: 425, name: "Ms.LAVANYA KONGALA", designation: "ASST PROFESSOR", cabin: 475 },
{ sno: 426, name: "Mr.RAMA KRISHNA REGULAGADDA", designation: "ASST PROFESSOR", cabin: 476 },
{ sno: 427, name: "Ms.SRILATHA YELAMATI", designation: "ASST PROFESSOR", cabin: 477 },
{ sno: 428, name: "Ms.ARUNA KOLUKULAPALLI", designation: "ASST PROFESSOR", cabin: 478 },
{ sno: 429, name: "Dr.BAIRABOINA SAI SAMBASIVA RAO", designation: "ASST PROFESSOR", cabin: 479 },
{ sno: 430, name: "Dr.PURNA PRAKASH KASARANENI", designation: "ASST PROFESSOR", cabin: 480 },
{ sno: 431, name: "Dr.SAMMY. F", designation: "ASST PROFESSOR", cabin: 481 },
{ sno: 432, name: "Dr.UPPULURI LAKSHMI SOUNDHARYA", designation: "ASST PROFESSOR", cabin: 482 },
{ sno: 433, name: "Dr.VANKDOTH SRINIVASA RAO", designation: "ASST PROFESSOR", cabin: 483 },
{ sno: 434, name: "Mr.Y.PRAKASA RAO", designation: "ASST PROFESSOR", cabin: 484 },
{ sno: 435, name: "Dr.K. VENKATA GURUNATHAM NAIDU", designation: "ASST PROFESSOR", cabin: 485 },
{ sno: 436, name: "Mr.G V RAMANA REDDY", designation: "ASST PROFESSOR", cabin: 486 },
{ sno: 437, name: "Ms.DONEPUDI ROHINI", designation: "ASST PROFESSOR", cabin: 487 },
{ sno: 438, name: "Mr.P.LAKSHMANA RAO", designation: "ASST PROFESSOR", cabin: 488 },
{ sno: 439, name: "Mr.K.GOWRISANKAR", designation: "ASST PROFESSOR", cabin: 489 },
{ sno: 440, name: "Dr.RSM LAKSHMI PATIBANDLA", designation: "ASST PROFESSOR", cabin: 490 },
{ sno: 441, name: "Ms.S.DRAKSHAYANI", designation: "ASST PROFESSOR", cabin: 491 },
{ sno: 442, name: "Mr.B.ELANGOVAN", designation: "ASST PROFESSOR", cabin: 492 },
{ sno: 443, name: "Dr.MD.SHAMSUL HAQUE ANSARI", designation: "ASST PROFESSOR", cabin: 493 },
{ sno: 444, name: "Dr.GURUSAMY MURUGESAN", designation: "ASST PROFESSOR", cabin: 494 },
{ sno: 445, name: "Dr.MOHSIN FAYAZ", designation: "ASST PROFESSOR", cabin: 495 },
{ sno: 446, name: "Dr.D.PRAMODH KRISHNA", designation: "ASST PROFESSOR", cabin: 496 },
{ sno: 447, name: "Dr.NAFEES AKHTER FAROOQUI", designation: "ASST PROFESSOR", cabin: 497 },
{ sno: 448, name: "Dr.ADDANKI MOUNIKA", designation: "ASST PROFESSOR", cabin: 498 },
{ sno: 449, name: "Mr.BATTULA LAKSHMANARAO", designation: "ASST PROFESSOR", cabin: 499 },
{ sno: 450, name: "Dr.CHALLAPALLI JHANSI RANI", designation: "ASST PROFESSOR", cabin: 500 },
{ sno: 451, name: "Dr.SHAIK JANBHASHA", designation: "ASST PROFESSOR", cabin: 451 },
{ sno: 452, name: "Mr.MARAM SUBBA RAO", designation: "ASST PROFESSOR", cabin: 452 },
{ sno: 453, name: "Mr.KALAVALA VENKATA SUBRAMANYAM", designation: "ASST PROFESSOR", cabin: 453 },
{ sno: 454, name: "Mr.NAYAPAMU RAMARAO", designation: "ASST PROFESSOR", cabin: 454 },
{ sno: 455, name: "Dr.PANGULURI PADMAVATHI", designation: "ASST PROFESSOR", cabin: 455 },
{ sno: 456, name: "DR.MOHAMMAD SHAHID", designation: "ASST PROFESSOR", cabin: 456 },
{ sno: 457, name: "Dr.YELISELA RAJESH", designation: "ASST PROFESSOR", cabin: 457 },
{ sno: 458, name: "Mr.BADDE PRAVEEN PRAKASH", designation: "ASST PROFESSOR", cabin: 458 },
{ sno: 459, name: "Dr.ANUSHA PAPASANI", designation: "ASST PROFESSOR", cabin: 459 },
{ sno: 460, name: "Mr.VAMSI KIRAN MEKATHOTI", designation: "ASST PROFESSOR", cabin: 460 },
{ sno: 461, name: "Ms.J VENKATA SANDHYA ARUNDATHI", designation: "ASST PROFESSOR", cabin: 461 },
{ sno: 462, name: "Mr.REPUDI PITCHAIAH", designation: "ASST PROFESSOR", cabin: 462 },
{ sno: 463, name: "Mr.SONTI ANKA SIVA PHANI KUMAR", designation: "ASST PROFESSOR", cabin: 463 },
{ sno: 464, name: "Mr.ARAVIND NALAMOTHU", designation: "ASST PROFESSOR", cabin: 464 },
{ sno: 465, name: "Ms.T.JYOTHI", designation: "ASST PROFESSOR", cabin: 465 },
{ sno: 466, name: "Mr.K KANTHA RAJU", designation: "ASST PROFESSOR", cabin: 466 },
{ sno: 467, name: "Ms.ALPARTHI KUMUDA", designation: "ASST PROFESSOR", cabin: 467 },
{ sno: 468, name: "DR.SYED MOHD FAISAL", designation: "ASST PROFESSOR", cabin: 468 },
{ sno: 469, name: "Ms.SHAIK THASEENTAJ", designation: "ASST PROFESSOR", cabin: 469 },
{ sno: 470, name: "Mr.RAJASEKHAR BABU LINGISETTI", designation: "ASST PROFESSOR", cabin: 470 },
{ sno: 471, name: "Mr.K.GOPALA KRISHNA", designation: "ASST PROFESSOR", cabin: 471 },
{ sno: 472, name: "Mr.BILLA MANINDHAR", designation: "ASST PROFESSOR", cabin: 472 },
{ sno: 473, name: "Mr.HARI KOLLIBOYINA", designation: "ASST PROFESSOR", cabin: 473 },
{ sno: 474, name: "Dr.BETAM SURESH", designation: "ASST PROFESSOR", cabin: 474 },
{ sno: 475, name: "Mr.BATHULA JONATHAN", designation: "ASST PROFESSOR", cabin: 475 },
{ sno: 476, name: "Ms.THONTLA HIMA BINDU", designation: "ASST PROFESSOR", cabin: 476 },
{ sno: 477, name: "Mr.CHITHRAKUMAR THANGARAJ", designation: "ASST PROFESSOR", cabin: 477 },
{ sno: 478, name: "DR.PRABHAKARAN PERUMAL", designation: "ASST PROFESSOR", cabin: 478 },
{ sno: 479, name: "Ms.YERAKAMMA CHAPALA", designation: "ASST PROFESSOR", cabin: 479 },
{ sno: 480, name: "Ms.BOBBA SAHITHI", designation: "ASST PROFESSOR", cabin: 480 },
{ sno: 481, name: "DR.SHALINI RAMARAJU", designation: "ASST PROFESSOR", cabin: 481 },
{ sno: 482, name: "Dr.MUPPIDI SOMA SUNDARA RAO", designation: "ASST PROFESSOR", cabin: 482 },
{ sno: 483, name: "Ms.DUDIGAM RAMYA", designation: "ASST PROFESSOR", cabin: 483 },
{ sno: 484, name: "Mr.KAKUMANU ASHOK BABU", designation: "ASST PROFESSOR", cabin: 484 },
{ sno: 485, name: "Ms.THOKALA SRIVALLI", designation: "ASST PROFESSOR", cabin: 485 },
{ sno: 486, name: "Mr.KRISHNA KISHORE THOTA", designation: "ASST PROFESSOR", cabin: 486 },
{ sno: 487, name: "Ms.ANTARA MUNSHI", designation: "ASST PROFESSOR", cabin: 487 },
{ sno: 488, name: "VADDE SUJAN BABU", designation: "ASST PROFESSOR", cabin: 488 },
{ sno: 489, name: "BOYINA KAVYA", designation: "ASST PROFESSOR", cabin: 489 },
{ sno: 490, name: "ELISABETH SUSAN D.", designation: "ASST PROFESSOR", cabin: 490 },
{ sno: 491, name: "DR. A.SATISH KUMAR", designation: "ASST PROFESSOR", cabin: 491 },
{ sno: 492, name: "Ms.T.BHARGAVI", designation: "ASST PROFESSOR", cabin: 492 },
{ sno: 493, name: "Ms.SATHYA VANI . A", designation: "ASST PROFESSOR", cabin: 493 },
{ sno: 494, name: "BADIPATI SIVAGANGA", designation: "ASST PROFESSOR", cabin: 494 },
{ sno: 495, name: "Ms.SAMPATHIRAO SUNEETHA", designation: "ASST PROFESSOR", cabin: 495 },
{ sno: 496, name: "DR.LAKINENI PRASANNA KUMAR", designation: "ASST PROFESSOR", cabin: 496 },
{ sno: 497, name: "M.JOHN HENRY", designation: "ASST PROFESSOR", cabin: 497 },
{ sno: 498, name: "Dr.AMIT KUMAR KAR", designation: "ASST PROFESSOR", cabin: 498 },
{ sno: 499, name: "SHIYAM V", designation: "ASST PROFESSOR", cabin: 499 },
{ sno: 500, name: "MAHESWARI BANDI", designation: "ASST PROFESSOR", cabin: 500 },
{ sno: 501, name: "SRI LAKSHMI RAMYA SAKAMUDI", designation: "ASST PROFESSOR", cabin: 501 },
{ sno: 502, name: "Mr. RAKESH KANCHARLA", designation: "ASST PROFESSOR", cabin: 502 },
{ sno: 503, name: "Mr. LOYA CHANDRAJITH YADAV", designation: "ASST PROFESSOR", cabin: 503 },
{ sno: 504, name: "Mrs. EDUPUGANTI MOUNIKA", designation: "ASST PROFESSOR", cabin: 504 },
{ sno: 505, name: "VENKATARAO JAVVAJI", designation: "ASST PROFESSOR", cabin: 505 },
{ sno: 506, name: "V.BALAJI", designation: "ASST PROFESSOR", cabin: 506 },
{ sno: 507, name: "SANDEEP NANDA", designation: "ASST PROFESSOR", cabin: 507 },
{ sno: 508, name: "SINGARAJU SRINIVASULU", designation: "ASST PROFESSOR", cabin: 508 },
{ sno: 509, name: "SHAIK SANHEERA", designation: "ASST PROFESSOR", cabin: 509 },
{ sno: 510, name: "CVK SIRISHA", designation: "ASST PROFESSOR", cabin: 510 },
{ sno: 511, name: "KOTTURU PRASUNA", designation: "ASST PROFESSOR", cabin: 511 },
{ sno: 512, name: "K.CHIRANJEEVI", designation: "ASST PROFESSOR", cabin: 512 },
{ sno: 513, name: "DR. KAVIARASAN BOOMIPALAGAN", designation: "ASST PROFESSOR", cabin: 513 },
{ sno: 514, name: "Dr.NIRUPMA PATHAK", designation: "ASST PROFESSOR", cabin: 514 },
{ sno: 515, name: "DR.KONDAPALLY KRISHNA SUNALINI", designation: "ASST PROFESSOR", cabin: 515 },
{ sno: 516, name: "Ms.V. ASHA LATHA", designation: "ASST PROFESSOR", cabin: 516 },
{ sno: 517, name: "Ms.VANUKURU VENKATA BHAVANI", designation: "ASST PROFESSOR", cabin: 517 },
{ sno: 518, name: "Mr.K.VELKUMAR", designation: "ASST PROFESSOR", cabin: 518 },
{ sno: 519, name: "Dr.MADHAVARAPU VENKATA PRAVEEN KUMAR", designation: "ASST PROFESSOR", cabin: 519 },
{ sno: 520, name: "Ms.SUROJU LEKHANA SRILAKSHMI", designation: "ASST PROFESSOR", cabin: 520 },
{ sno: 521, name: "GAVINI NAGA PAVANI", designation: "ASST PROFESSOR", cabin: 521 },
{ sno: 522, name: "ALURI SANJEEV KUMAR", designation: "ASST PROFESSOR", cabin: 522 },
{ sno: 523, name: "SPANDANA MANDE", designation: "ASST PROFESSOR", cabin: 523 },
{ sno: 524, name: "CHINDUKURI MALLIKARJUNA", designation: "ASST PROFESSOR", cabin: 524 },
{ sno: 525, name: "Ms.ASWINI DEVI TALUPURI", designation: "ASST PROFESSOR", cabin: 525 },
{ sno: 526, name: "Mr.KARI VENKATA SUMANTH", designation: "ASST PROFESSOR", cabin: 526 },
{ sno: 527, name: "Mr.LOBSANG DARGE", designation: "ASST PROFESSOR", cabin: 527 }
        ],
    },
    {
        department: "Honors Through Experiential Learning",
        alias: ["HTE"],
        name: "Dr.Ashwin Kumar",
        cabin: "R-001(ground floor)",
    },
    {
        department: "Artificial Intelligence and Data Science",
        alias: ["AIDS"],
        name: "Dr. B. Tirapathi Reddy",
        cabin: "R-401",
        facultyList: [
            { sno: 1, name: "Dr. B. Tirapathi Reddy", designation: "Professor & HOD", cabin: 200 },
  { sno: 2, name: "Dr. V. S. Bhagavan", designation: "Professor", cabin: 201 },
  { sno: 3, name: "Dr. Vishnubhotla Rama Krishna", designation: "Professor", cabin: 202 },
  { sno: 4, name: "Dr. Praveen Kumar Pinjala", designation: "Professor", cabin: 203 },
  { sno: 5, name: "Dr. Tiruveedhula Sajana", designation: "Associate Professor", cabin: 204 },
  { sno: 6, name: "Dr. E S Sharmila Sigamany", designation: "Associate Professor", cabin: 205 },
  { sno: 7, name: "Dr. Jagjit Singh Dhatterwal", designation: "Associate Professor", cabin: 206 },
  { sno: 8, name: "Dr. Elangovan Guruva Reddy", designation: "Associate Professor", cabin: 207 },
  { sno: 9, name: "Dr. Sunitha Pachala", designation: "Associate Professor", cabin: 208 },
  { sno: 10, name: "Dr. Bolla Sreenivasulu", designation: "Associate Professor", cabin: 209 },
  { sno: 11, name: "Dr. Tarak Hussain", designation: "Associate Professor", cabin: 210 },
  { sno: 12, name: "Dr. K. Anu Radha", designation: "Associate Professor", cabin: 211 },
  { sno: 13, name: "Dr. P. Manikya Prasuna", designation: "Associate Professor", cabin: 212 },
  { sno: 14, name: "Dr. Sivapurapu Lavanya", designation: "Asst Professor", cabin: 213 },
  { sno: 15, name: "Dr. S. Venumadhava Sarma", designation: "Asst Professor", cabin: 214 },
  { sno: 16, name: "Dr. M. V. A. L. Narasimha Rao", designation: "Asst Professor", cabin: 215 },
  { sno: 17, name: "Mr. Koganti Anil Kumar", designation: "Asst Professor", cabin: 216 },
  { sno: 18, name: "Dr. Tellakula Anitha", designation: "Asst Professor", cabin: 217 },
  { sno: 19, name: "Dr. S. Ragamayi", designation: "Asst Professor", cabin: 218 },
  { sno: 20, name: "Dr. Kommala Pati Beaulah Glory", designation: "Asst Professor", cabin: 219 },
  { sno: 21, name: "Dr. Talasila Vamsidhar", designation: "Asst Professor", cabin: 220 },
  { sno: 22, name: "Dr. Mandapati Praveena", designation: "Asst Professor", cabin: 221 },
  { sno: 23, name: "Dr. Rudrabhathla Sai Kumar", designation: "Asst Professor", cabin: 222 },
  { sno: 24, name: "Ms. Arpita Roy", designation: "Asst Professor", cabin: 223 },
  { sno: 25, name: "Dr. Vahed Shakeel Ahammad", designation: "Asst Professor", cabin: 224 },
  { sno: 26, name: "Ms. Vuyyuru Lakshmi Lalitha", designation: "Asst Professor", cabin: 225 },
  { sno: 27, name: "Mr. Doddi Suresh Kumar", designation: "Asst Professor", cabin: 226 },
  { sno: 28, name: "Dr. N. B. Arune Kumar", designation: "Asst Professor", cabin: 227 },
  { sno: 29, name: "Mr. Gunti Surendra", designation: "Asst Professor", cabin: 228 },
  { sno: 30, name: "Mr. Karnati Raja Ram Mohan Rao", designation: "Asst Professor", cabin: 229 },
  { sno: 31, name: "Mr. Choutapalli Nagaraju", designation: "Asst Professor", cabin: 230 },
  { sno: 32, name: "Mr. Chintamaneni Phanikanth", designation: "Asst Professor", cabin: 231 },
  { sno: 33, name: "Ms. Pendem Swetha", designation: "Asst Professor", cabin: 232 },
  { sno: 34, name: "Dr. E. Raveendra Reddy", designation: "Asst Professor", cabin: 233 },
  { sno: 35, name: "Mr. V. Joe Nithin", designation: "Asst Professor", cabin: 234 },
  { sno: 36, name: "Dr. B. Sesikala", designation: "Asst Professor", cabin: 235 },
  { sno: 37, name: "Ms. Peeriga Radhika", designation: "Asst Professor", cabin: 236 },
  { sno: 38, name: "Mr. Faizal Nujumudeen", designation: "Asst Professor", cabin: 237 },
  { sno: 39, name: "Arunkumar P", designation: "Asst Professor", cabin: 238 },
  { sno: 40, name: "T. Sai Lakshmi", designation: "Asst Professor", cabin: 239 },
  { sno: 41, name: "Kanaparthi Sumalatha", designation: "Asst Professor", cabin: 240 },
  { sno: 42, name: "Dr. Saiyed Faiyaz Waris", designation: "Asst Professor", cabin: 241 },
  { sno: 43, name: "Shaik Jilani Basha", designation: "Asst Professor", cabin: 242 },
  { sno: 44, name: "Dr. Tamal Kumar Kundu", designation: "Asst Professor", cabin: 243 }
        ],
    },
    {
        department: "Computer Science and Information Technology",
        alias: ["CSIT"],
        name: "Dr. Suresh Kumar",
        cabin: "Room 401",
        facultyList: [
           { sno: 1, name: "Dr. Kothalanka Amareendra", designation: "Professor & HOD", cabin: 101 },
  { sno: 2, name: "Dr. Manchiraju Kameswara Rao", designation: "Professor", cabin: 102 },
  { sno: 3, name: "Dr. Ganga Rama Koteswara Rao", designation: "Professor", cabin: 103 },
  { sno: 4, name: "Dr. K. Rama Krishna", designation: "Professor", cabin: 104 },
  { sno: 5, name: "Dr. Sridevi Emandi", designation: "Associate Professor", cabin: 105 },
  { sno: 6, name: "Dr. Sanda Sri Harsha", designation: "Associate Professor", cabin: 106 },
  { sno: 7, name: "Dr. Maydiga Madhusudana Subramanyam", designation: "Associate Professor", cabin: 107 },
  { sno: 8, name: "Dr. Marapelli Bhaskar", designation: "Associate Professor", cabin: 108 },
  { sno: 9, name: "Dr. B. Hanumantha Rao", designation: "Associate Professor", cabin: 109 },
  { sno: 10, name: "Dr. Yerramsetty Tayar", designation: "Associate Professor", cabin: 110 },
  { sno: 11, name: "Dr. N. Neelima", designation: "Associate Professor", cabin: 111 },
  { sno: 12, name: "Dr. Swarna Anjali Devi", designation: "Asst Professor", cabin: 112 },
  { sno: 13, name: "Dr. P V V S Srinivas", designation: "Asst Professor", cabin: 113 },
  { sno: 14, name: "Dr. Visamsetty Venkata Surya Sasank", designation: "Asst Professor", cabin: 114 },
  { sno: 15, name: "Dr. Sonthi Vijaya Krishna", designation: "Asst Professor", cabin: 115 },
  { sno: 16, name: "Dr. Bathina Rajesh Kumar", designation: "Asst Professor", cabin: 116 },
  { sno: 17, name: "Ms. Pacha Supriya", designation: "Asst Professor", cabin: 117 },
  { sno: 18, name: "Mr. Bejjam Surendranadh Benarji", designation: "Asst Professor", cabin: 118 },
  { sno: 19, name: "Mr. Kavuri Sreekanth", designation: "Asst Professor", cabin: 119 },
  { sno: 20, name: "Ms. Babu Keerthi Samhitha", designation: "Asst Professor", cabin: 120 },
  { sno: 21, name: "Mr. Penumacha Vikram", designation: "Asst Professor", cabin: 121 },
  { sno: 22, name: "Mr. Nyakapu Rajender", designation: "Asst Professor", cabin: 122 },
  { sno: 23, name: "Dr. G Kadiravan", designation: "Asst Professor", cabin: 123 },
  { sno: 24, name: "Ms. Nuthakki Praveena", designation: "Asst Professor", cabin: 124 },
  { sno: 25, name: "Ms. Yalavarthi Sai Eswari", designation: "Asst Professor", cabin: 125 },
  { sno: 26, name: "Mr. Bheemisetty Venkata Sriram Pavan Kumar", designation: "Asst Professor", cabin: 126 },
  { sno: 27, name: "Mr. P. Neelakanteswara", designation: "Asst Professor", cabin: 127 },
  { sno: 28, name: "G. Tagore Sai Prasad", designation: "Asst Professor", cabin: 128 },
  { sno: 29, name: "Jupalli Raja Kumari", designation: "Asst Professor", cabin: 129 },
  { sno: 30, name: "Buradagunta Swathi Sri", designation: "Asst Professor", cabin: 130 },
  { sno: 31, name: "N. Muralikrishna", designation: "Asst Professor", cabin: 131 },
  { sno: 32, name: "N. Mallikharjuna Rao", designation: "Asst Professor", cabin: 132 },
  { sno: 33, name: "Mr. A. Ravi Kumar", designation: "Asst Professor", cabin: 133 },
  { sno: 34, name: "Ch. Lavanya Susanna", designation: "Asst Professor", cabin: 134 },
  { sno: 35, name: "M. Chaitanya Kumari", designation: "Asst Professor", cabin: 135 },
  { sno: 36, name: "Ch. Ramesh Kumar", designation: "Asst Professor", cabin: 136 },
  { sno: 37, name: "Dr. G Sateesh", designation: "Asst Professor", cabin: 137 }
        ],
    },
    {
        department: "Electrical and Electronics Engineering",
        alias: ["EEE"],
        name: "Dr. R. Ramesh",
        cabin: "Room 501",
        facultyList: [
            { sno: 1, name: "Dr. A. Pandian", designation: "Professor & HOD", cabin: 244 },
  { sno: 2, name: "Dr. Burthi Loveswara Rao", designation: "Professor", cabin: 245 },
  { sno: 3, name: "Dr. Kuthuri Narasimha Raju", designation: "Professor", cabin: 246 },
  { sno: 4, name: "Dr. Jarupula Somlal", designation: "Professor", cabin: 247 },
  { sno: 5, name: "Dr. Kotamraju Subba Rao", designation: "Professor", cabin: 248 },
  { sno: 6, name: "Dr. R. Bhanu Raghava Prakash", designation: "Associate Professor", cabin: 249 },
  { sno: 7, name: "Dr. Batchalakuri Jyothi", designation: "Associate Professor", cabin: 250 },
  { sno: 8, name: "Dr. Pinni Srinivasa Varma", designation: "Associate Professor", cabin: 251 },
  { sno: 9, name: "Dr. Malligunta Kiran Kumar", designation: "Associate Professor", cabin: 252 },
  { sno: 10, name: "Mr. Daka Sesi Reddy", designation: "Asst Professor", cabin: 253 },
  { sno: 11, name: "Mr. D. Kalyan", designation: "Asst Professor", cabin: 254 },
  { sno: 12, name: "Ms. Kota Sarada", designation: "Asst Professor", cabin: 255 },
  { sno: 13, name: "Mr. Tadivaka Teja Sreenu", designation: "Asst Professor", cabin: 256 },
  { sno: 14, name: "Dr. Tadanki Vijay Muni", designation: "Asst Professor", cabin: 257 },
  { sno: 15, name: "Dr. G. Swapna", designation: "Asst Professor", cabin: 258 },
  { sno: 16, name: "Mr. Srungaram Ravi Teja", designation: "Asst Professor", cabin: 259 },
  { sno: 17, name: "Dr. Goda Ganesh Raja Sekhar", designation: "Asst Professor", cabin: 260 }
        ],
    },
    {
        department: "Mechanical Engineering",
        alias: ["MECH"],
        name: "Dr. R. Vijay Kumar",
        cabin: "Room 601",
        facultyList: [
            { sno: 1, name: "Dr. T Vijaya Kumar", designation: "Associate Professor & HOD", cabin: 261 },
      { sno: 2, name: "Dr. Adusumilli Srinath", designation: "Professor", cabin: 262 },
      { sno: 3, name: "Dr. Konijeti Rama Krishna", designation: "Professor", cabin: 263 },
      { sno: 4, name: "Dr. Surya Narayana Padhi", designation: "Professor", cabin: 264 },
      { sno: 5, name: "Dr. Garikapati Diwakar", designation: "Professor", cabin: 265 },
      { sno: 6, name: "Dr. G Murali", designation: "Professor", cabin: 266 },
      { sno: 7, name: "Dr. V.L. Mangesh", designation: "Professor", cabin: 267 },
      { sno: 8, name: "Dr. A V Siva Ram Prasad", designation: "Associate Professor", cabin: 268 },
      { sno: 9, name: "Dr. Devulapalli V.A. Rama Sastry", designation: "Associate Professor", cabin: 269 },
      { sno: 10, name: "Dr. G Yedukondalu", designation: "Associate Professor", cabin: 270 },
      { sno: 11, name: "Dr. Kanchu Venkata Durga Rajesh", designation: "Associate Professor", cabin: 271 },
      { sno: 12, name: "Dr. Pothamsetty Kasi Visweswara Rao", designation: "Associate Professor", cabin: 272 },
      { sno: 13, name: "Dr. Priyaranjan Sharma", designation: "Associate Professor", cabin: 273 },
      { sno: 14, name: "Mr. Sunkara Ramesh Kumar", designation: "Asst Professor", cabin: 274 },
      { sno: 15, name: "Dr. Tumuluri Kanthimathi", designation: "Asst Professor", cabin: 275 },
      { sno: 16, name: "Dr. Kruthiventi Sai Sarath", designation: "Asst Professor", cabin: 276 },
      { sno: 17, name: "Mr. Daggumalli Srinivasa Rao", designation: "Asst Professor", cabin: 277 },
      { sno: 18, name: "Mr. Karimulla Syed", designation: "Asst Professor", cabin: 278 },
      { sno: 19, name: "Dr. Vinay Atgur", designation: "Asst Professor", cabin: 279 },
      { sno: 20, name: "Mr. Udaysankar Muvva", designation: "Asst Professor", cabin: 280 },
      { sno: 21, name: "Dr. Arigela Sri Harsha", designation: "Asst Professor", cabin: 281 },
      { sno: 22, name: "Dr. Priyaranjan Samal", designation: "Asst Professor", cabin: 282 },
      { sno: 23, name: "Dr. Giphin George", designation: "Asst Professor", cabin: 283 },
      { sno: 24, name: "Mr. Puttam Srinivasarao", designation: "Asst Professor", cabin: 284 }
        ],
    },
    {
        department: "Civil Engineering",
        alias: ["CIVIL"],
        name: "Dr. S. K. Reddy",
        cabin: "Room 701",
        facultyList: [
           { sno: 1, name: "Dr. Palleboina Poluraju", designation: "Professor & HOD", cabin: 101 },
      { sno: 2, name: "Dr. Chappidi Hanumantha Rao", designation: "Professor", cabin: 202 },
      { sno: 3, name: "Dr. A.V.S. Prasad", designation: "Professor", cabin: 203 },
      { sno: 4, name: "Dr. A Aravindan", designation: "Professor", cabin: 104 },
      { sno: 5, name: "Dr. Sanjeet Kumar", designation: "Associate Professor", cabin: 305 },
      { sno: 6, name: "Dr. Atluri Venkateswara Rao", designation: "Associate Professor", cabin: 307 },
      { sno: 7, name: "Dr. Ashwin Narendra Raut", designation: "Associate Professor", cabin: 309 },
      { sno: 8, name: "Mr. K. Syam Chambrelin", designation: "Asst Professor", cabin: 401 },
      { sno: 9, name: "Mr. Kommineni Hemanth Raja", designation: "Asst Professor", cabin: 402 },
      { sno: 10, name: "Dr. Yerramsetty Himath Kumar", designation: "Asst Professor", cabin: 403 },
      { sno: 11, name: "Mr. Bodapati Gnana Rahul", designation: "Asst Professor", cabin: 404 },
      { sno: 12, name: "Dr. Jagarapu Durga Chaitanya Kumar", designation: "Asst Professor", cabin: 501 },
      { sno: 13, name: "Ms. Velpula Sree Lakshmi", designation: "Asst Professor", cabin: 502 },
      { sno: 14, name: "Mr. Kanneganti Jyothishya Brahma Chari", designation: "Asst Professor", cabin: 503 },
      { sno: 15, name: "Dr. Lingeshwaran N", designation: "Asst Professor", cabin: 601 },
      { sno: 16, name: "Dr. Anu Mary Ealias", designation: "Asst Professor", cabin: 602 }
        ],
    },
    {
        department: "Internet of Things",
        alias: ["IOT"],
        name: "Dr. Sunil Kumar",
        cabin: "Room 801",
        facultyList: [
            { sno: 1, name: "Dr. Penke Satyanarayana", designation: "Professor & HOD" },
      { sno: 2, name: "Dr. Miryala Sridhar", designation: "Professor" },
      { sno: 3, name: "Dr. Santosh Kumar", designation: "Professor" },
      { sno: 4, name: "Dr. Tatini Narendra Babu", designation: "Associate Professor" },
      { sno: 5, name: "Dr. Ganesh Babu Rajendran", designation: "Associate Professor" },
      { sno: 6, name: "Dr. Kottapalli Rajya Lakshmi", designation: "Asst Professor" },
      { sno: 7, name: "Dr. Sridevi Sakhamuri", designation: "Asst Professor" },
      { sno: 8, name: "Dr. Ch. Bhupathi", designation: "Asst Professor" },
      { sno: 9, name: "Dr. Chatragadda Gopi Chand", designation: "Asst Professor" },
      { sno: 10, name: "Mr. Pamarthi Venkata Siva Rambabu", designation: "Asst Professor" },
      { sno: 11, name: "Dr. K.V. Vineetha", designation: "Asst Professor" },
      { sno: 12, name: "Dr. Anand Kumar D", designation: "Asst Professor" },
      { sno: 13, name: "Dr. P. Guru Krishna Thej", designation: "Asst Professor" }
    
        ],
    },
];

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', async () => {
    // Load cabin data from database first
    const dbCabins = await fetchCabinDataFromDatabase();
    if (dbCabins && dbCabins.length > 0) {
        // Update hodData with database values
        dbCabins.forEach(cabin => {
            // Find matching department and update/add faculty
            const dept = hodData.find(d => d.department === cabin.department);
            if (dept && dept.facultyList) {
                // Check if faculty exists, update cabin number
                const existingFaculty = dept.facultyList.find(f => 
                    f.name.toLowerCase().includes(cabin.faculty_name.toLowerCase())
                );
                if (existingFaculty) {
                    existingFaculty.cabin = cabin.cabin_number;
                    existingFaculty.room = cabin.cabin_number;
                } else {
                    // Add new faculty
                    dept.facultyList.push({
                        sno: dept.facultyList.length + 1,
                        name: cabin.faculty_name,
                        designation: "Faculty",
                        room: cabin.cabin_number,
                        cabin: cabin.cabin_number
                    });
                }
            }
        });
        console.log('✅ Cabin data updated from database');
    }
    
    // DOM Elements
    const themeToggle = document.getElementById('themeToggle');
    const resetBtn = document.getElementById('resetBtn');
    const tabs = document.querySelectorAll('.tab');
    const tabIndicator = document.querySelector('.tab-indicator');
    const tabPanes = document.querySelectorAll('.tab-pane');
    const deptSelect = document.getElementById('deptSelect');
    const facultySearchInput = document.getElementById('facultySearchInput');
    const facultySearchBtn = document.getElementById('facultySearchBtn');
    const hodSearchInput = document.getElementById('hodSearchInput');
    const hodSearchBtn = document.getElementById('hodSearchBtn');
    const hodResults = document.getElementById('hodResults');
    const facultyResults = document.getElementById('facultyResults');
    const loadingSpinner = document.getElementById('loadingSpinner');
    const toastContainer = document.getElementById('toastContainer');
    const recentSearches = document.getElementById('recentSearches');
    const currentYear = document.getElementById('currentYear');

    // Initialize the app
    initApp();

    // Initialize the application
    function initApp() {
        // Set current year in footer
        currentYear.textContent = new Date().getFullYear();
        
        // Check for saved theme preference
        checkThemePreference();
        
        // Populate department dropdown
        populateDepartments();
        
        // Set up event listeners
        setupEventListeners();
        
        // Load recent searches from localStorage
        loadRecentSearches();
        
        // Show welcome toast after a short delay
        setTimeout(() => {
            showToast('Welcome', 'Faculty Cabin Finder is ready to help you locate faculty members', 'info');
        }, 1000);
    }

    // Check for saved theme preference
    function checkThemePreference() {
        const darkMode = localStorage.getItem('darkMode') === 'true';
        if (darkMode) {
            document.body.classList.add('dark-theme');
            themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        }
    }

    // Populate departments in the dropdown
    function populateDepartments() {
        hodData.forEach((dept) => {
            const option = document.createElement('option');
            option.value = dept.alias && dept.alias.length > 0 ? dept.alias[0] : dept.department;
            option.textContent = `${dept.department} ${dept.alias && dept.alias.length > 0 ? `(${dept.alias[0]})` : ''}`;
            deptSelect.appendChild(option);
        });
    }

    // Set up event listeners
    function setupEventListeners() {
        console.log('🔧 Setting up event listeners...');
        console.log('hodSearchBtn:', hodSearchBtn);
        console.log('facultySearchBtn:', facultySearchBtn);
        
        // Theme toggle
        themeToggle.addEventListener('click', toggleTheme);
        
        // Reset button
        resetBtn.addEventListener('click', resetApp);
        
        // Tab switching
        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                const tabId = tab.getAttribute('data-tab');
                switchTab(tabId);
            });
        });
        
        // Department selection
        deptSelect.addEventListener('change', handleDepartmentChange);
        
        // HOD search
        hodSearchBtn.addEventListener('click', searchHOD);
        hodSearchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                searchHOD();
            }
        });
        
        // Faculty search
        facultySearchBtn.addEventListener('click', searchFaculty);
        facultySearchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' && !facultySearchInput.disabled) {
                searchFaculty();
            }
        });
        
        console.log('✅ Event listeners set up successfully');
    }

    // Toggle theme
    function toggleTheme() {
        const isDarkMode = document.body.classList.toggle('dark-theme');
        localStorage.setItem('darkMode', isDarkMode);
        
        if (isDarkMode) {
            themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
            showToast('Dark Mode', 'Dark theme activated', 'info');
        } else {
            themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
            showToast('Light Mode', 'Light theme activated', 'info');
        }
    }

    // Switch between tabs
    function switchTab(tabId) {
        // Update active tab
        tabs.forEach(tab => {
            if (tab.getAttribute('data-tab') === tabId) {
                tab.classList.add('active');
            } else {
                tab.classList.remove('active');
            }
        });
        
        // Move tab indicator
        const activeTab = document.querySelector(`.tab[data-tab="${tabId}"]`);
        const tabIndex = Array.from(tabs).indexOf(activeTab);
        tabIndicator.style.transform = `translateX(${tabIndex * 100}%)`;
        
        // Show active tab content
        tabPanes.forEach(pane => {
            if (pane.id === `${tabId}-tab`) {
                pane.classList.add('active');
            } else {
                pane.classList.remove('active');
            }
        });
        
        // Reset results
        hodResults.innerHTML = '';
        hodResults.classList.remove('show');
        facultyResults.innerHTML = '';
        facultyResults.classList.remove('show');
    }

    // Handle department change
    function handleDepartmentChange() {
        const selectedDept = deptSelect.value;
        
        if (selectedDept) {
            facultySearchInput.disabled = false;
            facultySearchBtn.disabled = false;
            facultySearchInput.value = '';
            facultyResults.innerHTML = '';
            facultyResults.classList.remove('show');
            
            showToast('Department Selected', `${selectedDept} department selected`, 'info');
        } else {
            facultySearchInput.disabled = true;
            facultySearchBtn.disabled = true;
        }
    }

    // Search for HOD
    function searchHOD() {
        const searchValue = hodSearchInput.value.trim();
        
        if (!searchValue) {
            showToast('Search Error', 'Please enter a department or HOD name', 'error');
            return;
        }
        
        // Show loading spinner
        loadingSpinner.classList.add('show');
        
        // Simulate API call delay
        setTimeout(() => {
            const searchTerm = searchValue.toLowerCase();
            
            const found = hodData.find((hod) => {
                const searchIn = [
                    hod.department.toLowerCase(),
                    ...(hod.alias?.map(a => a.toLowerCase()) || []),
                    hod.name.toLowerCase(),
                ];
                
                return searchIn.some(value => value.includes(searchTerm));
            });
            
            // Hide loading spinner
            loadingSpinner.classList.remove('show');
            
            if (found) {
                showHODResult(found);
                addToRecentSearches(searchValue, 'hod');
                showToast('Search Successful', 'HOD information found', 'success');
            } else {
                showError(hodResults, 'No results found. Try searching with a different department or HOD name.');
                showToast('No Results', 'No matching HOD found', 'warning');
            }
        }, 1200); // Simulate delay for better UX
    }

    // Search for Faculty
    function searchFaculty() {
        const departmentValue = deptSelect.value;
        const searchValue = facultySearchInput.value.trim();
        
        if (!departmentValue) {
            showToast('Search Error', 'Please select a department', 'error');
            return;
        }
        
        if (!searchValue) {
            showToast('Search Error', 'Please enter a faculty name', 'error');
            return;
        }
        
        // Show loading spinner
        loadingSpinner.classList.add('show');
        
        // Simulate API call delay
        setTimeout(() => {
            const searchTerm = searchValue.toLowerCase();
            
            const department = hodData.find(hod => 
                (hod.alias && hod.alias.includes(departmentValue)) || hod.department === departmentValue
            );
            
            if (!department || !department.facultyList) {
                loadingSpinner.classList.remove('show');
                showError(facultyResults, 'Department not found or has no faculty listed.');
                showToast('Department Error', 'No faculty data available for this department', 'error');
                return;
            }
            
            const foundFaculty = department.facultyList.find(faculty => 
                faculty.name.toLowerCase().includes(searchTerm)
            );
            
            // Hide loading spinner
            loadingSpinner.classList.remove('show');
            
            if (foundFaculty) {
                showFacultyResult(department, foundFaculty);
                addToRecentSearches(`${searchValue} (${departmentValue})`, 'faculty');
                showToast('Search Successful', 'Faculty information found', 'success');
            } else {
                showError(facultyResults, 'No faculty found with that name in the selected department.');
                showToast('No Results', 'No matching faculty found', 'warning');
            }
        }, 1200); // Simulate delay for better UX
    }

    // Show HOD search result
    function showHODResult(hod) {
        hodResults.innerHTML = '';
        
        // Create result message
        const resultMessage = document.createElement('div');
        resultMessage.className = 'result-message success';
        resultMessage.innerHTML = `
            <div class="toast-icon"><i class="fas fa-check-circle"></i></div>
            <div>HOD information found</div>
        `;
        hodResults.appendChild(resultMessage);
        
        // Create result card
        const resultCard = document.createElement('div');
        resultCard.className = 'result-card';
        resultCard.style.setProperty('--i', '1');
        
        // Card header
        const cardHeader = document.createElement('div');
        cardHeader.className = 'result-header';
        cardHeader.innerHTML = `
            <div class="result-title">${hod.name}</div>
            <div class="result-badge">HOD</div>
        `;
        
        // Card info
        const cardInfo = document.createElement('div');
        cardInfo.className = 'result-info';
        
        // Department info
        const deptInfo = document.createElement('div');
        deptInfo.className = 'info-item';
        deptInfo.innerHTML = `
            <div class="info-label">Department</div>
            <div class="info-value">${hod.department}</div>
        `;
        
        // Alias info if available
        let aliasInfo = '';
        if (hod.alias && hod.alias.length > 0) {
            aliasInfo = `
                <div class="info-item">
                    <div class="info-label">Department Code</div>
                    <div class="info-value">${hod.alias.join(', ')}</div>
                </div>
            `;
        }
        
        // Cabin info
        const cabinInfo = document.createElement('div');
        cabinInfo.className = 'info-item';
        cabinInfo.innerHTML = `
            <div class="info-label">Cabin Number</div>
            <div class="info-value cabin-highlight">${hod.cabin || "Not Available"}</div>
        `;
        
        // Append all elements
        cardInfo.appendChild(deptInfo);
        if (aliasInfo) {
            cardInfo.innerHTML += aliasInfo;
        }
        cardInfo.appendChild(cabinInfo);
        
        resultCard.appendChild(cardHeader);
        resultCard.appendChild(cardInfo);
        
        hodResults.appendChild(resultCard);
        hodResults.classList.add('show');
    }

    // Show Faculty search result
    function showFacultyResult(department, faculty) {
        facultyResults.innerHTML = '';
        
        // Create result message
        const resultMessage = document.createElement('div');
        resultMessage.className = 'result-message success';
        resultMessage.innerHTML = `
            <div class="toast-icon"><i class="fas fa-check-circle"></i></div>
            <div>Faculty member found</div>
        `;
        facultyResults.appendChild(resultMessage);
        
        // Create result card
        const resultCard = document.createElement('div');
        resultCard.className = 'result-card';
        resultCard.style.setProperty('--i', '1');
        
        // Card header
        const cardHeader = document.createElement('div');
        cardHeader.className = 'result-header';
        cardHeader.innerHTML = `
            <div class="result-title">${faculty.name}</div>
            <div class="result-badge">${faculty.designation || "Faculty"}</div>
        `;
        
        // Card info
        const cardInfo = document.createElement('div');
        cardInfo.className = 'result-info';
        
        // Department info
        const deptInfo = document.createElement('div');
        deptInfo.className = 'info-item';
        deptInfo.innerHTML = `
            <div class="info-label">Department</div>
            <div class="info-value">${department.department}</div>
        `;
        
        // Room info if available
        let roomInfo = '';
        if (faculty.room) {
            roomInfo = `
                <div class="info-item">
                    <div class="info-label">Room Number</div>
                    <div class="info-value">${faculty.room}</div>
                </div>
            `;
        }
        
        // Cabin info
        const cabinInfo = document.createElement('div');
        cabinInfo.className = 'info-item';
        cabinInfo.innerHTML = `
            <div class="info-label">Cabin Number</div>
            <div class="info-value cabin-highlight">${faculty.cabin || "Not Available"}</div>
        `;
        
        // Append all elements
        cardInfo.appendChild(deptInfo);
        if (roomInfo) {
            cardInfo.innerHTML += roomInfo;
        }
        cardInfo.appendChild(cabinInfo);
        
        resultCard.appendChild(cardHeader);
        resultCard.appendChild(cardInfo);
        
        facultyResults.appendChild(resultCard);
        facultyResults.classList.add('show');
    }

    // Show error message
    function showError(container, message) {
        container.innerHTML = '';
        
        const errorMessage = document.createElement('div');
        errorMessage.className = 'result-message error';
        errorMessage.innerHTML = `
            <div class="toast-icon"><i class="fas fa-exclamation-circle"></i></div>
            <div>${message}</div>
        `;
        
        container.appendChild(errorMessage);
        container.classList.add('show');
    }

    // Show toast notification
    function showToast(title, message, type = 'info') {
        const toast = document.createElement('div');
        toast.className = `toast ${type}`;
        
        let icon;
        switch(type) {
            case 'success':
                icon = 'check-circle';
                break;
            case 'error':
                icon = 'exclamation-circle';
                break;
            case 'warning':
                icon = 'exclamation-triangle';
                break;
            default:
                icon = 'info-circle';
        }
        
        toast.innerHTML = `
            <div class="toast-icon">
                <i class="fas fa-${icon}"></i>
            </div>
            <div class="toast-content">
                <div class="toast-title">${title}</div>
                <div class="toast-message">${message}</div>
            </div>
            <div class="toast-close">
                <i class="fas fa-times"></i>
            </div>
        `;
        
        toastContainer.appendChild(toast);
        
        // Add click event to close toast
        toast.querySelector('.toast-close').addEventListener('click', () => {
            toast.style.opacity = '0';
            setTimeout(() => {
                toast.remove();
            }, 300);
        });
        
        // Auto remove toast after 4 seconds
        setTimeout(() => {
            if (toast.parentNode === toastContainer) {
                toast.style.opacity = '0';
                setTimeout(() => {
                    if (toast.parentNode === toastContainer) {
                        toast.remove();
                    }
                }, 300);
            }
        }, 4000);
    }

    // Add to recent searches
    function addToRecentSearches(searchTerm, type) {
        // Get existing searches or initialize empty array
        let searches = JSON.parse(localStorage.getItem('recentSearches')) || [];
        
        // Add new search at the beginning
        searches.unshift({
            term: searchTerm,
            type: type,
            timestamp: new Date().getTime()
        });
        
        // Keep only the last 5 searches
        searches = searches.slice(0, 5);
        
        // Save to localStorage
        localStorage.setItem('recentSearches', JSON.stringify(searches));
        
        // Update UI
        loadRecentSearches();
    }

    // Load recent searches
    function loadRecentSearches() {
        const searches = JSON.parse(localStorage.getItem('recentSearches')) || [];
        
        if (searches.length === 0) {
            recentSearches.innerHTML = '<p class="empty-state">No recent searches</p>';
            return;
        }
        
        recentSearches.innerHTML = '';
        
        searches.forEach((search, index) => {
            const searchTag = document.createElement('div');
            searchTag.className = 'search-tag';
            searchTag.style.setProperty('--i', index);
            
            let icon = search.type === 'hod' ? 'user-tie' : 'users';
            
            searchTag.innerHTML = `
                <i class="fas fa-${icon}"></i>
                <span>${search.term}</span>
            `;
            
            // Add click event to re-run the search
            searchTag.addEventListener('click', () => {
                if (search.type === 'hod') {
                    switchTab('hod');
                    hodSearchInput.value = search.term;
                    searchHOD();
                } else {
                    // For faculty searches, we need to parse the term
                    const match = search.term.match(/(.*) $$(.*)$$/);
                    if (match) {
                        const name = match[1];
                        const dept = match[2];
                        
                        switchTab('faculty');
                        deptSelect.value = dept;
                        handleDepartmentChange();
                        facultySearchInput.value = name;
                        searchFaculty();
                    }
                }
            });
            
            recentSearches.appendChild(searchTag);
        });
    }

    // Reset the app
    function resetApp() {
        // Reset HOD search
        hodSearchInput.value = '';
        hodResults.innerHTML = '';
        hodResults.classList.remove('show');
        
        // Reset Faculty search
        deptSelect.selectedIndex = 0;
        facultySearchInput.value = '';
        facultySearchInput.disabled = true;
        facultySearchBtn.disabled = true;
        facultyResults.innerHTML = '';
        facultyResults.classList.remove('show');
        
        // Switch to HOD tab
        switchTab('hod');
        
        showToast('Reset Complete', 'All search fields have been reset', 'info');
    }
});


🎓 Grievance Redressal College Portal

A full-stack web application that helps students submit academic or administrative grievances and allows college admins to manage and resolve them efficiently.


🔧 Technologies Used

- *Frontend*: ReactJS,  boostrap5  
- *Backend*: Node.js, Express  
- *Database*: MongoDB Atlas  
- *Other Tools*: Axios

---

👥 User Roles

👨‍🎓 Student
- Register/Login
- Submit grievances
- Track grievances status

🧑‍💼 Admin
- View all submitted complaints
- View all users complaints
- Update grievance status (Pending, In Progress, Resolved)
- Manage student data
- add Notice
- add Deadline

Screenshot

![16_viewdeadline](https://github.com/user-attachments/assets/b1b7b359-af6e-4d2d-926b-6fcce7687375)





🚀 How to Run This Project Locally

Make sure you have the following installed:

- *Node.js* (v14 or higher)  
- *MongoDB Atlas account* (for database)  
- *Code editor* like VS Code  
- *Git* (optional, for cloning)

---

📁 Step 1: Clone the Repository

If it's on GitHub:

```bash
git clone https://github.com/your-username/Grievance-Redressal-College-Portal.git
cd Grievance-Redressal-College-Portal
```

---

📦 Step 2: Install Dependencies

👉 For both frontend & backend

If you have separate folders (`/client` and `/server`):

```bash
Frontend
cd client
npm install

Backend
cd ../server
npm install
```

---

🔑 Step 3: Set Up Environment Variables
add the
-MongoDB Atlas url
-JWT token
-PORT 
(Make sure to whitelist your IP in MongoDB Atlas and enable "less secure app access" in Gmail if using that.)


▶️ Step 4: Start the Application

Run backend:

```bash
cd server
npm run dev
```

Run frontend:

```bash
cd client
npm run dev
```

Visit your app in the browser:  
`http://localhost:3000`

---

📢 Note

- Make sure MongoDB Atlas is connected   
- Use tools like *Postman* to test backend APIs if needed  

  
Made with ❤️ by [Sachin sargar]

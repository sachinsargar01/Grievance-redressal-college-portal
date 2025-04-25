
**🎓 Grievance Redressal College Portal**
---
A full-stack web application that helps students submit academic or administrative grievances and allows college admins to manage and resolve them efficiently.


**🔧 Technologies Used**

- *Frontend*: ReactJS,  boostrap5  
- *Backend*: Node.js, Express  
- *Database*: MongoDB Atlas  
- *Other Tools*: Axios

---

**👥 User Roles**

**👨‍🎓 Student**
- Register/Login
- Submit grievances
- Track grievances status
---
**🧑‍💼 Admin**
- View all submitted complaints
- View all users complaints
- Update grievance status (Pending, In Progress, Resolved)
- Manage student data
- add Notice
- add Deadline
---
**Screenshot**
![1_home](https://github.com/user-attachments/assets/6bf6d871-8b0c-4637-af7a-5d4d55285e30)
![2_home](https://github.com/user-attachments/assets/ec8c2c4d-6fb6-4294-ab7d-4df9e84520e8)
![3_home](https://github.com/user-attachments/assets/f1f6d3d3-b216-491f-9b4c-5f24ff698160)
![4_studentlogin](https://github.com/user-attachments/assets/16a52d77-fba6-4f51-9d27-f0ac8122b83b)
![5_student_register](https://github.com/user-attachments/assets/a6ba135f-3ea3-493b-ac04-75e715034630)
![6_submitcomplaint](https://github.com/user-attachments/assets/ba4d4cfd-a190-47cb-b972-2e8049cf0abe)
![7_studentViewc](https://github.com/user-attachments/assets/c2f97b6f-2e5d-42e8-a29f-2edc27757e58)
![8_track_complaint](https://github.com/user-attachments/assets/4bc0afa8-d3f4-4bf2-9704-89a9800546c0)
![9_adminlogin](https://github.com/user-attachments/assets/7e27f5ab-ed9a-4358-baa6-a49c312ce692)
![10_adminRegister](https://github.com/user-attachments/assets/e5f18aca-1d4d-48e1-9db2-a2b7d412c60c)
![11_viewStudentadmin](https://github.com/user-attachments/assets/71363898-ec3a-421a-bdba-7d42f468c307)
![12_resolution](https://github.com/user-attachments/assets/940fa66b-b952-446c-b436-1d5b33651342)
![13_addnotic](https://github.com/user-attachments/assets/5e37a0ec-e855-4380-8cd8-838b81a3c6fc)
![14_shownotice](https://github.com/user-attachments/assets/0b8c078c-de77-4fb4-8695-dd52952dc804)
![15_adddeadline](https://github.com/user-attachments/assets/9f8ca4ae-90fa-4a74-9f60-9b5e78f3df9b)
![16_viewdeadline](https://github.com/user-attachments/assets/b1b7b359-af6e-4d2d-926b-6fcce7687375)



---
**🚀 How to Run This Project Locally**

Make sure you have the following installed:

- *Node.js* (v14 or higher)  
- *MongoDB Atlas account* (for database)  
- *Code editor* like VS Code  
- *Git* (optional, for cloning)

---

**📁 Step 1: Clone the Repository**

If it's on GitHub:

```bash
git clone https://github.com/your-username/Grievance-Redressal-College-Portal.git
cd Grievance-Redressal-College-Portal
```

---

**📦 Step 2: Install Dependencies**

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

**🔑 Step 3: Set Up Environment Variables**
add the
-MongoDB Atlas url
-JWT token
-PORT 
(Make sure to whitelist your IP in MongoDB Atlas and enable "less secure app access" in Gmail if using that.)


**▶️ Step 4: Start the Application**

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
**`http://localhost:3000`**

---

📢 Note

- Make sure MongoDB Atlas is connected   
- Use tools like *Postman* to test backend APIs if needed  

  
Made with ❤️ by **Sachin Sargar**

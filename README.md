**📚 Library Management System (LMS)**

A web-based Library Management System that allows administrators and users to manage books, categories, users, transactions and reports in a clean and responsive interface.

**🚀 Features**

*Admin*
- Dashborad to manage all activities
- Add/Edit/Delete Books
- Manage Categories and Authors
- Issue/Return Books
- Fine Management
- Users and Defaulter List Management
- Reports Section

*User*
- View and Search Books
- Filter by Category and Availability
- View Profile and Issued Books
- Update Profile and Password

**🗂 Folder Structure**
```
    Library-Management-System/
    │
    ├── adminDashboard/
    │   ├── adminDashboard.html
    │   ├── manageBooks.html
    │
    ├── dashboard/
    │   ├── changePassword.html
    │   ├── editProfile.html
    │   ├── issuedBooks.html
    │   ├── profile.html
    │   ├── userDashboard.html
    │
    ├── loginForm/
    │   ├── forgotPassword.html
    │   ├── loginForm.html
    │   ├── resetPassword.html
    │   ├── signUp.html
    │
    ├── resources/          # Images & project assets
    │   ├── TheGreatGatsby.jpg
    │   ├── LMSDashboard.jpg
    │   └── ...
    │
    ├── static/
    │   ├── css/            # Custom stylesheets
    │   ├── img/            # Static images
    │   ├── includes/       # Header/Footer
    │   ├── js/             # JavaScript files
    │
    ├── app.py              # Flask entry point
    ├── config.py           # Configuration file
    ├── README.md           # Documentation
    ├── requirement.txt     # Python dependencies
```

**Tech Stack**

- *Frontend* : HTML5, CSS3, Bootstrap 5, JavaScript
- *Backend*  : Python (Flask)
- *Database* : MySQL
- *Version Control* : Git

**Screenshots**

**Future Improvements**

- Integrated MySQL database
- Add Authentication & JWT-based session
- Exports reports PDF/Excel
- Notifications for due date
- Role Based Access (Librarian, Student, Admin)

**By**

*Tushar Kumar*
*LinkedIn* [https://www.linkedin.com/in/tushar-kumar-developer/]
# Employee Management System

A responsive **Employee Management System** built using **React, TypeScript, and Vite**. The application provides separate interfaces for **Admin and Employees**, with authentication, task management, task tracking, and persistent data using LocalStorage.

> **Important:** Before running the application for the first time, call the `setLocalStorage()` function from `src/utils/localStorage.tsx` once. This initializes the required Admin, Employee, and Task data in LocalStorage.
>
> You can call `setLocalStorage()` from anywhere in the application during initial setup. After the data has been initialized, remove the function call and use the application normally.

## Features

### Authentication
- Admin and Employee login
- Role-based authentication
- Login state persistence
- Logout functionality
- Invalid credential handling
- Toast notifications

### Admin Dashboard
- View employee information
- Create and assign tasks
- Monitor employee tasks
- Track task statistics

### Employee Dashboard
- Personalized employee dashboard
- View assigned tasks
- Accept new tasks
- Complete tasks
- Mark tasks as failed
- Track task statistics

### Task Management

Tasks are divided into four categories:

- **New Tasks**
- **Active Tasks**
- **Completed Tasks**
- **Failed Tasks**

Task counts are displayed dynamically on the employee dashboard.

## Tech Stack

- **React.js**
- **TypeScript**
- **Tailwind CSS**
- **Vite**
- **CSS**
- **Context API**
- **LocalStorage**
- **React Hot Toast**
- **Remix Icon**

## Project Structure

```text
Employee-Management-System/
│
├── src/
│   │
│   ├── assets/
│   │
│   ├── components/
│   │   │
│   │   ├── auth/
│   │   │   └── Login.tsx
│   │   │
│   │   ├── dashboard/
│   │   │   ├── AdminDashboard.tsx
│   │   │   └── EmployeeDashboard.tsx
│   │   │
│   │   ├── others/
│   │   │   ├── AllTasks.tsx
│   │   │   ├── CreateTask.tsx
│   │   │   ├── Header.tsx
│   │   │   └── TaskNumbers.tsx
│   │   │
│   │   └── tasklists/
│   │       ├── AcceptTask.tsx
│   │       ├── CompleteTask.tsx
│   │       ├── FailedTask.tsx
│   │       ├── NewTask.tsx
│   │       └── TasksList.tsx
│   │
│   ├── context/
│   │   └── AuthProvider.tsx
│   │
│   ├── types/
│   │   └── allFilesTypes.ts
│   │
│   ├── utils/
│   │   └── localStorage.tsx
│   │
│   ├── App.css
│   ├── App.tsx
│   └── main.tsx
│
├── LICENSE
├── README.md
├── package.json
└── ...

import { Toaster, toast } from 'react-hot-toast'
import 'remixicon/fonts/remixicon.css'
import './App.css'
import Login from './components/auth/Login'
import EmployeeDashboard from './components/dashboard/EmployeeDashboard'
import AdminDashboard from './components/dashboard/AdminDashboard'
import { useContext, useEffect, useState } from 'react'
import { AuthContext } from './context/AuthProvider'
import type { employeeType, getLocalStorageType, loggedInUserType } from './types/allFilesTypes'

export default function App() {

  const [user, setUser] = useState<null|"admin"|"employee">(null);
  const [loggedInUserData, setloggedInUserData] = useState<employeeType>();
  const authData: getLocalStorageType|undefined = useContext(AuthContext);

  useEffect((): void => {
    const logInUser = localStorage.getItem("loggedInUser");
    if(logInUser) {
      const currentUser: loggedInUserType = JSON.parse(logInUser);
      const logInUserData: employeeType = currentUser.data
      currentUser.role === "admin" && setUser(currentUser.role);
      currentUser.role === "employee" && setUser(currentUser.role);
      if(logInUser) {
        setloggedInUserData(logInUserData);
      }
    }
  }, []);

  if(authData === undefined) {
    return;
  }

  const handleLogin = (email: string, password: string): void => {
    if(email === "a@e.com" && password === "123") {
      setUser("admin");
      toast.success("Login Successfull", {
        duration: 1050
      });
      localStorage.setItem("loggedInUser", JSON.stringify({role: 'admin'}));
      return;
    } 
    if(authData) {
      const employee: employeeType|undefined = authData.employees.find((user) => user.email === email && user.password === password);
      if(employee) {
        setUser("employee");
        setloggedInUserData(employee);
        toast.success("Login Successfull", {
          duration: 1050
        });
        localStorage.setItem("loggedInUser", JSON.stringify({role: 'employee', data: employee}));
      } else {
        toast.error("Invalid Credentials", {
          duration: 1050
        });
      }
    }
    return;
  }

  return(
    <>
    {!user? <Login handleLogin={handleLogin} />: ''}
    {user === "admin"? <AdminDashboard setUser={setUser} /> : loggedInUserData && <EmployeeDashboard setUser={setUser} data={loggedInUserData} />}
    <Toaster />
    </>
  )
}

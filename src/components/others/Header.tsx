import type { employeeType } from "../../types/allFilesTypes";

export default function Header({data, setUser}: {data: employeeType|undefined, setUser: Function}) {
    const logOutUser = (): void => {
        localStorage.setItem("loggedInUser","");
        setUser(null)
        return;
    }

    return(
        <header className="w-full flex justify-between items-center">
            <div className="text-white">
                <h1 className="text-3xl font-medium">Hello,</h1>
                <h1 className="text-4xl font-bold">{data? data.firstName : "Admin"} 👋</h1>
            </div>
            <button onClick={logOutUser} className="bg-red-500 text-white font-bold p-3 pr-5 pl-5 rounded-xl cursor-pointer transition-all hover:bg-red-600">Logout</button>
        </header>
    )
}

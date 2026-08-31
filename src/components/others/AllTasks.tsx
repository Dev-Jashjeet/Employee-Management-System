import { useContext } from "react"
import { AuthContext } from "../../context/AuthProvider"
import type { employeeType, getLocalStorageType } from "../../types/allFilesTypes";

export default function AllTasks() {
    const authData: undefined|getLocalStorageType = useContext(AuthContext);

    return(
        <div id="scrollBar" className="bg-gray-800 h-70 w-full p-5 mt-10 overflow-y-auto flex flex-col gap-3">
            {
                authData && authData.employees.map((user: employeeType, index: number) => (
                    <div key={index} className="flex justify-between p-3 text-white text-xl border border-green-400 rounded-lg">
                        <span>{user.firstName}</span>
                        <span>{user.email}</span>
                        <span>{user.taskCounts.active}</span>
                    </div>       
                ))
            }
        </div>
    )
}

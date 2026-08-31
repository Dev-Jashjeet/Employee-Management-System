import type { employeeType } from "../../types/allFilesTypes";
import Header from "../others/Header";
import TaskNumbers from "../others/TaskNumbers";
import TaskLists from "../tasklists/TasksLists";

export default function EmployeeDashboard({data, setUser}: {data: employeeType, setUser: Function}) {
    return(
        <div className="h-screen bg-gray-800 p-10">
            <Header setUser={setUser} data={data} />

            <TaskNumbers data={data} />

            <TaskLists data={data} />
        </div>
    )
}

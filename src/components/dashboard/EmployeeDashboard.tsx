import Header from "../others/Header";
import TaskNumbers from "../others/TaskNumbers";
import TaskLists from "../tasklists/TasksList";

export default function EmployeeDashboard() {

    return(
        <div className="h-screen bg-gray-800 p-10">
            <Header />

            <TaskNumbers />

            <TaskLists />
        </div>
    )
}

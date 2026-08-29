import AllTasks from "../others/AllTasks";
import CreateTask from "../others/CreateTask";
import Header from "../others/Header";

export default function AdminDashboard() {

    return(
        <div className="w-full h-screen bg-gray-900 p-10">
            <Header data={undefined} />
            <CreateTask />
            <AllTasks />
        </div>
    )
}

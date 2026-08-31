import { useState } from "react"
import type { employeeType, taskType } from "../../types/allFilesTypes";
import { Toaster, toast } from "react-hot-toast";

const CreateTask = () => {
    const [taskTitle, setTaskTitle] = useState<string>("");
    const [date, setDate] = useState<string>("");
    const [assignTo, setAssignTo] = useState<string>("");
    const [category, setCategory] = useState<string>("");
    const [description, setDescription] = useState<string>("");

    const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>): void => {
        e.preventDefault();
        let idx: number = 0;
        const newObj: taskType = {
            active: true,
            newTask: true,
            completed: false,
            failed: false,
            taskTitle: taskTitle,
            taskDescription: description,
            taskDate: date,
            category: category
        }
        const data: null|string = localStorage.getItem("employees");
        if(!data) {
            return;
        }
        const employeesData: employeeType[] = JSON.parse(data);
        for(let val of employeesData) {
            if(val.firstName === assignTo) {
                val.tasks.push(newObj);
                val.taskCounts.active++;
                employeesData[idx] = val;
                localStorage.setItem("employees", JSON.stringify(employeesData));
                toast.success("Task assigned", {
                    duration: 1050
                });
                setTaskTitle("");
                setDate("");
                setAssignTo("");
                setCategory("");
                setDescription("");
                return;
            }
            idx++;
        }
        toast.error("Employee name not found", {
            duration: 1050
        });
        setTaskTitle("");
        setDate("");
        setAssignTo("");
        setCategory("");
        setDescription("");
        return;
    }

  return (
    <form onSubmit={handleSubmit} className="w-full bg-gray-800 mt-10 flex justify-between p-5">
                <div className="flex flex-col gap-4">
                    <div className="text-white">
                        <h3 className="fo(nt-semibold">Task Title</h3>
                        <input required onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTaskTitle(e.target.value)} className="w-100 border border-white rounded-lg p-1 outline-none" type="text" placeholder="Make a UI Design" />
                    </div>

                    <div className="text-white">
                        <h3 className="font-semibold">Date</h3>
                        <input required onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDate(e.target.value)} className="w-100 border border-white rounded-lg p-1 outline-none" type="date" />
                    </div>

                    <div className="text-white">
                        <h3 className="font-semibold">Assign to</h3>
                        <input required onChange={(e: React.ChangeEvent<HTMLInputElement>) => setAssignTo(e.target.value)} className="w-100 border border-white rounded-lg p-1 outline-none" type="text" placeholder="Employee Name" />
                    </div>

                    <div className="text-white">
                        <h3 className="font-semibold">Category</h3>
                        <input required onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCategory(e.target.value)} className="w-100 border border-white rounded-lg p-1 outline-none" type="text" placeholder="design, dev, etc" />
                    </div>
                </div>

                <div>
                    <h4 className="text-white font-semibold">Description</h4>
                    <textarea required onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setDescription(e.target.value)} rows={8} cols={60} className="outline-none block text-white border-2 border-white rounded-lg p-1" />
                    <button className="bg-green-500 mt-3 rounded-lg w-full p-3 text-white font-semibold hover:bg-green-600 cursor-pointer transition">Create Task</button>
                </div> 
                <Toaster />                     
    </form>
  )
}

export default CreateTask

const CreateTask = () => {
  return (
    <div className="w-full bg-gray-800 mt-10 flex justify-between p-5">
                <div className="flex flex-col gap-4">
                    <div className="text-white">
                        <h3 className="font-semibold">Task Title</h3>
                        <input className="w-100 border border-white rounded-lg p-1 outline-none" type="text" placeholder="Make a UI Design" />
                    </div>

                    <div className="text-white">
                        <h3 className="font-semibold">Date</h3>
                        <input className="w-100 border border-white rounded-lg p-1 outline-none" type="date" />
                    </div>

                    <div className="text-white">
                        <h3 className="font-semibold">Assign to</h3>
                        <input className="w-100 border border-white rounded-lg p-1 outline-none" type="text" placeholder="Employee Name" />
                    </div>

                    <div className="text-white">
                        <h3 className="font-semibold">Category</h3>
                        <input className="w-100 border border-white rounded-lg p-1 outline-none" type="text" placeholder="design, dev, etc" />
                    </div>
                </div>

                <div>
                    <h4 className="text-white font-semibold">Description</h4>
                    <textarea rows={8} cols={60} className="outline-none block text-white border-2 border-white rounded-lg p-1" />
                    <button className="bg-green-500 mt-3 rounded-lg w-full p-3 text-white font-semibold hover:bg-green-600 cursor-pointer transition">Create Task</button>
                </div>                      
    </div>
  )
}

export default CreateTask
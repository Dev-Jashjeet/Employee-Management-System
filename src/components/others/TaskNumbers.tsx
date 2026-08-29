import type { employeeType } from "../../types/allFilesTypes";

export default function TaskNumbers({data}: {data: employeeType}) {
    if(!data) {
        return;
    }
    return(
        <div className="w-full mt-14 flex gap-10 flex-wrap md:flex-nowrap">
                <div className="bg-blue-500 text-white p-7 pr-25 rounded-xl grow">
                    <h2 className="text-white font-bold text-4xl">{data.taskCounts.newTask}</h2>
                    <div className="text-white font-semibold text-2xl mt-2">
                        New Task
                    </div>
                </div>

                <div className="bg-green-500 text-white p-7 pr-25 rounded-xl grow">
                    <h2 className="text-white font-bold text-4xl">{data.taskCounts.completed}</h2>
                    <div className="text-white font-semibold text-2xl mt-2">
                        Completed
                    </div>
                </div>

                <div className="bg-yellow-500 text-white p-7 pr-25 rounded-xl grow">
                    <h2 className="text-white font-bold text-4xl">{data.taskCounts.active}</h2>
                    <div className="text-white font-semibold text-2xl mt-2">
                        Accepted
                    </div>
                </div>

                <div className="bg-red-400 text-white p-7 pr-25 rounded-xl grow">
                    <h2 className="text-white font-bold text-4xl">{data.taskCounts.failed}</h2>
                    <div className="text-white font-semibold text-2xl mt-2">
                        Failed
                    </div>
                </div>
        </div>
    )
}

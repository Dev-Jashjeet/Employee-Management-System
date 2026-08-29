import type { taskType } from "../../types/allFilesTypes";

export default function CompleteTask({data}: {data: taskType}) {
    if(!data) {
        return;
    }

    return(
        <div className="bg-green-500 shrink-0 p-5 pb-10 text-white w-100 rounded-xl h-fit flex flex-col gap-5">
            <div className="w-full flex justify-between items-center">
                <span className="bg-red-500 rounded-lg p-2 pr-3 pl-3">High</span>
                <span>{data.taskDate}</span>
            </div>
            <div className="text-2xl font-bold">
                {data.taskTitle}
            </div>
            <div className="text-lg">
                {data.taskDescription}
            </div>
        </div>
    )
}

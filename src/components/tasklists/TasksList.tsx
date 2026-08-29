import type { employeeType, taskType } from "../../types/allFilesTypes";
import AcceptTask from "./AcceptTask";
import CompleteTask from "./CompleteTask";
import { FailedTask } from "./FailedTask";
import NewTask from "./NewTask";

export default function TaskLists({data}: {data: employeeType}) {
    if(!data) {
        return;
    }
    return(
        <div id="scrollBar" className="w-full mt-14 flex gap-5 overflow-x-auto">
            {
                data.tasks.map((user: taskType, index: number) => {
                    if(user.active) {
                        return <AcceptTask key={index} data={user} />
                    }
                    else if(user.completed) {
                        return <CompleteTask key={index} data={user} />
                    }
                    else if(user.failed) {
                        return <FailedTask key={index} data={user} />
                    }
                    else {
                        return <NewTask key={index} data={user} />
                    }
                })
            }
        </div>
    )
}

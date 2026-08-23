import AcceptTask from "./AcceptTask";
import CompleteTask from "./CompleteTask";
import { FailedTask } from "./FailedTask";
import NewTask from "./NewTask";

export default function TaskLists() {

    return(
        <div id="scrollBar" className="w-full mt-14 flex gap-5 overflow-x-auto">
            <FailedTask />
            <NewTask />
            <AcceptTask />
            <CompleteTask />
        </div>
    )
}
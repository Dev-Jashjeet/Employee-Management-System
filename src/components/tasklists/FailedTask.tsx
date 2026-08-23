export function FailedTask() {

    return(
        <div className="bg-red-400 shrink-0 p-5 pb-10 text-white w-100 rounded-xl h-fit flex flex-col gap-5">
            <div className="w-full flex justify-between items-center">
                <span className="bg-red-500 rounded-lg p-2 pr-3 pl-3">High</span>
                <span>{new Date().toLocaleDateString()}</span>
            </div>
            <div className="text-2xl font-bold">
                Make a Youtube Video
            </div>
            <div className="text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi distinctio illum ducimus maiores magnam eum doloremque. Veritatis, perspiciatis magnam consectetur deserunt eveniet saepe, incidunt dolore alias nisi, voluptates eos repudiandae?
            </div>
        </div>
    )
}

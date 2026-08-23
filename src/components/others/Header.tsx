export default function Header() {

    return(
        <header className="w-full flex justify-between items-center">
            <div className="text-white">
                <h1 className="text-3xl font-medium">Hello,</h1>
                <h1 className="text-4xl font-bold">Sarthak 👋</h1>
            </div>
            <button className="bg-red-500 text-white font-bold p-3 pr-5 pl-5 rounded-xl cursor-pointer transition-all hover:bg-red-600">Logout</button>
        </header>
    )
}
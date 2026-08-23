import {useRef, useState } from "react"

function Login() {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [show, setShow] = useState<boolean>(false);
    const input = useRef<HTMLInputElement|null>(null);

    const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>): void => {
        e.preventDefault();
        console.log(email, password);

        setEmail("");
        setPassword("");
        return;
    }

    const displayPassword = (): void => {
        if(!input.current) 
            return;

        if(!show) {
            input.current.type = "text";
            setShow(true);
        } else {
            input.current.type = "password";
            setShow(false);
        }

        return;
    }

    return(
        <div className="flex justify-center items-center h-screen bg-gray-800">
                <form onSubmit={handleSubmit} className="border-2 border-green-400 rounded-2xl p-7 w-9/30 flex flex-col gap-10 bg-gray-700">
                    <h1 className="text-white text-4xl font-bold">Log in</h1>
                    <div>
                        <div className="mb-2 text-2xl text-white"><span className="text-red-500 pr-1">*</span>Email</div>
                        <input required onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} value={email} type="email" className="w-full border border-green-600 rounded-xl outline-none text-white p-3" />
                    </div>

                    <div>
                        <div className="mb-2 text-2xl text-white"><span className="text-red-500 pr-1">*</span>Password</div>
                        <div className="flex justify-end items-center">
                            <input required onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)} ref={input} value={password} type="password" className="w-full relative border border-green-600 rounded-xl outline-none text-white p-3" />
                            <span onClick={displayPassword} className="absolute pr-3 text-gray-200 text-xl cursor-pointer">
                                {
                                    show? <i className="ri-eye-fill"></i> : <i className="ri-eye-close-fill"></i>
                                }
                            </span>
                        </div>
                    </div>

                    <button className="w-full bg-green-500 text-white font-bold p-3 rounded-3xl text-xl hover:cursor-pointer transition-all hover:bg-green-600">Log in</button>
                </form>
        </div>
    )
}

export default Login

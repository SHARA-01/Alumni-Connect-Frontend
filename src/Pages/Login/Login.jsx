import { useState } from "react";
import { fixedInputClass, InputField } from '../../Components/index'
import { useNavigate } from "react-router-dom";
import { RiLockPasswordLine } from '../../Components/ReactIconsIndex'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Fetch } from '../../hooks/useFetch'


export default function Login() {
    const [email, setemail] = useState("")
    const [password, setPassword] = useState("")
    const [showPassword, setShowPassword] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = async () => {

        let userdata = await Fetch({ email, password });
        // const userdata = null
        console.log("user data ", userdata)

        if (userdata.data.user.role === "Admin") {
            localStorage.setItem('user', JSON.stringify(userdata.data));

            navigate('/admin')
        } else {
            localStorage.setItem('user', JSON.stringify(userdata.data));

            navigate('/user')
        }
    }






    //     const tostify = ({type, message}) => {
    // {
    //            ` toast.${type}('${message}', {
    //             position: "bottom-right",
    //             autoClose: 800,
    //             hideProgressBar: false,
    //             closeOnClick: true,
    //             pauseOnHover: true,
    //             draggable: true,
    //             progress: undefined,
    //             theme: "light",
    //             // transition: Bounce,
    //             className: "md:positon-top-right"}
    //         });`
    //     }
    // }

    // const check = ()=> {
    //         tostify("error", "there is some problem to solve")
    // }



    const togglePasswordVisibility = () => {

        setShowPassword(!showPassword);

    };


    return (
        <>
            <div className=" p-8 mx-auto sm:w-max-sm min-w-sm md:w-max-md lg:max-w-md">
                <div className="flex justify-center">
                    <img
                        alt=""
                        className="h-14 w-14"
                        src="https://ik.imagekit.io/pibjyepn7p9/Lilac_Navy_Simple_Line_Business_Logo_CGktk8RHK.png?ik-sdk-version=javascript-1.4.3&updatedAt=1649962071315" />
                </div>
                <h2 className=" mt-8 mb-10 mb:text-lg lg:text-3xl text-2xl font-extrabold text-gray-700">
                    Login To Your Account
                </h2>
                <div className="w-full flex">
                    <ul className="flex flex-col space-y-5 w-full">
                        <li className="">
                            <input type="email" name="email" className={`${fixedInputClass} lg:text-xl`} placeholder="Email" value={email} onChange={(e) => setemail(e.target.value)} required />
                        </li>
                        <li className="flex justify-between w-auto md:h-lg lg:text-xl">
                            <input type={showPassword ? "text" : "password"} name="password" className={`relative rounded-md w-full px-3 py-2 border border-gray-300 placeholder-gray-500  focus:outline-none focus:ring-purple-500 focus:border-purple-500  sm:text-sm text-gray-600  lg:text-xl `} placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                            <RiLockPasswordLine size={28} onClick={togglePasswordVisibility} className='text-gray-700 my-auto cursor-pointer   z-10 bg-white -ml-12 mx-2' />
                        </li>
                        <li>
                            <button onClick={handleSubmit} className="md:text-xl relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 mt-5"
                            >Login </button>
                        </li>
                    </ul>
                </div>
            </div>
            <ToastContainer />
        </>
    )
}

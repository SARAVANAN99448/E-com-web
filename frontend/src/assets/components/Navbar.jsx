import { useEffect, useState } from "react"
import { signOut } from "firebase/auth"
import auth from "./Config"
import { useNavigate } from "react-router-dom"


const Navbar = () => {
    const [checkuser, setcheckuser] = useState(false)
    const [menu, setmenu] = useState(false)
    const navigate = useNavigate()
    useEffect(() => {
        auth.onAuthStateChanged(function (user) {
            if (user) {
                setcheckuser(true)
            }
            else {
                setcheckuser(false)
            }
        })

    }, [])
    // signout
    const out = () => {
        signOut(auth).then(function () {
            navigate("/login")
        })
    }
    const login = () => {
        navigate("/login")
    }
    return (<>
        <section>
            <div className="px-10 bg-[#2B2A3B] py-5">
                {/* Navbar for Large screen */}
                <nav className="flex justify-between text-white items-center">
                    <h1 className="text-3xl font-bold p-1">One Piece</h1>
                    <ul className="hidden md:flex justify-around gap-10 font-semibold">
                        <li><a href="/">Home</a></li>
                        <li><a href="/products">Products</a></li>
                        {/* <li><a href="#about">About</a></li> */}
                        <li><a href="/contact">Contact</a></li>
                        <li><a href="/cart">Cart</a></li>
                        {checkuser ? <li ><a className="cursor-pointer bg-orange-500 p-2 rounded-md" onClick={out}>Logout</a></li> :
                            <li ><a className="cursor-pointer bg-orange-500 p-2 rounded-md" onClick={login} >Login</a></li>}
                    </ul>
                    {/* Navbar for mobile  */}
                    {menu &&
                        <nav className="fixed md:hidden  bg-blue-800 w-1/2 h-[290px] left-0 pt-3 " style={{ top: "84px" }}>
                            <ul className=" flex flex-col md:hidden justify-around gap-5 font-semibold mobile-nav">
                                <li><a href="/">Home</a></li>
                                <li><a href="/products">Product</a></li>
                                {/* <li><a href="#about">About</a></li> */}
                                <li><a href="/contact">contact</a></li>
                                <li><a href="/cart">Cart</a></li>
                                {checkuser ? <li ><a className="cursor-pointer bg-orange-500 p-2 rounded-md" onClick={out}>Logout</a></li> :
                                    <li ><a className="cursor-pointer bg-orange-500 p-2 rounded-md" >Login</a></li>}
                            </ul>
                        </nav>}

                    <button onClick={() => { setmenu(!menu) }} className="md:hidden text-white"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                    </button>
                </nav>

            </div>
        </section>

    </>)

}
export default Navbar
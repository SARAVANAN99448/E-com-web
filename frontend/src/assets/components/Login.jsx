import { useEffect, useState } from "react"
import { signInWithEmailAndPassword } from "firebase/auth"
import auth from "./Config"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
const Login = () => {
    const [user, setuser] = useState()
    const [pass, setpass] = useState()
    const [number, setnumber] = useState()
    const navigate = useNavigate()
    const [mobileregex, setmobileregex] = useState(false)
    const [passerror, setpasserror] = useState(false)
    const [usererror, setusererror] = useState(false)

    useEffect(() => {
        auth.onAuthStateChanged(function (user) {
            // user already logged in this website, it will works
            if (user) {
                console.log("logged In")
                navigate("/")
            }
        })

    }, [])
    const handleuser = (e) => {
        setuser(e.target.value)

    }
  

    const send = (e) => {
        e.preventDefault()
        signInWithEmailAndPassword(auth, user, pass).then(() => {
            navigate('/')
            console.log("login successfull")
        })
            .catch(() => { console.log("login failed") })
        // regex for password and mobile no
        const passregex = /^.{6,}$/
        const userregex = /^[a-zA-Z0-9]+@gmail\.com$/
        if (!passregex.test(pass)) {
            setpasserror(true)
        }
        if (!userregex.test(user)) {
            setusererror(true)
        }

        if (mobileNo) {
            setmobileregex(true)
        }
    }
    return (<>
        <section className="flex justify-center bg-stone-300  p-40 items-center">
            <div className="bg-black w-80 rounded-lg ">
                <h1 className="text-white text-3xl text-center pt-10">Login</h1>
                <form className="text-center text-white p-10">
                    <input
                        className="p-1 rounded-md outline-none text-black"
                        onChange={handleuser}
                        type="text"
                        placeholder="Username  " /><br /><br />
                    {usererror ? <p className="text-red-500 ">email must contains @gmail.com at the end</p> : ""}
                    <input
                        className="p-1 rounded-md outline-none text-black"
                        onChange={(e) => { setpass(e.target.value) }}
                        type="password"
                        placeholder="Password" /><br /><br />
                    {passerror ? <p className="text-red-600">password must be atleast 6 characters</p> : ""}
                    <input
                        className="p-1 rounded-md outline-none text-black"
                        onChange={(e) => { setnumber(e.target.value) }}
                        type="text"
                        placeholder="Mobile No" /><br /><br />
                    {mobileregex ? <p className="text-red-500">mobile number contains 10 digits</p> : ""}
                    <p className="">Don't have an account ? <Link to={"/signup"} className="underline">Signup</Link></p>
                    <button
                        onClick={send}
                        className="bg-blue-400 text-black p-2 rounded-md mt-2">Login</button>
                </form>
            </div>
        </section>
    </>)
}
export default Login
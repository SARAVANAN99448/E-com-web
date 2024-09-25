import { useState } from "react"
import auth from "./Config"
import { createUserWithEmailAndPassword } from "firebase/auth"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"

const Signup = () => {
    const [user, setuser] = useState()
    const [pass, setpass] = useState()
    const [confirmpass, setconfirmpass] = useState()
    const [error, seterror] = useState(false)
    const [passerror, setpasserror] = useState(false)
    const [usererror, setusererror] = useState(false)
    const navigate = useNavigate()
    const send = (e) => {
        e.preventDefault();
        // regex for user and password 
        const passregex = /^.{6,}$/
        const userregex = /^[a-zA-Z0-9]+@gmail\.com$/
        if (!passregex.test(pass)) {
            setpasserror(true)
        }
        if (!userregex.test(user)) {
            setusererror(true)
        }
        // checking the password is matching
        if (pass !== confirmpass) {
            seterror(true)
        }
        // Creating user and password
        createUserWithEmailAndPassword(auth, user, pass).then
            ((data) => {
                console.log(data)
                navigate("/login")
            })
            .catch(() => { console.log("failed to signup") })

    }

    return (<>
        <section className="flex justify-center bg-stone-300  p-40 items-center">
            <div className="bg-black w-80 rounded-lg ">
                <h1 className="text-white text-3xl text-center pt-10">Signup</h1>
                <form className="text-center text-white p-10">
                    <input
                        className="p-1 rounded-md outline-none text-black"
                        onChange={(e) => { setuser(e.target.value) }}
                        type="text"
                        placeholder="E-mail" /><br /><br />
                    {usererror ? <p className="text-red-500">email must contains @gmail.com at the end</p> : ""}
                    <input
                        className="p-1 rounded-md outline-none text-black"
                        onChange={(e) => { setpass(e.target.value) }}
                        type="password"
                        placeholder="Password" /><br /><br />
                    {passerror ? <p className="text-red-600">password must be atleast 6 characters</p> : ""}
                    <input
                        className="p-1 rounded-md outline-none text-black"
                        onChange={(e) => { setconfirmpass(e.target.value) }}
                        type="password"
                        placeholder="Confirm Password" /><br /><br />
                    {error ? <p className="text-red-600 mb-2">Passwords do not match</p> : ""}
                    <p>Already have an account ?<Link to={"/login"} className="underline">Login</Link></p>
                    <button
                        onClick={send}
                        className="bg-blue-400 text-black p-2 rounded-md mt-2"
                    >Signup</button>
                </form>
            </div>
        </section>
    </>)
}
export default Signup
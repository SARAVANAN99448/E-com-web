import Navbar from "./Navbar"
// contact
const Contact = () => {
    return (<>
        <Navbar />
        <section>
            <h1 id="contact" className="text-4xl text-white font-bold bg-black text-center py-14 underline">Contact</h1>

            <form className="bg-black text-white  font-hero-font px-10 md:px-44 pt-10   flex flex-col  pb-36" >
                <span className="">Name : </span>
                <input type="text" className=" md:w-full rounded-md text-black p-3 outline-none mt-3" required /><br />
                <span>E-mail : </span>
                <input type="text" className="md:w-full rounded-md text-black p-3  outline-none  mt-3" required /><br />
                <span>Message : </span>
                <textarea name="" id="" className="md:w-full rounded-md text-black p-3 outline-none mt-3" required></textarea>
            </form>
        </section>

    </>)

}
export default Contact
import Navbar from "./Navbar"
// contact
const Contact = () => {
    return (<>
        <Navbar />
        <section className="bg-pink-500 ">
            <h1 id="contact" className="text-4xl text-white font-bold bg-pink-500 text-center py-14 underline">Contact</h1>
            <hr />
            <form className=" text-white  font-hero-font px-10 md:px-44 pt-10 text-xl   flex flex-col  pb-10" >
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
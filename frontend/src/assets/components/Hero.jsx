import { Link } from "react-router-dom"
// Hero section
const Hero = () => {

    return (<>
    <section className="bg-pink-400">
        <div className="md:flex px-10 py-10 gap-10  justify-center ">
            {/* text for desktop */}
            <div className="md:flex md:justify-center md:items-center md:w-1/2 relative hidden ">
                <h1 className="md:text-4xl text-2xl font-bold text-main md:pb-0  pb-10">BECOME THE KING OF PIRATES WITH EPIC ONE PIECE GEAR! DISCOVER TREASURES FROM THE GRAND LINE. SHOP EXCLUSIVE ONE PIECE MERCHANDISE NOW!</h1>
            </div>
            {/* text for mobile */}
            <div className=" relative md:hidden text-center">
                <h1 className="md:text-4xl text-3xl font-bold text-main md:pb-0  pb-10">THE ONE PIECE IS REAL</h1>
            </div>
            <div className="flex justify-center items-center md:pb-0  pb-5">
                <img src="/images/hero.jpg" alt=""  className="w-96 h-96 md:rounded-full rounded-3xl"/>
            </div>
        </div>
        {/* Btn for desktop */}
        <div className=" absolute top-[70%] left-[30%] md:text-xl text-xs md:block hidden shop">
            <button  className="bg-[#0E6EA0] p-2 rounded-md text-white hover:bg-black"><Link to={"/products"}>Shop now</Link></button>
        </div>
        {/* btn for moblie */}
        <div className=" text-xl  md:hidden shop flex justify-center pb-5">
            <button className="bg-[#0E6EA0] p-2 rounded-md text-white hover:bg-black w-40"><Link to={"/products"}>Shop now</Link></button>
        </div>
    </section>
    <hr />
    </>)
}
export default Hero
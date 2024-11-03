import { Link } from "react-router-dom"
// Hero section
const Hero = () => {

    return (<>
    <section className="bg-pink-400">
        <div className="md:flex px-10 py-10 gap-10  justify-center ">
            <div className="flex justify-center items-center md:w-1/2 relative">
                <h1 className="text-4xl  text-main md:pb-0  pb-10">Become the King of Pirates with Epic One Piece Gear! Discover treasures from the Grand Line. Shop exclusive One Piece merchandise now!</h1>
            </div>
            <div className="flex justify-center items-center md:pb-0  pb-10">
                <img src="/images/hero.jpg" alt=""  className="w-96 h-96 md:rounded-full rounded-3xl"/>
            </div>
        </div>
        {/* Btn for desktop */}
        <div className=" absolute top-[70%] left-[30%] md:text-xl text-xs md:block hidden shop">
            <button  className="bg-[#0E6EA0] p-2 rounded-md text-white hover:bg-black"><Link to={"/products"}>Shop now</Link></button>
        </div>
        {/* btn for moblie */}
        <div className=" absolute top-[125%] left-40 text-xl  md:hidden shop">
            <button className="bg-[#0E6EA0] p-2 rounded-md text-white hover:bg-black w-40"><Link to={"/products"}>Shop now</Link></button>
        </div>
    </section>
    <hr />
    </>)
}
export default Hero
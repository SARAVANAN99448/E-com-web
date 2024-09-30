import luffy from "../../../public/images/luffy.jpg"
import { useTypewriter, Cursor } from "react-simple-typewriter"
import { Link } from "react-router-dom"
// Hero sectiom
const Hero = () => {
    // const [text] = useTypewriter({
    //     words :["Click on the products to view One Piece items"],
    //     loop:{},
    //     typeSpeed:20,
    //     deleteSpeed:10,

    // })
    return (<>
        {/* desktop view */}
        <section className="hidden md:block">
            <div className="flex flex-col justify-around py-20 bg-pink-400 text-white items-center ">
                <div className="relative">
                    <div className=" flex justify-end py-5 relative ">
                        <img src={luffy} alt="" className=" w-96  md:w-[2000px] px-10 rounded-3xl relative " />
                    </div>
                    <p className="mx-20 mt-5 mb-3 font-bold absolute top-64 left-14 text-4xl">"Become the King of Pirates with Epic One Piece Gear!
                        Discover treasures from the Grand Line. Shop exclusive One Piece merchandise now!"</p>

                    <button className="absolute font-bold top-[80%] left-[650px] hover:bg-blue-800 bg-blue-600 p-2 rounded-md text-white"><Link to={"/products"}>Shop now</Link> </button>
                </div>
            </div>
        </section>
        {/* mobile view */}
        <section className="md:hidden">
            <div className="bg-pink-400 ">
                <div className="flex justify-center pt-10 relative" >
                    <img src={luffy} alt="" className="w-full" />
                </div>
                <p className="px-20 text-white absolute top-[180px] font-bold" style={{ fontSize: "10px" }}>"Become the King of Pirates with Epic One Piece Gear!
                    Discover treasures from the Grand Line. Shop exclusive One Piece merchandise now!"</p>
                <div className="flex justify-center ">
                    <button style={{ fontSize: "10px" }} className="absolute  font-bold top-[240px] le hover:bg-blue-800 bg-blue-600 p-2 rounded-md text-white"><Link to={"/products"}>Show now</Link></button>

                </div>
            </div>
        </section>
    </>)
}
export default Hero
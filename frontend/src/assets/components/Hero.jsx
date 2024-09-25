import luffy from "../../../public/images/luffy.jpg"
import {useTypewriter,Cursor} from "react-simple-typewriter"
// Hero sectiom
const Hero = () => {
    const [text] = useTypewriter({
        words :["Click on the products to view One Piece items"],
        loop:{},
        typeSpeed:20,
        deleteSpeed:10,

    })
    return (<>
    <section>
        <div className="flex flex-col justify-around py-20 bg-black text-white items-center ">
            <img src={luffy} alt="" className=" w-96 md:w-1/2 rounded-3xl" />
            <p className="mx-20 mt-5 mb-3 font-bold">"Become the King of Pirates with Epic One Piece Gear!
                Discover treasures from the Grand Line. Shop exclusive One Piece merchandise now!"</p>
            <p className="text-green-600 font-semibold">{text}</p>
        </div>
        </section>
    </>)
}
export default Hero
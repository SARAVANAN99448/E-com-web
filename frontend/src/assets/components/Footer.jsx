import { AiOutlineWhatsApp, AiOutlineMail, } from "react-icons/ai";
import { BiSolidPhoneCall } from "react-icons/bi";

const Footer = () => {
    // Footer
    return (<>
        <footer>
            <hr />
            <div className="bg-pink-500 flex justify-center  pb-5 text-white text-center pt-10 md:text-xl font-hero-font">
                <a href="" target="_blank" className="px-5"><AiOutlineWhatsApp size={40} /></a>
                <a href="" target="_blank" className="px-5"><AiOutlineMail size={40} /></a>
                <a href="" className="px-5" target="_blank" ><BiSolidPhoneCall size={40} /></a>
            </div>
            <div className="bg-pink-500 text-center text-white  font-hero-font ">
                <p>&copy;saravanan</p>
            </div>
        </footer>
    </>)

}
export default Footer
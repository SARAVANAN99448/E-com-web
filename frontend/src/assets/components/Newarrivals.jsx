import {  useState } from "react"
import { useEffect } from "react"
import axios from "axios"
const Newarrivals = () => {
    const [newitem, setnewitem] = useState([])
    const [isopen, setisopen] = useState(false)
    const [popupdetails, setpopupdetails] = useState('')
    const URL = import.meta.env.VITE_API_BACKEND.replace(/\/+$/, "")

    //for popup data like image,text
    const openmodel = (image, text) => {
        setpopupdetails(image)
        setisopen(true)
    }
    // close the popup
    const closemodel = () => {
        setisopen(false)
        setpopupdetails("")
    }

    useEffect(() => {
        axios.get(`${URL}/newarrivals`).
            then((data) => setnewitem(data.data)).
            catch(() => console.log("error"))
    }, [])
    return (<>
        <section >
            <div>
                <h1>NEW ARRIVALS</h1>
            </div>
            <div className="flex flex-wrap justify-center pt-20 gap-10 bg-pink-400">
                {
                    newitem.filter(function (data, index) {
                        const imageUrl = `/images/${data.image}`;
                        <div key={index} className="w-64 text-white border-2 rounded-md hover:border-black flex flex-col items-center text-center cursor-pointer hover:mt-2">
                            <img onClick={() => openmodel(imageUrl)} src={imageUrl} alt={data.text} className="w-96 h-96" />
                            <h1 className="font-semibold mt-3 mb-2">{data.text}</h1>
                            <p className="text-green-950">{data.price}</p>
                            <button onClick={() => addtocart(data)} className="mb-2 mt-1 bg-orange-500 p-2 rounded-md">
                                Add to cart
                            </button>
                        </div>

                    }).slice(0,4)
                }

                {/* Close the Popup */}
                {isopen && (
                    <div className="modal-overlay" onClick={closemodel}>
                        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                            <span className="close-btn" onClick={closemodel}>
                                &times;
                            </span>
                            <img src={popupdetails} alt="Product" className="modal-image" />
                        </div>
                    </div>
                )}
            </div>
        </section>
    </>)


}
export default Newarrivals

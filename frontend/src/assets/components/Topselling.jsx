import { useState, useEffect } from "react"
import axios from "axios"
const Topselling = () => {
    const [Topselling, setTopselling] = useState([])
    const [isopen, setisopen] = useState(false)
    const [popupdetails, setpopupdetails] = useState('')
    const URL = import.meta.env.VITE_API_BACKEND.replace(/\/+$/, "")

    //for popup data like image,text
    const openmodel = (image) => {
        setpopupdetails(image)
        setisopen(true)
    }
    // close the popup
    const closemodel = () => {
        setisopen(false)
        setpopupdetails("")
    }

    useEffect(() => {
        axios.get(`${URL}/topselling`).
            then((data) => setTopselling(data.data)).
            catch(() => console.log("error"))
    }, [])
    return (<>
        <section className="bg-pink-400 " >
            <div className="text-center pt-10">
                <h1 className="text-4xl ">Topselling</h1>
            </div>
            <div className="flex flex-wrap justify-center pt-20 gap-10 bg-pink-400">
                {
                    Topselling.slice(5, 9).map(function (data, index) {
                        const imageUrl = `/images/${data.image}`;
                        return (
                            <div key={index} className="w-64 text-white border-2 rounded-md hover:border-black flex flex-col items-center text-center cursor-pointer hover:mt-2">
                                <img onClick={() => openmodel(imageUrl)} src={imageUrl} alt={data.text} className="w-96 h-96" />
                                <h1 className="font-semibold mt-3 mb-2">{data.text}</h1>
                                <p className="text-green-950">{data.price}</p>
                            </div>

                        )
                    })
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
export default Topselling
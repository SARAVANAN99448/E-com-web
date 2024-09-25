import { useEffect, useState } from "react"
import Navbar from "./Navbar"
import search from "../../../public/images/search.png"
import axios from "axios"


const Products = () => {
    const [items, setitems] = useState("")
    const [product, setproduct] = useState([])
    const [isopen, setisopen] = useState(false)
    const [popupdetails, setpopupdetails] = useState('')
    const URL = import.meta.env.VITE_API_BACKEND


    //for popup data like image,text
    const openmodel = (image, text) => {
        setpopupdetails(image)
        setisopen(true)
        setpopuptext(text)
    }
    // close the popup
    const closemodel = () => {
        setisopen(false)
        setpopupdetails("")
    }

    const addtocart = (product) => {
        axios.post(`${URL}/add-to-cart`, {
            id: product._id,
            image: product.image,
            text: product.text,
            price: product.price
        })
            .then(() => {
                console.log("Item added to cart")
                alert("added to cart")
            })
            .catch(() => {
                console.error("Error adding item to cart")
            });
    };

    useEffect(() => {
        axios.get(`${URL}/products`).
            then((data) => {
                setproduct(data.data)
            })
            .catch(() => { console.log("error") })
    }, [])


    // Search filter
    const filteredproducts = product.filter((data) =>
        data.text.toLowerCase().includes(items.toLowerCase())
    );

    return (<>
        <Navbar />
        <div className="bg-pink-400 pt-10 flex justify-center">
            <div className="text-center bg-white  flex justify-center items-center w-96 rounded-md p-1">
                <input
                    type="text"
                    onChange={(e) => setitems(e.target.value)}
                    value={items}
                    placeholder="Search"
                    className="p-2 w-96  outline-none" />
                <img src={search} alt="" className="size-8 p-1" />
            </div>
        </div>
        <div className="flex flex-wrap justify-center pt-20 gap-10 bg-pink-400">
            {
                filteredproducts.length > 0 ? (
                    // Displaying products
                    filteredproducts.map(function (data, index) {
                        return (<>
                            <div key={index} className="w-64 text-white border-2 rounded-md hover:border-black flex flex-col items-center text-center cursor-pointer hover:mt-2">
                                <img onClick={() => openmodel(`${URL}/images${data.image}`)} src={`images/${data.image}`} alt={data.text} className="w-96 h-96 " />
                                <h1 className="font-semibold mt-3 mb-2">{data.text}</h1>
                                <p className="text-green-950">{data.price}</p>
                                <button onClick={() => addtocart(data)} className="mb-2 mt-1 bg-orange-500 p-2 rounded-md">
                                    Add to cart
                                </button>
                            </div>
                        </>
                        )
                    })
                ) : (<p>No products found</p>)

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
    </>)
}
export default Products
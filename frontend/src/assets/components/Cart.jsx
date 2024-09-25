import { useContext } from "react"
import { Cartcontext } from "./Cartcontext"
import { useEffect } from "react";
import axios from "axios";
import Navbar from "./Navbar";


const Cart = () => {
    const { cart, setcart } = useContext(Cartcontext)
    
    // remove from cart
    const removefromcart = (item) => {
        axios.post(`${URL}/remove-from-cart`, {
            productId: item._id
        })
            .then(() => {
                console.log("Removed from backend")

                setcart(prevCart => prevCart.filter(cartItem => cartItem._id !== item._id))
                alert("Removed from cart")
            })
            .catch(() => {
                console.error("Error removing item from backend")
            });
    };

    useEffect(() => {
        axios.get(`${URL}/cart`)
            .then(response => {
                setcart(response.data);
            })
            .catch(error => {
                console.error("Error fetching cart:", error);
            });
    }, []);


    return (
        <><Navbar />
            <div className="bg-pink-400 min-h-screen p-10">
                <h1 className="text-2xl font-bold text-white mb-5 text-center">Cart Products</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {cart.length > 0 ? (
                        cart.map((data, index) => (
                            <div key={index} className="bg-white p-5 rounded-lg shadow-lg flex flex-col items-center">
                                <img src={`images/${data.image}`} alt={data.text}
                                    className="w-full h-64 object-cover mb-3" />
                                <h2 className="text-lg font-semibold mb-2">{data.text}</h2>
                                <p className="text-green-700 mb-3">{data.price}</p>
                                <div className="bg-red-500 p-2 w-40 text-center text-white rounded-md">
                                    <button onClick={() => removefromcart(data)} classname=" p-2 rounded-md ">Remove from cart</button>

                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="text-white text-lg ">Your cart is empty</p>
                    )}
                </div>
            </div>
        </>
    );
};

export default Cart
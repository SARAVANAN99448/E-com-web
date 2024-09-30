import { useContext } from "react"
import Products from "./Products"

const Newarrivals = () => {
    const product = useContext(Products)

    return (<>
        <section>
            <div>
                {/* <h1>Newarrivals</h1>
                <div>
                    {
                        product.map(function (data) {
                            return <h1>{data}</h1>
                        })
                    }
                </div> */}
            </div>
        </section>

    </>)

}
export default Newarrivals
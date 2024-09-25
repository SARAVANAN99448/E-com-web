const express = require("express")
const cors = require("cors")
const path = require("path")
const mongoose = require("mongoose")
const dotenv = require("dotenv").config()

const app = express()

const corsoptions = {
    origin: ['https://e-com-web-ujbh.onrender.com'],
    methods: ['GET', 'POST'],
    credentials: true
};
// Middleware
app.use(express.json())

// path to show the images in frontend
app.use(cors(corsoptions));
app.use("/images", express.static(path.join(__dirname, "images")));

mongoose.connect(process.env.VITE_API_URL).then(() => console.log("DB is connected"))
    .catch(() => console.log("Failed to connect DB"))

// mongoose model 
const productmodel = mongoose.model("products", {
    image: String,
    text: String,
    price: String
}, "onepiece")

// cart model for handling add to cart and remove from cart
const cartmodel = mongoose.model("cart", {
    productId: String,
    image: String,
    text: String,
    price: String
}, "cart");

// sending products data to frontend
app.post("/products", function (req, res) {
    productmodel.find().then(function (data) {
        res.json(data)
        console.log(data)
    })
})
// Add to cart
app.post("/add-to-cart", (req, res) => {
    const { id, image, text, price } = req.body;

    cartmodel.findOne({ productId: id })
        .then(existingItem => {
            if (existingItem) {
                return res.status(400).json({ message: "Item already in cart" });
            }

            const newCartItem = new cartmodel({
                productId: id,
                image: image,
                text: text,
                price: price
            });

            return newCartItem.save();
        })
        .then(() => res.status(200).json({ message: "Item added to cart" }))
        .catch(() => res.status(500).json({ error: "Failed to add item to cart" }));
});

// Remove item from cart
app.post("/remove-from-cart", (req, res) => {
    const { productId } = req.body;
    cartmodel.findOneAndDelete({ _id: productId })
        .then(() => res.status(200).json({ message: "Item removed from cart" }))
        .catch(() => res.status(500).json({ error: "Failed to remove item" }));
});

app.get("/cart", (req, res) => {
    cartmodel.find()
        .then(data => res.json(data))
        .catch(() => res.status(500).json({ error: "Failed to fetch cart" }));
});


// backend server
app.listen(5000, () => {
    console.log("sever started")
})
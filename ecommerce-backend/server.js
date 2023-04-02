const STRIPE_SECRET_KEY = 'sk_test_51MsUkDGfPZaVNi0dJIDQayn4XXzOQeYwXA8soFwz4UnFfGq6NhCBLV8BUE61rsl78d5EvEgiKLbXuqMGLuEDjOKv00i1LKIsHh'
const COFFEE_API = 'price_1MsUrBGfPZaVNi0dWQ0UCOlU'
const CAMERA_API = 'price_1MsUrqGfPZaVNi0dApYeAmkC'
const MACBOOK_API = 'price_1MsUstGfPZaVNi0dafY8ZSxI'

const PORT = 4000

const express = require('express')
const cors = require('cors')
const stripe = require('stripe')(STRIPE_SECRET_KEY)
// const bodyParser = require('body-parser')
const app = express()

app.use(cors())
app.use(express.static('public'))
app.use(express.json())
// app.use(bodyParser, {extended: true})

app.post('/checkout', async (req, res) => {

    console.log(req.body.items)

    let itemInCart = []
    const items = req.body.items;

    items.forEach(item => {
        itemInCart.push({
            price: item.id,
            quantity: item.quantity
        })
        
    });

    console.log(itemInCart)

    const session = await stripe.checkout.sessions.create({
        line_items: itemInCart,
        mode: 'payment',
        success_url: `http://localhost:${PORT}/success`,
        cancel_url: `http://localhost:${PORT}/cancel`
    })

    res.json({
        url: session.url
    })

})


//  below is not necessary, we can always point out to ui url directly if stripe success/fail
app.get('/success', (req,res) => {
    res.redirect('http://localhost:3000/success') //this is UI success page
})
    

app.get('/cancel', (req,res) => {
    res.redirect('http://localhost:3000/cancel') //this is UI cancellation page
})

app.listen(PORT, () => {
    console.log(`Connected to server PORT: ${PORT}`)
})
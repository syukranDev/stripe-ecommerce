import productOne from '../assets/1.jpg'
import productTwo from '../assets/2.png'
import productThree from '../assets/3.jpg'
import productFour from '../assets/4.jpg'
import productFive from '../assets/5.jpg'

const COFFEE_API = 'price_1MsUrBGfPZaVNi0dWQ0UCOlU'
const CAMERA_API = 'price_1MsUrqGfPZaVNi0dApYeAmkC'
const MACBOOK_API = 'price_1MsUstGfPZaVNi0dafY8ZSxI'


const productArray =  [
    {
        id: COFFEE_API, 
        title: 'Coffee',
        price: 4.99,
        path: productOne
    },
    {
        id: CAMERA_API, 
        title: 'Camera',
        price: 444.99,
        path: productTwo
    },
    {
        id: MACBOOK_API, 
        title: 'Macbook',
        price: 199.49,
        path: productTwo
    },
    {
        id: 4, 
        title: 'Bracelet',
        price: 8.99,
        path: productFour
    },
    {
        id: 5, 
        title: 'Keyboard',
        price: 77.99,
        path: productFive
    },
    {
        id: 6, 
        title: 'Tissue',
        price: 2.99,
        path: productTwo
    }
]

function getProductData(id) {
    let productData = productArray.find(product => {
        return product.id === id
    })

    if (productData === undefined) {
        console.log('Item is not found for ID:' + id)
        return undefined
    }

    return productData
}

export { productArray, getProductData}
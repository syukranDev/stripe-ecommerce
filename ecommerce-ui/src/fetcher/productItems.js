const COFFEE_API = 'price_1MsUrBGfPZaVNi0dWQ0UCOlU'
const CAMERA_API = 'price_1MsUrqGfPZaVNi0dApYeAmkC'
const MACBOOK_API = 'price_1MsUstGfPZaVNi0dafY8ZSxI'

const productArray =  [
    {
        id: COFFEE_API, 
        title: 'Coffee',
        price: 4.99
    },
    {
        id: CAMERA_API, 
        title: 'Camera',
        price: 444.99
    },
    {
        id: MACBOOK_API, 
        title: 'Macbook',
        price: 199.49
    },
    {
        id: 4, 
        title: 'Bracelet',
        price: 8.99
    },
    {
        id: 5, 
        title: 'Keyboard',
        price: 77.99
    },
    {
        id: 6, 
        title: 'Tissue',
        price: 2.99
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
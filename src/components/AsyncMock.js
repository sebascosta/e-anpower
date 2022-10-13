const products = [
{
    id: '1',
    name:'Toxic',
    img:"https://cdn.shopify.com/s/files/1/0430/9594/9479/products/S-POWEREDITADA-1_800x.jpg?v=1654697423",
    category:'calzas',
    price: '3500',
    stock: '5',
    description:'Descripción de Toxic',
},
{
    id: '2',
    name:'bluemesh',
    img:'https://cdn.shopify.com/s/files/1/0430/9594/9479/products/S-PEACE-E_360x.jpg?v=1646829692',
    category:'calzas',
    price: '3000',
    stock: '5',
    description:'Descripción de Toxic',
},
{
    id: '3',
    name:'fingerprint',
    img:'https://cdn.shopify.com/s/files/1/0430/9594/9479/products/D-CYBEREDITADA-3_800x.jpg?v=1660304218',
    category:'calzas',
    price: '4000',
    stock: '5',
    description:'Descripción de Toxic',
},
{
    id: '4',
    name:'crossfit',
    img:'https://cdn.shopify.com/s/files/1/0430/9594/9479/products/S-DUAL-F_800x.jpg?v=1646829641',
    category:'calzas',
    price: '3500',
    stock: '5',
    description:'Descripción de Toxic',
}

]

export const getProducts = () => {
    return new Promise((resolve) => {
        resolve (products)
    })

}

export const getProductsById = (id) => {
    return new Promise((resolve) => {
        resolve (products.find(prod =>{
            return prod.id === id
        }))
    })    
}


export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        resolve (products.filter(prod => prod.category ===categoryId))
        })
      
}
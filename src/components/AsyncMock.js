const products = [
{
    id: '1',
    name:'TOXIC',
    img:"https://cdn.shopify.com/s/files/1/0430/9594/9479/products/S-POWEREDITADA-1_800x.jpg?v=1654697423",
    category:'calzas',
    price: '3500',
    stock: '5',
    description:'Descripción de Toxic',
},
{
    id: '2',
    name:'BLUEMESH',
    img:'https://cdn.shopify.com/s/files/1/0430/9594/9479/products/S-PEACE-E_360x.jpg?v=1646829692',
    category:'calzas',
    price: '3000',
    stock: '5',
    description:'Descripción de Bluemesh',
},
{
    id: '3',
    name:'FINGERPRINT',
    img:'https://cdn.shopify.com/s/files/1/0430/9594/9479/products/D-CYBEREDITADA-3_800x.jpg?v=1660304218',
    category:'calzas',
    price: '4000',
    stock: '5',
    description:'Descripción de Fingerprint',
},
{
    id: '4',
    name:'CROSSFIT',
    img:'https://cdn.shopify.com/s/files/1/0430/9594/9479/products/S-DUAL-F_800x.jpg?v=1646829641',
    category:'calzas',
    price: '3500',
    stock: '5',
    description:'Descripción de Crossfit',
},
{
    id: '5',
    name:'ACE TOP',
    img:'https://cdn.shopify.com/s/files/1/0430/9594/9479/products/S-ACE-FT_800x.jpg?v=1646829658',
    category:'tops',
    price: '3500',
    stock: '5',
    description:'Descripción de Ace top',
},

{
    id: '6',
    name:'PRIDE TOP',
    img:'https://cdn.shopify.com/s/files/1/0430/9594/9479/products/S-PRIDECAMOEDITADA-1_1_800x.jpg?v=1647954709',
    category:'tops',
    price: '3500',
    stock: '5',
    description:'Descripción de Pride Camo Top',
},

{
    id: '7',
    name:'BLACK TOP',
    img:'https://cdn.shopify.com/s/files/1/0430/9594/9479/products/S-PAMPITABLACK-1_800x.jpg?v=1664308619',
    category:'tops',
    price: '3500',
    stock: '5',
    description:'Descripción de Seamless black top',
},
{
    id: '8',
    name:'NEON TOP',
    img:'https://cdn.shopify.com/s/files/1/0430/9594/9479/products/TO-xxx-FT_800x.jpg?v=1637258840',
    category:'tops',
    price: '3500',
    stock: '5',
    description:'Descripción de Neon essential top',
},

{
    id: '9',
    name:'SPORTY BLACK',
    img:'https://cdn.shopify.com/s/files/1/0430/9594/9479/products/TH-SPORTYTEEBLACKEDITADA-1_800x.jpg?v=1659792051',
    category:'remeras',
    price: '3500',
    stock: '5',
    description:'Descripción de Sporty black tee',
},
{
    id: '10',
    name:'COURAGE TEE',
    img:'https://cdn.shopify.com/s/files/1/0430/9594/9479/products/TS-TSHIRTnumeral-FT_800x.jpg?v=1643905793',
    category:'remeras',
    price: '3500',
    stock: '5',
    description:'Descripción de Courage Tee',
},
{
    id: '11',
    name:'PURPLE SUDADERA',
    img:'https://cdn.shopify.com/s/files/1/0430/9594/9479/products/MUS-UVA-FT_4f250e2c-112b-45f2-8f77-19eb8ff601fa_800x.jpg?v=1649689587',
    category:'remeras',
    price: '3500',
    stock: '5',
    description:'Descripción de Purple Sudadera',
},
{
    id: '12',
    name:'NEON SUDADERA',
    img:'https://cdn.shopify.com/s/files/1/0430/9594/9479/products/SU-NEON-FT_800x.jpg?v=1627409004',
    category:'remeras',
    price: '3500',
    stock: '5',
    description:'Descripción de Neon sudadera basic',
},

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
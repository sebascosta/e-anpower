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
    name:'Bluemesh',
    img:'https://cdn.shopify.com/s/files/1/0430/9594/9479/products/S-PEACE-E_360x.jpg?v=1646829692',
    category:'calzas',
    price: '3000',
    stock: '5',
    description:'Descripción de Toxic',
},
{
    id: '3',
    name:'Fingerprint',
    img:'https://cdn.shopify.com/s/files/1/0430/9594/9479/products/D-CYBEREDITADA-3_800x.jpg?v=1660304218',
    category:'calzas',
    price: '4000',
    stock: '5',
    description:'Descripción de Toxic',
},
{
    id: '4',
    name:'Crossfit',
    img:'https://cdn.shopify.com/s/files/1/0430/9594/9479/products/S-DUAL-F_800x.jpg?v=1646829641',
    category:'calzas',
    price: '3500',
    stock: '5',
    description:'Descripción de Toxic',
},
{
    id: '5',
    name:'ACE TOP',
    img:'https://cdn.shopify.com/s/files/1/0430/9594/9479/products/S-ACE-FT_800x.jpg?v=1646829658',
    category:'top',
    price: '3500',
    stock: '5',
    description:'Descripción de ACE TOP',
},

{
    id: '6',
    name:'PRIDE CAMO TOP',
    img:'https://cdn.shopify.com/s/files/1/0430/9594/9479/products/S-PRIDECAMOEDITADA-1_1_800x.jpg?v=1647954709',
    category:'top',
    price: '3500',
    stock: '5',
    description:'Descripción de PRIDE CAMO TOP',
},

{
    id: '7',
    name:'SEAMLESS BLACK TOP',
    img:'https://cdn.shopify.com/s/files/1/0430/9594/9479/products/S-PAMPITABLACK-1_800x.jpg?v=1664308619',
    category:'top',
    price: '3500',
    stock: '5',
    description:'Descripción de SEAMLESS BLACK TOP',
},
{
    id: '8',
    name:'NEON ESSENTIAL TOP',
    img:'https://cdn.shopify.com/s/files/1/0430/9594/9479/products/TO-xxx-FT_800x.jpg?v=1637258840',
    category:'top',
    price: '3500',
    stock: '5',
    description:'Descripción de NEON ESSENTIAL TOP',
},

{
    id: '9',
    name:'SPORTY BLACK TEE',
    img:'https://cdn.shopify.com/s/files/1/0430/9594/9479/products/TH-SPORTYTEEBLACKEDITADA-1_800x.jpg?v=1659792051',
    category:'remera',
    price: '3500',
    stock: '5',
    description:'Descripción de SPORTY BLACK TEE',
},
{
    id: '10',
    name:'COURAGE TEE',
    img:'https://cdn.shopify.com/s/files/1/0430/9594/9479/products/TS-TSHIRTnumeral-FT_800x.jpg?v=1643905793',
    category:'remera',
    price: '3500',
    stock: '5',
    description:'Descripción de COURAGE TEE',
},
{
    id: '11',
    name:'PURPLE SUDADERA BASIC',
    img:'https://cdn.shopify.com/s/files/1/0430/9594/9479/products/MUS-UVA-FT_4f250e2c-112b-45f2-8f77-19eb8ff601fa_800x.jpg?v=1649689587',
    category:'remera',
    price: '3500',
    stock: '5',
    description:'Descripción de PURPLE SUDADERA BASIC',
},
{
    id: '12',
    name:'NEON SUDADERA',
    img:'https://cdn.shopify.com/s/files/1/0430/9594/9479/products/SU-NEON-FT_800x.jpg?v=1627409004',
    category:'remera',
    price: '3500',
    stock: '5',
    description:'Descripción de NEON SUDADERA',
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
const products = [
{
    name: 'Mercedes EQE',
    price: 72494,
    stars: 4,
    reviews: 250,
    seller: 'PcComponentes',
    image: 'https://fotos.inventario.pro/coche/1838/2410518/3b64d629-2828-411c-8936-010c922aa5a2/40543ad341c7ad9b85737cf1254c2d0f.jpg'
},
{
    name: 'Mercedes EQS',
    price: 126964,
    stars: 4.8,
    reviews: 23,
    seller: 'PcComponentes',
    image: 'https://fotos.inventario.pro/coche/1838/2762476/1856cf73-a550-4f68-8a5c-fa3d9cd3774c/40543ad341c7ad9b85737cf1254c2d0f.jpg'
},
{
    name: 'Mercededs CLA 2025',
    price: 54710,
    stars: 4.2,
    reviews: 247,
    seller: 'Mercedes-Benz',
    image: 'https://cdn.autobild.es/sites/navi.axelspringer.es/public/media/image/2025/03/mercedes-cla-2025-4303622.jpg?tf=1920x'
},
{
    name: 'Mercedes EQA',
    price: 56184 ,
    stars: 4.6,
    reviews: 5,
    seller: 'Mercedes-Benz',
    image: 'https://fotos.inventario.pro/coche/1838/2501525/bf45c9ba-abd0-4ef5-becf-5872e1ac84fd/40543ad341c7ad9b85737cf1254c2d0f.jpg'
},
{
    name: 'Mercedes Clase G 580 EQ',
    price: 163756 ,
    stars: 4.3,
    reviews: 95,
    seller: 'Mercedes-Benz',
    image: 'https://movilidadelectrica.com/wp-content/uploads/2024/11/Mercedes-Clase-G-ele%CC%81ctrico-5-750x375.jpg'
},
{
    name: 'Mercedes Citan eléctrico',
    price: 48599,
    stars: 4.7,
    reviews: 18,
    seller: 'Mercedes-Benz',
    image: 'https://fotos.quecochemecompro.com/mercedes-citan-electrico/mercedes-citan-electrico-lateral-movimiento.jpg?size=750x400'
},
{
    name: 'Mercedes EQT',
    price: 50746 ,
    stars: 4.2,
    reviews: 31,
    seller: 'Merceds-Benz',
    image: 'https://fotos.quecochemecompro.com/mercedes-eqt/mercedes-eqt-rodando-carretera.jpg?size=750x400'
},
{
    name: 'Mercedes Vito eléctrico',
    price: 76760 ,
    stars: 4.6,
    reviews: 42,
    seller: 'Mercedes-Benz',
    image: 'https://fotos.quecochemecompro.com/mercedes-vito-electrico/mercedes-vito-electrico-en-movimiento.jpeg?size=750x400'
},
{
    name: 'Mercedes EQE Suv',
    price: 82966,
    stars: 4.5,
    reviews: 124,
    seller: 'Mercedes-Benz',
    image: 'https://fotos.quecochemecompro.com/mercedes-eqe-suv/mercedes-eqe-suv-carga.jpg?size=750x400'
},
{
    name: 'Mercedes EQC eléctrico',
    price: 85375 ,
    stars: 4.9,
    reviews: 20,
    seller: 'Mercedes-Benz',
    image: 'https://fotos.quecochemecompro.com/mercedes-eqc/mercedes-eqc-lateral-dinamica.jpg?size=750x400'
},
];

// Selecciona el contenedor
const productsSection = document.getElementById('products');

// Crea las cartas de producto de forma dinámica
products.forEach(product => {
const card = document.createElement('article');
card.className = 'product-card';
card.innerHTML = `
    <img src="${product.image}" alt="${product.name}" class="product-image"/>
    <h2>${product.name}</h2>
    <p>Precio: ${product.price}€</p>
    <p>Valoración: ${product.stars} ★</p>
    <p>${product.reviews} opiniones</p>
    <p>Vendedor: ${product.seller}</p>
`;
productsSection.appendChild(card);
});

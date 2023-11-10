import { Categoria } from '../interfaces/categorias';

export const CATEGORIAS: Categoria[] = [
  {
    nombre: 'Hamburguesas',
    id: 250,
    imgUrl: 'https://www.euroresidentes.com/alimentacion/comida/wp-content/uploads/sites/3/2016/07/hamburguesas.jpg',
    productos: [
      {
        id: 1,
        nombre: 'Hamburguesa Yankee',
        precio: 3250,
        ingredientes: ['Cheddar', 'Panceta', 'Cebolla Caramelizada'],
        imagen:
          'https://images.loveat.la/media/3553/images/plates/149119',
      },
      {
        id: 2,
        nombre: 'Hamburguesa Fit',
        precio: 3100,
        ingredientes: ['Tomate', 'Lechuga'],
        imagen:
          'https://recetinas.com/wp-content/uploads/2023/02/smash-burger.jpg'
      },
      {
        id: 3,
        nombre: 'Hamburguesa Mexican',
        precio: 3200,
        ingredientes: ['Guacamole', 'Nachos'],
        imagen:
        'https://tb-static.uber.com/prod/image-proc/processed_images/79fdeb9bac33d549f73bd4186f551996/4218ca1d09174218364162cd0b1a8cc1.jpeg',
      },
    ],
  },
  {
    nombre: 'Pizzas',
    id: 1,
    imgUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQElz70P5TPKX_kN4b0c7_IgsIHnH8luFb1Kw&usqp=CAU',
    productos: [
      {
        id: 4,
        nombre: 'Pizza Margarita',
        precio: 1300,
        ingredientes: ['Muzarella', 'Salsa Tomate', 'Albahaca'],
        imagen:
          'https://placeralplato.com/files/2015/06/pizza-Margarita-640x480.jpg?width=1200&enable=upscale',
      },
      {
        id: 5,
        nombre: 'Pizza Pepperoni',
        precio: 1500,
        ingredientes: ['Muzarella', 'Salsa Tomate', 'Pepperoni'],
        imagen:
          'https://cdn.colombia.com/gastronomia/2015/09/29/pizza-rellena-de-salchicha-italiana-y-pepperoni-3339.jpg',
      },
      {
        id: 6,
        nombre: 'Pizza Jamon Crudo y Rucula',
        precio: 1800,
        ingredientes: ['Muzarella', 'Jamon Crudo', 'Rucula', 'Parmesano'],
        imagen:
          'https://img.cocinarico.es/2019-12/pizza-de-jamon-rucula-y-parmesano-1.jpg',
      },
    ],
  },
  {
    nombre: 'Postres',
    id: 2,
    imgUrl:
      'https://www.recetasnestle.com.ar/sites/default/files/2023-03/postre-en-vaso-dulce-leche.jpg.jpg',
    productos: [
      {
        id: 7,
        nombre: 'Torta brownie',
        precio: 1200,
        ingredientes: [],
        imagen: 'https://static.wixstatic.com/media/bf2361_46eb0a9cef00414cbf7af9126495a754~mv2.jpg/v1/fill/w_480,h_480,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/bf2361_46eb0a9cef00414cbf7af9126495a754~mv2.jpg',
      },
      {
        id: 8,
        nombre: 'Torta Chocotorta',
        precio: 800,
        ingredientes: [],
        imagen:
          'https://www.recetas-argentinas.com/base/stock/Recipe/248-image/248-image_web.jpg.webp',
      },
      {
        id: 9,
        nombre: 'Torta Rogel',
        precio: 1000,
        ingredientes: [],
        imagen:
          'https://acdn.mitiendanube.com/stores/001/038/681/products/rogel_tn-21-3f71910d54bbe2bb6015845600027643-640-0.jpg',
      },
    ],
  },
  {
    nombre: 'Bebidas',
    id: 3,
    imgUrl:
      'https://www.revistaneo.com/sites/default/files/2023-01/bebidasNAok.png',
    productos: [
      {
        id: 10,
        nombre: 'Coca Cola',
        precio: 560,
        ingredientes: [],
        imagen:
          'https://www.distribuidoramilenium.com.ar/images/26169.jpg',
      },
      {
        id: 11,
        nombre: 'Sprite',
        precio: 560,
        ingredientes: [],
        imagen:
          'https://m.media-amazon.com/images/I/61wh+v9s0zL._SL1500_.jpg',
      },
      {
        id: 12,
        nombre: 'Fanta',
        precio: 560,
        ingredientes: [],
        imagen:
          'https://m.media-amazon.com/images/I/71Cd1SW1pVL._SL1500_.jpg',
      },
    ],
  },
];
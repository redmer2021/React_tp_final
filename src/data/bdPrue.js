export const productos = [
    {
        id:1,
        nombre:"Remera Cuello Ancho",
        precio: 35000,
        categoria: "Remeras",
        stock: 5,
        descripcion:"Lorem ipsum dolor sit amet consectetur adipiscing elit class, condimentum laoreet sociosqu nunc eget himenaeos in nisl",
        img: ""
    },
    {
        id:2,
        nombre:"Pantalón Playero",
        precio: 35500,
        categoria: "Pantalones",
        stock: 15,
        descripcion:"Lorem ipsum dolor sit amet consectetur adipiscing elit class,Lorem ipsum dolor sit amet consectetur adipiscing elit class, condimentum laoreet sociosqu nunc eget himenaeos in nisl",
        img: ""
    },
    {
        id:3,
        nombre:"Cortos para tenis",
        precio: 12600,
        categoria: "Deportes",
        stock: 25,
        descripcion:"Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur  adipiscing elit class, condimentum laoreet sociosqu nunc eget himenaeos in nisl",
        img: ""
    },
    {
        id:4,
        nombre:"Camisa Jaguayana",
        precio: 55000,
        categoria: "Camisas",
        stock: 10,
        descripcion:"Lorem ipsum dolor sit amet consectetur",
        img: ""
    },
    {
        id:5,
        nombre:"Sombrero Steton",
        precio: 5000,
        categoria: "Sombreros",
        stock: 2,
        descripcion:"Lorem ipsum dolor sit amet consectetur adipiscing elit class, condimentum laoreet sociosqu nunc eget himenaeos in nisl",
        img: ""
    },
]

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos)
        }, 1000)
    })
}
var articulos = [
    { nombre: 'Bici', costo: 3000 },
    { nombre: 'TV', costo: 2500 },
    { nombre: 'Libro', costo: 320 },
    { nombre: 'Celular', costo: 10000 },
    { nombre: 'laptop', costo: 20000 },
    { nombre: 'teclado', costo: 500 },
    { nombre: 'audifonos', costo: 1700 }
]

const testMap = articulos.map(function(articulo) {
    return articulo.nombre
})

console.log(`Map: ${testMap}`)

const testFilter = articulos.filter(function(articulo) {
    return articulo.costo < 550
})

console.log(`Filter: ${testFilter}`)
console.log(testFilter)

const testReduce = articulos.reduce(function(articulo) {
    return articulo.costo+1
}, 0)
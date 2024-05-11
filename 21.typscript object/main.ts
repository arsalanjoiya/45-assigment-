interface item {
    name:string
    price:number
}
// creat two object
const book: item ={
    name: 'ESSENTIAL TYPESCIPT'
    price:500
}
const apple: item ={
    name: 'apple'
    price:450
}
console.log(`book name: ${book.name}, price: $${book.price}`)
console.log(`apple name: ${apple.name}, price: $${apple.price}`)
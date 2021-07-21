import productDB, { bulkCreate, getData } from "./Module";

let db = productDB('productDB',{
products:`++id,name,seller,price`
})

console.log(db);
// input tagss....
const userId = document.getElementById('id')
const productName = document.getElementById('product_name')
const seller = document.getElementById('seller')
const price = document.getElementById('price')

// buttons .....
const createBtn= document.getElementById('btn-create');
const readBtn= document.getElementById('btn-read');
const upBtn= document.getElementById('btn-update');
const delBtn= document.getElementById('btn-deleteAll') 
// eventListener....
createBtn.addEventListener('click',()=> {
  let flag= bulkCreate(db.products,{
      name: productName.value,
      seller : seller.value,
      price: price.value
  })

productName.value = seller.value = price.value = ''
getData(db.products,(data)=> {
  userId.value = data.id
  
})
})



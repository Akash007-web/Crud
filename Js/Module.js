const productDB = (dbName,table) => {
    
  const db = new Dexie(dbName);
  db.version(1).stores(table)
  db.open()
return db;
}

// insert data into databases...
const bulkCreate = (dbtable,data) => {
  let flag = empty(data)
  if(flag) {
    dbtable.bulkAdd([data])
    console.log("data inserted successfully")
  }else {
    console.log('please provide all data');
    
  }

  return flag;
}

// check validations...
const empty = object => {
  let flag = false

  for(const value in object) {
    if(object[value]!='' && object.hasOwnProperty(value)) {
       flag = true
    } else {
      flag = false
    }

    return flag;
  }
}



   // get data...
const getData = (dbtable,callback) => {

  let index = 0
  let obj = {}
  dbtable.count((count) => {
    if (count) {
      dbtable.each(table => {
            obj = sortObject(table)
            callback(obj,++index)    
      })
    } else {
      callback(0)
    }
  })
}

// sorting datas....
const sortObject = sortObj => {
  let obj = {}
  obj = {
    id:sortObj.id,
    name:sortObj.name,
    seller:sortObj.seller,
    price:sortObj.price
  }

  return obj;
}
export default productDB;
export {
bulkCreate,
getData
}
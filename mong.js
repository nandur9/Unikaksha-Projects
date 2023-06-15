// const mongoose = require('mongoose');

// const main =async ()=>{

//     await mongoose.connect("mongodb://localhost:27017/startup");

//     const productSchema = new MongoServerClosedError.Schema({

//         name :String

//     });
//     const productsModel = mongoose.model('products',productSchema);
//     let data = new productsModel({
//         name: 'Oneplus c2',price:57345
//     });
//     let result = await data.save();
//     console.log(result);

// }
// main();


// const mongoose = require('mongoose');

// const main = async () => {
//   await mongoose.connect('mongodb://localhost:27017/startup');

//   const productSchema = new mongoose.Schema({
//     name: String,
//     price: Number,
//   });

//   const productsModel = mongoose.model('products', productSchema);
//   let data = new productsModel({
//     name: 'Oneplus c2',
//     price: 57345,
//   });

//   let result = await data.save();
//   console.log(result);
// };

// main();




const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/ecom');

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  brand: String,
  category: String
});

const insertInDB = async () => {
  const productsModel = mongoose.model('products', productSchema);
  let data = new productsModel({
    name: 'Oneplus c2',
    price: 57345,
    brand: 'Oneplus',
    category: 'mobile'
  });
  let result = await data.save();
  console.log(result);
};

const updateInDB = async () => {
  const productsModel = mongoose.model('products', productSchema);
  let result = await productsModel.updateOne(
    { name: 'MI X' },
    {
      price: 200000,
      brand: 'MI',
      category: 'mobile'
    }
  );
  console.log(result);
};

const main = async () => {
  try {
    await insertInDB();
    await updateInDB();
    mongoose.connection.close();
  } catch (error) {
    console.error(error);
  }
};

main();


const deleteInDB= async()=>{
    const product=mongoose.model('products',productSchema);
    let data= await product.deleteOne(
    {name:"Oneplus"}
    )
    console.log(data);
}


const findInDB=async ()=>{
    const product=mongoose.model('products',productSchema);
    let data = await product.find(
    {name:"Oneplus"}
    )
    consolele.log(data);
}








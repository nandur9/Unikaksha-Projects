// import express from 'express';
// import dbconnect from './mongodb';
// const app= express();
// app.use(express,json());

// //Get Api
// app.get('/', async (req, resp)=>{
// let data= await dbconnect();
// data = await data.find().toArray(); 
// console.log(data);
// resp.send(data);
// })

// //Post Api
// app.post('/', async (req,resp)=>{
//     let data = await dbconnect();
//     let result = await  data.insert(req.body);
    
// })
// app.listen(5002);




// PUT API - To change the name
app.put('/:name', async (req, resp) => {
    try {
      let data = await dbConnect();
      let result = await data.updateOne(
        { name: req.params.name },
        { $set: req.body }
      );
      resp.send({ status: "Updated" });
    } catch (error) {
      console.error(error);
      resp.status(500).send('Internal Server Error');
    }
  });
  
  // DELETE API
  app.delete('/:id', async (req, resp) => {
    try {
      console.log(req.params.id);
      let data = await dbConnect();
      const result = await data.deleteOne({
        _id: new mongodb.ObjectId(req.params.id)
      });
      resp.send(result);
    } catch (error) {
      console.error(error);
      resp.status(500).send('Internal Server Error');
    }
  });
  
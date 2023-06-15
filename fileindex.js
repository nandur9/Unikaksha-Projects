// const express = require('express');
// const multer = require('multer');
// const app = express();


// const upload = multer({
//     Storage:multer.diskStorage({
//         destination:function(req,file,cd){
//             cd(null,"upoads");
//         },
//         filename:function(req,file,cd){
//             cd(null,file.fieldname + "-" + Data.now() +".jpg");
//         }
//     })
// }).single("user_file")

// app.post("/upload",upload,(req,resp)=>{
//     resp.send("Fileuploaded");

// });
// app.listen(5009);




// const express = require('express');
// const multer = require('multer');
// const app = express();

// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, "uploads");
//     },
//     filename: function (req, file, cb) {
//         cb(null, file.fieldname + "-" + Date.now() + ".jpg");
//     }
// });

// const upload = multer({ storage: storage }).single("user_file");

// app.post("/upload", upload, (req, res) => {
//     res.send("File uploaded");
// });

// app.listen(5009, () => {
//     console.log("Server is running on port 5009");
// });





const express = require('express');
const multer = require('multer');
const app = express();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "uploads");
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + "-" + Date.now() + ".jpg");
    }
});

const upload = multer({ storage: storage }).single("user_file");

app.post("/upload", upload, (req, res) => {
    res.send("File uploaded");
});

app.listen(5009, () => {
    console.log("Server is running on port 5009");
});

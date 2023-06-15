let a = 30;
let b = 30;
let waitingData= new Promise((resolve, reject)=>{
    setTimeout(()=> {
        resolve(10)
    },2000);
})

waitingData.then((data)=>{
    b = data;
    console.log(a+b);
})

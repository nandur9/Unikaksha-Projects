console.log('Line1');

setTimeout(()=> {
    console.log('Line2');
}, 2000);

setTimeout(()=>{
    console.log('Line3');
},0);

console.log('Line4');


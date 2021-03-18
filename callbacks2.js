setTimeout( ()=> {
    console.log("Welcome");
    setTimeout( ()=>{
        console.log("inside");
        setTimeout( ()=>{
            console.log("inside2");
        },2000);
    },1000);
},30);
console.log("after");
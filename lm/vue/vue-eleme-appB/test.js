let pj = new Promise((res,rej)=>{
    setTimeout(() => {
        rej(1)
    }, 1000);
})
pj.then(res=>{
    console.log('resolve',1);   
},err=>{
    console.log('reject', 1);
})
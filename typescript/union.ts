var printVal=(val:string|number)=>{
    if(typeof(val)=='string'){
        console.log('welcome '+val);
    }
    if(typeof(val)=='number'){
        console.log('your score is '+val);
    }
}
printVal('nithya');
printVal(60);
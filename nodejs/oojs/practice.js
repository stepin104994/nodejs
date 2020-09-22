var hotels={
    name:'A2B',
    city:'Mysore',
    rating:5,
    type:['AC','non AC'],
    cuisine:['chinese','korean','indian'],
    menu:{
        name:"Noodles",
        cost:100,
        category:"veg"
    }
    
   
        
}
for(const ele in hotels)
    {
    var details=hotels[ele];
    if(details instanceof Array)
    {
        for(const i in details)
        {
            console.log(details[i]);
        }
    }
    else if(typeof details=='object')
    {
        for(const j in details)
        {
            console.log(details[j]);
        }
    }
    else if(typeof details=='function')
    {
        details();  
    }
    else
    console.log(details);
}
       



var mobile1=
    {
        name :'Oppo F15',
        brand:'OPPO',
        price:20000,
    }
    var mobile2=
    {
        name :'redmi',
        brand:'xiomi',
        price:10000,
    }
    var print=function(){
        console.log('name'+this.name);
        console.log('brand'+this.brand);
    }
    var discountedPrice=function(per){
        console.log('discounted price is'+this.price*per);
    }
    var addAccess=function(acc1,acc2){
        console.log('Acc'+acc1+","+acc2);
    }
    print.call(mobile1)
    discountedPrice.call(mobile1,10);
    addAccess.call(mobile1,'earphones','charger');
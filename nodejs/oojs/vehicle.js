function Vehicle(name,brand,price)
{
    this.name=name;
    this.brand=brand;
    this.price=price;
    this.getDiscount=function(dis){
        console.log('discounted price.....>',this.price/dis)
    }
}
var properties=new Vehicle('eon','hundai',60000);
console.log(properties);
properties.getDiscount(100);
Vehicle.prototype.hasAcessories=true;
Vehicle.prototype.showAcessories=function(){
    console.log('AC','console','musicsystem');
}

properties.showAcessories();
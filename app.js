var express=require('express');
var app=express();
var booklist=require('./books.json');
app.get('/search',function(req,res){
var search=[];

  var  author=req.query.author;
    for(const ele in booklist)
    {
        if(booklist[ele].author==author){
            search.push(booklist[ele]);
        }
    }
    res.send(search); 

})

app.get('/showbooks',function(req,res){
    res.send(booklist);
})

app.get('/home',function(req,res){
    res.send('welcome to express');
})

app.get('/login/:username/:city',function(req,res){
    var uname=req.params.username;
    var ucity=req.params.city;
    res.send(`welcome ${uname} from ${ucity}`);
})

app.get('/loginUser/:username/:city',function(req,res){
    var params=req.params;
    res.send(params);
})

app.get('/userDetails/:username/:city',function(req,res){
    var user={"name":req.params.username,"city":req.params.city};
    res.send(user);
})

app.get('/register',function(req,res){
    name=req.query.studentName;
    id=req.query.studentId;
    res.send({"stName":name,"stId":id});
})
app.listen('3000',function(){
    console.log('server listening to port 3000');
})
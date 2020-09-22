
var express=require('express');
 var app=express();
 app.listen('3000',function(){
        console.log('server listening to port 3000');
    })
 var studentList=require('./student.json');

 app.get('/home',function(req,res){
        res.send('welcome to express');
    })
    app.get('/showStudents',function(req,res)
    {
             res.send(studentList);
     })

     
 app.get('/search',function(req,res){
    var newStudent=[];
    
    var  city=req.query.city;
    for(const ele in studentList)
    {
        if(studentList[ele].city==city){
            newStudent.push(studentList[ele]);
        }
    }
    res.send(newStudent); 

})









































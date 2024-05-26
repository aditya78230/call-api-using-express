var express= require('express')
var bp= require('body-parser')
var _=require('underscore')
var app= express()
app.use(bp.json())
var uid=1
var pid=1
var userData=[]
var projectData=[]

//projects
app.get('/loadprojects',(req,res)=>{
    res.send(projectData)
})
app.get('/loadproject/:id',(req,res)=>{

    var pid=parseInt(req.params.id)
    var foundData=_.findWhere(projectData,{id:pid})
    if(foundData){
        res.send(foundData)

    }else{
        res.send('project not found')
    }
})
app.post("/addproject",(req,res)=>{
    var pdata= req.body
    pdata.id=pid++
    projectData.push(pdata)
    res.send('Project added')
})

//users
app.get('/loadusers',(req,res)=>{
    res.send(userData)
})
app.get('/loaduser/:id',(req,res)=>{

    var uid=parseInt(req.params.id)
    var foundData=_.findWhere(userData,{id:uid})
    if(foundData){
        res.send(foundData)

    }else{
        res.send('user not found')
    }
     
    
})
app.delete('/deleteuser/:id',(req,res)=>{

    var uid=parseInt(req.params.id)
    var foundData=_.findWhere(userData,{id:uid})
    if(foundData){
        userData=_.without(userData,foundData)
        res.send('user deleted')

    }else{
        res.send('user not found')
    }
     
    
})
app.post("/adduser",(req,res)=>{
    var udata= req.body
    udata.id=uid++
    userData.push(udata)
    res.send('user added')
})
app.use(express.static('public'))


app.listen(5010,()=>{
    console.log('server is ready...1');
})
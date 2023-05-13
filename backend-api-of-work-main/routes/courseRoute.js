const express = require("express")
const route = express.Router();

let b = [
    {
        id:1,
        Course:"abc",
        
        },
    {
        id:2,
        Course:"acc",
    },
    {
        id:3,
        Course:"xxc",
    },
    {
        id:4,
        Course:"smx",
    },
    {
        id:5,
        Course:"smama",
    },
]
route.get("/", (req ,res)=>{
    res.send(JSON.stringify(b)).status(200)
    
});
route.get("/:id", (req ,res)=>{
   let id = req.params.id;
   let i = b.findIndex((x)=>x.id == id);
   if(i > -1){
    res.send(b[i]).status(200);
   }else{
    res.send("No data nhjnhbe ").status(404)
   }
    
});
route.post("/", (req ,res)=>{
  let {Course} = req.body;
  let errAns = []
  if(!Course || Course == " "){
    errAns.push("required")
  }
  if(errAns.length > 0){
    res.send(errAns).status(400)
    return;
  }
  else{
      let obj= {
        Course:Course,
        id: b.length + 1 ,
      }
      b.push(obj)
      res.send(obj).status(200)
  }
});
route.put("/:id", (req ,res)=>{
    let id = req.params.id;
    let {Course} = req.body;
    let i = b.findIndex((x)=>x.id == id);
    if(i > -1){
     b[i].Course = Course;
     res.send(b[i]).status(200)
    }else{
     res.send("No Data Not Found ").status(404)
    }
});
route.delete("/:id", (req ,res)=>{
    let id = req.params.id;
    let i = b.findIndex((x)=>x.id == id);
    if(i > -1){
     b.splice(i,1)
     res.send("Sucessfully Delete").status(200)
    }else{
     res.send("No Data Not Found on this ID ").status(404)
    }
});


module.exports = route;

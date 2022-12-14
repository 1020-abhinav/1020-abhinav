const express = require('express');
const router = express.Router();

//-------------------------------------------------------------------------------------------------------------

router.post("/post-query/:num1",function(req,res){
    
    let result = req.params.num1 + req.body.num3 + req.query.num2  // param * body value * query param
    res.send({data:result,status:true})
})


let persons= [
    {
    name: "PK",
    age: 10,
    votingStatus: false
 },
 {
    name: "SK",
    age: 20,
    votingStatus: false
 },
 {
    name: "AA",
    age: 70,
    votingStatus: false
 },
 {
    name: "SC",
    age: 5,
    votingStatus: false
 },
 {
    name: "HO",
    age: 40,
    votingStatus: false
 }
 ]
router.post("/voting",function(req,res){
    let valid = []
    persons.forEach(ele =>{
        if(ele.age > req.query.votingAge){
            ele.votingStatus = true
            valid.push(ele)
        }
        return valid
    })
    res.send({data:valid,status:true})
}) 
module.exports = router;
const express = require('express');
const router = express.Router();
const intro = require('./introduction')
const employee = require('./employee')
const _ = require('underscore')
const mentorModule = require('../abc/xyz/myModule'); 
const req = require('express/lib/request');
const { route } = require('express/lib/application');

const players = [{
    "name" : "manish",
    "dob":"1/1/1995",
    "gender":"male",
    "city":"Jalandhar",
    "sports":["swimming"]
},
{
    "name" : "gopal",
    "dob":"1/09/1995",
    "gender":"male",
    "city":"delhi",
    "sports":["soccer"]
},{
    "name" : "lokesh",
    "dob":"1/1/1990",
    "gender":"male",
    "city":"mumbai",
    "sports":["soccer"]
}]
router.post('/test-abhi',function(req,res){
    let count=0
    for(let i=0;i<players.length;i++){
        if(players[i].name == req.body.name){
            count++
        }
    }
    if(count!=0){console.log("name is all ready present")}
    if(count==0){console.log(Object.assign(players,req.body))}
    res.send(req.body)
})

module.exports = router;
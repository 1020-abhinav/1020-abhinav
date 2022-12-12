const express = require('express');
const router = express.Router();
const intro = require('./introduction')
const employee = require('./employee')
const _ = require('underscore')
const mentorModule = require('../abc/xyz/myModule'); 
const req = require('express/lib/request');
const { route } = require('express/lib/application');


router.get('/sumOfnumber',function(req,res){
    const numbers = [1,2,3,4,5,7,8,9]
    let n = numbers.length+1
    const totalSum =(n*(n+1))/2
    let sum =0
    numbers.forEach(e => {
        sum=sum+e
        return sum
    })
    const missingNumber = totalSum - sum
    res.send(`Data ${missingNumber}`)
})


router.get('/missNumber',function(req,res){
    let numbers = [33,34,35,37,38]
    let n=numbers.length + 1
    let first = numbers[0]
    let last = numbers[numbers.length-1]
    let totalSum =(n*(first + last))/2
    let sum =0
    numbers.forEach(e => {
        sum=sum+e
        return sum
    })
    const missingNumber = totalSum - sum
    res.send(`Data ${missingNumber}`)
})

module.exports = router;
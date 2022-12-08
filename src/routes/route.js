const express = require('express');
const router = express.Router();
const lod = require('lodash')
const intro = require('./introduction')
const employee = require('./employee')
const util = require('../util/helper')
const invi = require("../logger/logger")
const validator = require("../validator/formatter")

const _ = require('underscore')

router.get('/test-me', function (req, res) {
    // console.log("email from introduction module", intro.myEmail)
    // intro.myFunction('Sabiha')
    // console.log("email from employee module", employee.myEmail)
    // const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    // let result = _.first(days, 4)
    // console.log(`Result from underscore function is ${result}`)
    //------------------------- PROBLEM 1---------------------
    // invi.welcome('Abhinav')
    //------------------------- PROBLEM 2 --------------------
    // console.log(util.printMonth())
    // util.printDate()
    // util.getBatchInfo()
    // //------------------------- PROBLEM 3---------------------
    // const name = validator.trim('                Abhinav Gupta           ')
    // const Upper = validator.changeToUpperCase(name)
    // const lower = validator.changetoLowerCase(name)
    // console.log(name)
    // console.log(`Character in Upper case = ${Upper}`)
    // console.log(`Character in lower case = ${lower}`)
    // //------------------------ PROBLEM 4-------------------------------
    // const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    // console.log(lod.chunk(month,[3])) // 4  => 3 
    // //--------------------------- 1-------------------------------------
    // const oddNumber = [1,3,5,7,9,11,13,15,17,19]
    // console.log(lod.tail(oddNumber))
    // //---------------------------- 2 -----------------------------------
    // const bookType = [["horror", "The Shining"], ["drama","Titanic"], ["thriller", "Shutter Island"], ["fantasy", "Pans Labyrinth"]]
    // console.log(lod.fromPairs(bookType))
    // //--------------------------- 3 -----------------------------------
    // const number1 = [1, 2, 9, 40]
    // const number2 = [1, 20, 3, 2]
    // const number3 = [9, 2,15,16,85]
    // const number4 = [9, 2,15,18,20]
    // const number5 = [23,32,42,24]
    // console.log(lod.union(number1,number2,number3,number4,number5))
    //--------------------------- 4 -------------------------------------
    res.send('any dummy text')
});


router.get('/test-you', function(req, res){
    console.log("I am here")
    res.send("very important text")
})


module.exports = router;
const trim= function (person){
    return person.trim()
}

const changetoLowerCase = function (data){
    return data.toLowerCase() // AbHiNaV => abhinav
} 
const changeToUpperCase = function (data){
    return data.toUpperCase()// AbHiNaV => ABHINAV
}

module.exports = {trim,changetoLowerCase,changeToUpperCase}
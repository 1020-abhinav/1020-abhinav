const printDate = function(){
    let ts = Date.now();
    let date_ob = new Date(ts);    
    let date = date_ob.getDate();    
    let month = date_ob.getMonth() + 1;  // 0 to 11   
    let year = date_ob.getFullYear();
    console.log(year + "-" + month + "-" + date);
}

const printMonth = function(){
    const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    const d = new Date();
    let name = month[d.getMonth()];// month[index] // month[11]
    return name
}

const getBatchInfo = function(){
    let batch = 'californium'
    let week = 'W3'
    let day = 'D4'
    let topic = 'Nodejs module system'
    console.log(`${batch}, ${week}${day}, the topic for today is ${topic}`)

}
module.exports = {printDate,printMonth,getBatchInfo}
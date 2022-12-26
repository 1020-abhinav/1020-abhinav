const control = function(req,res){
    res.send({msg:"Request1 is Runing"})
}

const contro2 = function(req,res){
    res.send({msg:"Request2 is Runing"})
}

const contro3 = function(req,res){
    res.send({msg:"Request3 is Runing"})
}

const contro5 = function(req,res){
    res.send({msg:"Request5 is Runing"})
}

const contro4 = function(req,res){
    res.send({msg:"Request4 is Runing"})
}

module.exports={control,contro2,contro3,contro4,contro5}
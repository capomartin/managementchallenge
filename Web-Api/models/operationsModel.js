const mongoose = require('../bin/bd')
const errorMessage = require("../util/errorMessage")

const operationsSchema= new mongoose.Schema({
    concept:{
        type:String,
        required:[true,errorMessage.GENERAL.campo_obligatorio],
        minlength:[4,errorMessage.GENERAL.minlength]
    },
    date: {
        type: Date,
        default: Date.now
    },
    amount:{
        type:Number,
        min:1,        
        required:[true,errorMessage.GENERAL.campo_obligatorio]
       /* get: function(value){
            return value * 1.21
        }*/
    },
    type:{
        type:String,
        enum:["Ingreso","Egreso"]
    },
    category:{
        type:mongoose.Schema.ObjectId,
        ref:"categories",
        default:"61a2732a32c3c9685cb4732d"
    }
})
operationsSchema.virtual("total").get(function(){
    return "$ "+this.amount
})
operationsSchema.set("toJSON",{getters:true,setters:true,virtuals:true})
//operationsSchema.plugin(mongoose.mongoosePaginate)


module.exports = mongoose.model("operations",operationsSchema)
const operationsModel= require('../models/operationsModel')
const categoriesModel = require('../models/categoriesModel')

module.exports = {

    getAll:  async (req, res, next) => {
        try{
            const operations = await operationsModel.find().populate("category")
            res.json(operations)

        }catch(error){
            console.log(error)
        }
        
      },

     /* getAllPaginate:  async (req, res, next) => {
        try{
            const operations = await operationsModel.paginate({},{
                    populate:"category"
                    
                    
            })
                        res.json(operations)

        }catch(error){
           next(e)
        }
        
      },*/
    getById: async (req,res,next) => {

        try{
            const operation = await operationsModel.findById(req.params.id).populate("category")
            res.json(operation)

        }catch(error){
            next(e)
        }
        

    },
    insert: async (req,res,next) => {

        try{
            const body= req.body;
            const categoryId = await categoriesModel.findById(body.categoryId)
            /*if(!categoryId){
                res.json("La categoria no existe")
              return
            }*/
                const operation = new operationsModel({
                    concept:body.concept,
                    date:body.date,
                    amount:body.amount,
                    type:body.type,
                    category:body.categoryId
            })
            const documento= await operation.save()
            res.json(documento)
            
        }catch(error){
            next(e)
        }
    },
    update: async (req,res,next) =>{

        try{
            const operation = await operationsModel.updateOne({_id:req.params.id},req.body)
            res.json(operation)

        }catch(error){
            console.log(error)
        }
    },
    delete: async (req,res,next) =>{
        try{
            const operation = await operationsModel.deleteOne({_id:req.params.id})
            res.json(operation)

        }catch(error){
            next(e)
        }
    }
}

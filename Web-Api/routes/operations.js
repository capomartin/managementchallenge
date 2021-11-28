const express = require('express');
const router = express.Router();
const operationController = require('../controllers/operationsController')


//router.get('/',operationController.getAllPaginate)/* Home page. */
router.get('/',operationController.getAll)/* Home page. */
router.get('/detalle',operationController.getAll)/* Detalle page. */
router.get('/:id',operationController.getById);

//router.post('/',(req,res,next)=>{req.app.validateUser(req,res,next)},operationController.insert)

router.post('/',operationController.insert)
router.put('/:id',operationController.update)
router.delete('/:id',operationController.delete)


module.exports = router;



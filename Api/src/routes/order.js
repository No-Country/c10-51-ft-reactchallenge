const { Router } = require('express')
const { createOrder, getOrder, changeOrderState } = require('./utils')
const router = Router();

router.post('/orderCreator', async (req, res) => {
    try{
        const order = req.body
        const info = await createOrder(order)
        res.status(201).json(info)       
    }catch(error){
        res.status(401).json({error: error.message})
    }
})

router.get('/', async (req,res) => {
    try{
        const { idOrder, idUser, idRest } = req.query
        const info = await getOrder(idOrder, idRest, idUser)
        res.status(200).json(info)
    }catch(error){
        res.status(404).json({error: error.message})
    }
})

router.put('/:task', async (req, res) => {
    try{
        const { task } = req.params
        const { idOrder } = req.query
        const info = await changeOrderState(task, idOrder)
        res.status(200).json(info)
    }catch(error){
        res.status(400).json({error: error.message})
    }
})



module.exports = router
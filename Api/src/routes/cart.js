const { Router } = require('express')
const { cartCreator, addFoodToCart, getCart, restartCart, substractFood, amount, totalToPay } = require('./utils')
const router = Router();

router.post('/creator', async (req, res) => {
    try{
        let { idUser } = req.query
        let info = await cartCreator(parseInt(idUser))
        res.status(200).json(info)
    }catch(error){
        res.status(400).json({error: error.message})
    }
})

router.put('/add', async (req, res) => {
    try{
        const {idUser, idFood} = req.query
        let info = await addFoodToCart(idUser, idFood)
        res.status(200).json(info)
    }catch(error){
        res.status(400).json({error: error.message})
    }
})



router.delete('/restart/:idUser', async (req, res) => {
    try{
        const { idUser } = req.params
        let info = await restartCart(idUser)
        res.status(200).json(info)
    }catch(error){
        res.status(400).json({error: error.message})
    }
})

router.put('/sub', async (req, res) => {
    try{
        const {idUser, idFood} = req.query
        let info = await substractFood(idUser, parseInt(idFood))
        res.status(200).json(info)
    }catch(error){
        res.status(400).json({error: error.message})
    }
})

router.get('/amount', async (req, res) => {
    try{
        const { idUser, idFood } = req.query
        let info = await amount(parseInt(idUser), parseInt(idFood))
        res.status(200).json(info)
    }catch(error){
        res.status(400).json({error: error.message})
    }
})

router.get('/total', async (req, res) => {
    try{
        const { idUser } = req.query
        let info = await totalToPay(idUser)
        res.status(200).json(info)
    }catch(error){
        res.status(400).json({error: error.message})
    }
})

router.get('/:id', async (req, res) => {
    try{
        const idUser = req.params.id
        let info = await getCart(idUser)
        res.status(200).json(info)
    }catch(error){
        res.status(404).json({error: error.message})
    }
})


module.exports = router
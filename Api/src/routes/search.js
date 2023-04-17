const { Router } = require('express')
const { search } = require('./utils')
const router = Router();


router.get('/:str', async (req,res) => {
    try{
        const { str } = req.params
        const info = await search(str)
        res.status(200).json(info)
    }catch(error){
        res.status(404).json({error: error.message})
    }
})


module.exports = router
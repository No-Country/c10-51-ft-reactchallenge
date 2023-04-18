const { Router } = require('express')
const {userCreator, getAllUsers, getUserDetail, doRating, favorites, noFavorite, includeTarget, deleteTarget} = require('./utils')
const router = Router();

router.get('/', async (req, res) => {
    try {
        const info = await getAllUsers()
        const {name} = req.query
        if(name){
            try{
                const userDetail = await getUserDetail(name)
                res.status(200).json(userDetail)
            }catch(error){
                res.status(404).json({error: error.message})
            }
        }else{
        res.status(200).json(info)
        }
    } catch (error) {
        res.status(404).json({ error: error.message })
    }
})

router.put('/rating', async (req, res) => {
    try{
        const {idUser, idRest} = req.query
        const qualification = req.body
        console.log(qualification.qualification)
        const info = await doRating(idUser, idRest, qualification.qualification)
        res.status(201).json(info)

    }catch(error){
        res.status(400).json({ error: error.message })
    }
}

)

router.put('/updateFavorites', async (req, res) => {
    try{
        const {idUser, idRest} = req.query
        const info = await favorites(parseInt(idUser), parseInt(idRest))
        res.status(201).json(info)
    }catch(error){
        res.status(400).json({ error: error.message })
    }
}

)

router.put('/noFavorite', async (req,res) => {
    try{
        const {idUser, idRest} = req.query
        const info = await noFavorite(parseInt(idUser), parseInt(idRest))
        res.status(201).json(info)
    }catch(error){
        res.status(400).json({ error: error.message })
    }
})

router.put('/updateTargets', async (req, res) => {
    try{
        const { idUser } = req.query
        const target = req.body
        const info = await includeTarget(parseInt(idUser), target)
        res.status(201).json(info)
    }catch(error){
        res.status(400).json({ error: error.message })
    }
}

)

router.put('/deleteTarget', async (req,res) => {
    try{
        const {idUser, target} = req.query
        const info = await deleteTarget(parseInt(idUser), target)
        res.status(201).json(info)
    }catch(error){
        res.status(400).json({ error: error.message })
    }
})


router.post('/userCreator', async (req, res) => {
    try{
        const dataUser = req.body
        const newUser = userCreator(dataUser)
        res.status(201).json(newUser)
    }catch(error){
        res.status(400).json({error: error.message})
    }
}

)

router.get("/:id", async (req, res) => {
    try{
        const id = req.params.id
        const info = await getUserDetail(parseInt(id))
        res.status(200).json(info)
    }catch(error){
        res.status(404).json({error: error.message})
    }
})


module.exports = router
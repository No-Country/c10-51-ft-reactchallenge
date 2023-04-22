const { Router } = require('express')
const { getFood, foodCreator, getFoodDetail, getCategories, updateFood, deleteFood } = require('./utils')
const router = Router();

router.get('/', async (req, res) => {
    try {
        const { name, idrest, category, minprice, maxprice, promo } = req.query
        if (name) {
            try {
                const restDetail = await getFoodDetail(name)
                res.status(200).json(restDetail)
            } catch (error) {
                res.status(404).json({ error: error.message })
            }
        } else if (idrest || category || minprice || maxprice || promo) {
            try {
                const filtered = await getFood(idrest, category, minprice, maxprice, promo)
                res.status(200).json(filtered)
            } catch (error) {
                res.status(404).json({ error: error.message })
            }

        } else {
            const info = await getFood()
            res.status(200).json(info)
        }
    } catch (error) {
        res.status(404).json({ error: error.message })
    }
})





router.post('/foodCreator', async (req, res) => {
    try {
        const dataFood = req.body
        const newFood = foodCreator(dataFood)
        res.status(201).json(newFood)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})

router.get("/categories", async (req, res) => {
    try {
        const categories = await getCategories()
        res.status(200).json(categories)
    } catch (error) {
        res.status(404).json({ error: error.message })
    }
})

router.put('/edit', async (req, res) => {
    try{
      const { idFood } = req.query
      const edit = req.body
      let info = await updateFood(idFood, edit)
      res.status(200).json(info)
    }catch(error){
      res.status(400).json({ error: error.message })
    }
  })

router.delete('/delete/:id', async (req, res) => {
    try{
        const id = req.params.id
        deleteFood(id)
        res.status(200).json("Comida borrada")
    }catch(error){
        res.status(400).json({error: error.message})
    }
})



router.get("/:id", async (req, res) => {
    try {
        const id = req.params.id
        const info = await getFoodDetail(parseInt(id))
        res.status(200).json(info)
    } catch (error) {
        res.status(404).json({ error: error.message })
    }
})




module.exports = router
const { Router } = require('express')
const { getFood, foodCreator, getFoodDetail, getCategories, updateFood } = require('./utils')
const router = Router();

router.get('/', async (req, res) => {
    try {

        /* La ruta GET /food tambien sirve como filtro si se le agregan los siguientes querys:
        ?idrest=(id del restaurante)
        ?category=(Categoria de la comida)
        ?minprice=(Precio mínimo dispuesto a pagar)
        ?maxprice=(Precio máximo dispuesto a pagar)


       

        A su vez son combinables, se pueden aplicar varios al mismo tiempo de la siguiente forma:

        "food?idrest=2&category=Pizza&maxprice=2000"

        ?promo=1 ----> traerá todas las promociones. Si se combina con cualquiera de los demás filtros tambien funcionará
        
        Por lo tanto si se desean conocer las promociones activas de un restaurante en particular basta con escribir:

        "food?idrest=(id del restauran)&promo=1"

        */
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
      const { edit } = req.body
      let info = await updateFood(idFood, edit)
      res.status(200).json(info)
    }catch(error){
      res.status(400).json({ error: error.message })
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
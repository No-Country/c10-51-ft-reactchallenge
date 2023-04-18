const { Router } = require('express')
const { restCreator, getAllRest, getRestDetail, getRating, updateRest } = require('./utils')
const router = Router();

router.get('/', async (req, res) => {
  try {
    const { name, category } = req.query
    const info = await getAllRest(category)
    if (name) {
      try {
        const restDetail = await getRestDetail(name)
        res.status(200).json(restDetail)
      } catch (error) {
        res.status(404).json({ error: error.message })
      }
    } else {
      res.status(200).json(info)
    }
  } catch (error) {
    res.status(404).json({ error: error.message })
  }
})



router.post('/restCreator', async (req, res) => {
  try {
    const dataRest = req.body
    const newRest = restCreator(dataRest)
    res.status(201).json(newRest)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

)

router.get('/rating/:id', async (req, res) => {
  try{
    const idRest = req.params.id
    const info = await getRating(parseInt(idRest))
    console.log('info '+info)
    res.status(200).json(info)
  }catch(error){
    res.status(404).json({ error: error.message })
  }
})


router.get("/:id", async (req, res) => {
  try {
    const menu = req.query.menu
    const id = req.params.id
    let info = []
    if(menu){
      info = await getRestDetail(parseInt(id),menu)
    }else{
      info = await getRestDetail(parseInt(id),menu)
    }

    res.status(200).json(info)
  } catch (error) {
    res.status(404).json({ error: error.message })
  }
})

router.put('/edit', async (req, res) => {
  try{
    const { idRest } = req.query
    const edit = req.body
    let info = await updateRest(idRest, edit)
    res.status(200).json(info)
  }catch(error){
    res.status(400).json({ error: error.message })
  }
})




module.exports = router
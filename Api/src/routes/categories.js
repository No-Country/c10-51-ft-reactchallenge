const { Router } = require('express')
const { getCategories ,createCategory} = require('./utils')
const router = Router();

router.get('/', async (req, res) => {
    
    try {
      const result = await getCategories();
      res.status(200).json(result);
    } catch (error) {
      res.status(404).json({ error: error.message })
    }
})

router.post('/createCategory', async (req, res) => {
    
  try {
    const result = await createCategory(req.body);
    res.status(201).json("Category created");
  } catch (error) {
    res.status(404).json({ error: error.message })
  }
})

module.exports = router
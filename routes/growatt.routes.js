const express = require('express')
const Api = require('growatt')

const router = express.Router({ mergeParams: true})

router.post('/', async (req, res) => {
    const user = req.body.login
    const password = req.body.pass
    const options = {}
    async function growattData() {
      const growatt = new Api({})
      const login = await growatt.login(user, password).catch((e) => { console.log(e) })
      const getAllPlantData = await growatt.getAllPlantData(options).catch((e) => { console.log(e) })
      const data = JSON.stringify(getAllPlantData, null, ' ')
      return data
    }
    try {
      res.send(await growattData())
    } catch (error) {
      console.log(error)
    }
  })

module.exports = router

import express from 'express'
const router = express.Router()
import ctrl from '../controllers/ai.js'
import { getProperty } from '../controllers/getSinglePro.js'

router.get('/', ctrl.welcome)
router.post('/talk', ctrl.talk)
router.post('/getProperty', getProperty)

export default router
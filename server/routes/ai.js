import express from 'express'
const router = express.Router()
import ctrl from '../controllers/ai.js'

router.get('/', ctrl.welcome)
router.post('/talk', ctrl.talk)

export default router
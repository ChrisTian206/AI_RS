import express from 'express'
const router = express.Router();
import { getProperty } from '../controllers/getSinglePro.js'

router.post('/getProperty', getProperty)

export default router
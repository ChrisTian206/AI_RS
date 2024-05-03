import express from 'express'
const router = express.Router()
import ctrl from '../controllers/ai.js'
import upload from '../middlewares/fileUploads.js'

router.get('/', ctrl.welcome)
router.post('/talk', ctrl.talk)
router.post('/askQuestions', ctrl.anwserQuestions)
router.post('/strataSummary', upload.single("pdfFile"), ctrl.strataSum)

export default router
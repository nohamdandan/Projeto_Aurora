import express, { Router } from 'express'
import { createAreaController } from '../controllers/areaController.js'


const router = express.Router()

router.post('/areas', createAreaController)


export default Router
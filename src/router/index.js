import express from 'express'
import { getCompanyCost } from '../resolvers/policies'

const router = express.Router()

router.get('/', getCompanyCost)

export default router

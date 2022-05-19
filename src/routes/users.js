import { Router } from "express"
import CT from '../controllers/users.js'

const router = Router()

router.get('/users', CT.GET)
router.post('/users/:id', CT.POST)
router.delete('/users/:id', CT.DELETE)
router.put('/users/:id', CT.PUT)

export default router
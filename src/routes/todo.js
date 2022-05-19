import { Router } from "express"
import CT from '../controllers/todo.js'

const router = Router()

router.get('/todo', CT.GET )
router.post('/todo/:userId', CT.POST )
router.delete('/todo/:todoId', CT.DELETE )

export default router
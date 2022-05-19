import express from 'express'
import database from './utils/db.js'
import userRouter from './routes/users.js'
import todoRouter from './routes/todo.js'



!async function() {
    const app = express()

    const db = await database()

    app.use(express.json())
    app.use((req, res, next) => {
        req.models = db.models
        req.sequelize = db.sequelize
        next()
    })

    //routers
    app.use(userRouter)
    app.use(todoRouter)
    

    app.listen(4000, () => console.log('running...'))
}()
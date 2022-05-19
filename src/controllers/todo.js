const POST = async (req, res) => {
    try {

        const user = await req.models.User.findByPk(req.params.userId)

        if(!user) throw new Error('no such user is fount')

        const newTodo = await new req.models.Todo({
            todo_body: req.body.body,
            user_id: req.params.userId
        })
    
        newTodo.save()
    
        res.json( {
            status: 200,
            message: 'new todo is added!',
            data: newTodo
        })
    } catch (error) {
        res.json({
            status: 404,
            message: error.message
        })
    }
}

const GET = async (req, res) => {
    res.json({
        status: 200,
        message: 'all todos',
        data: await req.models.Todo.findAll()
    })
}

const DELETE = async (req, res) => {
    const deletedTodo = await req.models.Todo.destroy({
        where: {
            todo_id: req.params.todoId
        },
        returning: true
    }) 

    res.json({
        status: 200,
        message: 'todo is deleted!'
    })
}

export default {
    POST,
    GET,
    DELETE
}
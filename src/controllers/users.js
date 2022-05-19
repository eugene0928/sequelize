const POST = async (req, res) => {
    try {

        const newUser = await new req.models.User({
            username: req.body.username,
            user_contact: req.body.contact,
            user_gender: req.body.gender
        })

        await newUser.save()

        res.json({
            status: 200,
            message: 'added',
            data: newUser
        })
    } catch (error) {
        console.log(error)
        res.json({
            status: 500,
            message: error.message
        })
    }
}

const GET = async (req, res) => {
    try {
        res.send( await req.models.User.findAll() )
    } catch (error) {
        res.send(error.message)
    }
}

const DELETE = async (req, res) => {
    try{
        if(!req.body.id) res.json({
            status: 400, 
            message: 'id must be entered!'
        })

        const user = await req.models.User.findByPk(req.body.id)
        console.log(JSON.stringify(user, null, 4))

        if(!user) {
            return res.json({
                status: 404,
                message: 'Such user is not found!'
            })
        }

        await user.destroy()
        await user.save()

        res.json({
            status: 200,
            message: 'user is deleted!',
            data: user
        })

    } catch(error) {
        res.send(error.message)
    }
}

const PUT = async (req, res) => {
    try {
        console.log(req.body)
        if(!req.body ) throw new Error('at least one field or id is required!')

        const user = await req.models.User.update({
            username :  req.body.username,
            user_contact: req.body.contact,
            user_gender: req.body.gender
        }, {
            where: {
                user_id: req.params.id
            }
        })

        console.log(JSON.stringify(user, null, 4))
        console.log(JSON.stringify(user.previous(), null, 4))
        res.json({
            status: 200,
            message: 'updated!',
            newData: user,
            changedFields: changedField

        })
    } catch (error) {   
        res.send(error.message)
    }
}

export default {
    POST,
    GET,
    DELETE,
    PUT
}
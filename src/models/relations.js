import { Model } from 'sequelize'

export default async function({ sequelize }) {
    const User = sequelize.models.User
    const Todo = sequelize.models.Todo

    User.hasMany(Todo, {
        foreignKey: 'user_id'
    })
}
import { Model, DataTypes } from 'sequelize'

export default async function({ sequelize }) {
    class Todo extends Model{}

    Todo.init({
        todo_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        todo_body: {
            type: DataTypes.STRING,
            allowNull: false
        },
        todo_done: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    }, {
        modelName: 'Todo',
        tableName: 'todo',
        updatedAt: 'todo_update_at',
        createdAt: 'todo_created_at',
        underscored: true,
        sequelize
    })
}
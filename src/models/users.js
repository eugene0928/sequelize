import { Model, DataTypes } from 'sequelize'

export default async function({ sequelize }) {
    class User extends Model {}

    User.init({
        user_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                len: {
                    args: [2, 50],
                    msg: 'username length should be between 2 and 50'
                }
            }
        },
        user_contact: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                is: {
                    args: /^998[389][012345789][0-9]{7}$/,
                    msg: 'only uzbek contacts are allowed!'
                }
            }
        },
        user_gender: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isIn: {
                    args: [['male', 'female']], 
                    msg: 'invalid gender type!'
                }
            }
        }
    }, {
        tableName: 'users',
        modelName: 'User',
        updatedAt: 'user_updated_at',
        createdAt: 'user_created_at',
        deletedAt: 'user_deleted_at',
        underscored: true,
        sequelize
    })
}
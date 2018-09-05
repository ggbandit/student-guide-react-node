module.exports = (sequelize, DataTypes) => {
    return sequelize.define('studentguides', {
        id: {
            type: DataTypes.INTEGER(10),
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING(191),
            allowNull: false
        },
        email: {
            type: DataTypes.STRING(191),
            allowNull: false,
            unique: 'compositeIndex',
            validate: {
                isEmail: true
            }
        },
        username: {
            type: DataTypes.STRING(191),
            allowNull: false,
            unique: 'compositeIndex'
        },
        password: {
            type: DataTypes.STRING(191),
            allowNull: false
        },
        role: {
            type: DataTypes.STRING(191),
            defaultValue: 'user'
        },
        createdAt: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        },
        updatedAt: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        }
    });
}
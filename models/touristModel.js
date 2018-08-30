module.exports = (sequelize, DataTypes) => {
    return sequelize.define('tourists', {
        id: {
            field: 'id',
            type: DataTypes.INTEGER(10),
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        name: {
            field: 'name',
            type: DataTypes.STRING(191),
            allowNull: false
        },
        email: {
            field: 'email',
            type: DataTypes.STRING(191),
            allowNull: false,
            unique: 'compositeIndex',
            validate: {
                isEmail: true
            }
        },
        username: {
            field: 'username',
            type: DataTypes.STRING(191),
            allowNull: false,
            unique: 'compositeIndex'
        },
        password: {
            field: 'password',
            type: DataTypes.STRING(191),
            allowNull: false
        },
        role: {
            fiedl: 'role',
            type: DataTypes.STRING(191),
            defaultValue: 'tourist'
        },
        createdAt: {
            field: 'created_at',
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        },
        updatedAt: {
            field: 'updated_at',
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        }
    });
}
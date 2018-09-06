module.exports = (sequelize, DataTypes) => {
    return sequelize.define('touristSelectTrip', {
        id: {
            type: DataTypes.INTEGER(10),
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        status: {
            type: DataTypes.STRING(191),
            defaultValue: 'waiting'
        }
    })
}
module.exports = (sequelize, DataTypes) => {
    return sequelize.define('trips', {
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
        createdBy: {
            field: 'created_by',
            type: DataTypes.STRING(191),
            allowNull: false,
            
        },
        studentGuideId: {
            field: 'studentGuide_id',
            type: DataTypes.INTEGER(10)
        },
        touristId: {
            field: 'tourist_id',
            type: DataTypes.INTEGER(10)
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
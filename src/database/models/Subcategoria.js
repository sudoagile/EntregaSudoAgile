module.exports = (sequelize, dataTypes) =>{
    let alias = "Subcategoria";
    let cols = {

    id: {
    type: dataTypes.BIGINT(11).UNSIGNED,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true
    },
    name: {
    type: dataTypes.VARCHAR(255),
    allowNull: true
    },
    description:{
      type: dataTypes.VARCHAR(191),
      allowNull: false    
    },
    active:{
    type: dataTypes.Boolean,
    allowNull: false    
    },
    image: {
    type: dataTypes.VARCHAR(255),
    allowNull: true
    },
    created_at: {
    type: dataTypes.DATEONLY,
    allowNull: true
    },
    updated_at: {
    type: dataTypes.timestamps,
    allowNull: true
    },
    category_id: {
    type: dataTypes.BIGINT(11).UNSIGNED,
    foreignKey: true,
    allowNull: true,
    },
    order: {
    type: dataTypes.BIGINT(11).UNSIGNED,
    allowNull: true,
    },

  };

    let config = {
        timestamps: true,
        createdAt: "created_at",
        updatedAt: "updated_at",
        deletedAt: false
      }
    const Subcategorias = sequelize.define(alias, cols, config);

    Subcategorias.associate = function(models){
      Subcategorias.hasMany(models.Producto, {
          as: "products",
          foreignKey: "subcategories_id"
      })
    }
     return Subcategorias
  };
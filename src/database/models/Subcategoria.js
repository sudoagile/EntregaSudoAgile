module.exports = (sequelize, dataTypes) =>{
    let alias = "Subcategory";
    let cols = {

    id: {
    type: dataTypes.BIGINT(11).UNSIGNED,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true
    },
    name: {
    type: dataTypes.STRING(255),
    allowNull: true
    },
    description:{
      type: dataTypes.STRING(191),
      allowNull: false    
    },
    active:{
    type: dataTypes.BOOLEAN,
    allowNull: false    
    },
    image: {
    type: dataTypes.STRING(255),
    allowNull: true
    },
    // created_at: {
    //   type: 'TIMESTAMP',
    //   defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
    //   allowNull: true
    // },
    // updated_at: {
    //   type: 'TIMESTAMP',
    //   defaultValue: sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'),
    //   allowNull: true
    // },
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
    const Subcategoria = sequelize.define(alias, cols, config);

    // Subcategoria.associate = function(models){
    //   Subcategoria.hasMany(models.Producto, {
    //       as: "products",
    //       foreignKey: "subcategories_id"
    //   })
    // }
     return Subcategoria
  };
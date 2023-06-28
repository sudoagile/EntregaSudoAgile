const { text } = require("express");

module.exports = (sequelize, dataTypes) =>{
    let alias = "Product";
    let cols = {

    id: {
    type: dataTypes.BIGINT(11).UNSIGNED,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true
    },
    name: {
    type: dataTypes.STRING(191),
    allowNull: false
    },
    description:{
    type: dataTypes.STRING(191),
    allowNull: false    
    },
    long_description:{
    type: dataTypes.STRING(500),
    allowNull: true
    },
    price: {
    type: dataTypes.DECIMAL(23,2),
    allowNull: true
    },
    is_active:{
      type: dataTypes.BOOLEAN,
      allowNull: false    
    },
    created_at:{
      type: 'TIMESTAMP',
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
      allowNull: false
    },
    updated_at: {
      type: 'TIMESTAMP',
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'),
      allowNull: true
    },
    // subcategoria_id: {
    //   type: dataTypes.BIGINT(11).UNSIGNED,
    //   foreignKey: true,
    //   allowNull: false,
    //   autoIncrement: false,
    // },
    order: {
      type: dataTypes.BIGINT(11).UNSIGNED,
      allowNull: true,
    },
    specs: {
      type: dataTypes.STRING(500),
      allowNull: true,
    },
    specs_imagen:{
      type: dataTypes.STRING(255),
      allowNull: true,
    },
    view_price:{
      type: dataTypes.BIGINT(4).UNSIGNED,
      allowNull: false,
    },
    stock: {
    type: dataTypes.BIGINT(11),
    allowNull: true
    },
    descuento: {
      type: dataTypes.DECIMAL(23,2),
      allowNull: true
    },
    discount_img: {
      type: dataTypes.STRING(255),
      allowNull: true
    },
    new_product: {
      type: dataTypes.BIGINT(4),
      allowNull: true
    },
    date_new_start: {
      type: dataTypes.DATEONLY,
      allowNull: true
    },
    date_new_end: {
      type: dataTypes.DATEONLY,
      allowNull: true
    },
    date_discount_start: {
      type: dataTypes.DATEONLY,
      allowNull: true
    },
    date_discount_end: {
      type: dataTypes.DATEONLY,
      allowNull: true
    },
    subcategories_id: dataTypes.BIGINT(10)

  };

    let config = {
        timestamps: true,
        createdAt: "created_at",
        updatedAt: "updated_at",
        deletedAt: false
      }
    const Productos = sequelize.define(alias, cols, config);

    // Productos.associate = function(models){
    //   Productos.belongsTo(models.Subcategoria, {
    //       as: "subcategory",
    //       foreignKey: "subcategories_id"
    //   })
    // }
     return Productos
  };


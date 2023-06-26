const { text } = require("express");

module.exports = (sequelize, dataTypes) =>{
    let alias = "Productos";
    let cols = {

    id: {
    type: dataTypes.BIGINT(11).UNSIGNED,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true
    },
    name: {
    type: dataTypes.VARCHAR(191),
    allowNull: false
    },
    description:{
    type: dataTypes.VARCHAR(191),
    allowNull: false    
    },
    long_description:{
    type: dataTypes.text,
    allowNull: true
    },
    price: {
    type: dataTypes.price(23,2),
    allowNull: true
    },
    active:{
      type: dataTypes.Boolean,
      allowNull: false    
    },
    created_at:{
    type: dataTypes.DATEONLY,
    allowNull: false
    },
    updated_at: {
      type: dataTypes.timestamps,
      allowNull: true
    },
    subcategoria_id: {
      type: dataTypes.BIGINT(11).UNSIGNED,
      foreignKey: true,
      allowNull: false,
      autoIncrement: false,
    },
    order: {
      type: dataTypes.BIGINT(11).UNSIGNED,
      allowNull: true,
    },
    specs: {
      type: dataTypes.long_description,
      allowNull: true,
    },
    specs_imagen:{
      type: dataTypes.VARCHAR(255),
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
      type: dataTypes.price(23,2),
      allowNull: true
    },
    discount_img: {
      type: dataTypes.VARCHAR(255),
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

  };

    let config = {
        timestamps: true,
        createdAt: "created_at",
        updatedAt: "updated_at",
        deletedAt: false
      }
    const Productos = sequelize.define(alias, cols, config);

    Productos.associate = function(models){
      Productos.belongsTo(models.Subcategoria, {
          as: "Subcategoria",
          foreignKey: "subcategories_id"
      })
    }
     return Productos
  };


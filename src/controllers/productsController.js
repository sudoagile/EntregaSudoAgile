const path = require('path');
const db = require('../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const moment = require('moment');



const Productos = db.Product;
const Subcategorias = db.Subcategory;



const productsController = {
    'list': (req, res) => {
        Productos.findAll()
        .then(productos => {
            res.render('productsList.ejs', {productos})
        })
    },

    'detail': (req, res) => {
        Productos.findByPk(req.params.id,
            {
                // include : ['subcategoria']
            })
            .then(producto => {
                res.render('productsDetail.ejs', {producto});
            });
    },


add: function (req, res) {
    let promSubcategorias = Subcategorias.findAll();
    
    Promise
    .all([promSubcategorias])
    .then(([allSubcategorias]) => {
        return res.render(path.resolve(__dirname, '..', 'views',  'productosAdd'), {allSubcategorias})})
    .catch(error => res.send(error))
},

create: function (req,res) {
    Productos.create(
        {
            name: req.body.name,
            description: req.body.description,
            long_description: req.body.long_description,
            price: req.body.price,
            is_active: req.bode.is_active,
            created_at: req.body.created_at,
            update_at: req.body.update_at,
            subcategorias_id: req.body.subcategorias_id,
            order: req.body.order,
            specs: req.body.specs,
            specs_imagen: req.body.specs_imagen,
            view_price: req.body.view_price,
            stock: req.body.stock,
            descuento: req.body.descuento,
            discount_img: req.body.discount_img,
            new_product: req.body.new_product,
            date_new_start: req.body.date_new_start,
            date_new_end: req.body.date_new_end,
            date_discount_start: req.body.date_discount_start,
            date_discount_end: req.body.date_discount_end,
        
        }
    )
    .then(()=> {
        return res.redirect('/productos')})
    .catch(error => res.send(error))
},

edit: function(req,res) {
    let productoId = req.params.id;
    let promProductos = Productos.findByPk(productoId,{include: ['subcategoria']});
    let promSubcategorias = Subcategorias.findAll();

    Promise
    .all([promProductos, promSubcategorias])
    .then(([Producto, allSubcategorias]) => {
        Producto.date_new_start = moment(Producto.date_new_start).format('L');
        return res.render(path.resolve(__dirname, '..', 'views',  'productosEdit'), {Producto,allSubcategorias})})
    .catch(error => res.send(error))
},

update: function (req,res) {
    let productoId = req.params.id;
    Productos.update(
        {
            name: req.body.name,
            description: req.body.description,
            long_description: req.body.long_description,
            price: req.body.price,
            is_active: req.bode.is_active,
            created_at: req.body.created_at,
            update_at: req.body.update_at,
            subcategorias_id: req.body.subcategorias_id,
            order: req.body.order,
            specs: req.body.specs,
            specs_imagen: req.body.specs_imagen,
            view_price: req.body.view_price,
            stock: req.body.stock,
            descuento: req.body.descuento,
            discount_img: req.body.discount_img,
            new_product: req.body.new_product,
            date_new_start: req.body.date_new_start,
            date_new_end: req.body.date_new_end,
            date_discount_start: req.body.date_discount_start,
            date_discount_end: req.body.date_discount_end,

        },
        {
            where: {id: productoId}
        })
    .then(()=> {
        return res.redirect('/productos')})            
    .catch(error => res.send(error))
}, 

delete: function (req, res){
    let productoId = req.params.id;
    Productos.findByPk(productoId)
    .then(Producto => {
        return res.render(path.resolve(__dirname, '..', 'views',  'productosDelete'), {Producto})
        .catch(error => res.send(error))
    })
},

destroy: function (req, res){
    let productoId = req.params.id;
    Productos.destroy({where: {id:productoId}}) //, force: true
    .then(() =>{
        return res.redirect('/productos') })
        .catch(error => res.send(error))
 
}
}

module.exports = productsController;


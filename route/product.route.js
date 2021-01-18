
const express = require('express');
const productRoutes = express.Router();
let Product = require('../model/product.model');
let Category = require('../model/category.model');
let Type = require('../model/type.model');

// create Code product
function getCode(data) {
    let fCategory = data.categoryId
    let fType = data.typeId
    let fName = data.name.substr(0,1);
    let date = new Date()
    let current = Date.parse(date);
    let code = fCategory + fType + fName + current
    return code.toUpperCase()
}
function formatQuery(data) {
    let query = {
        name: {'$regex': data.name},
        categoryId: data.categoryId,
        typeId: data.typeId
    }
    for(let item in query) {
        if(!query[item]) delete query[item]
    }
    return query
}
//Add product
productRoutes.route('/add-product').post(function (req, res) {
    req.body.code = getCode(req.body) //code genderated
    let product = new Product(req.body);
    product.save()
        .then(product => {
            res.status(200).json({'Add': 'Successfully'});
        })
        .catch(err => {
            res.status(400).send("400 Bad request!");
        });
});

//  edit product
productRoutes.route('/update/:id').post(function (req, res) {//from body
    Product.findById(req.params.id, function(err, product) {//item by id
        if (!product)
            res.status(404).send("data is not found");
        else {
            let dataUpdate = {}
            for(let oldItemName in product) {
                for(let newItemName in req.body) {
                    if(oldItemName == newItemName && req.body[newItemName] != product[oldItemName]) {
                        dataUpdate[newItemName] = req.body[newItemName]
                    }
                }
            }
            Product.updateOne(
                {_id: req.params.id},
                {
                    $set: dataUpdate
                }
            ).then(business => {
                res.status(200).json('Update complete');
            })
            .catch(err => {
                res.status(400).send("Unable to update the database");
            });
        }
    });
});
//get pagination, search, filter
productRoutes.route('/').post(function (req, res) {
    let size = req.body.size
    let page = req.body.page
    let limit = size
    let skip = size*(page-1)
    let query = formatQuery(req.body)
    Product.find(query)
    .limit(limit)
    .skip(skip)
    .exec(function (error, data) {
        Product.countDocuments((err,count)=>{
            if(!error) res.json({
                data: data,
                total: count,
                limit: limit,
                skip: skip
            })
            else {
                console.log(error)
            }
        })
      })
});
    
// get all
productRoutes.get('/get-all',function (req, res) {
    Product.find(function(err, products){
        if(err){
            console.log(err);
        }
        else {
            res.json(products);
        }
    })
});

//  Get all category
productRoutes.route('/get-all-category').get((req, res) => {
    Category.find((err, category) => {
        res.json(category);
    });
});
//add category
productRoutes.route('/add-category').post(function (req, res) {
    let category = new Category(req.body);
    category.save()
        .then(category => {
            res.status(200).json({'Add Category': 'Successfully'});
        })
        .catch(err => {
            res.status(400).send("400 Bad request!");
        });
});
//get all type
productRoutes.route('/get-all-type').get((req, res) => {
    Type.find((err, type) => {
        res.json(type);
    });
});
//add type
productRoutes.route('/add-type').post(function (req, res) {
    let type = new Type(req.body);
    type.save()
        .then(type => {
            res.status(200).json({'Add type': 'Successfully'});
        })
        .catch(err => {
            res.status(400).send("400 Bad request!");
        });
});


//  delete product
productRoutes.route('/delete/:id').get((req, res) => {
    Product.findByIdAndRemove({_id: req.params.id}, function(err, product){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = productRoutes;
var express = require('express');
var productRepo = require('../response/Product');

var router = express.Router();

router.get('/searchproduct/:name', (req, res) => {
    if( req.params.name) {
        var name = req.params.name
        productRepo.SearchNameProduct(name).then((rows) => {
            res.json(rows);
        }).catch((err) => {
            console.log(err);
            res.statusCode = 500;
            res.json('error')
        })
    }
})

router.post('/create', (req, res) => {
    var message = {
        message: 'Create success'
    }
    productRepo.AddProduct(req.body).then((rows) => {
        res.send(message);
    }).catch((err) => {
        console.log(err);
    })
});

router.get('/category-from-product/:id', (req, res) => {
    productRepo.GetCategoryFromProduct(req.params.id).then((rows) => {
        res.json(rows)
    }).catch((err) => {
        console.log(err);
        res.statusCode = 500;
        res.end('View error log on console');
    })
})

router.get('/getimage/:id', (req, res) => {
    productRepo.GetImage(req.params.id).then((image) => {
        res.json(image);
    }).catch((err) => {
        console.log(err);
    })
})

module.exports = router;
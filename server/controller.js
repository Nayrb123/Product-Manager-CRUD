var Product = require('./models')
module.exports = {
    home: function(request, response){
        response.json();
    },
    create: function(request, response){
        Product.create(request.body, function(err, product){
            if(err){
                console.log("Error", err)
            }
            else{
                console.log("Created Product in controller", product)
                response.json({data: product});
            }
        })
    },
    allProducts: function(request, response){
        Product.find({}, function(err, products){
            if(err){
                console.log("Error", err)
            }
            else{
                console.log("Got all products in controller", products)
                response.json({data: products});
            }
        })
    },
    oneProduct: function(request, response){
        Product.find({_id: request.params.id}, function(err, product){
            if(err){
                console.log("Error", err)
            }
            else{
                console.log("Got one product", product)
                response.json({data: product});
            }
        })
    },
    delete: function(request, response){
        Product.findByIdAndDelete(request.params.id, function(err, product){
            if(err){
                console.log("Error", err)
            }
            else{
                console.log("Deleting Product", product)
                response.json({data: product})
            }
        })
    },
    edit: function(request, response){
        Product.update({_id: request.params.id}, {$set: {title: request.body.title, 
            price: request.body.price, imgUrl: request.body.imgUrl}}, 
                function(err, product){
                if(err){
                    console.log("Error", err)
                }
                else{
                    console.log("Updating Product", product)
                    response.json({data: product})
                }
        })
    }
}
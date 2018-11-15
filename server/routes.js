var controller = require('./controller')
module.exports = function(app){
    app.get('/', controller.home);
    app.get('/allproducts', controller.allProducts);
    app.get('/product/:id', controller.oneProduct);
    app.delete('/delete/:id', controller.delete);
    app.post('/newproduct', controller.create);
    app.put('/editproduct/:id', controller.edit);
}
// Initialize express router
let router = require('express').Router();

//set default api 
router.get('/',function(req,res){
    res.json({
        status: 'Working api routes',
        message: 'this is my first page'
    });
});

//import controller
var contactController = require('./contactController');

router.route('/contacts')
    .get(contactController.index)
    .post(contactController.new);
//exporting api routes
module.exports = router;
Contact = require('./contactModel');

exports.index = function(req, res){
    Contact.get(function(err,contacts){
        if(err){
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Contacts aagye",
            data: contacts
        });
    });
};

//post api
exports.new = function(req,res) {
    var contact = new Contact();
    contact.name = req.body.name;
    contact.gender = req.body.gender;
    contact.email = req.body.email;
    contact.phone_no = req.body.phone; 

    contact.save(function(err){
        res.json({
            message: 'New Contact created',
            data: contact
        });
    });

};
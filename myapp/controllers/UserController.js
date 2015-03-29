var model = require('../models/UserModel.js');

/**
 * UserController.js
 *
 * @description :: Server-side logic for managing Users.
 */
module.exports = {

    /**
     * UserController.list()
     */
    list: function(req, res) {
        model.find(function(err, Users){
            if(err) {
                return res.json(500, {
                    message: 'Error getting User.'
                });
            }
            return res.json(Users);
        });
    },

    /**
     * UserController.show()
     */
    show: function(req, res) {
        var id = req.params.id;
        model.findOne({_id: id}, function(err, User){
            if(err) {
                return res.json(500, {
                    message: 'Error getting User.'
                });
            }
            if(!User) {
                return res.json(404, {
                    message: 'No such User'
                });
            }
            return res.json(User);
        });
    },

    /**
     * UserController.create()
     */
    create: function(req, res) {
        var User = new model({			first_name : req.body.first_name,			last_name : req.body.last_name,			age : req.body.age
        });

        User.save(function(err, User){
            if(err) {
                return res.json(500, {
                    message: 'Error saving User',
                    error: err
                });
            }
            return res.json({
                message: 'saved',
                _id: User._id
            });
        });
    },

    /**
     * UserController.update()
     */
    update: function(req, res) {
        var id = req.params.id;
        model.findOne({_id: id}, function(err, User){
            if(err) {
                return res.json(500, {
                    message: 'Error saving User',
                    error: err
                });
            }
            if(!User) {
                return res.json(404, {
                    message: 'No such User'
                });
            }

            User.first_name =  req.body.first_name ? req.body.first_name : User.first_name;			User.last_name =  req.body.last_name ? req.body.last_name : User.last_name;			User.age =  req.body.age ? req.body.age : User.age;			
            User.save(function(err, User){
                if(err) {
                    return res.json(500, {
                        message: 'Error getting User.'
                    });
                }
                if(!User) {
                    return res.json(404, {
                        message: 'No such User'
                    });
                }
                return res.json(User);
            });
        });
    },

    /**
     * UserController.remove()
     */
    remove: function(req, res) {
        var id = req.params.id;
        model.findByIdAndRemove(id, function(err, User){
            if(err) {
                return res.json(500, {
                    message: 'Error getting User.'
                });
            }
            return res.json(User);
        });
    }
};
const friendsData = require('../data/friends');

module.exports = function(app) {
    app.get('/api/friends', function(req, res) {
        res.json(friendsData);
    });

    
};


//logic for determining a match goes on this page
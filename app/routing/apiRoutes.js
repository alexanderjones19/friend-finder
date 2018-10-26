const friendsData = require('../data/friends');

module.exports = function(app) {
    app.get('/api/friends', function(req, res) {
        res.json(friendsData);
    });

    app.post('/api/friends', function(req, res) {
        let totalDifferenceArray = [];
        let userScores = req.body.scores.map(function(score, index) {
            return parseInt(score);
        });
        
        for (i=0; i<friendsData.length; i++) {
            let sum = 0;
            let friendsScores = friendsData[i].scores.map(function(score, index) {
                return parseInt(score);
            });

            for (j=0; j<userScores.length; j++) {
                sum += Math.abs(userScores[j] - friendsScores[j]);
            }
            totalDifferenceArray.push(sum);
        }

        let currentHighestIndex = 0;
        let currentHighestValue = Infinity;
        for (i=0; i<totalDifferenceArray.length; i++) {
            if (totalDifferenceArray[i] < currentHighestValue) {
                currentHighestValue = totalDifferenceArray[i];
                currentHighestIndex = i;
            }
        }

        friendsData.push(req.body);
        res.json(friendsData[currentHighestIndex]);
    });
};
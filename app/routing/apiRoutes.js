var surveyData = require("../data/friends");

module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(surveyData);
    });

    app.post("/api/friends", function (req, res) {
        var userAnswers = req.body;
        console.log(userAnswers);

        for (var i = 0; i < userAnswers.scores.length; i++) {
            userAnswers.scores[i] = parseInt(userAnswers.scores[i]);
        }

        var bestFriendIndex = 0;
        var minimumDifference = 32;
        for (var i = 0; i < surveyData.length; i++) {
            var totalDifference = 0;
            for (var a = 0; a < surveyData[i].scores.length; a++) {
                var difference = Math.abs(userAnswers.scores[a] - surveyData[i].scores[a]);
                totalDifference += difference;
            }

            // this is an if statement that will go through answer results.
            if (totalDifference < minimumDifference) {
                bestFriendIndex = i;
                minimumDifference = totalDifference;
            }
        }
        // send back to browser the best friend match
        surveyData.push(userAnswers);
        res.json(surveyData[bestFriendIndex]);
    });

    app.post("/api/clear", function (req, res) {
        userAnswers.length = 0;
        res.json({ ok: true });
    });

};
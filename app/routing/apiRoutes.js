// 4. Your `apiRoutes.js` file should contain two routes:

//    * A GET route with the url `/api/friends`. This will be used to display a JSON of all possible friends.
//    * A POST routes `/api/friends`. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.
var surveyData = require("../data/friends");

module.exports = function(app) {
    app.get("/api/friends", function(res, res){
        res.json(surveyData);
    });

    app.post("/api/friends", function(res, res){
        // This route will also be used to handle the compatibility logic.
        // this is an if statement that will go through answer results.
        if (surveyData.length < 5) {
            surveyData.push(req.body);
            res.json(true);
        }
        else {
            surveyData.push(req.body)
            res.json(false);
        }
    });
};
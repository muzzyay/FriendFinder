module.exports = function (app, friends) {

    // Displays a single character, or returns false
    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });

    // Create New Characters - takes in JSON input
    app.post("/api/friends", function (req, res) {
        // req.body hosts is equal to the JSON post sent from the user
        // This works because of our body parsing middleware
        var newFriend = req.body;
        var theMatch;
        var leastDifference = 40;

        console.log(newFriend);

        friends.forEach(element => {
            var totalDifference = 0;

            for (var i = 0; i < newFriend.scores.length; i++) {

                var num1 = newFriend.scores[i];
                var num2 = element.scores[i];

                var singleDifference = Math.abs(num1 - num2);

                totalDifference = singleDifference + totalDifference;
               
            }
            console.log(totalDifference);

            if (totalDifference < leastDifference) {
                leastDifference = totalDifference;
                theMatch = element;
            }
        });

        friends.push(newFriend);

        res.json(theMatch);
    });

}


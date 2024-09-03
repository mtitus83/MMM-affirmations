var NodeHelper = require("node_helper");
var fs = require("fs");

module.exports = NodeHelper.create({
    start: function() {
        this.affirmations = [];
        this.loadAffirmations();
    },

    loadAffirmations: function() {
        var self = this;
        fs.readFile("modules/MMM-affirmations/affirmations.txt", "utf8", function(err, data) {
            if (err) {
                console.error("MMM-affirmations: NodeHelper error loading affirmations:", err.message);
                self.sendSocketNotification("AFFIRMATION_ERROR", "Error loading affirmations");
            } else {
                try {
                    self.affirmations = data.split("\n").filter(line => line.trim() !== "");
                    self.sendSocketNotification("AFFIRMATIONS_LOADED");
                } catch (error) {
                    console.error("MMM-affirmations: NodeHelper error parsing affirmations:", error);
                    self.sendSocketNotification("AFFIRMATION_ERROR", "Error parsing affirmations");
                }
            }
        });
    },

    getAffirmation: function() {
        if (this.affirmations.length > 0) {
            const randomIndex = Math.floor(Math.random() * this.affirmations.length);
            const affirmation = this.affirmations[randomIndex];
            this.sendSocketNotification("AFFIRMATION_RESULT", affirmation);
        } else {
            console.error("MMM-affirmations: NodeHelper no affirmations available");
            this.sendSocketNotification("AFFIRMATION_ERROR", "No affirmations available");
        }
    },

    socketNotificationReceived: function(notification, payload) {
        if (notification === "GET_AFFIRMATION") {
            this.getAffirmation();
        }
    }
});

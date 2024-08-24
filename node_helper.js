var NodeHelper = require("node_helper");
var https = require("https");

module.exports = NodeHelper.create({
    start: function() {
        console.log("MMM-affirmations: NodeHelper started");
    },

    getAffirmation: function() {
        console.log("MMM-affirmations: NodeHelper getAffirmation called");
        var self = this;

        https.get("https://www.affirmations.dev", (resp) => {
            let data = '';

            resp.on('data', (chunk) => {
                data += chunk;
            });

            resp.on('end', () => {
                try {
                    console.log("MMM-affirmations: NodeHelper received raw data:", data);
                    const affirmation = JSON.parse(data).affirmation;
                    console.log("MMM-affirmations: NodeHelper parsed affirmation:", affirmation);
                    self.sendSocketNotification("AFFIRMATION_RESULT", affirmation);
                } catch (error) {
                    console.error("MMM-affirmations: NodeHelper error parsing affirmation data:", error);
                    self.sendSocketNotification("AFFIRMATION_ERROR", "Error parsing data");
                }
            });

        }).on("error", (err) => {
            console.error("MMM-affirmations: NodeHelper error fetching affirmation:", err.message);
            self.sendSocketNotification("AFFIRMATION_ERROR", err.message);
        });
    },

    socketNotificationReceived: function(notification, payload) {
        console.log("MMM-affirmations: NodeHelper received socket notification:", notification);
        if (notification === "GET_AFFIRMATION") {
            this.getAffirmation();
        }
    }
});

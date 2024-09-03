Module.register("MMM-affirmations", {
    defaults: {
        updateInterval: 60000, // 1 minute
        fadeSpeed: 1500, // 1.5 seconds for fade transition
    },

    start: function() {
        this.affirmation = "Waiting for affirmation...";
        this.loaded = false;
        this.scheduleUpdate();
    },

    getStyles: function() {
        return ["MMM-affirmations.css"];
    },

    getDom: function() {
        var wrapper = document.createElement("div");
        wrapper.className = "affirmations-wrapper";

        var affirmationElement = document.createElement("div");
        affirmationElement.className = "affirmation";
        affirmationElement.innerHTML = this.affirmation;

        wrapper.appendChild(affirmationElement);

        return wrapper;
    },

    scheduleUpdate: function() {
        var self = this;
        setInterval(function() {
            self.updateAffirmation();
        }, this.config.updateInterval);
        
        // Get first affirmation immediately
        self.updateAffirmation();
    },

    updateAffirmation: function() {
        this.sendSocketNotification("GET_AFFIRMATION");
    },

    socketNotificationReceived: function(notification, payload) {
        if (notification === "AFFIRMATION_RESULT") {
            this.affirmation = payload;
            this.updateDom(this.config.fadeSpeed);
        } else if (notification === "AFFIRMATION_ERROR") {
            console.error("MMM-affirmations: Error fetching affirmation: " + payload);
            this.affirmation = "Error fetching affirmation. Will try again soon.";
            this.updateDom(this.config.fadeSpeed);
        }
    }
});

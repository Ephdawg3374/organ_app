window.KeyActions = {
  keyPressed: function (noteName) {
    AppDispatcher.dispatch ({
      eventType: Constants.keyPressed,
      noteName: noteName
    });
  },

  keyDepressed: function (noteName) {
    AppDispatcher.dispatch ({
      eventType: Constants.keyDepressed,
      noteName: noteName
    });
  },

  batchKeyPress: function (notes) {
    AppDispatcher.dispatch ({
      eventType: Constants.batchKeyPress,
      notes: notes
    });

  }
};

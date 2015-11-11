(function (root) {

  var Track = root.Track = function (attributes) {
    this.attributes = attributes;
    this.roll = this.attributes.roll || [];
  };

  Track.prototype.startRecording = function () {
    this.roll = [];
    this.currentTime = Date.now();

  };

  Track.prototype.addNotes = function (notes) {
    var timeElapsed = Date.now() - this.currentTime;
    // var notes = KeyStore.all();
    this.roll.push ({timeSlice: timeElapsed, notes: notes});
  };

  Track.prototype.stopRecording = function () {
    this.addNotes([]);
  };

  Track.prototype.play = function () {
    if (this.intervalId) {
      return;
    }
    var playbackStartTime = Date.now();
    var currentNote = 0;

     this.intervalId = setInterval(function () {
      console.log(currentNote);
      if (currentNote < this.roll.length) {
        if ((Date.now() - playbackStartTime) > this.roll[currentNote].timeSlice) {
          KeyActions.batchKeyPress(this.roll[currentNote].notes);
          currentNote += 1;
        }
      } else {
        clearInterval(this.intervalId);
        delete this.intervalId;
      }
    }.bind(this), 100);
  };
})(this);

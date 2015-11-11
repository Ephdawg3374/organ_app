(function(root) {
  var TrackStore = root.TrackStore = {};

  var _tracks = [];
  var CHANGED = "changed";

  TrackStore.changed = function () {
    this.emit(CHANGED);
  };

  TrackStore.all = function () {
    return _tracks.slice();
  };

  TrackStore.fetch = function () {
    $.ajax({
      url: "/tracks",
      type: "GET",
      dataType: "json",
      success: function (data) {
        _tracks = data;
        TrackStore.changed();
      }
    });
  };

  TrackStore.create = function (trackName, trackRoll) {
    var trackAttributes =
      {
        track_attributes:
        {
          name: trackName,
          roll: trackRoll
        }
      };

    $.ajax({
      url: "/tracks/",
      type: "POST",
      dataType: "json",
      data: {track: trackAttributes},
      success: function (data) {
        _tracks.push(data);
        TrackStore.changed();
      }
    });
  };

  TrackStore.delete = function () {

  };

  TrackStore.update = function () {

  };

})(this);

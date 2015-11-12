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

  TrackStore.create = function (track) {
    var trackAttr = {
      name: track.attributes.name,
      roll: track.roll
    };

    $.ajax({
      url: "/tracks/",
      type: "POST",
      dataType: "json",
      data: {track: trackAttr},
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

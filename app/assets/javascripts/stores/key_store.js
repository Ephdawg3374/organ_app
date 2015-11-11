(function (root){

  var KeyStore = root.KeyStore = $.extend({}, EventEmitter.prototype);

  var _keys = [];
  var CHANGED = "changed";

  KeyStore.addKey = function (noteName) {
    if (_keys.indexOf(noteName) === -1) {
      _keys.push(noteName);
    }
  };

  KeyStore.removeKey = function (noteName) {
    var idx = _keys.indexOf(noteName);

    _keys.splice(idx, 1);
  };

  KeyStore.addChangeHandler = function (callback) {
    this.on(CHANGED, callback);
  };

  KeyStore.removeChangeHandler = function (callback) {
    this.removeListener(CHANGED, callback);
  };

  KeyStore.changed = function () {
    this.emit(CHANGED);
  };

  KeyStore.all = function () {
    return _keys.slice();
  };

  KeyStore.dispatcherId = AppDispatcher.register(function (payload) {
    switch (payload.eventType) {
      case Constants.keyPressed:
        KeyStore.addKey(payload.noteName);
        KeyStore.changed();
        break;
      case Constants.keyDepressed:
        KeyStore.removeKey(payload.noteName);
        KeyStore.changed();
        break;
      case Constants.batchKeyPress:
        _keys = [];
        payload.notes.forEach(function (note) {
          KeyStore.addKey(note);
        });
        KeyStore.changed();
    }
  });

})(this);

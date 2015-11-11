var Key = React.createClass({

  getInitialState: function () {
    return {
      keys: KeyStore.all(),
      pressed: false
    };
  },

  keysChanged: function () {
    this.setState( {keys: KeyStore.all()} );

    if (this.checkNote()) {
      console.log('pressing note');
      this.setState( {pressed: true} );
      this.note.start();
      // debugger;
    } else {
      this.setState( {pressed: false} );
      this.note.stop();
    }
  },

  checkNote: function () {
    var noteIncluded = false;

    this.state.keys.forEach(function (key) {
      if (key === this.props.noteName) {
        noteIncluded = true;
        return;
      }
    }.bind(this));

    return noteIncluded;
  },

  componentDidMount: function () {
    this.note = new Note(TONES[this.props.noteName]);

    KeyStore.addChangeHandler(this.keysChanged);
  },

  render: function () {
    var klass = "";

    if (this.state.pressed) {
      klass = "pressed";
    }

    return (

        <button className={"key " + klass}>{this.props.noteName}</button>

    );
  }
});

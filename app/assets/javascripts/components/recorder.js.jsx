var Recorder = React.createClass({

  getInitialState: function () {
    return (
      {
        isRecording: false,
        track: new Track({
            name: "test"
          }
        )
      }
    );
  },

  keysChanged: function () {
    if (this.state.isRecording){
      this.state.track.addNotes(KeyStore.all());
    }
  },

  startRecording: function () {
    this.setState({isRecording: true});
    this.state.track.startRecording();
  },

  stopRecording: function () {
    this.setState({isRecording: false});
    this.state.track.stopRecording();
  },

  componentDidMount: function () {
    KeyStore.addChangeHandler(this.keysChanged);
  },

  createTrack: function () {
    // debugger;
    TrackStore.create(this.state.track);
  },

  render: function () {
    var track = this.state.track;

    return(
      <div className="recorder">
        <button onClick={this.startRecording}>Start Recording</button>
        <button onClick={this.stopRecording}>Stop Recording</button>
        <button onClick={track.play.bind(track)}>Play Track!</button>
        <button onClick={this.createTrack}>Save Track</button>
      </div>
    );
  }






});

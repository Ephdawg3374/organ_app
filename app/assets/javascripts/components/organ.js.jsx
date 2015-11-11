var Organ = React.createClass({
  render: function () {
    var keys = Object.keys(TONES).map(function (key) {
      return (<Key key={key} noteName={key} />);
    });
    
    return (
      <div className="organ group">
        {keys}
        <Recorder />
      </div>
    );
  }
});

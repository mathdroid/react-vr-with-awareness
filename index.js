const React = require("react");
const { View } = require("react-vr");

const WithAwareness = fn =>
  class extends React.Component {
    constructor() {
      super();
      this.state = {
        beingLookedAt: false
      };
    }

    render() {
      return (
        <View
          onEnter={() => this.setState({ beingLookedAt: true })}
          onExit={() => this.setState({ beingLookedAt: false })}
        >
          {fn(this.state)}
        </View>
      );
    }
  };

module.exports = WithAwareness;

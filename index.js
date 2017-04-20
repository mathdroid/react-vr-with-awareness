const React = require("react");
const { View } = require("react-vr");

const withAwareness = fn =>
  class extends React.Component {
    constructor() {
      super();
      this.state = {
        beingLookedAt: false
      };
    }

    render() {
      return (
        <View>
          {fn({
            ...this.state,
            onEnter: () => this.setState({ beingLookedAt: true }),
            onExit: () => this.setState({ beingLookedAt: false })
          })}
        </View>
      );
    }
  };

module.exports = withAwareness;

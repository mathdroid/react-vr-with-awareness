const React = require("react");

const withAwareness = fn =>
  class extends React.Component {
    constructor() {
      super();
      this.state = {
        beingLookedAt: false
      };
      this.handleEnter = this.handleEnter.bind(this);
      this.handleExit = this.handleExit.bind(this);
    }

    handleEnter() {
      console.log("awww");
      this.setState({ beingLookedAt: true });
    }

    handleExit() {
      console.log("noo");
      this.setState({ beingLookedAt: false });
    }

    render() {
      const { beingLookedAt } = this.state;
      return React.cloneElement(
        fn({
          beingLookedAt
        }),
        {
          onEnter: this.handleEnter,
          onExit: this.handleExit
        }
      );
    }
  };

module.exports = withAwareness;

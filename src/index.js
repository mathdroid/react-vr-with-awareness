const React = require("react");
const PropTypes = require("prop-types");

const withAwareness = fn => <Aware render={fn} />;

class Aware extends React.Component {
  constructor() {
    super();
    this.state = {
      beingLookedAt: false
    };
    this.handleEnter = this.handleEnter.bind(this);
    this.handleExit = this.handleExit.bind(this);
  }

  handleEnter() {
    this.setState({ beingLookedAt: true });
  }

  handleExit() {
    this.setState({ beingLookedAt: false });
  }

  render() {
    const { beingLookedAt } = this.state;
    return React.cloneElement(this.props.render(beingLookedAt), {
      onEnter: this.handleEnter,
      onExit: this.handleExit
    });
  }
}

Aware.propTypes = {
  render: PropTypes.func.isRequired
};

Aware.withAwareness = withAwareness;

module.exports = Aware;

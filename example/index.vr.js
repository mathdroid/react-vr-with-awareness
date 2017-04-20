import React from "react";
import { AppRegistry, Text, View } from "react-vr";
const withAwareness = require("./with-awareness");

const AwareComponent = withAwareness(({ beingLookedAt }) => (
  <Text
    style={{
      backgroundColor: "#777879",
      fontSize: 0.8,
      fontWeight: "400",
      layoutOrigin: [0.5, 0.5],
      paddingLeft: 0.2,
      paddingRight: 0.2,
      textAlign: "center",
      textAlignVertical: "center",
      transform: [{ translate: [0, 0, -3] }]
    }}
  >
    {beingLookedAt ? "Hi there!" : "Look at me!"}
  </Text>
));
export default class example extends React.Component {
  render() {
    return (
      <View>
        <AwareComponent />
      </View>
    );
  }
}

AppRegistry.registerComponent("example", () => example);

# react-vr-with-awareness
👀 HOC for creating aware components in ReactVR

<img src="./with-awareness.gif"/>

## Usage

```js
import React from "react";
import { AppRegistry, Text, View } from "react-vr";

// import
const Aware, {withAwareness} = require("react-vr-with-awareness");

// create a component with HOC
const AwareFromHOC = withAwareness(beingLookedAt => (
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

// or use the supplied component `Aware` with render props
export default class example extends React.Component {
  render() {
    return (
      <View>
        {/* Aware component from HOC */}
        <AwareFromHOC />
        
        {/* Aware component with render props */}
        <Aware render={seen => (
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
                transform: [{ translate: [0, 2, -3] }]
              }}
            >
              {seen ? "seen" : "not seen"}
            </Text>
        )}/>
      </View>
    );
  }
}

AppRegistry.registerComponent("example", () => example);
```

## Docs

`Aware` component takes a `render` props which is a function with 1 `boolean` parameter which indicates if the component is being seen or not. The function should return a react component. This function is similar from the one used in the HOC.

## License

MIT. See [LICENSE](./LICENSE)

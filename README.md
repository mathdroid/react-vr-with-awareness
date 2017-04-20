# with-awareness
👀 HOC for creating aware components

## Usage

```js
import React, { Component } from 'react'
import {
  AppRegistry,
  View,
  Text
} from 'react-vr'
import withAwareness from 'with-awareness'

export default class AwareVR extends Component {
  render() {
    return (
      <View>
        {
          withAwareness(({beingLookedAt}) => (
            <Text>
              {beingLookedAt ? 'hi there' : 'look at me'}
            </Text>
          ))
        }
      </View>
    )
  }
}

AppRegistry.registerComponent("AwareVR", () => AwareVR);

```

## License

MIT. See [LICENSE](./LICENSE)

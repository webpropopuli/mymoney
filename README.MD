1. create-react-native-app
2. npm start
3. start Android Studio and emulator - cuz Expo is slooowwwwww.....
4. setup - refer to vid for local dev. Droid Studio can be a flake
5. `npm run android`

Controlled input:
Each component has it's own state so, constructore --> state
Then onChangeText()

````<TextInput
        value={this.state.inputVal}
        style={styles.input}
        onChangeText={txt => this.setState({ inputVal: txt })}
      />```
````

import React from 'react';
import { Text, View, Image } from 'react-native';
import { Font, LinearGradient } from 'expo';

export default class App extends React.Component {
  state = {
    fontLoaded: false,
  };

  async componentDidMount() {
    await Font.loadAsync({
      proxima: require('./assets/fonts/proxima.ttf'),
    });
    this.setState({ fontLoaded: true });
  }

  render() {
    if (!this.state.fontLoaded) return null;
    return (
      <View
        style={{
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
        }}>
        <View
          style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
          }}>
          <Image
            source={require('./assets/images/background.png')}
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              flex: 1,
            }}
          />
          <LinearGradient
            colors={['transparent', 'rgba(0,0,0,1)']}
            style={{
              position: 'absolute',
              left: 0,
              right: 0,
              top: 0,
              bottom: 0,
            }}
          />
        </View>
        <View
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: '55%',
            width: '100%',
            borderRadius: 4,
            borderWidth: 0,
            borderColor: 'red',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={require('./assets/images/amazingco-logo.png')}
            resizeMode={'contain'}
            style={{
              borderRadius: 4,
              borderWidth: 0,
              borderColor: 'blue',
              height: 80,
            }}
          />
          <Text
            style={{
              fontFamily: 'proxima',
              flex: 1,
              color: 'white',
              borderRadius: 4,
              borderWidth: 0,
              borderColor: 'green',
              fontSize: 20,
              fontWeight: 'bold',
            }}>
            Time better spent
          </Text>
        </View>
      </View>
    );
  }
}

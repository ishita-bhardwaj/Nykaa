import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  SafeAreaView,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';

class Beauty extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <SafeAreaView style={styles.safearea}>
        {/* <Text>hello</Text> */}
        <View style={styles.header}>
          <Image
            style={styles.headericons}
            resizeMode={'contain'}
            source={require('../Images/icons8-notification-32.png')}
          />
          <Image
            style={styles.headericons}
            resizeMode={'contain'}
            source={require('../Images/icons8-heart-32.png')}
          />
          <Image
            style={styles.headericons}
            resizeMode={'contain'}
            source={require('../Images/icons8-shopping-bag-32.png')}
          />
        </View>
        <View style={styles.search}>
          <TouchableOpacity style={styles.button}>
            <Image
              style={styles.searchicon}
              resizeMode={'contain'}
              source={require('/Users/ishitabhardwaj/Desktop/NykaApp/src/Images/icons8-search-48-2.png')}
            />

            <TextInput placeholder="Search on Nykaa"></TextInput>

            {/* <Text style={styles.buttontxt}>Logout</Text> */}
          </TouchableOpacity>
        </View>
        <View style={styles.bannerview}>
          <Image
            style={styles.banner}
            resizeMode={'stretch'}
            source={require('/Users/ishitabhardwaj/Desktop/NykaApp/src/Images/own-nykaa-clone.png.webp')}
          />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  safearea: {
    //margin: 10,
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 220,
    marginHorizontal: 15,
  },
  headericons: {
    height: 25,
    width: 25,
  },
  button: {
    height: 52,
    width: 364,
    justifyContent: 'space-between',
    paddingRight: 215,
    alignItems: 'center',
    backgroundColor: 'rgb(235,235,235)',
    borderRadius: 10,
    margin: 15,
    padding: 8,
    flexDirection: 'row',
  },
  buttontxt: {color: 'white', fontWeight: 'bold', fontSize: 20},

  searchicon: {
    height: 25,
    width: 25,
  },
  banner: {
    width: '100%',
    height: 200,
  },
  bannerview: {
    justifyContent: 'center',
    alignItems: 'center',
    //padding: 5,
    //backgroundColor: 'red',
  },
});

export default Beauty;

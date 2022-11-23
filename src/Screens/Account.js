import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  SafeAreaView,
  View,
  Image,
  FlatList,
  TouchableOpacity,
  Alert,
  ImageBackground,
} from 'react-native';
import {connect} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ScrollView} from 'react-native-gesture-handler';
import {AccountData} from '../Data/AccountData.json';
import Orders from './Orders';
import {ACCOUNT_DATA} from '../Redux/Action/action';
import {AccData} from '../Redux/Action/action';
import nykaReducer from '../Redux/Reducer/reducer';

class Wallet extends React.Component {
  render() {
    return alert('Inside Wallet');
  }
}

class Account extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.AccData();
  }
  onPress = (data, item) => {
    // alert('Thanks');
    try {
      if (item.data === 'Orders' || item.data === 'Wallet') {
        this.props.navigation.navigate(data);
      } else {
        Alert.alert('inside', item.data);
      }
    } catch (error) {}
  };
  render() {
    const Item = () => (
      <>
        <View style={styles.belowheader}>
          <View>
            <Text style={styles.txtheader}>Hey</Text>
            <Text style={styles.txtheader}>Ishita</Text>
          </View>
          <View style={styles.iconview}>
            <Image
              style={styles.icon}
              resizeMode={'contain'}
              source={require('../Images/icons8-customer-64.png')}
            />
          </View>
        </View>
        <View style={styles.loggedin}>
          <Text style={styles.loggedintxt}>
            Logged in via ishita.bhardwaj@tothenew.com
          </Text>
          <View style={styles.line}></View>
        </View>
      </>
    );

    const footItem = () => (
      <>
        <View style={styles.footer}>
          <Text style={styles.explore}>EXPLORE OTHER NYKAA APPS</Text>
          <View style={styles.flex}>
            <View style={styles.fashion}>
              <Text style={styles.nykaafashion}>Nykaa Fashion</Text>
              <Text style={styles.exploretxt}>
                Explore lifestyle product collections and curations
              </Text>
            </View>
            <View style={styles.photo}>
              <Image
                style={styles.photoo}
                resizeMode={'stretch'}
                source={require('/Users/ishitabhardwaj/Desktop/NykaApp/src/Images/unnamed.png')}
              />
            </View>
          </View>
          <View style={styles.linecate}></View>
          <View style={styles.flex}>
            <View style={styles.fashion}>
              <Text style={styles.nykaaman}>Nykaa Man</Text>
              <Text style={styles.exploretxte}>
                The gentleman's grooming guide
              </Text>
            </View>
            <View style={styles.photo}>
              <Image
                style={styles.photoo}
                resizeMode={'stretch'}
                source={require('/Users/ishitabhardwaj/Desktop/NykaApp/src/Images/Nykaa-Man-logo.png')}
              />
            </View>
          </View>
        </View>
        <View style={styles.footernxt}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttontxt}>Logout</Text>
          </TouchableOpacity>
        </View>
      </>
    );
    //console.log(this.props.nykaReducer.data);
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
        <View>
          <FlatList
            style={styles.pad}
            ListHeaderComponent={Item}
            ListFooterComponent={footItem}
            showsVerticalScrollIndicator={false}
            data={this.props.nykaReducer.data.AccountData}
            keyExtractor={(item, index) => `${item.id + index}`}
            renderItem={({item, index}) => {
              const {data} = item;
              return (
                <View key={index}>
                  <TouchableOpacity onPress={() => this.onPress(data, item)}>
                    <View style={styles.category}>
                      <View>
                        <View style={styles.flex}>
                          <Text style={styles.datatxt}>{item.data}</Text>
                          {data === 'Nykaa Prive' && (
                            <TouchableOpacity>
                              <ImageBackground
                                style={styles.newview}
                                resizeMode={'stretch'}
                                source={require('/Users/ishitabhardwaj/Desktop/NykaApp/src/Images/Pink-and-orange-gradient-1024x576.webp')}>
                                <Text style={styles.newtxt}>New</Text>
                              </ImageBackground>
                            </TouchableOpacity>
                          )}
                        </View>
                        <Text style={styles.desctxt}>{item.desc}</Text>
                      </View>
                      <View style={styles.categoryiconview}>
                        <Image
                          style={styles.categoryicon}
                          resizeMode={'contain'}
                          source={{uri: item.imagepath}}
                        />
                      </View>
                    </View>
                    <View style={styles.linecat}></View>
                  </TouchableOpacity>
                </View>
              );
            }}
          />
        </View>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => {
  return {
    nykaReducer: state.nykaReducer,
  };
};

const mapDispatchToProps = {
  AccData,
};

const styles = StyleSheet.create({
  safearea: {
    //marginHorizontal: 10,
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    marginHorizontal: 15,
    justifyContent: 'space-between',
    paddingLeft: 220,
    // margin: 2,
  },
  headericons: {
    height: 25,
    width: 25,
  },
  belowheader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 2,
    marginHorizontal: 10,
  },
  txtheader: {
    fontWeight: 'bold',
    fontSize: 40,
    marginHorizontal: 5,
  },
  iconview: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    height: 75,
    width: 75,
  },
  loggedin: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 1,
    marginHorizontal: 12,
    marginVertical: 8,
  },
  line: {
    borderBottomColor: 'lightgrey',
    borderBottomWidth: 1,
    width: 70,
    marginBottom: 8,
  },
  loggedintxt: {
    color: 'grey',
  },
  categoryiconview: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  category: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 5,
    paddingVertical: 8,
    marginHorizontal: 15,
  },
  categoryicon: {
    height: 26,
    width: 26,
  },
  datatxt: {
    padding: 5,
    fontSize: 18,
  },
  desctxt: {
    color: 'grey',
    padding: 5,
  },
  linecat: {
    paddingTop: 5,
    borderBottomColor: 'lightgrey',
    borderBottomWidth: 1,
    marginHorizontal: 15,
  },
  linecate: {
    paddingTop: 5,
    borderBottomColor: 'darkgrey',
    borderBottomWidth: 1,
    margin: 15,
  },
  flex: {
    flexDirection: 'row',
  },
  newtxt: {
    fontSize: 12,
    //backgroundColor: 'pink',
    color: 'white',
    fontWeight: 'bold',
  },
  newview: {
    height: 18,
    width: 45,
    //borderWidth: 2,
    //borderColor: 'pink',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 5,
    marginTop: 5,
    overflow: 'hidden',
  },
  footer: {
    // backgroundColor: 'rgb(203,213,232)',
    //backgroundColor: 'rgb(214,209,235)',
    backgroundColor: 'rgb(230,230,250)',
  },
  explore: {
    color: 'rgb(51,51,51)',
    marginTop: 10,
    marginHorizontal: 15,
  },
  exploretxt: {
    color: 'grey',
    marginTop: 10,
    marginHorizontal: 15,
  },

  fashion: {
    height: 80,
    width: 300,
  },
  nykaafashion: {
    fontSize: 16,
    marginTop: 15,
    marginHorizontal: 15,
  },
  nykaaman: {
    fontSize: 16,
    marginTop: 10,
    marginHorizontal: 15,
  },
  photo: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  photoo: {
    height: 45,
    width: 45,
    //paddingRight: 10,
    borderRadius: 10,
  },
  exploretxte: {
    color: 'grey',
    marginTop: 10,
    marginBottom: 16,
    marginHorizontal: 15,
  },
  footernxt: {
    backgroundColor: 'rgb(24,34,54)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    height: 52,
    width: 364,
    borderColor: 'darkgrey',
    borderWidth: 1,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 15,
  },
  pad: {
    marginBottom: 30,
  },

  buttontxt: {color: 'white', fontWeight: 'bold', fontSize: 20},
});

export default connect(mapStateToProps, mapDispatchToProps)(Account);

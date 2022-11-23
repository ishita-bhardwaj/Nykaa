import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  SafeAreaView,
  View,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

import {connect} from 'react-redux';
import {OrderList} from '../Redux/Action/action';

class Orders extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.orderValue();
  }
  onPress = () => {
    this.props.navigation.goBack();
  };
  render() {
    const {data} = this.props;
    console.log('>>>>>>>>>', data.orderdata.OrderList);
    //console.log(this.props.nykaReducer.orderdata);
    const footItem = () => (
      <>
        <View style={styles.footer}>
          <TouchableOpacity style={styles.flexx}>
            <Text style={styles.rate}>Rate your Experience</Text>
            <Image
              style={styles.icon}
              resizeMode={'contain'}
              source={require('/Users/ishitabhardwaj/Desktop/NykaApp/src/Images/icons8-forward-30-2.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.flexxx}>
            <Text style={styles.rate}>Load more</Text>
          </TouchableOpacity>
        </View>
      </>
    );
    return (
      <SafeAreaView style={{backgroundColor: 'rgb(235,235,235)'}}>
        {/* <Text>hello</Text> */}
        <View style={styles.header}>
          <TouchableOpacity onPress={this.onPress}>
            <Image
              style={styles.back}
              resizeMode={'contain'}
              source={require('/Users/ishitabhardwaj/Desktop/NykaApp/src/Images/507257.png')}
            />
          </TouchableOpacity>
          <Text style={styles.orders}>Orders</Text>
        </View>
        <View style={styles.line}></View>
        <ScrollView showsVerticalScrollIndicator={false} style={styles.pad}>
          <View style={styles.belowheader}>
            <View style={styles.belowheaderr}>
              <Image
                style={styles.gift}
                resizeMode={'contain'}
                source={require('/Users/ishitabhardwaj/Desktop/NykaApp/src/Images/icons8-gift-card-50.png')}
              />
              <Text style={styles.gifttxt}>Your gift card purchases</Text>
            </View>
            <View style={styles.belowheaderr}>
              <Image
                style={styles.forward}
                resizeMode={'contain'}
                source={require('/Users/ishitabhardwaj/Desktop/NykaApp/src/Images/icons8-forward-30.png')}
              />
            </View>
          </View>
          <View style={styles.linee}></View>
          <View>
            <FlatList
              ListFooterComponent={footItem}
              showsVerticalScrollIndicator={false}
              data={data.orderdata.OrderList}
              keyExtractor={(item, index) => `${item.id + index}`}
              renderItem={({item, index}) => {
                return (
                  <View key={index}>
                    <View style={styles.flex}>
                      <View>
                        <Text style={styles.order}>ORDER NUMBER</Text>
                        <Text>{item.OrdNum}</Text>
                      </View>
                      <View>
                        <TouchableOpacity style={styles.details}>
                          <Text style={styles.orddetails}>Order Details</Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                    <View style={styles.item}>
                      <Text style={styles.items}>
                        {item.ItemDelivered} Item(s) Delivered
                      </Text>
                      <Text style={styles.grey}>
                        Package delivered on{' '}
                        <Text style={styles.bold}>{item.Date}</Text>
                      </Text>
                    </View>
                    <View style={styles.prod}>
                      <FlatList
                        horizontal
                        pagingEnabled={true}
                        showsHorizontalScrollIndicator={false}
                        data={item?.imageUrl}
                        keyExtractor={(inneritem, index) =>
                          `${inneritem.id + index}`
                        }
                        renderItem={inneritem => {
                          console.log('ishita', inneritem);
                          return (
                            <View>
                              <View style={styles.productsview}>
                                {inneritem?.item?.url && (
                                  <Image
                                    style={styles.products}
                                    resizeMode={'contain'}
                                    source={{uri: inneritem?.item?.url}}
                                    // source={inneritem?.item?.url}
                                  />
                                )}
                              </View>
                            </View>
                          );
                        }}
                      />
                    </View>
                    {item.id === 1 && (
                      <View style={styles.bannerview}>
                        <Image
                          style={styles.banner}
                          resizeMode={'contain'}
                          source={require('/Users/ishitabhardwaj/Desktop/NykaApp/src/Images/maxresdefault.jpg')}
                        />
                      </View>
                    )}
                    <View style={styles.linee}></View>
                    {/* <Text>{item.Date}</Text> */}
                  </View>
                );
              }}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state.orderReducer,
  };
};

const mapDispatchToProps = {
  orderValue: OrderList,
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'rgb(235,235,235)',
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: 250,
  },
  orders: {
    color: 'rgb(61,61,61)',
    fontWeight: 'bold',
    fontSize: 25,
  },
  back: {
    height: 20,
    width: 20,
  },
  line: {
    borderBottomColor: 'lightgrey',
    borderBottomWidth: 1,
    //width: 70,
  },
  belowheader: {
    flexDirection: 'row',
    padding: 5,
    justifyContent: 'space-between',
  },
  belowheaderr: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  gift: {
    width: 85,
    height: 45,
  },
  gifttxt: {
    fontSize: 18,
  },
  forward: {
    width: 25,
    height: 25,
    marginRight: 15,
  },
  linee: {
    //borderBottomColor: 'lightgrey',
    borderBottomColor: 'rgb(229,229,229)',
    borderBottomWidth: 10,
  },
  flex: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
  },
  flexx: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    width: 380,
    height: 50,
    borderWidth: 1,
    borderColor: 'darkgrey',
    borderRadius: 10,
    marginVertical: 15,
  },
  flexxx: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    width: 375,
    height: 48,
    borderWidth: 1,
    borderColor: 'darkgrey',
    borderRadius: 10,
  },
  details: {
    width: 110,
    height: 32,
    borderWidth: 1,
    borderColor: 'darkgrey',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  item: {
    paddingHorizontal: 15,
    paddingBottom: 10,
  },
  orddetails: {
    fontWeight: 'bold',
    color: 'rgb(220,51,139)',
  },
  bold: {
    fontWeight: 'bold',
    color: 'black',
  },
  items: {
    fontWeight: 'bold',
    fontSize: 16,
    paddingBottom: 6,
  },
  order: {
    fontSize: 11,
    color: 'rgb(61,61,61)',
    fontWeight: 'bold',
    padding: 1,
  },
  grey: {
    color: 'rgb(61,61,61)',
  },
  banner: {
    width: '100%',
    height: 200,
  },
  bannerview: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 4,
  },
  footer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  rate: {
    fontWeight: 'bold',
    color: 'rgb(220,51,139)',
    fontSize: 16,
  },
  icon: {
    width: 25,
    height: 25,
  },
  productsview: {
    width: 65,
    height: 65,
    borderWidth: 1,
    borderColor: 'lightgrey',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    //backgroundColor: 'red',
  },
  products: {
    width: 45,
    height: 45,
  },
  prod: {
    padding: 15,
  },
  pad: {
    marginBottom: 80,
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Orders);

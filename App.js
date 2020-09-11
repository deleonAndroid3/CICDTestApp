import React, {Component} from 'react';

import {
  StyleSheet,
  FlatList,
  Text,
  View,
  Alert,
  TouchableOpacity,
  TextInput,
  ToastAndroid
} from 'react-native';

export default class Myproject extends Component {
  constructor(props) {
    super(props);

    (this.array = []),
      (this.state = {
        arrayHolder: [],
        textInput_Holder: '',
      });
  }

  componentDidMount() {
    this.setState({arrayHolder: [...this.array]});
  }

  joinData = () => {
    if(this.state.textInput_Holder == ""){
      // Alert.alert("Empty");
      ToastAndroid.show("Empty", ToastAndroid.SHORT);
    }else{
      if(!this.hasNumber(this.state.textInput_Holder)){
        this.array.push({title: this.state.textInput_Holder});
        this.setState({arrayHolder: [...this.array]});
      }else{
        // Alert.alert("Can't Add Numbers");
          ToastAndroid.show("Can't Add Numbers", ToastAndroid.SHORT);
      }
    }
  };

  hasNumber(name){
    return /\d/.test(name);
  }

  FlatListItemSeparator = () => {
    return <View style={styles.separator} />;
  };

  GetItem(item) {
    Alert.alert(item);
  }

  render() {
    return (
      <View style={styles.MainContainer}>
        <TextInput
          placeholder="Enter Full Name Here"
          onChangeText={(data) => this.setState({textInput_Holder: data})}
          style={styles.textInputStyle}
          underlineColorAndroid="transparent"
          accessibilityLabel="nameInput"
        />

        <TouchableOpacity
          onPress={this.joinData}
          activeOpacity={0.7}
          style={styles.button}
          accessibilityLabel="saveName">
          <Text style={styles.buttonText}> Add Values To FlatList </Text>
        </TouchableOpacity>

        <FlatList
          data={this.state.arrayHolder}
          width="100%"
          extraData={this.state.arrayHolder}
          keyExtractor={(index) => index.toString()}
          ItemSeparatorComponent={this.FlatListItemSeparator}
          renderItem={({item}) => (
            <Text
              style={styles.item}
              onPress={this.GetItem.bind(this, item.title)}>
              {' '}
              {item.title}{' '}
            </Text>
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    margin: 2,
  },

  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },

  textInputStyle: {
    textAlign: 'center',
    height: 40,
    width: '90%',
    borderWidth: 1,
    borderColor: '#4CAF50',
    borderRadius: 7,
    marginTop: 12,
  },

  button: {
    width: '90%',
    height: 40,
    padding: 10,
    backgroundColor: '#4CAF50',
    borderRadius: 8,
    marginTop: 10,
  },

  buttonText: {
    color: '#fff',
    textAlign: 'center',
  },

  separator: {
    height: 1,
    width: '100%',
    backgroundColor: '#607D8B',
  },
});

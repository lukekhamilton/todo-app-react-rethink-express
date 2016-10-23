/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';

export default class Todo extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.rowContainer}>
          <Text style={styles.textStyle}>
            {this.props.todo.title}:
          </Text>
          <Text style={styles.bodyStyle} ellipsizeMode='tail' numberOfLines={1}>
            { this.props.todo.text}
          </Text>
        </View>
        <TouchableOpacity>
          <Icon name="close" size={30} color="black" />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 3,
    marginTop:3,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  textStyle: {
    fontSize: 18,
    fontWeight: '200',
  },
  bodyStyle: {
    fontSize: 14,
    fontWeight: '200',
    color:'rgba(0,0,0,0.4)',
    marginLeft: 10,
    lineHeight:24,
    flex:1
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    flex: 1
  }
});

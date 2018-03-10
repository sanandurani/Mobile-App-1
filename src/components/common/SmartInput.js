import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import FontAwesome, { Icons } from 'react-native-fontawesome';
import PropTypes from 'prop-types';

class SmartInput extends Component {
  renderRightButton() {
    const { rightIcon, onRightPress } = this.props;
    let renderButton = null;

    if (rightIcon) {
      renderButton = (
        <View style={styles.rightIconView}>
          <Text style={styles.rightIconText}>
            <FontAwesome>{Icons[rightIcon]}</FontAwesome>
          </Text>
        </View>
      );
    }

    if (rightIcon && onRightPress) {
      renderButton = (
        <TouchableOpacity onPress={() => onRightPress()}>{ renderButton }</TouchableOpacity>
      );
    }

    return renderButton
  }

  focus() {
    this.refs.input.focus();
  }

  render() {
    return (
      <View style={[styles.container]}>
        <TextInput
          ref="input"
          style={styles.input}
          {...this.props} />

        { this.renderRightButton() }
      </View>
    );
  }
}

SmartInput.propTypes = {
  onRightPress: PropTypes.func,
  rightIcon: PropTypes.string
};

export default SmartInput;

const styles = StyleSheet.create({
  rightIconView: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 34,
    width: 34,
    borderRadius: 17,
    marginTop: 7,
    marginRight: 7,
    marginBottom: 7,
    backgroundColor: '#e4a193',
  },
  rightIconText: {
    color: '#DA7B61',
    fontSize: 11,
  },
  container:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderColor: '#e4a193',
    borderWidth: 1,
    borderRadius: 25,
    height: 50
  },
  input: {
    flex: 1,
    marginLeft: 20,
    color: '#fff',
    fontSize: 17,
    fontFamily: 'FuturaStd-Light'
  }
});

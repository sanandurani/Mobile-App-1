import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Image from 'react-native-remote-svg';
import FontAwesome, { Icons } from 'react-native-fontawesome';
import PropTypes from 'prop-types';

import GoBack from '../common/GoBack';

class Welcome extends Component {
  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
        <GoBack />

        <View style={styles.main}>
          <Image
            source={require('../../assets/splash.png')}
            style={styles.splashImage} />
          <Text style={styles.titleText}>Welcome to LockChain</Text>

          <TouchableOpacity onPress={() => navigate('Login')}>
            <View style={styles.loginButton}>
              <Text style={styles.buttonText}>Log In</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={styles.facebookButton}>
              <View style={styles.buttonIconView}><Text style={styles.buttonIconText}><FontAwesome>{Icons.facebookF}</FontAwesome></Text></View>
              <Text style={styles.buttonText}>
                Continue with Facebook
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigate('CreateAccount')}>
            <Text style={styles.createAccountText}>Create an Account</Text>
          </TouchableOpacity>

          <Text style={styles.finePrintText}>By tapping Log In, Continue or Create Account, I agree to LockChain's Terms of Service, Payments Terms of Service and Privacy Policy.</Text>
        </View>

        <View style={styles.lowOpacity}>
          <Image
            source={require('../../assets/get-started-white-outline.svg')}
            style={styles.getStartedImage} />
        </View>
      </View>
    );
  }
}

Welcome.propTypes = {
  // start react-navigation props
  navigation: PropTypes.object.isRequired
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#DA7B61',
  },
  main: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  splashImage: {
    width: 100,
    height: 78,
    marginTop: 4
  },
  titleText: {
    color: '#fff',
    fontSize: 25,
    marginTop: -1,
    fontFamily: 'FuturaStd-Light'
  },
  loginButton: {
    height: 50,
    width: 280,
    borderColor: '#fff',
    borderWidth: 1.5,
    borderRadius: 25,
    marginTop: 62,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  facebookButton: {
    height: 50,
    width: 280,
    backgroundColor: '#273842',
    borderRadius: 25,
    marginTop: 16,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonIconView: {
    marginRight: 12,
    marginBottom: 3
  },
  buttonIconText: {
    color: '#fff',
    fontSize: 17,
    fontFamily: 'FuturaStd-Light'
  },
  buttonText: {
    color: '#fff',
    fontSize: 17,
    fontFamily: 'FuturaStd-Light'
  },
  createAccountText: {
    marginTop: 30,
    color: '#fff',
    fontSize: 17,
    fontFamily: 'FuturaStd-Light'
  },
  finePrintText: {
    marginTop: 60,
    marginLeft: 10,
    marginRight: 10,
    color: '#fff',
    fontSize: 13,
    fontFamily: 'FuturaStd-Light'
  },
  lowOpacity: {
    opacity: 0.3
  },
  getStartedImage: {
    width: 400,
    height: 80
  }
});

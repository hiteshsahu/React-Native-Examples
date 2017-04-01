/**
 * ReactCalculator.js
 *
 * Created by Hitesh Sahu on 2016-08-07.
 */
'use strict';
import React, { Component } from 'react';
import Swiper from './libs/Swiper';
import ReactNativeBasics from './ReactNativeBasics';
import {
    View,
    Text,
    AppRegistry,
} from 'react-native';

export default class ReactNativeSample extends Component {
    render() {
        return (

          <Swiper showsButtons>
            <View >
              //React Native Basic Sample
              < ReactNativeBasics style/>
            </View>
            <View >
              <Text >Beautiful</Text>
            </View>
            <View >
              <Text >And simple</Text>
            </View>
          </Swiper>

            );
      }
}

AppRegistry.registerComponent('ReactNativeSample', () => ReactNativeSample);

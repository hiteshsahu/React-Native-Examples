/**
 * ReactCalculator.js
 *
 * Created by Hitesh Sahu on 2016-08-07.
 */
'use strict';
import React, { Component } from 'react';
import Swiper from './libs/Swiper';
import ReactNativeBasics from './ReactNativeBasics';
import LoadingIndicator from './uicomponent/LoadingIndicator';
import Buttons from './uicomponent/Buttons';
import Switches from './uicomponent/Switches';
import TextView from './uicomponent/TextView';

Switches



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
            {
              //React Native Basic Sample
            }
              <ReactNativeBasics />
            </View>

            {
              //React Native UI Components
            }
            <View >
              <LoadingIndicator />
            </View>
            <View >
              <Buttons />
            </View>
            <View >
              <Switches />
            </View>
            <View >
              <TextView />
            </View>
          </Swiper>

            );
      }
}

AppRegistry.registerComponent('ReactNativeSample', () => ReactNativeSample);

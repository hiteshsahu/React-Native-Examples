/**
 * ReactCalculator.js
 *
 * Created by Hitesh Sahu on 2016-08-07.
 */
'use strict';

import React, { Component } from 'react';
import Bananas from './Bananas';
import LotsOfGreetings from './LotsOfGreetings';
import {
    View,
    Text,
    AppRegistry
} from 'react-native';

export default class ReactNativeSample extends Component {
    render() {
        return (
            <View style={{alignItems: 'center'} >
                <Text >  1) Props Example </Text>
                <Text >  1.1)Bananas Sample </Text>
                <Bananas/>
                <Text >  1.2)LotsOfGreetings Sample </Text>
                <LotsOfGreetings/>
            </View>
        );
    }



}

AppRegistry.registerComponent('ReactNativeSample', () => ReactNativeSample);

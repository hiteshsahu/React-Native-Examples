/**
 * ReactCalculator.js
 *
 * Created by Hitesh Sahu on 2016-08-07.
 */
'use strict';

import React, { Component } from 'react';
import Style from './Style';
import Bananas from './Bananas';
import LotsOfGreetings from './LotsOfGreetings';
import BlinkApp from './BlinkApp';
import LotsOfStyles from './LotsOfStyles';


import {
    View,
    Text,
    AppRegistry,
    ScrollView
} from 'react-native';

export default class ReactNativeSample extends Component {
    render() {
        return (
            <View  style={{alignItems: 'center'}}>

              <ScrollView >

                <Text  style={Style.headerText} > The Ultimate React Native Sample {"\n"}</Text>

                <Text  style={Style.titleText} > 1) View Props Example </Text>

                {
                  //Bananas Sample
                }
                <Text  style={Style.displayText}>  1.1)  Bananas Sample </Text>
                <Bananas/>

                {
                  //Greetings Sample
                }
                <Text  style={Style.displayText}>  1.2) LotsOfGreetings Sample </Text>
                <LotsOfGreetings/>

               {
              //Blinking Sample
                }
              <Text  style={Style.titleText}>  2) View States </Text>
              <Text  style={Style.displayText}>  2.1) LotsOfGreetings Sample </Text>
               <BlinkApp/>
               {
               //Style Sample
               }

              <Text  style={Style.titleText}>  3) View Style </Text>
              <Text  style={Style.displayText}>  3.1) LotsOfStyles Sample </Text>
               <LotsOfStyles/>

               </ScrollView>
            </View>
        );
    }



}

AppRegistry.registerComponent('ReactNativeSample', () => ReactNativeSample);

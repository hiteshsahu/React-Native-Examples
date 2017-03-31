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
import FixedDimensionsBasics from './FixedDimensionsBasics';
import FlexDimensionsBasics from './FlexDimensionsBasics';
import FlexDirectionBasics from './FlexDirectionBasics';
import JustifyContentBasics from './JustifyContentBasics';
import AlignItemsBasics from './AlignItemsBasics';
import PizzaTranslator from './PizzaTranslator';
import ListViewBasics from './ListViewBasics';





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


               {
                 //Using a ScrollView Example
               }
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
              <Text  style={Style.displayText}>2.1) LotsOfGreetings Sample </Text>
               <BlinkApp/>
               {
               //Style Sample
               /*With React Native, you don't use a special language or syntax for defining styles.  You just style your application using JavaScript.
                All of the core components accept a prop named style.   The style names and values usually match how CSS works on the web,
                except names are written using camel casing, e.g backgroundColor rather than background-color.

               The style prop can be a plain old JavaScript object.
                That's the simplest and what we usually use for example code.You can also pass an array of styles -
                 the last style in the array has precedence,  so you can use this to inherit styles.

              As a component grows in complexity, it is often cleaner to use StyleSheet.
               create to define several styles in one place. Here's an example:*/
               }
              <Text  style={Style.titleText}>  3) View Style </Text>
              <Text  style={Style.displayText}>3.1) LotsOfStyles Sample </Text>
               <LotsOfStyles/>

              {
                //View Resizing Sample
              }
             <Text  style={Style.titleText}>  4) View Dimension </Text>
             <Text  style={Style.displayText}>4.1) Fixed Dimension Sample </Text>
              <FixedDimensionsBasics/>
             <Text  style={Style.displayText}>4.2) Flex Dimension Sample </Text>
             <FlexDimensionsBasics />

             {
              // Flex Layout Tutorial
             }
             <Text  style={Style.titleText}>  5) Layout with Flexbox </Text>

              {
              //Flex Direction
              }
             <Text  style={Style.displayText}>5.1) Flex Direction Sample </Text>
              <FlexDirectionBasics/>

              {
              //Justify Content
               }
              <Text  style={Style.displayText}>5.2) justify Content Sample </Text>
              <JustifyContentBasics/>

               {
                 //Align Content
               }
              <Text  style={Style.displayText}>5.3) Align Items Basics Sample </Text>
              <AlignItemsBasics/>

              {
                //Text Input
              }
             <Text  style={Style.titleText}>6) Input Field Example </Text>
             <PizzaTranslator/>

             {
               //Using a ListView
             }
            <Text  style={Style.titleText}>7) Using a ListView </Text>
            <ListViewBasics/>

            </ScrollView>
            </View>
            );
      }
}

AppRegistry.registerComponent('ReactNativeSample', () => ReactNativeSample);

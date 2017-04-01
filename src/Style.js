/**
 * Style.js
 *
 * Created by kylewbanks on 2016-08-07.
 */
'use strict';

import { StyleSheet } from 'react-native';

var Style = StyleSheet.create({
    rootContainer: {
        flex: 1
    },

    displayContainer: {
        flex: 2,
        backgroundColor: '#193441',
        justifyContent: 'center'
    },


    baseText: {
     fontFamily: 'Cochin',
   },
   headerText: {
     color: '#0d47a1',
     fontWeight: 'bold',
     fontSize: 25,
     textAlign: 'center',
   },
   titleText: {
     color: '#448aff',
     fontSize: 20,
     fontWeight: 'bold',
     textAlign: 'center',
   },
   displayText: {
       color: 'grey',
       fontSize: 15,
       padding :5,
       fontWeight: 'bold',
       textAlign: 'left',
   },

   centering: {
     alignItems: 'center',
     justifyContent: 'center',
     padding: 8,
   },

   horizontal: {
     flexDirection: 'row',
     justifyContent: 'space-around',
     padding: 8,
   },

   gray: {
     backgroundColor: '#cccccc',
   },

});

export default Style;

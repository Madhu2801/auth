import React from 'react';
import {SafeAreaView,} from 'react-native';
import LogIn from './components/Login';
const App: () => React$Node = () => {
   return (
       <SafeAreaView style={{flex:1}}>
            <LogIn/>
       </SafeAreaView>
   );
};
export default App;
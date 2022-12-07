import { View, Text,  ScrollView, TouchableOpacity, TextInput, FlatList} from 'react-native'
import React from 'react'
import { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'
import {useNavigation} from '@react-navigation/native'
import {windowHeight} from '../../src/utils/Dimensions'
import {windowWidth} from '../../src/utils/Dimensions'

export default function History() {

  const [notification,setNotification]=useState([
    {name: 'Talha', id: '1'},
    {name: 'Talha', id: '2'},
    {name: 'Talha', id: '3'},
    {name: 'Talha', id: '4'},
    {name: 'Talha', id: '5'},
    {name: 'Talha', id: '6'},
    {name: 'Talha', id: '7'},
    {name: 'Talha', id: '8'},
]);

  const nav = useNavigation();
  return (
    <SafeAreaView style={{
      height:windowHeight,
      width:windowWidth,
      flex:1,
    }}>
      <View style={{
flex:1,
backgroundColor:'lightgray',
      }}>
      <View style={{
        backgroundColor: "orange",
        height: "20%",
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        paddingHorizontal: 20,
      }}>
        <View style={{
          //flexDirection: 'row',
          //justifyContent: 'space-between',
          marginTop: 20,
        }}>
          <TouchableOpacity
          onPress={() => nav.openDrawer()}
          >
            <AntDesign name='bars' size={30} color='#FFF'/>
          </TouchableOpacity>
          <View style={{
            //width:'100%',
            marginTop:0,
            alignItems:'center',
          }}>
            <Text style={{
              fontSize: 28,
              color: "#FFF",
              fontWeight: "bold",
            }}>History</Text>
          </View>
</View>
</View>
<View>
  <FlatList
            keyExtractor={(item) => item.id}
            data={notification}
            renderItem={({item}) => (
                <Text style={{
                    marginTop:20,
                    padding:40,
                    backgroundColor:'#808B97',
                    fontSize:20,
                    color:'white'
                }}>
                  {item.name}
                  </Text>
            )}
            />
            </View>
</View>
</SafeAreaView>
  )
}
import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Image,
  View,
  Dimensions
} from 'react-native';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const {width,height}=Dimensions.get('window')

function Task(){


  return(
    
    <View style={{backgroundColor:'#EBEEED'}}>
   <View style={{width:width*1,marginTop:10,flexDirection:'row' ,backgroundColor:'#ffe4c4' ,justifyContent:'space-around',}}>
   <View style={{ borderRadius:50,alignItems:'center',justifyContent:'center'}}>
   <Image
          source={require('../assets/Girl.png')}
          style={{
            resizeMode: 'contain',
            height: 50,
            width: 50,
            borderRadius:50
          }}
        /> 
   </View>
   <View style={{justifyContent:'center',width:width*0.4,flexDirection:'column',padding:5}}>
    <Text style={{fontSize:15,fontWeight:'500',color:'#ff4500'}}>
    Aniket Dubey
    </Text>
    <Text style={{fontSize:12,fontWeight:'700'}}>
    UX Designer
    </Text>
    <Text style={{fontSize:12,fontWeight:'500'}}>
    123456
    </Text>
   </View>
   <View style={{backgroundColor:''}}>
   <Icon
                  name="eye"
                  size={16}
                  color="#ff4500"
                  style={{ padding: 1}}
                />   
   </View>
   </View>
   <View style={{width:width*1,height:height*2,backgroundColor:'white',marginTop:10,flexDirection:'column'}}>
    <View style={{flexDirection:"row",margin:10,justifyContent:'space-between'}}>
    <View style={{flexDirection:"row"}}>
    <View >
      <Text style={{fontSize:12,fontWeight:'700',color:'black'}}>My Attendance</Text>
      </View>
      <View style={{marginLeft:20,justifyContent:'center',alignItems:'center'}}>
      <Text style={{fontSize:10,fontWeight:'500',color:'#696969'}}>March(31Days)</Text>
      </View>
      </View>
      <View style={{}}>
    <Icon
     name={'arrow-right'}
     size={20}
    color="#ff4500"
     />    
   </View>
    </View>
    <View style={{flexDirection:'column'}}>
    <View style={{margin:3,flexDirection:'row',justifyContent:'space-around'}}>
      <View style={{width:width*0.3,height:height*0.06,backgroundColor:'#BFF8ED',borderRadius:5,flexDirection:'row',justifyContent:'space-around'}}>
     <View style={{alignItems:'center',justifyContent:'center', width: 25,  height: 25,  borderRadius: 20, borderWidth: 2, borderColor: '#08BAD1',marginTop:8}}>
    <Icon
     name={'bag-checked'}
     size={15}
    color="#0C99C9"
     />    
   </View>
       <View style={{flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
       
        <Text style={{fontSize:12,fontWeight:'600',color:'black'}}>
          20
        </Text>
        <Text style={{fontSize:8,fontWeight:'700',}}>
          Total Days in 
        </Text>
        <Text style={{fontSize:8,fontWeight:'700',}}>
          Dec
        </Text>
       </View>
      </View>
      <View style={{width:width*0.3,height:height*0.06,backgroundColor:'#DCFAD0',borderRadius:5,flexDirection:'row',justifyContent:'space-around'}}>
      <View style={{alignItems:'center',justifyContent:'center', width: 25,  height: 25,  borderRadius: 20, borderWidth: 2, borderColor: '#56F315',marginTop:8}}>
    <Icon
     name={'currency-rupee'}
     size={15}
    color="#56F315"
     />    
   </View>
       <View style={{flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
        <Text style={{fontSize:12,fontWeight:'600',color:'black'}}>
          20
        </Text>
        <Text style={{fontSize:8,fontWeight:'700',}}>
          Payable Days
        </Text>
        <Text style={{fontSize:8,fontWeight:'700',}}>
          Dec
        </Text>
       </View>
</View>
 <View style={{width:width*0.3,height:height*0.06,backgroundColor:'#D6FCE9',borderRadius:5,flexDirection:'row',justifyContent:'space-around'}}>
 <View style={{alignItems:'center',justifyContent:'center', width: 25,  height: 25,  borderRadius: 20, borderWidth: 2, borderColor: '#22F5DB',marginTop:8}}>
    <Icon
     name={'checkbox-marked-circle'}
     size={15}
    color="#0ACB30"
     />    
   </View>
  
       <View style={{flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
        <Text style={{fontSize:12,fontWeight:'600',color:'black'}}>
          20
        </Text>
        <Text style={{fontSize:8,fontWeight:'700',}}>
          Present
        </Text>
        <Text style={{fontSize:7,fontWeight:'600',}}>
          
        </Text>
       </View>
</View>
    </View>
    <View style={{margin:3,flexDirection:'row',justifyContent:'space-around'}}>
      <View style={{width:width*0.3,height:height*0.06,backgroundColor:'#FAEAD7',borderRadius:5,flexDirection:'row',justifyContent:'space-around'}}>
      <View style={{alignItems:'center',justifyContent:'center', width: 25,  height: 25,  borderRadius: 20, borderWidth: 2, borderColor: '#DC8F4D',marginTop:8}}>
    <Icon
     name={'briefcase'}
     size={15}
    color="#DC8F4D"
     />    
   </View>
       <View style={{flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
        <Text style={{fontSize:12,fontWeight:'600',color:'black'}}>
          20
        </Text>
        <Text style={{fontSize:8,fontWeight:'700',}}>
          On Duty
        </Text>
        <Text style={{fontSize:7,fontWeight:'600',}}>
          
        </Text>
       </View>
      </View>
      <View style={{width:width*0.3,height:height*0.06,backgroundColor:'#C8FAF8',borderRadius:5,flexDirection:'row',justifyContent:'space-around'}}>
      <View style={{alignItems:'center',justifyContent:'center', width: 25,  height: 25,  borderRadius: 20, borderWidth: 2, borderColor: '#22F5DB',marginTop:8}}>
    <Icon
     name={'briefcase-off'}
     size={15}
    color="#10ABBA"
     />    
   </View>
       <View style={{flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
        <Text style={{fontSize:12,fontWeight:'600',color:'black'}}>
          20
        </Text>
        <Text style={{fontSize:8,fontWeight:'700',}}>
          Week Off
        </Text>
        <Text style={{fontSize:7,fontWeight:'600'}}>
          
        </Text>
       </View>
</View>
 <View style={{width:width*0.3,height:height*0.06,backgroundColor:'#F8FAB4',borderRadius:5,flexDirection:'row',justifyContent:'space-around'}}>
 <View style={{alignItems:'center',justifyContent:'center', width: 25,  height: 25,  borderRadius: 20, borderWidth: 2, borderColor: '#AA9B08',marginTop:8}}>
    <Icon
     name={'palm-tree'}
     size={15}
    color="#AA9B08"
     />    
   </View>
       <View style={{flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
        <Text style={{fontSize:12,fontWeight:'600',color:'black'}}>
          20
        </Text>
        <Text style={{fontSize:8,fontWeight:'700',}}>
          Holiday
        </Text>
        <Text style={{fontSize:7,fontWeight:'600',}}>
        
        </Text>
       </View>
</View>
    </View>
    <View style={{margin:3,flexDirection:'row',justifyContent:'space-around'}}>
      <View style={{width:width*0.3,height:height*0.06,backgroundColor:'#F5ECE1',borderRadius:5,flexDirection:'row',justifyContent:'space-around'}}>
      <View style={{alignItems:'center',justifyContent:'center', width: 25,  height: 25,  borderRadius: 20, borderWidth: 2, borderColor: '#F78CF6',marginTop:8}}>
    <Icon
     name={'exclamation'}
     size={15}
    color="#F78CF6"
     />    
   </View>
       <View style={{flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
        <Text style={{fontSize:12,fontWeight:'600',color:'black'}}>
          20
        </Text>
        <Text style={{fontSize:8,fontWeight:'700',}}>
          Leave
        </Text>
        <Text style={{fontSize:7,fontWeight:'700',}}>
          
        </Text>
       </View>
      </View>
      <View style={{width:width*0.3,height:height*0.06,backgroundColor:'#FAEBF8',borderRadius:5,flexDirection:'row',justifyContent:'space-around'}}>
      <View style={{alignItems:'center',justifyContent:'center', width: 25,  height: 25,  borderRadius: 20, borderWidth: 2, borderColor: '#CD15CB',marginTop:8}}>
    <Icon
     name={'exclamation'}
     size={15}
    color="#CD15CB"
     />    
   </View>
       <View style={{flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
        <Text style={{fontSize:12,fontWeight:'600',color:'black'}}>
          20
        </Text>
        <Text style={{fontSize:8,fontWeight:'700',}}>
          leave Without
        </Text>
        <Text style={{fontSize:8,fontWeight:'600',}}>
          pay
        </Text>
       </View>
</View>
 <View style={{width:width*0.3,height:height*0.06,backgroundColor:'#FCDFDD',borderRadius:5,flexDirection:'row',justifyContent:'space-around'}}>
 <View style={{alignItems:'center',justifyContent:'center', width: 25,  height: 25,  borderRadius: 20, borderWidth: 2, borderColor: '#F09751',marginTop:8}}>
    <Icon
     name={'close-circle-outline'}
     size={15}
    color="#D0021B"
     />    
   </View>
  
       <View style={{flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
        <Text style={{fontSize:12,fontWeight:'600',color:'black'}}>
          20
        </Text>
        <Text style={{fontSize:8,fontWeight:'700',}}>
          Absent
        </Text>
        <Text style={{fontSize:7,fontWeight:'700',}}>
          
        </Text>
       </View>
</View>
    </View>
   </View>

   <View style={{backgroundColor:'#E3E5E4',marginTop:5,flexDirection:'column'}}>
    <View  style={{flexDirection:"row",margin:5,marginLeft:10 ,justifyContent:'space-between'}}>
      <Text style={{fontSize:12,fontWeight:'700',color:'black'}}>
        My Leave
      </Text>
      <View style={{}}>
    <Icon
     name={'arrow-right'}
     size={20}
    color="#ff4500"
     />    
   </View>
    </View>

    <View style={{flexDirection:'row',justifyContent:'space-around'}}>
    <View style={{flexDirection:'column',width:width*0.4,marginLeft:5}}>
    <View style={{backgroundColor:'#ff4500',borderTopStartRadius:10,borderTopEndRadius:10,alignItems:'center',padding:5}} >
    <Text style={{fontSize:15,fontWeight:'500',color:'white'}}>Earned Leave</Text>
    </View>
      <View style={{flexDirection:'column',backgroundColor:'#ffe4c4',padding:5,borderBottomEndRadius:10,borderBottomStartRadius:10,}}>
       <View style={{flexDirection:'row',alignItems:'center'}}>
       <Text style={{fontSize:18,color:'black',fontWeight:'700'}}>12</Text>
       <Text style={{fontSize:10,fontWeight:'700',marginLeft:7}}>Left</Text>
       </View>
       <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',margin:2}}>
       <Text style={{fontSize:10,fontWeight:'700'}}>Current year</Text>
       <Text style={{fontSize:10,fontWeight:'700',marginRight:5}}>00</Text>
       </View>
       <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',margin:2}}>
       <Text style={{fontSize:10,fontWeight:'700'}}>Available</Text>
       <Text style={{fontSize:10,fontWeight:'700',marginRight:5}}>00</Text>
       </View>

       <View style={{ borderWidth: 1, borderColor: '#a9a9a9',borderRadius: 5,}}></View>
       <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',margin:2}}>
       <Text style={{fontSize:10,fontWeight:'700'}}>Balance</Text>
       <Text style={{fontSize:10,fontWeight:'700',marginRight:5}}>00</Text>
       </View>
      </View>
     
    </View>
    <View style={{flexDirection:'column',width:width*0.4,marginLeft:5}}>
    <View style={{backgroundColor:'#0998FF',borderTopStartRadius:10,borderTopEndRadius:10,alignItems:'center',padding:5}} >
    <Text style={{fontSize:15,fontWeight:'500',color:'white'}}>Earned Leave</Text>
    </View>
      <View style={{flexDirection:'column',backgroundColor:'#9FCFF2',padding:5,borderBottomEndRadius:10,borderBottomStartRadius:10,}}>
       <View style={{flexDirection:'row',alignItems:'center'}}>
       <Text style={{fontSize:18,color:'black',fontWeight:'700'}}>12</Text>
       <Text style={{fontSize:10,fontWeight:'700',marginLeft:7}}>Left</Text>
       </View>
       <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',margin:2}}>
       <Text style={{fontSize:10,fontWeight:'700'}}>Current year</Text>
       <Text style={{fontSize:10,fontWeight:'700',marginRight:5}}>00</Text>
       </View>
       <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',margin:2}}>
       <Text style={{fontSize:10,fontWeight:'700'}}>Available</Text>
       <Text style={{fontSize:10,fontWeight:'700',marginRight:5}}>00</Text>
       </View>

       <View style={{ borderWidth: 1, borderColor: `#a9a9a9`,borderRadius: 5,}}></View>
       <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',margin:2}}>
       <Text style={{fontSize:10,fontWeight:'700'}}>Balance</Text>
       <Text style={{fontSize:10,fontWeight:'700',marginRight:5}}>00</Text>
       </View>
      </View>
     
    </View>
    
    </View>

    <View style={{backgroundColor:'#F5ECE1',margin:5,borderRadius:10,flexDirection:'column',marginLeft:20,marginRight:20,marginTop:10}}>
     <View style={{flexDirection:'row',marginLeft:20,justifyContent:'space-between',marginRight:20}}>
<Text style={{fontSize:12,fontWeight:'600',color:'black'}}>My Holidays</Text>
<View style={{}}>
    <Icon
     name={'arrow-right'}
     size={20}
    color="#ff4500"
     />    
   </View>
     </View>
     <View style={{alignItems:'center',justifyContent:'space-between',flexDirection:'row'}}>
     <View style={{ }}>
     <Image
          source={require('../assets/birthday1.png')}
          style={{
            resizeMode: 'contain',
            height: 60,
            width: 100,
            marginRight:2
          }}
        /> 
        </View>
        <View style={{}}>
     <Image
          source={require('../assets/dance.png')}
          style={{
            resizeMode: 'contain',
            height: 60,
            width: 100,
            
          }}
        /> 
        </View>
        <View style={{}}>
     <Image
          source={require('../assets/birthday.png')}
          style={{
            resizeMode: 'contain',
            height: 60,
            width: 100,
            marginRight:2
          }}
        /> 
        </View>
     </View>
    </View>
    <View style={{backgroundColor:'#9AE9F5',margin:5,borderRadius:10,flexDirection:'column',marginLeft:20,marginRight:20}}>
     <View style={{flexDirection:'row',marginLeft:20,marginRight:20,justifyContent:'space-between'}}>
<Text style={{fontSize:12,fontWeight:'600',color:'black'}}>My Task</Text>
<View style={{}}>
    <Icon
     name={'arrow-right'}
     size={20}
    color="#ff4500"
     />    
   </View>
     </View>
     <View style={{alignItems:'center'}}>
     <Image
          source={require('../assets/brazuka.png')}
          style={{
            resizeMode: 'contain',
            height: 60,
            width: 100,
            borderRadius:50
          }}
        /> 
     </View>
    </View>
   </View>
   </View>
    </View>
  )
}
export default Task;




   
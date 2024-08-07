import React from "react";

import { View,
         Text,
         StyleSheet,
         TouchableOpacity,
         TextInput
        } from 'react-native';

import Feather from 'react-native-vector-icons/Feather';

import { useRoute, RouteProp } from "@react-navigation/native";

type RouteDetailParams = {
  Order:{
    number: string | number;
    order_id: string;
  }
}

type OrderRouteProps = RouteProp<RouteDetailParams, 'Order'>;

export default function Order() {
  const route = useRoute<OrderRouteProps>();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Mesa {route.params.number}</Text>
        <TouchableOpacity>
        <Feather name="trash-2" size={28} color="#FF3F4b" />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.input}>
        <Text style={{ color: '#FFF' }}>Pizzas</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.input}>
        <Text style={{ color: '#FFF' }}>Pizzas de calabresa</Text>
      </TouchableOpacity>

      <View style={styles.qtdContainer}>
        <Text style={styles.qtdText}>Quantidade</Text>
        <TextInput
        style={[styles.input, { width: '60%', textAlign: 'center', paddingBottom: 5 } ]}
        placeholderTextColor="#F0F0F0"
        keyboardType="numeric"
        value="1"
        />
      </View>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1d1d2e',
    paddingVertical: '5%',
    paddingEnd: '4%',
    paddingStart: '4%',
  },
  header:{
    flexDirection: 'row',
    marginBottom: 12,
    alignItems: 'center',
    marginTop: 24
  },
  title:{
    fontSize: 30,
    fontWeight: 'bold',
    color: '#FFF',
    marginRight: 14
  },
  input:{
    backgroundColor: '#101026',
    borderRadius: 4,
    width: '100%',
    height: 40,
    marginBottom: 12,
    justifyContent: 'center',
    paddingHorizontal: 8,
    color: '#FFF',
    fontSize: 20,
  },
  qtdContainer:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  qtdText:{
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFF',
  }
});
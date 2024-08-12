import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface ItemProps{
   data:{
    id: string;
    product_id: string;
    name: string;
    amount: string | number;
   } 
}

export function ListItem({}: ItemProps){
    return(
        <View style={styles.container}>
            <Text>Item da Lista</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        
    }
})
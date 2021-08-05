import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { CastElement } from '../interfaces/castInterface'


interface Props{
    actor: CastElement,
}

export const CastingCard = ({ actor }: Props) => {

    const uri = `https://image.tmdb.org/t/p/w500${actor.profile_path}`

    return (
        <View style={styles.cardContainer}>
            <Image
            source={{uri}}
            style={styles.actorImg}
            />
            <View style={{alignSelf: "center"}}>
                <Text style={{color:"#f1f1f1"}}>{actor.name}</Text>
                <Text style={{color:"#f1f1f1", opacity: 0.7}}>{actor.character}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    cardContainer:{
        flexDirection:"row", 
        alignContent:"center",
        height: 60 ,
        borderRadius: 10,
        marginHorizontal: 5,
        backgroundColor: "#333",
        shadowColor: "#ffffffb2",
        shadowOffset:{
            width: 0,
            height: 100
        },
        shadowOpacity: 0.75,
        shadowRadius: 3.84,
        elevation: 5 
    }, 
    actorImg:{
        width:60, 
        height: 60, 
        borderRadius: 10, 
        marginRight: 10
    },

})

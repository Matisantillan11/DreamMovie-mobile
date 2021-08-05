import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import Video from 'react-native-video'
import { CastElement } from '../interfaces/castInterface'
import { FullMovie } from '../interfaces/movieInterface'


interface Props{
    movie: FullMovie,
    cast: CastElement[],
    width: number, 
    height: number 
}


export const MovieDetails = ({ movie, cast, width, height }: Props) => {

    console.log(cast)

    return (
        <>
            <View style={{
                    flexDirection:"row",
                    alignContent: "center",
                    marginBottom: 15
                }}>
                    <Icon name="star-outline" size={20} color="#ffffffb2" />
                    <Text style={{
                        color: "rgba(255, 255, 255, 0.7)",
                        fontSize: 15,
                        marginHorizontal: 10
                    }}>{movie.vote_average}</Text>

                    <Text style={{
                        color: "rgba(255, 255, 255, 0.7)",
                        fontSize: 15}}
                    >
                         -  { movie.genres.map( genre => genre.name).join(', ') }
                    </Text>

            </View>


            <View style={{
                flex: 1,
            }}>
                <Text style={styles.sectionTitle}>Resume</Text>
                <Text style={styles.overview}>{movie.overview}</Text>
                <View>

                </View>
            </View>

            <View style={{
                width,
                height: height * 0.5
            }}>
                <Video 
                source={{uri: "https://www.youtube.com/watch?v=giJYLfWIzTk&ab_channel=SensaCineTRAILERS" }}
                controls = { true }
                
                style={{
                    flex: 1
                }}
                />
            </View> 
        </>
    )
}

const styles = StyleSheet.create({
    sectionTitle:{
        fontSize: 25,
        color:"#f1f1f1",
        fontWeight: "bold",
        marginVertical: 10
    },
    overview:{
        color: "#f1f1f1",
        fontSize: 20
    }
    
})
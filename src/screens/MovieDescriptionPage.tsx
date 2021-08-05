import React from 'react'
import { StackScreenProps } from '@react-navigation/stack'
import { Image, StyleSheet, Text, View } from 'react-native'
import { RootStackParams } from '../stacks/MoviesStack'
import { Dimensions } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/Ionicons';
import Video from 'react-native-video';

interface Props extends StackScreenProps<RootStackParams, 'MovieDescription'>{};


const { height, width } = Dimensions.get("window")

export const MovieDescriptionPage = ({ route }: Props) => {

    const movie = route.params
    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`

    return (
        <ScrollView>
            <View style={styles.posterContainer}>
                <Image 
                source={{uri}}
                style={{
                    flex:1,
                }}
                />
            </View>

            <View style={{
                flex: 1,
                padding: 15
            }}>
                <Text style={styles.originalTitle}>{movie.original_title}</Text>
                <Text style={styles.title}>{movie.title} ({movie.original_language.toUpperCase()})</Text>
                <View style={{
                    flexDirection:"row",
                    alignContent: "center",
                    marginVertical: 5
                }}>
                    <Icon name="star" size={20} color="#ffffffb2" />
                    <Text style={{
                        color: "rgba(255, 255, 255, 0.7)",
                        fontSize: 15,
                        marginHorizontal: 10
                    }}>{movie.vote_average}</Text>
                </View>
            </View>

            <View style={{
                flex: 1,
                padding: 15
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
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    posterContainer: {
        width, 
        height: height * 0.7,
        borderBottomStartRadius: 25,
        borderBottomEndRadius: 25,
        overflow: 'hidden'
    },
    originalTitle: {
        color: "rgba(255, 255, 255, 0.5)",
        fontSize: 20
    },
    title:{
        color: "#f1f1f1",
        fontSize: 28,
        fontWeight: "bold"
    },
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

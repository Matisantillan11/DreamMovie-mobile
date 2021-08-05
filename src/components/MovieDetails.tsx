import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import Video from 'react-native-video'
import { CastElement } from '../interfaces/castInterface'
import { FullMovie } from '../interfaces/movieInterface'
import { CastingCard } from './CastingCard';


interface Props{
    movie: FullMovie,
    cast: CastElement[],
    width: number, 
    height: number 
}


export const MovieDetails = ({ movie, cast, width, height }: Props) => {

    return (
        <>
            <View style={{
                    flexDirection:"row",
                    alignContent: "center",
                    marginBottom: 15
                }}>
                    <Icon name="star-outline" size={20} color="#ffffffb2" />
                    <Text style={{
                        color: "#ffffffb2",
                        fontSize: 15,
                        marginHorizontal: 10
                    }}>{movie.vote_average}</Text>

                    <Text style={{
                        color: "#ffffffb2",
                        fontSize: 15
                    }}
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

            {/*casting */}
            <View>
                <Text style={styles.sectionTitle}>Casting</Text>
        
                <FlatList 
                horizontal={true}
                data={cast}
                keyExtractor = { ( item ) => item.id.toString() }
                renderItem={({ item }) => <CastingCard actor={item} />} 
                showsHorizontalScrollIndicator={ false }
                style={{marginVertical: 10, height: 80 }}
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
    },
    casting: {
        color: "#f1f1f1",
        fontSize: 16
    }
    
})
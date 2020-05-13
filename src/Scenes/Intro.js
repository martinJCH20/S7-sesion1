import React, { Component } from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import SliderFullView from '../Components/Sliders/SliderFullView'
import ItemSlider from '../Components/Sliders/ItemSlider'

const styles = StyleSheet.create({
    header: {
        height: '20%',
        alignItems: 'center',
        backgroundColor: '#8C99C8',
        borderBottomWidth: 1
    },
    title: {
        fontSize: 40,
        color: 'white'
    }
})

const sliders = [
    {id: 1, image: require('../../assets/slider1.jpeg'), title: 'Step 1'},
    {id: 2, image: require('../../assets/slider2.jpeg'), title: 'Step 2'},
    {id: 3, image: require('../../assets/slider3.jpeg'), title: 'Step 3'},
    {id: 4, image: require('../../assets/slider4.jpeg'), title: 'Step 4'},
    {id: 5, image: require('../../assets/slider5.jpeg'), title: 'Step 5'},
    {id: 6, image: require('../../assets/slider6.jpeg'), title: 'Step 6'},
]

export default class Intro extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }
    render(){
        return(
            <>
            <View style={styles.header}>
            <Text style={styles.title}>Bienvenido</Text>
            </View>
            <SliderFullView>
                <FlatList
                    data={sliders}
                    renderItem={({item}) => (
                        <ItemSlider image={item.image} title={item.title}/>
                    )}
                    keyExtractor={item => item.id}
                    numColumns={1}
                    horizontal={true}
                />
            </SliderFullView>
            </>
        )
    }
}
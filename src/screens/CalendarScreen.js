import React, { useState } from 'react';
import { StyleSheet, View, Modal, FlatList, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Text } from 'react-native-elements';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import useResults from '../hooks/useResults';
import Event from '../models/event';

const LoginScreen = (navigation) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [getEventsHandler, results] = useResults();

    const events = [];
    if (results.length) {
        for (const key in results) {
            events.push(
                new Event(
                    key, 
                    results[key].year, 
                    results[key].text));
        }
    }
   
    return (
        <View>
            <Calendar
                disableAllTouchEventsForDisabledDays={true}
                theme={{textDisabledColor: '#d9e1e8'}}
                disabledDaysIndexes={[0, 2, 6]}
                onDayPress={(day) => {
                    getEventsHandler();
                    setModalVisible(true);
                }}
            />
            <Modal
                visible={modalVisible}
            >
                <TouchableOpacity onPress={() => setModalVisible(false)}>
                    <AntDesign name="closecircle" size={24} color="black" />
                </TouchableOpacity>
                
                <FlatList
                    data={events}
                    // keyExtractor={result => result.year}
                    renderItem={({item}) => (
                        <View>
                            <Text h4>{item.year}</Text>
                            <Text h5>{item.text}</Text>
                        </View>
                    )}
                />
            </Modal>
        </View>
    )
}


const styles = StyleSheet.create({
    screen: {
        flex: 1
    },
});

export default LoginScreen;
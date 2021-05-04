import React from 'react';
import {FlatList, StyleSheet, Text, View, ScrollView} from 'react-native';
import MyCard from './components/MyCard';

const CardArray = [
  {
    title: 'Justin Adam',
    subtitle: 'hey, bro ?',
    imgCode:'3',
    time:"10:58pm"
  },
  {
    title: 'Bruce Wayne',
    subtitle: 'Come back to Home',
    imgCode:'2',
    time:"11:07pm"
  },
  {
    title: 'Jim Gourdon',
    subtitle: 'Tomorrow is meeting',
    imgCode:'1',
    time:"08:58am"
  },
  {
    title: 'Justin Adam',
    subtitle: 'hey, bro ?',
    imgCode:'3',
    time:"10:58pm"
  },
  {
    title: 'Bruce Wayne',
    subtitle: 'Come back to Home',
    imgCode:'2',
    time:"11:07pm"
  },
  {
    title: 'Jim Gourdon',
    subtitle: 'Tomorrow is meeting',
    imgCode:'1',
    time:"08:58am"
  },
  {
    title: 'Justin Adam',
    subtitle: 'hey, bro ?',
    imgCode:'3',
    time:"10:58pm"
  },
  {
    title: 'Bruce Wayne',
    subtitle: 'Come back to Home',
    imgCode:'2',
    time:"11:07pm"
  },
  {
    title: 'Jim Gourdon',
    subtitle: 'Tomorrow is meeting',
    imgCode:'1',
    time:"08:58am"
  },
  {
    title: 'Justin Adam',
    subtitle: 'hey, bro ?',
    imgCode:'3',
    time:"10:58pm"
  },
  {
    title: 'Bruce Wayne',
    subtitle: 'Come back to Home',
    imgCode:'2',
    time:"11:07pm"
  },
  {
    title: 'Jim Gourdon',
    subtitle: 'Tomorrow is meeting',
    imgCode:'1',
    time:"08:58am"
  },

]

const App = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        {
          CardArray.map((card,index)=> <MyCard key={index} title={card.title} subtitle={card.subtitle} imgCode={card.imgCode} time={card.time}/>)
        }
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
  },
});

export default App;

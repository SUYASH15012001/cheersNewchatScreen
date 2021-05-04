import * as React from 'react';
import {StyleSheet, Text, View} from 'react-native'
import { Avatar, Card, IconButton, Button } from 'react-native-paper';

const imagesFetch = {
  '1': require('../assets/images/Layer1.png'),
  '2': require('../assets/images/Layer2.png'),
  '3': require('../assets/images/Layer3.png'),

};

const MyCard = (props) => {
  console.log(props)
  const { title, subtitle, imgCode, time } = props;
  return (
    <Card style={styles.container}>
      <Card.Title
        title={title}
        subtitle={subtitle}
        style={styles.card}
        left={props => <Avatar.Image size={90} source={imagesFetch[imgCode]} style={styles.icon} {...props} />}
        right={props => (
          <View style={styles.holder}>
            <Text style={styles.cardText}>
              {time}
            </Text>
            <IconButton color='grey' style={styles.iconRight} {...props} icon="chevron-right" />
          </View>
        )}
      />
    </Card>     
  );
};

export default MyCard;
const styles = StyleSheet.create({
  container: {
    marginVertical:1
  },
  card: {
    padding:0
  },
  icon: {
    margin: 20,
    marginLeft: 0
  },
  holder: {
    flexDirection: 'row',
    paddingTop:7
  },
  cardText: {
    fontWeight: 'bold',
    position: 'absolute',
    top: 7,
    right:33
  },
  iconRight: {
    position: 'relative',
    top:-13
  }
})

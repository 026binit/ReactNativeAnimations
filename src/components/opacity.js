import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Animated,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 150,
    height: 150,
    backgroundColor: 'tomato',
  },
});

const Opacity = () => {
  const [animation] = useState(new Animated.Value(1));
  const animatedStyles = {
    opacity: animation,
  };

  const startAnimation = () => {
    Animated.timing(animation, {
      toValue: 0,
      duration: 1500,
      useNativeDriver: true,
    }).start(() => {
      Animated.timing(animation, {
        toValue: 1,
        duration: 1500,
        useNativeDriver: true,
      }).start();
    });
  };
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={startAnimation}>
        <Animated.View style={[styles.box, animatedStyles]} />
      </TouchableWithoutFeedback>
    </View>
  );
};

export default Opacity;

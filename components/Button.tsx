import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  GestureResponderEvent,
  ViewStyle,
} from 'react-native';

type Props = {
  onPress: (event: GestureResponderEvent) => void;
  title: string;
  style?: ViewStyle;
};

const Button = ({ onPress, title, style = {} }: Props) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, style]}
      activeOpacity={0.8}
    >
      <Text style={[styles.text]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#6960A7',
    paddingVertical: 7,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    width: 140,
  },
  text: {
    color: '#fff',
    fontSize: 13,
    fontWeight: '700',
  },
});

export default Button;

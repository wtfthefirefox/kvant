import React from 'react';
import { StyleSheet, TextInput } from 'react-native';
import styled from 'styled-components';

const FormInput = ({ placeholderValue, formName, marginBottomValue, isPassword }) => {
  return (
    <FormWrapper marginBottomVal={marginBottomValue}>
      <FormName>{formName}</FormName>
      <TextInput style={styles.Form} placeholder={placeholderValue} secureTextEntry={isPassword} /> 
    </FormWrapper>
  )
}

const styles = StyleSheet.create({
  Form: {
    backgroundColor: "#ffffff", 
    width: "100%", 
    height: 40, 
    borderRadius: 30,
    paddingLeft: 48,
    fontSize: 15,
    lineHeight: 18,
    color: "rgba(0, 0, 0, 0.5)"
  }
});

const FormWrapper = styled.View`
  max-width: 600px;
  width: 100%;
  margin-bottom: ${props => props.marginBottomVal};
`;

const FormName = styled.Text`
  text-align: center;
  font-size: 24px;
  line-height: 24px;
  color: #000000;
  margin-bottom: 25px;
`;

export default FormInput;
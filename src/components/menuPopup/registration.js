import React from 'react';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components';
import FormInput from "../formInput/";

const Registration = ({ closeFunc }) =>{
  return( 
  <>
    <BtnsWrap>
      <FormInput  placeholderValue="example" formName="Название датчика" marginBottomValue="20px" isPassword={false}/> 
      <FormInput  placeholderValue="********" formName="Пароль" marginBottomValue="20px" isPassword={true}/>
    </BtnsWrap>
    <TouchableOpacity onPress={() => closeFunc(false)} style={{width: "50%"}} >
      <Btn>
        <Text>Применить</Text>
      </Btn>
    </TouchableOpacity>
  </>
  )
}

const BtnsWrap = styled.View`
  margin-top: 50px;
  width: 100%;
  height: 300px;
  background-color: rgba(178, 254, 181, 1);
  padding: 20px 10px 0 10px;
  border-radius: 30px;
`;

const Btn = styled.View`
  width: 100%;
  height: 60px;
  align-items: center;
  border-radius: 15px;
  background-color: rgba(178, 254, 181, 1);
  margin-top: 25px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Text = styled.Text`
  text-align: center;
  font-size: 30px;
  line-height: 30px;
`;

export default Registration;
import React from 'react';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components';

import icons from '../../../assets/svg/icons';

const MenuPopup = ({ closePopup }) => { 
  return (
    <BlackWrap>
      <MenuWrap>
        <TouchableOpacity onPress={() => closePopup(false)} style={{marginBottom: 20}} >
          <icons.Menu />
        </TouchableOpacity>
        <icons.Settings style={{marginBottom: 20}} />
        <icons.Volume style={{marginBottom: 20}} />
        <icons.Record style={{marginBottom: 20}} />
        <icons.Reset />
      </MenuWrap>
    </BlackWrap>
  )
}

const BlackWrap = styled.View`
  position: relative;
  width: 100%;
  height: 1000px;
  padding-left: 10px;
  padding-right: 10px;
  background-color: rgba(0, 0, 0, 0.5);
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const MenuWrap = styled.View`
  position: absolute;
  right: 0;
  top: 0;
  width: 60px;
  height: 300px;
  padding-top: 40px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #C4C4C4;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
`;

export default MenuPopup;
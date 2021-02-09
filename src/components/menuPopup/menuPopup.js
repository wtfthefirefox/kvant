import React, { useState } from 'react';
import { TouchableOpacity, TextInput, StyleSheet  } from 'react-native';
import styled from 'styled-components';

import icons from '../../../assets/svg/icons';

import Registration from './registration';

const MenuPopup = ({ closePopup }) => { 

  const [isSettingPopup, changeIsSettingPopup] = useState(false);
  const [isVolumePopup, changeIsVolumePopup] = useState(false);
  const [isRegActive, changeIsRegActive] = useState(false);
  const [isTimeRecActive, changeIsTimeRecActive] = useState(false);
  const [isTimeActive, changeIsTimeActive] = useState(false);

  const [countVolume, changeCountVolume] = useState(0);
  const [timeRec, changeTimeRec] = useState(2);
  const [time, changeTime] = useState(5);

  if (isRegActive) {
    return (
      <BlackWrap>
        <Registration closeFunc={changeIsRegActive} />
      </BlackWrap>
    )
  } else if (isTimeRecActive) {
    return (
      <BlackWrap>
        <TouchableOpacity onPress={() => changeIsTimeRecActive(false)} style={{ position: "absolute", top: 20, right: 8}} >
          <icons.Exit />
        </TouchableOpacity>
        <CounterWrap>
          <CounterTitle>Время записи</CounterTitle>
          <CounterWrapInner>
            <TouchableOpacity onPress={() => changeTimeRec(timeRec + 1 < 601 ? timeRec + 1: timeRec)} style={{marginRight: 5}} >
              <icons.Plus width={35} height={35} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => changeTimeRec(timeRec - 1 > 1 ? timeRec - 1: timeRec)} style={{marginRight: 10}} > 
              <icons.Minus width={35} height={35} />
            </TouchableOpacity>
            <VolumeFormWrap>
              <VolumeFormValue>{`${timeRec} c`}</VolumeFormValue>
            </VolumeFormWrap>
          </CounterWrapInner>
        </CounterWrap>
      </BlackWrap>
    )
  } else if (isTimeActive) {
    return (
      <BlackWrap>
        <TouchableOpacity onPress={() => changeIsTimeActive(false)} style={{ position: "absolute", top: 20, right: 8}} >
          <icons.Exit />
        </TouchableOpacity>
        <CounterWrap>
          <CounterTitle>Период записи</CounterTitle>
          <CounterWrapInner>
            <TouchableOpacity onPress={() => changeTime(timeRec + 1 < 601 ? timeRec + 1: timeRec)} style={{marginRight: 5}} >
              <icons.Plus width={35} height={35} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => changeTime(timeRec - 1 > 5 ? timeRec - 1: timeRec)} style={{marginRight: 10}} > 
              <icons.Minus width={35} height={35} />
            </TouchableOpacity>
            <VolumeFormWrap>
              <VolumeFormValue>{`${time} c`}</VolumeFormValue>
            </VolumeFormWrap>
          </CounterWrapInner>
        </CounterWrap>
      </BlackWrap>
    )
  } else if (isSettingPopup) {
    return (
      <BlackWrap>
        <TouchableOpacity onPress={() => changeIsSettingPopup(false)} style={{ position: "absolute", top: 20, right: 10}} >
          <icons.Exit />
        </TouchableOpacity>
        <CardsSettingsWrap>
          <TouchableOpacity onPress={() => changeIsRegActive(true)} >
            <CardSettingsWrap isLast={false} >
              <CardSettingsValue>Датчик</CardSettingsValue>
            </CardSettingsWrap>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => changeIsTimeRecActive(true)} >
            <CardSettingsWrap isLast={false} >
              <CardSettingsValue>Длительность записи</CardSettingsValue>
            </CardSettingsWrap>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => changeIsTimeActive(true)} >
            <CardSettingsWrap isLast={false} >
              <CardSettingsValue>Период записи</CardSettingsValue>
            </CardSettingsWrap>
          </TouchableOpacity>
          <CardSettingsWrap isLast={false} >
            <CardSettingsValue>Описание</CardSettingsValue>
          </CardSettingsWrap>
          <CardSettingsWrap isLast={true} >
            <CardSettingsValue>Обратная связь</CardSettingsValue>
          </CardSettingsWrap>
        </CardsSettingsWrap>
      </BlackWrap>
    )
  }

  return (
    <BlackWrap>
      <MenuWrap>
        <TouchableOpacity onPress={() => closePopup(false)} style={{marginBottom: 20}} >
          <icons.Menu />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => changeIsSettingPopup(true)} style={{marginBottom: 20}} >
          <icons.Settings />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => changeIsVolumePopup(!isVolumePopup)}>
          <icons.Volume style={{marginBottom: 20}} />
        </TouchableOpacity>
        <icons.Record style={{marginBottom: 20}} />
        <icons.Reset />
      </MenuWrap>
      {
        isVolumePopup &&

        <VolumeWrap topValue="140px" heightVal="60px">
          <TouchableOpacity onPress={() => changeCountVolume(countVolume + 1)} >
            <icons.Plus width={35} height={35} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => changeCountVolume(countVolume - 1 < 0 ? countVolume : countVolume - 1)} > 
            <icons.Minus width={35} height={35} />
          </TouchableOpacity>
          <VolumeFormWrap>
            <VolumeFormValue>{`${countVolume} Герц`}</VolumeFormValue>
          </VolumeFormWrap>
        </VolumeWrap>
      }
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

const CardsSettingsWrap = styled.View`
  padding-top: 70px;
  width: 96%;
  height: 200px;
`;

const CardSettingsWrap = styled.View`
  height: 80px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #697CC2;
  border-radius: 10px;
  border-width: 2px;
  border-color: rgba(14, 23, 243, 0.5);
  box-shadow: 3px 4px 4px rgba(0, 0, 0, 0.25);
  margin-bottom: ${props => props.isLast ? 0 : "20px"};
`;

const CardSettingsValue = styled.Text`
  text-align: center;
  font-size: 37px;
  line-height: 37px;
`;

const VolumeWrap = styled.View`
  position: absolute;
  top: ${props => props.topValue};
  left: 10px;
  width: 78%;
  height: ${props => props.heightVal};
  background-color: #697CC2;
  border-radius: 10px;
  border-color: rgba(14, 23, 243, 0.5);
  box-shadow: 3px 4px 4px rgba(0, 0, 0, 0.25);
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

const VolumeFormWrap = styled.View`
  width: 66%;
  height: 40px;
  background-color: #ffffff;
  border-radius: 10px;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding-left: 20px;
`;

const VolumeFormValue = styled.Text`
  color: rgba(0, 0, 0, 0.5);
  font-size: 24px;
  line-height: 24px;
`;

const CounterWrap = styled.View`
  position: absolute;
  top: 50px;
  left: 50px;
  width: 78%;
  height: 100px;
  background-color: #697CC2;
  padding-top: 10px;
  border-radius: 20px;
  border-color: rgba(14, 23, 243, 0.5);
  box-shadow: 3px 4px 4px rgba(0, 0, 0, 0.25);
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const CounterTitle = styled.Text`
  color: #000000;
  font-size: 24px;
  line-height: 24px;
`;

const CounterWrapInner = styled.View`
  width: 100%;
  height: 60px;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export default MenuPopup;
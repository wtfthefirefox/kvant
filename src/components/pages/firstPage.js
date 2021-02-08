import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native'; 
import styled from 'styled-components';
import Portal from '@burstware/react-native-portal';
import { Link } from 'react-router-native';

import icons from '../../../assets/svg/icons';

import MenuPopup from '../menuPopup';

const FirstPage = () => {
    
    const [isPopupActive, changeIsPopupActive] = useState(false);

    return (
        <>
            {
              isPopupActive &&

              <Portal>
                <MenuPopup closePopup={changeIsPopupActive} />
              </Portal>
            }

            <TopWrap>
                <BtnPowerWrap>
                    <icons.Power />
                </BtnPowerWrap>
                <TouchableOpacity onPress={() => changeIsPopupActive(true)} >
                  <icons.Menu />
                </TouchableOpacity>
            </TopWrap>
            <TableTitle>Актуальные данные</TableTitle>
            <TableWrap>
                <TableCol isLast={false} >
                    <TableItem isLast={false} >
                      <TableItemTitle>X</TableItemTitle>
                    </TableItem>
                    <TableItem isLast={false} >
                      <TableItemValue>3.60</TableItemValue>
                    </TableItem>
                    <TableItem isLast={false} >
                      <TableItemValue>3.60</TableItemValue>
                    </TableItem>
                    <TableItem isLast={false} >
                      <TableItemValue>3.60</TableItemValue>
                    </TableItem>
                    <TableItem isLast={true} > 
                      <TableItemValue>3.60</TableItemValue>
                    </TableItem>
                </TableCol>
                <TableCol isLast={false} >
                    <TableItem isLast={false} >
                      <TableItemTitle>Y</TableItemTitle>
                    </TableItem>
                    <TableItem isLast={false} >
                      <TableItemValue>3.60</TableItemValue>
                    </TableItem>
                    <TableItem isLast={false} >
                      <TableItemValue>3.60</TableItemValue>
                    </TableItem>
                    <TableItem isLast={false} >
                      <TableItemValue>3.60</TableItemValue>
                    </TableItem>
                    <TableItem isLast={true} > 
                      <TableItemValue>3.60</TableItemValue>
                    </TableItem>
                </TableCol>
                <TableCol isLast={true} >
                    <TableItem isLast={false} >
                      <TableItemTitle>Z</TableItemTitle>
                    </TableItem>
                    <TableItem isLast={false} >
                      <TableItemValue>3.60</TableItemValue>
                    </TableItem>
                    <TableItem isLast={false} >
                      <TableItemValue>3.60</TableItemValue>
                    </TableItem>
                    <TableItem isLast={false} >
                      <TableItemValue>3.60</TableItemValue>
                    </TableItem>
                    <TableItem isLast={true} > 
                      <TableItemValue>3.60</TableItemValue>
                    </TableItem>
                </TableCol>
            </TableWrap>
            <CharCardWrap>
              <Link to="/charts" style={{position: "absolute", left: 10, top: 10}} >
                <ChartWrap>
                  <icons.VolumeChart />
                </ChartWrap>
              </Link>
              <CharCardTitle>График</CharCardTitle>
            </CharCardWrap>           
        </>
    )
}

const TopWrap = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-left: 10px;
    padding-top: 50px;
    padding-right: 10px;
    margin-bottom: 40px;
`;

const BtnPowerWrap = styled.View`
    width: 50px;
    height: 50px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: #CD4F66;
    border-radius: 50px;
`;

const TableTitle = styled.Text`
  font-size: 40px;
  line-height: 40px;
  text-align: center;
  margin-bottom: 40px;
`;

const TableWrap = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: flex-start;
    margin-bottom: 20px;
    padding: 0 10px;
`;

const TableCol = styled.View`
    position: relative;
    width: 31.25%;
    height: 170px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin-right: ${props => props.isLast ? 0 : "10px"};
    background-color: rgba(88, 231, 162, 0.25);
    border-color: #4AC3DE;
    border-width: 3px;
`;

const TableItem = styled.View`
    position: relative;
    width: 100%;
    height: 34px;
    border-bottom-width: ${props => props.isLast ? 0 : "2px"};
    border-bottom-color: #ffffff;
    padding: 5px 0;
`;

const TableItemTitle = styled.Text`
    font-size: 30px;
    line-height: 30px;
    text-align: center;
`;

const TableItemValue = styled.Text`
  font-size: 27px;
  line-height: 27px;
  text-align: center;
`;

const CharCardWrap = styled.View`
  width: 100%;
  height: 70px;
  padding: 0 10px;
  background-color: rgba(88, 231, 162, 0.5);
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const ChartWrap = styled.View`
  width: 50px;
  height: 50px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  border-radius: 50px;
`;

const CharCardTitle = styled.Text`
  font-size: 35px;
  line-height: 35px;
  text-align: center;
`;

export default FirstPage;
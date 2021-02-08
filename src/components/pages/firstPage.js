import React from 'react';
import styled from 'styled-components';

import icons from '../../../assets/svg/icons';

const FirstPage = () => {
    return (
        <>
            <TopWrap>
                <BtnPowerWrap>
                    <icons.Power />
                </BtnPowerWrap>
                <icons.Menu />
            </TopWrap>
            <TableWrap>
                <TableCol>
                    <TableItem></TableItem>
                </TableCol>
            </TableWrap>
        </>
    )
}

const TopWrap = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-left: 10px;
    padding-right: 10px;
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

const TableWrap = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: flex-start;
`;

const TableCol = styled.View`
    position: relative;
    width: 31.25%;
    height: 126px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`;

const TableItem = styled.View`
    position: relative;
    width: 100%;
    height: 20px;
`;

export default FirstPage;
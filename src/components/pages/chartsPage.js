import React from 'react';
import { View, ScrollView } from 'react-native';
import { Link } from 'react-router-native';
import styled from 'styled-components';
import { LineChart, YAxis, Grid } from 'react-native-svg-charts';

import icons from '../../../assets/svg/icons';

const ChartsPage = () => {
  const data = [50, 10, 40, 95, 4, 24, 85, 91, 35, 53, 53, 24, 50, 20, 80];

  return (
    <ScrollView style={{width: "100%", height: 1400, position: "relative"}} bounces={false} >
      <Link to="/" style={{position: "absolute", left: 10, top: 40}} > 
        <icons.ReturnBtn/>
      </Link>
      <Wrap>
        <CharTitle>Ось X</CharTitle>
        <View style={{ height: 200, flexDirection: 'row', marginBottom: 30 }}>
          <YAxis
              data={data}
              contentInset={{ top: 20, bottom: 20 }}
              svg={{
                  fill: 'grey',
                  fontSize: 10,
              }}
              numberOfTicks={10}
              formatLabel={(value) => `${value}`}
          />
          <LineChart
              style={{ flex: 1, marginLeft: 16 }}
              data={data}
              svg={{ stroke: 'rgb(134, 65, 244)' }}
              contentInset={{ top: 20, bottom: 20 }}
          >
              <Grid />
          </LineChart>
        </View>
        <CharTitle>Ось Y</CharTitle>
        <View style={{ height: 200, flexDirection: 'row', marginBottom: 30 }}>
          <YAxis
              data={data}
              contentInset={{ top: 20, bottom: 20 }}
              svg={{
                  fill: 'grey',
                  fontSize: 10,
              }}
              numberOfTicks={10}
              formatLabel={(value) => `${value}`}
          />
          <LineChart
              style={{ flex: 1, marginLeft: 16 }}
              data={data}
              svg={{ stroke: 'rgb(134, 65, 244)' }}
              contentInset={{ top: 20, bottom: 20 }}
          >
              <Grid />
          </LineChart>
        </View>
        <CharTitle>Ось Z</CharTitle>
        <View style={{ height: 200, flexDirection: 'row' }}>
          <YAxis
              data={data}
              contentInset={{ top: 20, bottom: 20 }}
              svg={{
                  fill: 'grey',
                  fontSize: 10,
              }}
              numberOfTicks={10}
              formatLabel={(value) => `${value}`}
          />
          <LineChart
              style={{ flex: 1, marginLeft: 16 }}
              data={data}
              svg={{ stroke: 'rgb(134, 65, 244)' }}
              contentInset={{ top: 20, bottom: 20 }}
          >
              <Grid />
          </LineChart>
        </View>
      </Wrap>
    </ScrollView>
  )
}

const Wrap = styled.View`
  width: 100%;
  height: 1400px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding-right: 10px;
  padding-left: 10px;
  padding-top: 80px;
`;

const CharTitle = styled.Text`
  font-size: 35px;
  line-height: 35px;
`;

export default ChartsPage;
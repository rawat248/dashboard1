import React from 'react';
import { Typography } from '@mui/material';

import { useTheme } from "@mui/material";
import { ResponsiveBar } from '@nivo/bar';
import { barData } from '../data/mockData'; 
import { tokens } from '../theme'; 

const Bar = () => {
    const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  // Define a custom colors function
  const customColors = barData.map(item => ({
    ...item,
    color: item.month === 'Aug' ? 'blue' : 'lightblue',
  }));

  return (
    <div style={{ height: '50vh', backgroundColor: 'white', margin:'10px 0px 0px 20px' , width:'50%'}}>
    <Typography variant='h4'>Overview</Typography>
    <Typography >Monthly Earning</Typography>
      <ResponsiveBar
        data={customColors}
        keys={['value']}
        indexBy="month"
        margin={{ top: 20, right: 0, bottom: 70, left: 0 }}
        padding={0.3}
        valueScale={{ type: 'linear' }}
        indexScale={{ type: 'band', round: true }}
        colors={{ datum: 'data.color' }} // Use the 'color' field in data for colors
        borderColor={{
          from: 'color',
          modifiers: [
            [
              'darker',
              1.6
            ]
          ]
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
        }}
        axisLeft={null}
        enableGridX={false}
        enableGridY={false}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{
          from: 'color',
          modifiers: [
            [
              'darker',
              1.6
            ]
          ]
        }}
        legends={[
          {
            dataFrom: 'keys',
            anchor: 'bottom-right',
            direction: 'column',
            justify: false,
            translateX: 120,
            translateY: 0,
            itemsSpacing: 2,
            itemWidth: 100,
            itemHeight: 20,
            itemDirection: 'left-to-right',
            itemOpacity: 0.85,
            symbolSize: 20,
            effects: [
              {
                on: 'hover',
                style: {
                  itemOpacity: 1
                }
              }
            ]
          }
        ]}
      />
    </div>
  )
}

export default Bar;
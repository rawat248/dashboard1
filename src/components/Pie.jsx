import React from 'react';
import { pieChartData } from '../data/mockData';
import { ResponsivePie } from '@nivo/pie';

const Pie = () => {
    
    
  return (
    <div style={{ height:"50vh",width:'40%' , backgroundColor: "white", marginTop:"10px"}}>
      <ResponsivePie
        data={pieChartData}
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={3}
        colors={{ scheme: 'nivo' }} 
        borderWidth={1}
        borderColor={{ from: 'color', modifiers: [['darker', 0.2]] }}
        enableRadialLabels={false}
        radialLabelsSkipAngle={10}
        radialLabelsTextXOffset={6}
        radialLabelsTextColor="#333333"
        radialLabelsLinkOffset={0}
        radialLabelsLinkDiagonalLength={16}
        radialLabelsLinkHorizontalLength={24}
        radialLabelsLinkStrokeWidth={1}
        radialLabelsLinkColor={{ from: 'color' }}
        sliceLabel="id"
        sliceLabelsSkipAngle={10}
        sliceLabelsTextColor="#333333"
        
        
      />
    </div>
  )
}

export default Pie;



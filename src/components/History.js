import React from 'react'
import '../../node_modules/react-vis/dist/style.css';
import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  VerticalBarSeries,
  LabelSeries
} from 'react-vis';

const History = ({ items }) => {
    const max = items.reduce((acc, val) => {
        acc = ( acc === undefined || val.score > acc ) ? val.score : acc
        return acc;
    }, []);
    const data = items.sort(function(a, b){return a.date - b.date});
    const barData = data.map((el, i) => {
      const y = el.score * 100 / max;
      return {x: i + 1, y};
    });
    const labelData = data.map((el, i) => {
      return {x: i + 1, y: 0, label: el.score, style: {fontSize: 10}};
    });
    
    return (
      <div>
        <h2>Your progress</h2>
        <h5>Your progress in the different categories</h5>
        <XYPlot width={500} height={500} stackBy="y">
          <VerticalGridLines />
          <HorizontalGridLines />
          <XAxis />
          <YAxis />
          <VerticalBarSeries data={ barData } />
          <LabelSeries data={ labelData } />
        </XYPlot>
      </div>
    );
}

export default History

import React from 'react'
import { connect } from 'react-redux'
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

const History = (props) => {
    const { items } = props
    const max = items.reduce((acc, val) => {
        acc = ( acc === undefined || val.score > acc ) ? val.score : acc
        return acc;
    }, []);
    const data = items.sort(function(a, b){return a.date - b.date}).slice(0, 12);
    const barData = data.map((el, i) => {
      const y = el.score * 100 / max;
      return {x: i + 1, y};
    });
    const labelData = data.map((el, i) => {
      const xOffset = i < 6 ? -10 : 10;
      return {x: i + 1, y: 0, label: `${el.score}`, xOffset, style: {fontSize: 10}};
    });
    
    return (
      <div>
        <h3>Your progress</h3>
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

const mapStateToProps = state => {
  const { history } = state

  return {
    items: history.items,
  }
}

export default connect(mapStateToProps)(History)

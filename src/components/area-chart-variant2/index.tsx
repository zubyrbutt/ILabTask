import React from 'react';

import {View, Dimensions} from 'react-native';
import Svg, {Path, Line, Text as SvgText} from 'react-native-svg';

import theme from '../../theme';
import {styles} from './styles';

const {width: SCREEN_WIDTH} = Dimensions.get('window');

interface AreaChartVariant2Props {
  data?: number[];
  width?: number;
  height?: number;
  months?: string[];
}

const AreaChartVariant2 = ({
  data = [1000, 2000, 1500, 4500, 2500, 5000],
  width = SCREEN_WIDTH - 32,
  height = 200,
  months = ['Jan', 'Feb', 'Mar'],
}: AreaChartVariant2Props) => {
  const PADDING = 32;
  const chartWidth = width - PADDING * 2;
  const chartHeight = height - PADDING * 2;

  // Calculate min and max values for scaling
  const maxValue = Math.max(...data);
  const yAxisValues = [0, 2000, 4000, 6000];

  // Create points for the path
  const points = data.map((value, index) => {
    const x = (index * chartWidth) / (data.length - 1) + PADDING;
    const y = chartHeight - (value / maxValue) * chartHeight + PADDING;
    return {x, y};
  });

  // Generate the curve path (only line)
  const createCurvePath = () => {
    return points.reduce((acc, point, index) => {
      if (index === 0) return `M ${point.x} ${point.y}`;
      
      const prevPoint = points[index - 1];
      const controlX = (prevPoint.x + point.x) / 2;
      return `${acc} C ${controlX} ${prevPoint.y} ${controlX} ${point.y} ${point.x} ${point.y}`;
    }, '');
  };

  return (
    <View style={styles.container}>
      <Svg width={width} height={height}>
        {/* Grid Lines */}
        {yAxisValues.map((value, index) => (
          <React.Fragment key={value}>
            <Line
              x1={PADDING}
              y1={PADDING + (chartHeight * index) / 3}
              x2={width - PADDING}
              y2={PADDING + (chartHeight * index) / 3}
              stroke={theme.colors.gray[200]}
              strokeDasharray="4 4"
              strokeWidth="1"
            />
            <SvgText
              x={8}
              y={PADDING + (chartHeight * index) / 3 + 4}
              fill={theme.colors.gray[400]}
              fontSize="12">
              {`${value / 1000}K`}
            </SvgText>
          </React.Fragment>
        ))}

        {/* X-axis labels (months) */}
        {months.map((month, index) => (
          <SvgText
            key={month}
            x={(index * chartWidth) / 2 + PADDING}
            y={height - 8}
            fill={theme.colors.gray[400]}
            fontSize="12"
            textAnchor="middle">
            {month}
          </SvgText>
        ))}

        {/* Only Line */}
        <Path
          d={createCurvePath()}
          fill="none"
          stroke={theme.colors.success[500]}
          strokeWidth="4"
        />
      </Svg>
    </View>
  );
};

export default AreaChartVariant2; 
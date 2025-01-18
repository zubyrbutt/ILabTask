import React from 'react';

import { Dimensions, View } from 'react-native';
import Animated, {
    Easing,
    useAnimatedProps,
    useSharedValue,
    withDelay,
    withSequence,
    withTiming,
} from 'react-native-reanimated';
import Svg, {
    Defs,
    Line,
    LinearGradient,
    Path,
    Stop,
    Text
} from 'react-native-svg';

const AnimatedPath = Animated.createAnimatedComponent(Path);

interface DataPoint {
  date: string;
  value: number;
  projectedValue?: number;
}

interface AreaChartProps {
  data: DataPoint[];
  color: string;
  width?: number;
  height?: number;
}

const AreaChart = ({
  data,
  color,
  width = Dimensions.get('window').width - 32,
  height = 300,
}: AreaChartProps) => {
  const progress = useSharedValue(0);
  const projectedProgress = useSharedValue(0);

  const getY = (value: number) => {
    'worklet';
    const maxValue = Math.max(...data.map(d => Math.max(d.value, d.projectedValue || 0)));
    const minValue = Math.min(...data.map(d => Math.min(d.value, d.projectedValue || 0)));
    const range = maxValue - minValue;
    return ((maxValue - value) / range) * (height - 60) + 20;
  };

  const getX = (index: number) => {
    'worklet';
    return (index / (data.length - 1)) * (width - 40) + 20;
  };

  React.useEffect(() => {
    progress.value = withTiming(1, {
      duration: 1500,
      easing: Easing.bezier(0.42, 0, 0.58, 1),
    });
    projectedProgress.value = withSequence(
      withDelay(
        1000,
        withTiming(1, {
          duration: 1500,
          easing: Easing.bezier(0.42, 0, 0.58, 1),
        }),
      ),
    );
  }, []);

  const actualLineProps = useAnimatedProps(() => {
    'worklet';
    let path = `M ${getX(0)} ${getY(data[0].value)}`;
    
    for (let i = 1; i < data.length; i++) {
      const x = getX(i);
      const y = getY(data[i].value);
      const xMid = (getX(i - 1) + x) / 2;
      
      path += ` C ${xMid} ${getY(data[i - 1].value)}, ${xMid} ${y}, ${x} ${y}`;
    }

    const fillPath = `${path} L ${getX(data.length - 1)} ${height - 40} L ${getX(0)} ${height - 40} Z`;

    return {
      d: fillPath,
      strokeDashoffset: withTiming(0, {duration: 1500}),
    };
  });

  const projectedLineProps = useAnimatedProps(() => {
    'worklet';
    let path = '';
    
    if (data[0].projectedValue) {
      path = `M ${getX(0)} ${getY(data[0].projectedValue)}`;
      
      for (let i = 1; i < data.length; i++) {
        if (data[i].projectedValue) {
          const x = getX(i);
          const y = getY(data[i].projectedValue!);
          const xMid = (getX(i - 1) + x) / 2;
          
          path += ` C ${xMid} ${getY(data[i - 1].projectedValue!)}, ${xMid} ${y}, ${x} ${y}`;
        }
      }
    }

    return {
      d: path,
      strokeDashoffset: withTiming(0, {duration: 1500}),
    };
  });

  const maxValue = Math.max(...data.map(d => Math.max(d.value, d.projectedValue || 0)));
  const minValue = Math.min(...data.map(d => Math.min(d.value, d.projectedValue || 0)));
  const range = maxValue - minValue;

  const gridLines = Array.from({length: 5}, (_, i) => {
    const y = (height - 60) * (i / 4) + 20;
    const value = maxValue - (range * i) / 4;
    return {y, value};
  });

  return (
    <View>
      <Svg width={width} height={height}>
        <Defs>
          <LinearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
            <Stop offset="0" stopColor={color} stopOpacity="0.1" />
            <Stop offset="1" stopColor={color} stopOpacity="0.02" />
          </LinearGradient>
        </Defs>

        {gridLines.map((line, i) => (
          <React.Fragment key={i}>
            <Line
              x1={20}
              y1={line.y}
              x2={width - 20}
              y2={line.y}
              stroke="#E5E7EB"
              strokeWidth={1}
              strokeDasharray="5,5"
            />
            <Text
              x={10}
              y={line.y + 5}
              fontSize={10}
              fill="#6B7280"
              textAnchor="end">
              {Math.round(line.value)}
            </Text>
          </React.Fragment>
        ))}

        {data.map((point, i) => (
          <Text
            key={i}
            x={getX(i)}
            y={height - 10}
            fontSize={12}
            fill="#6B7280"
            textAnchor="middle">
            {point.date}
          </Text>
        ))}

        <AnimatedPath
          animatedProps={actualLineProps}
          fill="url(#gradient)"
          stroke="none"
        />

        <AnimatedPath
          animatedProps={useAnimatedProps(() => ({
            d: `M ${getX(0)} ${getY(data[0].value)} ` + 
               data.slice(1).map((_, i) => {
                 const x = getX(i + 1);
                 const y = getY(data[i + 1].value);
                 const xMid = (getX(i) + x) / 2;
                 return `C ${xMid} ${getY(data[i].value)}, ${xMid} ${y}, ${x} ${y}`;
               }).join(' '),
          }))}
          fill="none"
          stroke={color}
          strokeWidth={2.5}
        />

        <AnimatedPath
          animatedProps={projectedLineProps}
          stroke={color}
          strokeWidth={2.5}
          strokeDasharray="4,4"
          fill="none"
          opacity={0.5}
        />
      </Svg>
    </View>
  );
};

export default AreaChart; 
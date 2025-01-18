import React, { useRef, useState } from 'react';

import { PanResponder, View } from 'react-native';
import Animated, {
    Easing,
    useAnimatedProps,
    useSharedValue,
    withTiming,
} from 'react-native-reanimated';
import Svg, { Circle, Defs, Line, LinearGradient, Path, Stop } from 'react-native-svg';

import theme from '../../theme';

interface Point {
  x: number;
  y: number;
  value: number;
}

interface LineChartProps {
  points: Point[];
  color: string;
  gradientStartOpacity?: number;
  gradientEndOpacity?: number;
}

const AnimatedPath = Animated.createAnimatedComponent(Path);

export const LineChart = ({
  points,
  color,
  gradientStartOpacity = 0.08,
  gradientEndOpacity = 0.005,
}: LineChartProps) => {
  const progress = useSharedValue(0);
  const [currentX, setCurrentX] = useState<number | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);
  const chartRef = useRef<View>(null);

  React.useEffect(() => {
    progress.value = withTiming(1, {
      duration: 2000,
      easing: Easing.bezierFn(0.42, 0, 0.58, 1),
    });
  }, []);

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (event, gestureState) => {
      chartRef.current?.measure((x, y, width, height, pageX, pageY) => {
        const touchX = event.nativeEvent.pageX - pageX;
        const chartWidth = width;
        const normalizedX = (touchX / chartWidth) * 100;
        
        if (normalizedX >= 0 && normalizedX <= 100) {
          const index = Math.min(
            Math.max(0, Math.round((normalizedX / 100) * (points.length - 1))),
            points.length - 1
          );
          setCurrentX(points[index].x);
          setCurrentIndex(index);
        }
      });
    },
    onPanResponderRelease: () => {
      setCurrentX(null);
      setCurrentIndex(null);
    },
  });

  const lineProps = useAnimatedProps(() => {
    const currentX = 100 * progress.value;
    const visiblePoints = points.filter(point => point.x <= currentX);

    if (visiblePoints.length < 2) return { d: '' };

    return {
      d: visiblePoints.reduce((acc, point, index, arr) => {
        const x = point.x;
        const y = 100 - point.y;

        if (index === 0) return `M ${x} ${y}`;

        const prevPoint = arr[index - 1];
        const cp1x = prevPoint.x + (x - prevPoint.x) / 3;
        const cp1y = 100 - prevPoint.y;
        const cp2x = x - (x - prevPoint.x) / 3;
        const cp2y = y;

        return `${acc} C ${cp1x} ${cp1y} ${cp2x} ${cp2y} ${x} ${y}`;
      }, ''),
    };
  });

  const areaProps = useAnimatedProps(() => {
    const currentX = 100 * progress.value;
    const visiblePoints = points.filter(point => point.x <= currentX);

    if (visiblePoints.length < 2) return { d: '' };

    const line = visiblePoints.reduce((acc, point, index, arr) => {
      const x = point.x;
      const y = 100 - point.y;

      if (index === 0) return `M ${x} ${y}`;

      const prevPoint = arr[index - 1];
      const cp1x = prevPoint.x + (x - prevPoint.x) / 3;
      const cp1y = 100 - prevPoint.y;
      const cp2x = x - (x - prevPoint.x) / 3;
      const cp2y = y;

      return `${acc} C ${cp1x} ${cp1y} ${cp2x} ${cp2y} ${x} ${y}`;
    }, '');

    const lastPoint = visiblePoints[visiblePoints.length - 1];
    return {
      d: `${line} L ${lastPoint.x} 100 L 0 100 Z`,
    };
  });

  return (
    <View 
      ref={chartRef}
      style={{flex: 1}} 
      {...panResponder.panHandlers}
    >
      <Svg width="100%" height="100%" viewBox="0 0 100 100">
        <Defs>
          <LinearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
            <Stop offset="0" stopColor={color} stopOpacity={gradientStartOpacity} />
            <Stop offset="1" stopColor={color} stopOpacity={gradientEndOpacity} />
          </LinearGradient>
        </Defs>

        {/* Area fill */}
        <AnimatedPath
          animatedProps={areaProps}
          fill="url(#gradient)"
          stroke="none"
        />

        {/* Line on top */}
        <AnimatedPath
          animatedProps={lineProps}
          stroke={color}
          strokeWidth="2"
          fill="none"
        />

        {currentX !== null && currentIndex !== null && (
          <>
            <Line
              x1={currentX}
              y1="0"
              x2={currentX}
              y2="100"
              stroke={theme.colors.gray[300]}
              strokeWidth="1"
              strokeDasharray="2 2"
            />
            
            <Circle
              cx={currentX}
              cy={100 - points[currentIndex].y}
              r="4"
              fill={theme.colors.white}
              stroke={color}
              strokeWidth="2"
            />

            <Circle
              cx={currentX}
              cy={100 - points[currentIndex].y}
              r="2"
              fill={color}
            />
          </>
        )}
      </Svg>
    </View>
  );
}; 
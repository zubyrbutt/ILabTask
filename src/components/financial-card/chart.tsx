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
  const middleIndex = Math.floor(points.length / 2); // Middle index of the points array
  const [currentX, setCurrentX] = useState<number | null>(points.length > 0 ? points[middleIndex].x : null);
  const [currentIndex, setCurrentIndex] = useState<number | null>(points.length > 0 ? middleIndex : null);
  const chartRef = useRef<View>(null);

  const PADDING = {
    x: 2, // reduced horizontal padding to 2%
    y: 5, // reduced vertical padding to 5%
  };
  
  const VIEW_BOX = {
    minX: -PADDING.x,
    minY: -PADDING.y,
    width: 150 + (2 * PADDING.x), // increased width to 150
    height: 120 + (2 * PADDING.y), // increased height to 120
  };

  const transformedPoints = points.map(point => ({
    ...point,
    x: point.x * (150 - 2 * PADDING.x) / 150 + PADDING.x, // adjusted for new width
    y: point.y * (120 - 2 * PADDING.y) / 120 + PADDING.y, // adjusted for new height
  }));

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
        const normalizedX = ((touchX / chartWidth) * (150 - 2 * PADDING.x)) + PADDING.x;
        
        if (normalizedX >= PADDING.x && normalizedX <= (150 - PADDING.x) && transformedPoints.length > 0) {
          const maxX = transformedPoints[transformedPoints.length - 1].x;
          const clampedX = Math.min(Math.max(normalizedX, PADDING.x), maxX);
          const index = Math.min(
            Math.max(0, Math.round(((clampedX - PADDING.x) / (maxX - PADDING.x)) * (transformedPoints.length - 1))),
            transformedPoints.length - 1
          );
          
          if (transformedPoints[index]) {
            setCurrentX(transformedPoints[index].x);
            setCurrentIndex(index);
          }
        }
      });
    },
    onPanResponderRelease: () => {
      // Don't reset on release to keep circles visible
      // setCurrentX(null);
      // setCurrentIndex(null);
    },
  });

  const lineProps = useAnimatedProps(() => {
    const currentX = (150 - 2 * PADDING.x) * progress.value + PADDING.x;
    const visiblePoints = transformedPoints.filter(point => point.x <= currentX);

    if (visiblePoints.length < 2) return { d: '' };

    return {
      d: visiblePoints.reduce((acc, point, index, arr) => {
        const x = point.x;
        const y = 120 - point.y; // adjusted for new height

        if (index === 0) return `M ${x} ${y}`;

        const prevPoint = arr[index - 1];
        const cp1x = prevPoint.x + (x - prevPoint.x) / 3;
        const cp1y = 120 - prevPoint.y; // adjusted for new height
        const cp2x = x - (x - prevPoint.x) / 3;
        const cp2y = y;

        return `${acc} C ${cp1x} ${cp1y} ${cp2x} ${cp2y} ${x} ${y}`;
      }, ''),
    };
  });

  const areaProps = useAnimatedProps(() => {
    const currentX = 150 * progress.value;
    const visiblePoints = points.filter(point => point.x <= currentX);

    if (visiblePoints.length < 2) return { d: '' };

    const line = visiblePoints.reduce((acc, point, index, arr) => {
      const x = point.x;
      const y = 120 - point.y; // adjusted for new height

      if (index === 0) return `M ${x} ${y}`;

      const prevPoint = arr[index - 1];
      const cp1x = prevPoint.x + (x - prevPoint.x) / 3;
      const cp1y = 120 - prevPoint.y; // adjusted for new height
      const cp2x = x - (x - prevPoint.x) / 3;
      const cp2y = y;

      return `${acc} C ${cp1x} ${cp1y} ${cp2x} ${cp2y} ${x} ${y}`;
    }, '');

    const lastPoint = visiblePoints[visiblePoints.length - 1];
    return {
      d: `${line} L ${lastPoint.x} 120 L 0 120 Z`, // adjusted for new height
    };
  });

  return (
    <View 
      ref={chartRef}
      style={{flex: 1}} 
      {...panResponder.panHandlers}
    >
      <Svg width="100%" height="100%" viewBox={`${VIEW_BOX.minX} ${VIEW_BOX.minY} ${VIEW_BOX.width} ${VIEW_BOX.height}`}>
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
          strokeWidth="3"
          fill="none"
        />

        {currentX !== null && currentIndex !== null && (
          <>
            <Circle
              cx={currentX}
              cy={120 - transformedPoints[currentIndex].y}
              r="6" // Increased radius for better visibility
              fill={theme.colors.white}
              stroke={color}
              strokeWidth="2"
            />

            <Circle
              cx={currentX}
              cy={120 - transformedPoints[currentIndex].y}
              r="4" // Increased radius for better visibility
              fill={color}
            />
          </>
        )}
      </Svg>
    </View>
  );
};
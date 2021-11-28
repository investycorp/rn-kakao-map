import {
  requireNativeComponent,
  UIManager,
  Platform,
  ViewStyle,
} from 'react-native';

const LINKING_ERROR =
  `The package 'rn-kakao-map' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo managed workflow\n';

type RnKakaoMapProps = {
  color: string;
  style: ViewStyle;
};

const ComponentName = 'RnKakaoMapView';

export const RnKakaoMapView =
  UIManager.getViewManagerConfig(ComponentName) != null
    ? requireNativeComponent<RnKakaoMapProps>(ComponentName)
    : () => {
        throw new Error(LINKING_ERROR);
      };

interface Target {
  latitude: number;
  longitude: number;
}

interface Options {
  enableHighAccuracy: boolean;
  timeout: number;
  maximumAge: number;
}

type CurrentPosition = {
  (success: Target);
  (success: Target, error: string);
  (success: Target, error: string, options: Options);
};

type WatchPosition = {
  (success: number);
  (success: number, error: string);
  (success: number, error: string, options: Options);
};
class GeoLocation<T> {
  private id: number;
  private target: Target;
  private options: Options;

  getCurrentPosition: CurrentPosition = (success, error?, options?) => {};

  watchPosition: WatchPosition = (success, error?, options?) => {};

  clearWatch(id: number) {}
}

interface GeolocationAPI {
  getCurrentPosition(success: any);
  getCurrentPosition(success: any, error: any);
  getCurrentPosition(success: any, error: any, options: Options);

  watchPosition(success: any): number;
  watchPosition(success: any, error: string): number;
  watchPosition(success: any, error: string, options: Options): number;

  clearWatch(id: number);
}

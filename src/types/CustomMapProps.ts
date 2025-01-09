interface CustomMapProps {
  onLocationChange: (place: string, latitude: string, longitude: string) => void;
  initialPlace: string;
  initialLatitude:string;
  initialLongitude:string;
  }
  export default CustomMapProps;

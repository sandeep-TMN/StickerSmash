import { Text, View } from 'react-native';
import Button from './components/Button';
import * as GeoLocation from '@tenmednetwork/geolocation-tracker';
import { useEffect, useState } from 'react';

const App = () => {
  const [location, setLocation] = useState({
    latitude: 0,
    longitude: 0,
  });

  useEffect(() => {
    const sub = GeoLocation.addLocationListener(({ location }) => {
      setLocation(location);
    });
    return () => {
      sub.remove();
    };
  }, []);

  return (
    <View
      style={{
        backgroundColor: '#0C0D0C',
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
      }}
    >
      <View>
        <Text
          style={{
            fontSize: 24,
            color: '#FFF',
            textAlign: 'center',
            fontWeight: '600',
          }}
        >
          Sticker Smash
        </Text>
        <View style={{ height: 100 }}></View>
        <Text style={{ color: '#FFF', textAlign: 'center', fontWeight: '600' }}>
          {`lat: ${location.latitude}, lng: ${location.longitude}`}
        </Text>
        <View style={{ height: 40 }}></View>
        <View
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'row',
          }}
        >
          <Button
            onPress={() => {
              GeoLocation.stopTracking();
            }}
            style={{ backgroundColor: '#303135' }}
            title="Cancel"
          />
          <View style={{ width: 10 }}></View>
          <Button
            onPress={() => {
              GeoLocation.startTracking({});
            }}
            title="Start, Tracking"
          />
        </View>
      </View>
    </View>
  );
};

export default App;

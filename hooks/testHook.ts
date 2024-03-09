import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

// Создайте пользовательский хук для геолокации
function useGeolocation() {
  const [location, setLocation] = useState({
    latitude: null,
    longitude: null,
  });

  useEffect(() => {
    if (typeof window !== 'undefined' && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        setLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      });
    }
  }, []);

  return location;
}

// Используйте этот хук в вашем компоненте App
export default function App({ Component, pageProps }) {
  const router = useRouter();
  const location = useGeolocation();

  useEffect(() => {
    // Вы можете использовать местоположение здесь, например, для обновления состояния маршрута
    router.query.latitude = location.latitude;
    router.query.longitude = location.longitude;
  }, [location]);

  return <Component { ...pageProps } />;
}

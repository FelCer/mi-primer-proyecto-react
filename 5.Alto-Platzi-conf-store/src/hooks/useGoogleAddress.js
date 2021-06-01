import axios from 'axios';
import {
    useState,
    useEffect
} from 'react';
const useGoogleAdddress = address => {
    const [map, setMap] = useState({});
    const apiKey = String(process.env.Google_Map_key);
    const urlApi = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${apiKey}`;
    useEffect(async () => {
        const response = await axios(urlApi);
        setMap(response.data.result[0].geometry.location);
    }, []);
    return map;
};
export default useGoogleAdddress;
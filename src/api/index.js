import axios from 'axios';

const URL = `https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary`

export const getPlacesData = async (sw, ne) => {
  try {
    const { data: { data } } = await axios.get("https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary", {
      method: 'GET',
      url: URL,
      params: {
        bl_latitude: sw.lat,
        tr_latitude: ne.lat,
        bl_longitude: sw.lng,
        tr_longitude: ne.lng,
      },
      headers: {
        'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
        'x-rapidapi-key': 'f4e9dcab65mshb113c9ccd0fc342p1d8284jsn09d6b015b437'
      }
    });
    
    return data;
  } catch (error) {
    console.log(error)
  }
}
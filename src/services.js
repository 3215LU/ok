const getClima = async ({ ciudad,latitud, longitud }) => {
    try {
      const data = await fetch(`
      https://api.open-meteo.com/v1/forecast?current_weather=true&latitude=${ latitud || 24.179134 }&longitude=${ longitud || 65.319269 }&timezone=${ ciudad || 'America/Argentina/Jujuy' } 
      `);
      return data.json();
    } catch {
      throw new Error('could not fetch tags');
    }
  };
export default getClima
//https://api.open-meteo.com/v1/forecast?latitude=24.179134&longitude=65.319269&hourly=temperature_2m,windspeed_10m,temperature_80m&daily=weathercode,temperature_2m_max,temperature_2m_min,windspeed_10m_max,windgusts_10m_max,winddirection_10m_dominant&timezone=America/Argentina/Jujuy
//      https://api.open-meteo.com/v1/forecast?current_weather=true&latitude=24.179134||${latitud}&longitude=65.319269||${longitud}&timezone=America/Argentina/Jujuy||${ciudad} 
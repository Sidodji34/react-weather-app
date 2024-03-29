import likeImg from '../images/like.svg'
import { useContext } from 'react';
import ListTownsContext from '../context/ContextListTowns';
import WeatherContext from '../context/ContextWeather';
import { saveList } from '../storage';

function TabNow() {
  const { setList } = useContext(ListTownsContext);
  const { weather } = useContext(WeatherContext);
  let iconWeather = weather.icon;

  if (iconWeather) {
    iconWeather = <div className="icon" style={{ backgroundImage: `url(http://openweathermap.org/img/wn/${weather.icon}.png)` }}></div>
  } else {
    iconWeather = <img className="icon" src="#" alt="." />
  }

  function saveTown() {
    const town = weather.cityName;
    setList(list => {
      const newList = new Set(list);
      newList.add(town)
      saveList(newList);
      return newList;
     });
  }
  
  return (
    <div id="tab_now" className="tabs_block">
      <div className="degrees">{weather.degrees}</div>
      <div className="icon">{iconWeather}</div>
      <div className="name_town_now">{weather.cityName}</div>
      <button className="add_like" onClick={saveTown} style={{ backgroundImage: `url(${likeImg})` }}></button>
    </div>
  );
}

export default TabNow;
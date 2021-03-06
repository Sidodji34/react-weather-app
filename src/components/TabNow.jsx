import likeImg from '../images/like.svg'
import ListTown from './ListTown';

function TabNow(props) {
  let iconWeather = props.icon;

  if (iconWeather) {
   iconWeather = <div className="icon" style={{ backgroundImage: `url(http://openweathermap.org/img/wn/${props.icon}.png)` }}></div>
  } else {
    iconWeather = <img className="icon" src="#" alt="." />
  }
   
  function SaveTown() {
    
  }
  return (
    <div id="tab_now" className="tabs_block">
      <div className="degrees">{props.degrees}°</div>
      <div className="icon">{iconWeather}</div>
      <div className="name_town_now">{props.cityName}</div>
      <button className="add_like" onClick={SaveTown} style={{ backgroundImage: `url(${likeImg})` }}></button>
    </div>
  );
}

export default TabNow;
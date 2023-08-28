export const changeImg = (weather, setImage) => {
    if (weather.daily[0].temp.day > 29) {
        setImage("../../images/sun-g65b7d7a8d_640.png");
      } else if (weather.daily[0].clouds > 20) {
        setImage("../../images/sunRain.png");
      } else if (weather.daily[0].pop > 40) {
        setImage("../../images/rain.png");
      } else setImage("../../images/rainbow.png");
  };
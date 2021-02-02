import React from "react";
import Slider from "./components/slider/Slider";

let slides = [
  {
    img: "https://www.w3schools.com/howto/img_nature_wide.jpg",
    text: "Caption Text 1",
  },
  {
    img: "https://www.w3schools.com/howto/img_snow_wide.jpg",
    text: "Caption Text 2",
  },
  {
    img: "https://www.w3schools.com/howto/img_mountains_wide.jpg",
    text: "Caption Text 3",
  },
];

const App = () => {
  return (
    <Slider
      slides={slides}
      loop={true}
      navs={true}
      auto={true}
      stopMouseHover={true}
      pags={true}
      delay={2}
    />
  );
};

export default App;

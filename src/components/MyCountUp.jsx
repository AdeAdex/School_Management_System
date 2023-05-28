import React from "react";
import { CountUp } from 'use-count-up'


const MyCountUp = () => {
  return (
    <>
      <CountUp
        isCounting
        start={0}
        end={200}
        duration={10}
        easing="linear"
        updateInterval={1}
        onUpdate={(currentValue) => {
          // it will fire once every second
        }}
        clas
      />
    </>
  );
};

export default MyCountUp;

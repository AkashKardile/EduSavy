import React, { useEffect, useState } from "react";
import classes from "./Timer.module.css";
const Timer = () => {
  const [time, setTime] = useState({
    hour: 23,
    minute: 59,
    second: 59,
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime((prevTime) => {
        let { hour, minute, second } = prevTime;

        if (second === 0) {
          if (minute === 0) {
            if (hour === 0) {
              clearInterval(intervalId);
              return prevTime;
            }
            hour -= 1;
            minute = 59;
          } else {
            minute -= 1;
          }
          second = 59;
        } else {
          second -= 1;
        }

        return { hour, minute, second };
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const closeHandler = () => {};

  return (
    <div className={classes.container}>
      <div>Today only| 24-Hour Flash Sale! Courses for as little as ₹499.</div>

      <div>
        <h1>
          Ends in {time.hour}h {time.minute}m {time.second}s
        </h1>
      </div>
    </div>
  );
};

export default Timer;

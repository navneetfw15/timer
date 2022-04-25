

import { useState, useEffect, useRef } from "react";

function Timer() {
  const [counter, setCounter] = useState(0);
  const start = useRef(null);
  const end = useRef(null);

  
  const x = useRef(null);

  function ss() {
    x.current = setInterval(() => {
      setCounter((p) => {
        return p + 1;
      });
    }, 1000);
  }

  console.log(start, end, typeof counter);
  if (counter === end.current) {
    clearInterval(x.current);
  }

  return (
    <div>
      <div>Counter : {counter}</div>

      <input placeholder="Enter start" type="number" id="s" />
      <input placeholder="Enter end" type="number" id="e" />

      <button
        onClick={() => {
          start.current = +document.getElementById("s").value;
          end.current = +document.getElementById("e").value;
          console.log(typeof start.current);
          setCounter(start.current);
          ss();
        }}
      >
        start
      </button>
    </div>
  );
}

export default Timer;
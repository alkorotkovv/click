import './Main.scss';
import React, { useState } from 'react';

const Main: React.FC = () => {

  const [count, setCount] = useState(0);
  const [allow, setAllow] = useState(true);
  //const [time, setTime] = useState(1);
  const [k, setK] = useState(0);

  //let timerId: ReturnType<typeof setTimeout>;

  React.useEffect(() => {console.log(count)}, [count])

  function toAllow() {
    setAllow(true);
  }

  function noAllow() {
    setAllow(false);
  }

  function onTimer() {
    console.log(count)
    //if (count === 0)
    //  noAllow();
    //else toAllow();
    console.log("время вышло");
    //setCount(0);
  }

  let lastClicked = 0;

  function onClickCheck() {
    if (k === 0) 
      lastClicked = (new Date()).getTime();
      
    
    let timeNow = (new Date()).getTime();

    if (timeNow > (lastClicked + 1000)) {
        // Execute the link action
        setAllow(false);
    }
    else {
        //alert('Please wait at least 1 seconds between clicks!');
        setAllow(true);
    }

    lastClicked = timeNow;
    setK(1);
}


  function handleButtonClick() {
    if (k === 0) {
      setTimeout(onTimer, 1000);
    }    
    setCount(count + 1);
    setK(1);
    //console.log(count);
  };

  return (
    <main className="content">
      <button className={allow ? "button" : "button_disables" } onClick={onClickCheck} disabled={!allow}>Кликнуть</button>
      <p className='title'>Кликнули {count} раз</p>
      <p className='title title_yellow'>По версии сервера 10 раз</p>
    </main>
  );
}

export default Main;

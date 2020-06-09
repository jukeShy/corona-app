import React, { useState } from 'react';
import { Alert } from '~/components';
import { ReactComponent as WorldSvg } from './world.svg';
import { CoronaApi } from '~/api/corona.api.js';
import './style.scss';

const WorldMap = () => {
  const coronaApi = CoronaApi();

  const [alert, setAlert] = useState({
    title: '',
    top: 0,
    left: 0,
    show: false,
  });

  const onMouseOverHandler = async (e) => {
    const { target } = e;
    if (target.tagName === 'svg') return;

    const { pageX: left, pageY: top } = window.event;

    setAlert((prevState) => ({
      ...prevState,
      title: target.dataset.name,
      top,
      left,
      show: true,
    }));
  };

  const onMouseOutHandler = (e) => {
    setAlert((prevState) => ({
      ...prevState,
      show: false,
    }));
  };

  const onClickHandler = (e) => {
    console.log(e.target.id);
  };

  return (
    <div className='world-map'>
      <WorldSvg
        onClick={onClickHandler}
        onMouseOver={onMouseOverHandler}
        onMouseOut={onMouseOutHandler}
      />
      <Alert {...alert} />
    </div>
  );
};

export default WorldMap;

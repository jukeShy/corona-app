import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Alert } from '~/components';
import { ReactComponent as WorldSvg } from './world.svg';
import './style.scss';

const WorldMap = () => {
  const [alert, setAlert] = useState({
    title: '',
    top: 0,
    left: 0,
    show: false,
  });

  const onMouseOverHandler = (e) => {
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

  const history = useHistory();
  const onClickHandler = (e) => {
    history.push(`/country/${e.target.dataset.id}`, {
      name: e.target.dataset.name,
    });
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

import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './animated-menu.css';

const AnimatedMenu = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [blobPos, setBlobPos] = useState<number>(0);

  useEffect(() => {
    // Set blob position based on current route
    if (location.pathname === '/') setBlobPos(-250);
    else if (location.pathname === '/projects') setBlobPos(10);
    else if (location.pathname === '/resume') setBlobPos(280);
  }, [location.pathname]);

  return (
    <div className="menu-container">
      <input type="checkbox" id="menu" />
      <label htmlFor="menu" className="menu-toggle">
        <div className="menu" />
      </label>

      <div className="box">
        <div className="menu-header" />

        <h1
          onMouseEnter={() => setBlobPos(-250)}
          onClick={() => navigate('/')}
        >
          Home
        </h1>
        <h1
          onMouseEnter={() => setBlobPos(10)}
          onClick={() => navigate('/projects')}
        >
          Projects
        </h1>
        <h1
          onMouseEnter={() => setBlobPos(280)}
          onClick={() => navigate('/resume')}
        >
          Resume
        </h1>

        <div
          className="move-item"
          style={{ transform: `translateX(${blobPos}px) rotate(45deg)` }}
        />
      </div>
    </div>
  );
};

export default AnimatedMenu;










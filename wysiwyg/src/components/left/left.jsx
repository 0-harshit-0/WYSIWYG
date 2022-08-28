import { useState } from 'react';
import './left.css';

function Left() {
  const [drawerTop, setDrawerTop] = useState(-5);

  return (
    <div className="left">
      <TopMenu drawerTop={drawerTop} setDrawerTop={setDrawerTop} />
      <TopDrawer drawerTop={drawerTop} />
    </div>
  );
}

export default Left;

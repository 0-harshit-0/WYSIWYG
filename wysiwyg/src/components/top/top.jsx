import { useState } from 'react';
import './top.css';


function TopMenu(props) {
  return(
    <section className="topMenu">
      <button onClick={()=> {props.setDrawerTop(props.drawerTop > 1 ? -5 : 80)}} className="menuIconBtn hovers">
        <svg viewBox="0 0 100 80" width="20" height="20" fill="currentColor">
          <rect width="100" height="15"></rect>
          <rect y="30" width="100" height="15"></rect>
          <rect y="60" width="100" height="15"></rect>
        </svg>
      </button>

      <input className="topSearch hovers" type="search" name="search" placeholder="search the document" />

      <button className="inviteBtn hovers">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-plus-fill" viewBox="0 0 16 16">
          <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
          <path fillRule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"/>
        </svg>
        INVITE TEAM MEMBER
      </button>

      <button className="notiIconBtn hovers">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bell-fill" viewBox="0 0 16 16">
          <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z"/>
        </svg>
      </button>
      
      <button className="userIconBtn hover">
        <img src={require('./unnamed.png')} alt="user" loading="lazy" decoding="sync" />
      </button>
    </section>
  );
}

function TopDrawerBtns(props) {
  let c = props.active ? "drawerBtnActive" : "";
  let l = [];

  return (
    <button onClick=
    {
      () => {
        props.list.forEach(z => {
          if(z.name === props.name) {
            z.active = true;
          }else {
            z.active = false;
          }
          l.push(z);
        });
        props.func(l);
      }
    } className={c+" drawerBtn"}>{props.name}</button>
  );
}
function TopDrawer(props) {
  const [drawerList, setDrawerList] = useState(
    [
      {name: 'All', active: true},
      {name: 'Board', active: false},
      {name: 'Graph', active: false},
      {name: 'Recent', active: false},
    ]
  );

  return(
    <section className="topDrawer" style={{top: props.drawerTop+'%'}}>
      {
        drawerList.map(x => {return <TopDrawerBtns key={x.name} name={x.name} active={x.active} list={drawerList} func={setDrawerList} />})
      }
      <button className="drawerOptBtn">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-three-dots-vertical" viewBox="0 0 16 16">
          <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
        </svg>
      </button>
    </section>
  );
}

function Top() {
  const [drawerTop, setDrawerTop] = useState(-5);

  return (
    <div className="top">
      <TopMenu drawerTop={drawerTop} setDrawerTop={setDrawerTop} />
      <TopDrawer drawerTop={drawerTop} />
    </div>
  );
}

export default Top;

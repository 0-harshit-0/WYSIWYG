import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateList } from './topSlice';

import './top.css';


function TopUserOptions() {
  const [optDisplay, setoptDisplay] = useState("none");
  const [drag, setDrag] = useState(false);

  return(
    <section className="topuserOptionsCont">
      <button className="topuserIconBtn" onClick={()=> {
        setoptDisplay(optDisplay === "none" ? "flex": "none");
      }}>
        <img src={require('./unnamed.png')} alt="user" loading="lazy" decoding="sync" />
      </button>
      <div className="topuserOptions" style={{display: optDisplay}}>
        <section>
          <span>Dark Mode</span>
          <button className={"endi " + (drag ? "endiEnabled" : "")} onClick={
            (e)=> {
              document.querySelector("#darkmode").click();
              setDrag(drag ? false : true);
            }
          }>
            <i className={"disabledI " + (drag ? "enabledI" : "")}></i>
          </button>
          <input type="checkbox" id='darkmode' />
        </section>
        <section>
          <button>Profile</button>
        </section>
        <hr />
        <section>
          <button>What's New</button>
        </section>
        <section>
          <button>Send Feedback</button>
        </section>
        <hr />
        <section>
          <button>Log Out</button>
        </section>
      </div>
    </section>
  );
}
function TopMenu(props) {
  return(
    <div className="topMenu">
      <button onClick={()=> {props.setDrawerTop(props.drawerTop > 30 ? 30 : 80)}} className="menuIconBtn tophovers">
        <svg viewBox="0 0 100 80" width="20" height="20" fill="currentColor">
          <rect y="10" width="100" height="10"></rect>
          <rect y="35" width="100" height="10"></rect>
          <rect y="60" width="100" height="10"></rect>
        </svg>
      </button>

      <input className="topSearch tophovers" type="search" name="search" placeholder="search the document" />

      <button className="topinviteBtn tophovers">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-plus-fill" viewBox="0 0 16 16">
          <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
          <path fillRule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"/>
        </svg>
        INVITE TEAM MEMBER
      </button>

      <button className="topnotiIconBtn tophovers">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bell-fill" viewBox="0 0 16 16">
          <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z"/>
        </svg>
      </button>
      
      <TopUserOptions />
    </div>
  );
}

function TopDrawerBtns(props) {
  const {id, name, active} = props.obj;
  let c = active ? "topdrawerBtnActive" : "";

  const dispatch = useDispatch();

  return (
    <button onClick=
    {
      () => {
        dispatch(updateList(id));
      }
    } className={c+" topdrawerBtn"}>{name}</button>
  );
}
function TopDrawer(props) {
  const drawerList = useSelector(state => state.drawerList);

  return(
    <section className="topDrawer" style={{top: props.drawerTop+'%'}}>
      {
        drawerList.map(x => {return <TopDrawerBtns key={x.name} obj={x} />})
      }
      <button className="topdrawerOptBtn">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-three-dots-vertical" viewBox="0 0 16 16">
          <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
        </svg>
      </button>
    </section>
  );
}

function Top() {
  const [drawerTop, setDrawerTop] = useState(30);

  return (
    <div className="top">
      <TopMenu drawerTop={drawerTop} setDrawerTop={setDrawerTop} />
      <TopDrawer drawerTop={drawerTop} />
    </div>
  );
}

export default Top;

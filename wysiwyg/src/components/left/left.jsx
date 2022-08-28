import { useState } from 'react';
import './left.css';


function Options(props) {
  return(
    <section className="leftOptions">
      <input className="leftname lefthovers" type="text" defaultValue="Dfin" />

      <button className="lefthovers" onClick={
        ()=> {
          let t = props.conts;
          t++;
          props.setConts(t);
          localStorage.setItem("conts", t);
        }
      }>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-lg" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
        </svg>
      </button>

      <button className="lefthovers">
        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="11" viewBox="0 0 24 24" fill="currentColor">
          <path d="M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205zm18.04 8.205l-8.167 8.205 2.995 2.98 11.132-11.185-11.132-11.186-2.995 2.98 8.167 8.206z"/></svg>
      </button>
    </section>
  );
}

function Containers(props) {
  return (
    <section>
      <span>collection {props.no}</span>
    </section>
  );
}
function ContainerArea(props) {
  let c = [];
  for(let i=0; i< props.conts; i++) {
    c.push(<Containers key={i} no={i} />);
  }

  return (
    <div className="leftcontainerArea">
      {c}
    </div>
  );
}


function Left() {
  const [drawerTop, setDrawerTop] = useState(-5);
  const [conts, setConts] = useState(localStorage.getItem("conts").length??0);

  return (
    <div className="left">
      <Options conts={conts} setConts={setConts} />
      <ContainerArea conts={conts} />
    </div>
  );
}

export default Left;

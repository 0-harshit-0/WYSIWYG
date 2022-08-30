import { useState, useEffect } from 'react';
import './mid.css';
import '../../DS/ug.js';


function Options(props) {
  const [rotate, setRotate] = useState(180);

  return(
    <section className="leftOptions">
      <input className="leftname lefthovers" type="text" defaultValue="Dfin" />

      <button className="lefthovers" onClick={
        () => {
        }
      }>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-lg" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
        </svg>
      </button>

      <button onClick={()=> {
        props.setStyleL(props.styleL === 0 ? -27 : 0);
        props.setStyleR(props.styleR === 0 ? -15 : 0);
        setRotate(rotate === 180 ? 0 : 180);
      }} className="lefthovers">
        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="11" viewBox="0 0 24 24" fill="currentColor" style={{transform: `rotate(${rotate}deg)`}} className="bi">
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
  for(let i=0; i < props.conts; i++) {
    c.push(<Containers key={i} no={i} />);
  }

  return (
    <div className="leftcontainerArea">
      {c}
    </div>
  );
}

function Left(props) {
  const [conts, setConts] = useState([]);
  const [styleL, setStyleL] = useState(0);

  return (
    <div className="left" style={{left: styleL+'%'}}>
      <Options conts={conts} setConts={setConts} styleL={styleL} setStyleL={setStyleL} styleR={props.styleR} setStyleR={props.setStyleR} />
      <ContainerArea conts={conts} />
    </div>
  );
}



function TextFormat(props) {
  return(
    <template id="textFormatWidget">
      <button>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-type-bold" viewBox="0 0 16 16">
          <path d="M8.21 13c2.106 0 3.412-1.087 3.412-2.823 0-1.306-.984-2.283-2.324-2.386v-.055a2.176 2.176 0 0 0 1.852-2.14c0-1.51-1.162-2.46-3.014-2.46H3.843V13H8.21zM5.908 4.674h1.696c.963 0 1.517.451 1.517 1.244 0 .834-.629 1.32-1.73 1.32H5.908V4.673zm0 6.788V8.598h1.73c1.217 0 1.88.492 1.88 1.415 0 .943-.643 1.449-1.832 1.449H5.907z"/>
        </svg>
      </button>
      <button>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-type-bold" viewBox="0 0 16 16">
          <path d="M8.21 13c2.106 0 3.412-1.087 3.412-2.823 0-1.306-.984-2.283-2.324-2.386v-.055a2.176 2.176 0 0 0 1.852-2.14c0-1.51-1.162-2.46-3.014-2.46H3.843V13H8.21zM5.908 4.674h1.696c.963 0 1.517.451 1.517 1.244 0 .834-.629 1.32-1.73 1.32H5.908V4.673zm0 6.788V8.598h1.73c1.217 0 1.88.492 1.88 1.415 0 .943-.643 1.449-1.832 1.449H5.907z"/>
        </svg>
      </button>
      <button>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-type-bold" viewBox="0 0 16 16">
          <path d="M8.21 13c2.106 0 3.412-1.087 3.412-2.823 0-1.306-.984-2.283-2.324-2.386v-.055a2.176 2.176 0 0 0 1.852-2.14c0-1.51-1.162-2.46-3.014-2.46H3.843V13H8.21zM5.908 4.674h1.696c.963 0 1.517.451 1.517 1.244 0 .834-.629 1.32-1.73 1.32H5.908V4.673zm0 6.788V8.598h1.73c1.217 0 1.88.492 1.88 1.415 0 .943-.643 1.449-1.832 1.449H5.907z"/>
        </svg>
      </button>
    </template>
  );
}
function formatting(start, middle, end, html, ind) {
  let formatted = "";
  if (start.endsWith("<strong>")) {
    formatted += start.slice(0, start.length-8);
  }else {
    formatted += start;
  }

  formatted += middle;
  /*if (html.includes("<strong>", ind) && html.includes("</strong>", ind)) {
    formatted += end.slice(17);
  }else if (html.includes("</strong>", ind)) {
    formatted += end.slice(9);
  }else if (html.includes("<strong>", ind)) {
    formatted += end.slice(8);
  }*/

  if (!end.startsWith("<strong>") && (end.slice(0, 7).includes("<") || end.slice(0, 7).includes(">"))) {
    formatted += end.slice(17);
  }else {
    formatted += end;
  }
  console.log(end)
  //console.log(formatted, "\n\n\n", middle, "\n\n\n", end);
  return (formatted);
}
function Right(props) {

  useEffect(()=> {
    let sel, selctedTxt = {}, ele = document.querySelector("#right>section"), eleHtml, ind, timeout = false;

    document.addEventListener('selectionchange', () => {
      clearTimeout(timeout);
      timeout = setTimeout(()=> {
        if (selctedTxt.txt.length == 0) return 1;

        eleHtml = ele.innerHTML.trim();
        ind = eleHtml.indexOf(selctedTxt.txt.trim().split(' ')[0], selctedTxt.start);
      }, 300);

      sel = document.getSelection();
      if (sel.anchorNode) {
        selctedTxt = {start: sel.anchorOffset, txt: sel.toString()};
      }
    });

    document.addEventListener("keypress", (e)=> {
      if (e.key === 'b') {
        const replace = '<strong>'+selctedTxt.txt+'</strong>';
        ele.innerHTML = formatting(eleHtml.slice(0, ind), replace, eleHtml.slice(selctedTxt.txt.length+ind), eleHtml, ind);

      }else if (e.key === 'i') {
        const replace = '<em>'+selctedTxt.txt+'</em>';
        selctedTxt.ele.innerHTML = eleHtml.slice(0, ind) + replace + eleHtml.slice(selctedTxt.txt.length+ind);
      }

    });
  });

  return (
    <>
      <TextFormat />
      <div id="right" className="right" style={{left: props.styleR+'%'}}>
        <section>
          <h1>WYSIWYG Editor</h1>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
          cillum dolore eu fugiat nulla <strong>pariatur.</strong> Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <br />
          <h2>Topic Name</h2>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat.
          </p>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <br />
          <h2>Topic Name</h2>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat.
          </p>
        </section>
      </div>
    </>
  );
}


function Mid() {
  const [styleR, setStyleR] = useState(0);

  return (
    <div className="mid">
      <Left styleR={styleR} setStyleR={setStyleR} />
      <Right styleR={styleR} />
    </div>
  );
}

export default Mid;
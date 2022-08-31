import { useState, useEffect } from 'react';
import './mid.css';
import {Folder} from '../../DS/ug.js';


function Options(props) {
  const [rotate, setRotate] = useState(180);
  let fn = null;

  return(
    <section className="leftOptions">
      <input id="leftname" onChange={(e)=> {fn = (e.target.value);}} className="leftname lefthovers" type="text" defaultValue="" placeholder="folder name here" />

      <button className="lefthovers addfolder" onClick={
        () => {
          let tc = [...props.conts];
          tc.push(new Folder(tc.length, fn??"collection"));
          document.querySelector("#leftname").value = "";
          props.setConts(tc);
        }
      }>
        <svg xmlns="http://www.w3.org/2000/svg" className="bi" fill="currentColor" width="11" height="11" viewBox="0 0 24 24"><path d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z"/></svg>
      </button>

      <button className="lefthovers slider" onClick={()=> {
        props.setStyleL(props.styleL === 0 ? -27.5 : 0);
        props.setStyleR(props.styleR === 0 ? -15 : 0);
        setRotate(rotate === 180 ? 0 : 180);
      }}>
        <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="currentColor" style={{transform: `rotate(${rotate}deg)`}} className="bi">
          <path d="M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205zm18.04 8.205l-8.167 8.205 2.995 2.98 11.132-11.185-11.132-11.186-2.995 2.98 8.167 8.206z"/></svg>
      </button>
    </section>
  );
}



function ContainersItems() {}
function ContainersHead(props) {
  const [rotate, setRotate] = useState(0);

  return (
    <section className="containershead">
      <button onClick={
        ()=> {
          setRotate(rotate === 180 ? 0 : 180);
        }
      }>
        <svg style={{transform: `rotate(${rotate}deg)`}} className="bi" width="6" height="6" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M23.245 4l-11.245 14.374-11.219-14.374-.781.619 12 15.381 12-15.391-.755-.609z"/></svg>
      </button>

      <strong>{props.name}</strong>

      <button className="lefthovers addfolder" onClick={
        () => {
          let ti = props.id+.1;
          let tc = [...props.conts];
          for (var i = 0; i < tc.length; i++) {
            let z = tc[i];
            if (z.id === props.id) {
              z.d.push(new Folder(ti, props.name+ti))
            }
          }
          props.setConts(tc);
        }
      }>
        <svg xmlns="http://www.w3.org/2000/svg" className="bi" fill="currentColor" width="9" height="9" viewBox="0 0 24 24"><path d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z"/></svg>
      </button>
      <button className="topdrawerOptBtn">
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-three-dots-vertical" viewBox="0 0 16 16">
          <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
        </svg>
      </button>
    </section>
  );
}
function ContainerArea(props) {
  let c = [], i = 0;
  for(i=0; i<props.conts.length; i++) {
    let z = props.conts[i];
    c.push(<ContainersHead key={i} id={z.id} name={z.n} conts={props.conts} setConts={props.setConts} />);
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
      <ContainerArea conts={conts} setConts={setConts} />
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
  //console.log(formatted, "\n\n\n", middle, "\n\n\n", end);
  return (formatted);
}
function Right(props) {

  useEffect(()=> {
    /*let sel, selctedTxt = {}, ele = document.querySelector("#right>section"), eleHtml, ind, timeout = false;

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

    });*/
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
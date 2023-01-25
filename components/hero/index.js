import { AppWrap, MotionWrap } from "../wrapper";
import {INFO} from '../../constants/author'

// const FavTools = ['/flutter.png', '/node.png', '/react.png', '/cpp.png'];

const Hero = () => {

  return (
    <div className="app__hero app__flex">

      <div className="p-text">Hi<span>👋</span>, I am</div>
      <div className="head-text">Kha-Vi <span className="last-name">Nguyen</span></div>
      <div className="sub-text">{INFO.TITLE}</div>

      <div className="detail-text">
        <p>I am a <span>Software Engineer</span> specialized in both <span>Front-End/Hybrid Mobile</span> and <span>System</span> development.</p>
        <br />
        <p>Currently, I am exploring both Go/Node.js and React/React Native to build applications.</p>
      </div>

      <a className="filled-btn"
        href="CV_NguyenKhaVi_SE_010123.pdf" target="_blank" rel="noreferrer">
        View my CV
      </a>

      {/* <div className="fav__techs">
        {
          FavTools.map((tool, index) => {
            return (
              <div className="fav__tech" key={index}>
                <img src={tool} alt="tool" />
              </div>
            );
          })
        }
      </div> */}
    </div>
  );
}

export default AppWrap(MotionWrap(Hero, "home"), "home");

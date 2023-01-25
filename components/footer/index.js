import { AppWrap, MotionWrap } from "../wrapper";
import { BsTwitter, BsInstagram, BsLinkedin, BsFacebook, BsEnvelopeFill, BsCup } from "react-icons/bs";
import { INFO } from "../../constants/author";

const Footer = () => {

  return (
    <>
      <h2 className="head-text">Let&lsquo;s work together 🤝</h2>

      <div className="contact__info">
        <p>Mail me at 👇</p>
        <div className="email">
          <BsEnvelopeFill />
          <a
            href={`mailto:${INFO.EMAIL}`}
            target="_blank"
            rel="noreferrer"
          >
            {INFO.EMAIL}
          </a>
        </div>

      </div>

      <div className="app__Social">
        <p>Follow me here 👇</p>

        <div className="app__social__links">
          <a
            href={INFO.LINKED_IN}
            target="_blank"
            rel="noreferrer"
          >
            <BsLinkedin />
          </a>

          <a
            href={INFO.INSTAGRAM}
            target="_blank"
            rel="noreferrer"
          >
            <BsInstagram />
          </a>

          <a
            href={INFO.TWITTER}
            target="_blank"
            rel="noreferrer"
          >
            <BsTwitter />
          </a>

          <a
            href={INFO.FACEBOOK}
            target="_blank"
            rel="noreferrer"
          >
            <BsFacebook />
          </a>
        </div>
      </div>

    </>
  );
};

export default AppWrap(MotionWrap(Footer, "app__footer"), "contact");

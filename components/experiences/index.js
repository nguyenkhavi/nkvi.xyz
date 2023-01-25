import { BsFillCheckCircleFill } from 'react-icons/bs';
import { AppWrap, MotionWrap } from "../wrapper";

const ExperienceList = [
  {
    title: "Full-Stack Developer",
    company: "@SENS (https://sens-vn.com/)",
    duration: "5/2022 – now",
    desc: "Understanding and developing Mobile App based on the client’s requirements using React Native.\nBuilding APIs using NestJS, PostgreSQL and Microservices Architecture.",
    tags: ["React Native ", "Typescript", "NestJS", "PostgreQL", "Microservices", "Monorepo (NX)", "Build tools", "Android Studio", "XCode", "Native-API"],
  },
  {
    title: "Software Development Lead (Freelancing)",
    company: "@Ripid (http://ripid.vn)",
    duration: "5/2022 - 12/2022",
    desc: "Delegating tasks and achieving weekly goals, communicate to PO, Marketing Team to understand the requirements and implement features",
    tags: ["Management", "Communication", "React Native", "NextJS", "NodeJS", "MongoDB", "Native-API", "App Publish", "IAP"],
  },
  {
    title: "React/React-Native Developer",
    company: "@VStation",
    duration: "12/2020 – 5/2022",
    desc: "Communicating with Mobile Team to develop features for Application.\nBuild some admin features included user, league, team, media page management",
    tags: ["React", "React Native", "NextJS", "NodeJS", "MySQL"],
  },
];

const Experiences = () => {

  return (
    <>
      <h2>Experiences</h2>

      <div className="app__experiences">
        {
          ExperienceList.map((item, index) => (
            <div key={index} className="app__experiences__item">

              <h3 className="app__experiences__item__title">
                {item.title}
              </h3>

              <div className="app__experiences__item__company">
                {item.company}
              </div>

              <div className="app__experiences__item__duration">
                {item.duration}
              </div>

              <div className="app__experiences__item__description">
                {item.desc}
              </div>

              <div className="app__experiences__item__tags">
                {
                  item.tags.map((tag, index) => {
                    return (
                      <div key={index} className="app__experiences__item__tag">
                        <span><BsFillCheckCircleFill /></span>
                        <p className="p-text">{tag}</p>
                      </div>
                    )
                  })
                }
              </div>

            </div>
          ))
        }
      </div>
    </>
  );
};

export default AppWrap(MotionWrap(Experiences, "app__skills"), "experiences");

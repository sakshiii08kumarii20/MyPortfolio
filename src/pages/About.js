import React from "react";
import PText from "../components/PText";
import styled from "styled-components";
import AboutItems from "../components/AboutItems";
import Img from "../assets/images/image .jpg";
import DownloadCV from "../components/DownloadCV";

const AboutStyles = styled.div`
  padding: 16rem 0 10rem 0;
  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    .left {
      flex: 3;
      .about__subheading {
        font-size: 2.2rem;
        margin-bottom: 2rem;
        span {
          background-color: var(--deep-dark);
          padding: 0.5rem 1rem;
          border-radius: 8px;
        }
      }
      .about__heading {
        font-size: 3.6rem;
        margin-bottom: 3rem;
      }
      .about__info {
        margin-bottom: 5rem;
        padding-right: 5rem;
        p {
          max-width: 100%;
          font-size: 1.5rem;
        }
      }
    }
    .right {
      margin-right: 20px;
      flex: 1.5;
      img {
        border: 2px solid var(--gray-1);
      }
    }
  }

  .about__info__items {
    margin-top: 15rem;
  }

  @media only screen and (max-width: 768px) {
    padding: 10rem, 2rem;
    .top-section {
      flex-direction: column;
      gap: 7rem;
      .left {
        flex: 3;
        .about__subheading {
          font-size: 1.8rem;
        }
        .about__heading {
          font-size: 3rem;
        }
        .about__info {
          margin-bottom: 3rem;
        }
      }
    }
  }
`;

export default function About() {
  return (
    <AboutStyles>
      <div className="container">
        <div className="top-section">
          <div className="left">
            <p className="about__subheading">
              Hi, I am <span>Sakshikumari Thakur</span>
            </p>
            <h2 className="about__heading">
                A Tech Enthusiast Who Turns Ideas into Code
            </h2>
            <div className="about__info">
              <PText>
              I’m from Betiah, a historic town in Bihar, 
              and currently based in Pune, a fresher
              pursuing my Master’s degree while immersing myself in the world of software development.
                <br />
                <br />I’m at the beginning of my career and deeply passionate about coding and technology, 
                constantly learning and enhancing my skills.
                 I have a strong interest in Competitive Programming and Open Source contributions, 
                 and I’m always excited to explore new technologies.
              </PText>
            </div>
            <DownloadCV />
          </div>
          <div className="right">
            <img loading="lazy" src={Img} alt="My Img" />
          </div>
        </div>

        <div className="about__info__items">
          <AboutItems
            heading="My Skills"
            entries={[
              {
                title: "Technologies & Frameworks",
                items: [
                  "HTML",
                  "CSS",                 
                  "React JS",
                  "Node JS",
                  
                ],
              },
              {
                title: "Databases",
                items: ["MySQL", "MongoDB"],
              },
              

              
              {
                title: "Languages",
                items: ["JavaScript" , "Java"],
              },
              {
                title: "Other",
                items: ["DSA", "Power BI" , "Git "],
              },
            ]}
          />
          <AboutItems
            heading="Education"
            entries={[
              {
                title: "Msc(Computer Application)",
                items: [
                  "Modern College Shivajinagar, Pune",
    
                  "Marks: 85.90%",
                ],
              },

              {
                title: "B.Sc. (Computer Science) ",
                items: [
                  "ATSS College,Pune",    
                  "CGPA: 9.10",
                ],
              },
              {
                title: "HSC",
                items: [
                  "Pratibha Junior College,Chichwad,Pune",
                  "Marks: 66.97%",
                ],
              },
              {
                title: "SSC",
                items: [
                  "Samson Memorial Republic High School,Pune",
                  "Marks: 82%",
                ],
              },
            ]}
          />
        </div>
      </div>
    </AboutStyles>
  );
}
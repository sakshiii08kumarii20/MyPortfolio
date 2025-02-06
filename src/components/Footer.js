import React from "react";
import styled from "styled-components";
import FooterColumns from "./FooterColumns";
import PText from "./PText";

const FooterStyles = styled.div`
  padding-top: 5rem;
  background-color: var(--deep-dark);
  .container {
    display: flex;
    gap: 2rem;
    .footer__col1 {
      flex: 2;
      padding-right: 10rem;
      .footer__c1__title {
        font-size: 3.5rem;
        margin-bottom: 2rem;
      }
      p {
        font-size: 1.8rem;
      }
    }
    .footer__col2,
    .footer__col3, 
    .footer__col4 {
      flex: 1;
    }
  }
  .copyright {
    background-color: var(--dark-bg);
    margin-top: 3rem;
    padding: 0.6rem 0;
    text-align: center;
    p {
      display: inline-block;
      font-size: 1.8rem;
    }
  }

  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      gap: 0rem;
      & > div {
          margin-top: 5rem;
      }
      .footer__col1 {
        padding: 0;
      }
    }
  }
`;
export default function Footer() {
  return (
    <FooterStyles>
      <div className="container">
        <div className="footer__col1">
          <h1 className="footer__c1__title">Sakshikumari Thakur</h1>
          <PText>
            {
              "I am a passionate Software Developer, eager to collaborate and create impactful solutions."
            }
          </PText>
        </div>
        <div className="footer__col2">
          <FooterColumns
            heading="Nav Links"
            links={[
              {
                title: "- Home",
                path: "/",
                type: "Link",
              },
              {
                title: "- About",
                path: "/about",
                type: "Link",
              },
              {
                title: "- Projects",
                path: "/projects",
                type: "Link",
              },
              
              {
                title: "- Contact",
                path: "/contact",
                type: "Link",
              },
            ]}
          />
        </div>
        <div className="footer__col3">
          <FooterColumns
            heading="Social Links"
            links={[
              {
                title: "- LinkedIn",
                path: "https://www.linkedin.com/in/sakkshii/",
              },
              {
                title: "- Github",
                path: "https://github.com/sakshiii08kumarii20",
              },
              
              {
                title: "- Twitter",
                path: "https://x.com/thesakshii",
              },
            ]}
          />
        </div>
        <div className="footer__col3">
          <FooterColumns
            heading="Coding Profiles"
            links={[
              {
                title: "- HackerRank",
                path: "https://www.hackerrank.com/profile/thakursakshi2241",
              },
              // {
              //   title: "- CodeChef",
              //   path: "https://www.codechef.com/users/skshamagarwal",
              // },
              {
                title: "- LeetCode",
                path: "https://leetcode.com/u/Sakshikumari_Thakur/",
              },
            ]}
          />
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <p> © 2025 - Portfolio | Sakshikumari Thakur</p>
        </div>
      </div>
    </FooterStyles>
  );
}
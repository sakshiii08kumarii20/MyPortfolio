import React from "react";
import styled from "styled-components";
import FooterColumns from "./FooterColumns";
import PText from "./PText";

const FooterStyles = styled.div`
  padding-top: 3rem;
  background-color: var(--deep-dark);
  .container {
    display: flex;
    gap: 2rem;
    .footer__col1 {
      flex: 2;
      padding-right: 5rem;
      .footer__c1__title {
        font-size: 2.4rem;
        margin-bottom: 1rem;
      }
      p {
        font-size: 1.5rem;
        line-height: 1.4;
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
    margin-top: 2rem;
    padding: 0.4rem 0;
    text-align: center;
    p {
      font-size: 1.4rem;
    }
  }

  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      gap: 2rem;
      & > div {
        margin-top: 3rem;
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
        
      </div>
      <div className="copyright">
        <div className="container">
          <p> © 2025 - Portfolio | Sakshikumari Thakur</p>
        </div>
      </div>
    </FooterStyles>
  );
}
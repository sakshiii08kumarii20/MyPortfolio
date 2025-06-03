import React from "react";
import { MdEmail } from "react-icons/md";
import styled from "styled-components";
import ContactInfoItem from "../components/ContactInfoItem";
import SectionTitle from "../components/SectionTitle";
import { FaLinkedin } from "react-icons/fa";

const ContactSectionStyle = styled.div`
  padding: 10rem 0;
  .contact__wrapper {
    display: flex;
    gap: 5rem;
    margin-top: 7rem;
    justify-content: space-between;
    position: relative;

    .left {
      width: 100%;
      max-width: 500px;
    }
    .right {
      width: 100%;
      max-width: 500px;
    }
  }

  .contact__wrapper::after {
    position: absolute;
    content: "";
    width: 2px;
    height: 100%;
    background-color: var(--gray-1);
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  @media only screen and (max-width: 768px) {
    .contact__wrapper {
      flex-direction: column;
      .left,
      .right {
        max-width: 100%;
      }
      &::after {
        display: none;
      }
    }
  }
`;

const CustomContentStyle = styled.div`
  font-size: 1.8rem;
  color: var(--gray-1);
  background-color: var(--deep-dark);
  padding: 2rem;
  border-radius: 10px;
  line-height: 1.6;
`;

export default function Contact() {
  return (
    <>
      <ContactSectionStyle>
        <div className="container">
          <SectionTitle heading="Contact" subheading="Get in touch" />
          <div className="contact__wrapper">
            <div className="left">
              <a
                href="mailto:thakursakshi2244@gmail.com"
                target="_blank"
                rel="noreferrar noreferrer"
              >
                <ContactInfoItem
                  icon={<MdEmail />}
                  text="thakursakshi2244@gmail.com"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/sakkshii/"
                target="_blank"
                rel="noreferrar noreferrer"
              >
                <ContactInfoItem icon={<FaLinkedin />} text="LinkedIn" />
              </a>
              
            </div>
            <div className="right">
              <CustomContentStyle>
                <p>
                  Thank you for visiting my portfolio! I'm always excited to
                  connect, collaborate, or chat about new opportunities.
                </p>
                <p style={{ marginTop: '1rem' }}>
                  Whether you're interested in working together, have a
                  question, or just want to say hi, feel free to reach out
                  through email or LinkedIn.
                </p>
              </CustomContentStyle>
            </div>
          </div>
        </div>
      </ContactSectionStyle>
    </>
  );
}

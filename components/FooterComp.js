import React from "react";
import footerStyles from "../styles/Footer.module.css";
import { Footer } from "flowbite-react";

const FooterComp = () => {
  return (
    // <div className={footerStyles.footer}>
    //   <h3> Footer</h3>
    //   <br></br>
    //   <h3> Footer</h3>
    //   <br></br>
    //   <h3> Footer</h3>
    //       <br></br>
    //       <h2>by Gökay Demire</h2>
    // </div>
    <div className={`${footerStyles.footerContainer}`}>
      <Footer >
        <div className={`${footerStyles.footer} w-full`}>
          <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
            <div>
              <Footer.Brand
                href="https://flowbite.com"
                src="https://flowbite.com/docs/images/logo.svg"
                alt="Flowbite Logo"
                name="Flowbite"
              />
            </div>
            <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
              <div>
                <Footer.Title title="about" />
                <Footer.LinkGroup col={true}>
                  <Footer.Link href="#">LilMashriq</Footer.Link>
                  <Footer.Link href="#"></Footer.Link>
                </Footer.LinkGroup>
              </div>
              <div>
                <Footer.Title title="Follow us" />
                <Footer.LinkGroup col={true}>
                  <Footer.Link href="#">Twitter</Footer.Link>
                  <Footer.Link href="#">Facebook</Footer.Link>
                </Footer.LinkGroup>
              </div>
              <div>
                <Footer.Title title="Legal" />
                <Footer.LinkGroup col={true}>
                  <Footer.Link href="#">Privacy Policy</Footer.Link>
                  <Footer.Link href="#">Terms & Conditions</Footer.Link>
                </Footer.LinkGroup>
              </div>
            </div>
          </div>
          <Footer.Divider />
          <div className="w-full sm:flex sm:items-center sm:justify-between">
            <Footer.Copyright href="#" by="Flowbite™" year={2022} />
            <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
              {/* <Footer.Icon href="#" icon={BsFacebook}   />
            <Footer.Icon href="#" icon={BsInstagram}  />
            <Footer.Icon href="#" icon={BsTwitter}    />
            <Footer.Icon href="#" icon={BsGithub}    />
            <Footer.Icon href="#" icon={BsDribbble}  /> */}
            </div>
          </div>
        </div>
      </Footer>
    </div>
  );
};

export default FooterComp;

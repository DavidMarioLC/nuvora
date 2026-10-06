import DemoButton from "./demo-button";
import EmailSignup from "./email-signup";
import FacebookIcon from "./facebook-icon";
import Icon from "./icon";
import InstagramIcon from "./instagram-icon";
import LinkedInIcon from "./linkedin-icon";
import YouTubeIcon from "./youtube-icon";

export default function Footer() {
  return (
    <footer id="contact">
      <div className="container">
        <div className="footer-heading">
          <h2>Let’s Connect there</h2>
          <a className="button button-white" href="#pricing">
            Get Started <Icon name="arrow" />
          </a>
        </div>
        <div className="footer-grid">
          <div className="footer-about">
            <a className="logo" href="#home">
              <svg
                aria-hidden="true"
                fill="none"
                height="30"
                viewBox="0 0 32 32"
                width="30"
              >
                <path
                  d="M6 19a10 10 0 1 1 5 6M6 19l-2 7 7-2"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="3"
                />
                <path
                  d="m11 13 5 7 5-10"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                />
              </svg>
              Vehtvz
            </a>
            <p>
              Less busy work. More possibility.
              <br />
              Your all-in-one partner for smarter marketing, stronger teams, and
              sustainable growth.
            </p>
            <div className="footer-socials">
              <a
                aria-label="Instagram"
                href="https://www.instagram.com/"
                rel="noreferrer"
                target="_blank"
              >
                <InstagramIcon />
              </a>
              <a
                aria-label="LinkedIn"
                href="https://www.linkedin.com/"
                rel="noreferrer"
                target="_blank"
              >
                <LinkedInIcon />
              </a>
              <a
                aria-label="Facebook"
                href="https://www.facebook.com/"
                rel="noreferrer"
                target="_blank"
              >
                <FacebookIcon />
              </a>
              <a
                aria-label="YouTube"
                href="https://www.youtube.com/"
                rel="noreferrer"
                target="_blank"
              >
                <YouTubeIcon />
              </a>
            </div>
          </div>
          <div className="footer-links">
            <h4>Navigation</h4>
            <a href="#home">Home</a>
            <a href="#features">Features</a>
            <a href="#benefits">Benefits</a>
            <a href="#pricing">Pricing</a>
            <a href="#stories">Our stories</a>
          </div>
          <div className="footer-links">
            <h4>Let’s talk</h4>
            <p>
              Good ideas start with
              <br />a conversation.
            </p>
            <DemoButton label="Meet Vehtvz" />
          </div>
          <div className="footer-newsletter">
            <h4>Get the latest inspiration</h4>
            <p>A little growth, straight to your inbox.</p>
            <EmailSignup variant="footer" />
          </div>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Vehtvz. All rights reserved.</p>
          <p>Made for a brighter next chapter.</p>
        </div>
      </div>
    </footer>
  );
}

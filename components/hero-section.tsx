import { Star } from "lucide-react";
import Image from "next/image";
import EmailSignup from "./email-signup";
import Icon from "./icon";
import Navigation from "./navigation";
import StarRating from "./star-rating";

export default function HeroSection() {
  return (
    <section className="hero" id="home">
      <div aria-hidden="true" className="hero-grid" />
      <div className="container">
        <Navigation />
        <div className="hero-content">
          <div className="hero-copy">
            <a className="version-pill" href="#features">
              <span>Version 2.0 is here</span> Read more <Icon name="arrow" />
            </a>
            <h1>
              Grow Faster with
              <br />
              Expert Marketing
              <br />
              <span className="underlined">
                Solutions
                <svg
                  aria-hidden="true"
                  preserveAspectRatio="none"
                  viewBox="0 0 380 15"
                >
                  <path
                    d="M3 11Q185-7 376 7"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeWidth="3"
                  />
                </svg>
              </span>
            </h1>
            <p>
              Revolutionize the way you work with our all-in-one SaaS platform.
              Boost productivity and scale your business effortlessly with
              cutting-edge tools designed for your success.
            </p>
            <EmailSignup variant="hero" />
            <div className="social-proof">
              <div className="avatar-stack">
                <Image alt="" height={40} src="/images/client.jpg" width={40} />
                <Image alt="" height={40} src="/images/hero.png" width={40} />
                <Image alt="" height={40} src="/images/team.jpg" width={40} />
              </div>
              <div>
                <StarRating rating={4.9} />
                <small>1.0k+ happy customers</small>
              </div>
            </div>
          </div>
          <div className="hero-visual">
            <div className="portrait-circle">
              <div className="portrait-image-frame">
                <Image
                  alt="Smiling marketing expert pointing to a growth chart"
                  className="hero-portrait"
                  fill
                  loading="eager"
                  preload
                  sizes="(max-width: 650px) 85vw, 500px"
                  src="/images/hero.png"
                />
              </div>
            </div>
            <div className="floating-growth">
              <span>Growth</span>
              <div className="growth-bars">
                {[44, 71, 55, 85].map((height, i) => (
                  <div key={height}>
                    <i style={{ height: `${height}%` }} />
                    <small>{[18, 22, 24, 30][i]}</small>
                  </div>
                ))}
              </div>
              <div className="growth-foot">
                This month <strong>+32%</strong>
              </div>
            </div>
            <div className="float-icon float-top">
              <Icon name="spark" />
            </div>
            <div className="float-icon float-left">
              <Icon name="spark" />
            </div>
            <div className="expert-card">
              <div className="expert-star">
                <Star
                  aria-hidden="true"
                  fill="currentColor"
                  size="1em"
                  strokeWidth={0}
                />
              </div>
              <strong>Your growth. Our expertise.</strong>
              <div className="expert-bottom">
                <div className="expert-avatars">
                  <Image
                    alt=""
                    height={29}
                    src="/images/client.jpg"
                    width={29}
                  />
                  <Image alt="" height={29} src="/images/hero.png" width={29} />
                  <span>+8</span>
                </div>
                <span>Meet your team</span>
              </div>
            </div>
          </div>
        </div>
        <div aria-label="Trusted by leading brands" className="brands">
          <span className="brand-google">Google</span>
          <span className="brand-afterpay">
            afterpay <b>↔</b>
          </span>
          <span className="brand-asana">
            <i>
              <b />
              <b />
              <b />
            </i>
            asana
          </span>
          <span className="brand-dropbox">
            <svg aria-hidden="true" viewBox="0 0 24 24">
              <path
                d="m6 2 6 4-6 4-6-4 6-4Zm12 0 6 4-6 4-6-4 6-4ZM6 10l6 4-6 4-6-4 6-4Zm12 0 6 4-6 4-6-4 6-4Zm-6 6 6 4-6 4-6-4 6-4Z"
                fill="currentColor"
              />
            </svg>
            Dropbox
          </span>
          <span className="brand-spotify">
            <svg aria-hidden="true" viewBox="0 0 24 24">
              <circle cx="12" cy="12" fill="currentColor" r="11" />
              <path
                d="M5 9q8-3 15 1M6 12q7-2 13 1M7 15q6-2 11 1"
                fill="none"
                stroke="#6814b9"
                strokeLinecap="round"
                strokeWidth="1.6"
              />
            </svg>
            Spotify
          </span>
          <span className="brand-grammarly">
            <b>G</b>grammarly
          </span>
        </div>
      </div>
    </section>
  );
}

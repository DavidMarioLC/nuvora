import Image from "next/image";
import DemoButton from "./demo-button";
import Icon from "./icon";
import LineChart from "./line-chart";

export default function JourneySection() {
  return (
    <section className="journey section container" id="journey">
      <article className="journey-card">
        <div className="team-photo">
          <Image
            alt="A team collaborating on their next growth strategy"
            fill
            sizes="(max-width: 650px) 90vw, 450px"
            src="/images/team.jpg"
          />
        </div>
        <div className="journey-copy">
          <span className="eyebrow">BUILT FOR YOUR AMBITION</span>
          <h2>
            Everything You Need
            <br />
            to Master
          </h2>
          <p>
            Make growth a team effort. Get a clear picture of your business and
            the tools to turn your next big idea into your next big win.
          </p>
          <ul className="journey-checks">
            <li>
              <Icon name="check" /> Smart reporting tools
            </li>
            <li>
              <Icon name="check" /> Seamless teamwork
            </li>
            <li>
              <Icon name="check" /> All-in-one workspace
            </li>
            <li>
              <Icon name="check" /> Personalized insights
            </li>
          </ul>
          <DemoButton label="Explore the platform" />
        </div>
      </article>
      <article className="journey-card journey-reverse">
        <div className="journey-copy">
          <span className="eyebrow">A SIMPLE START. A BIGGER FUTURE.</span>
          <h2>
            Your Growth Journey
            <br />
            with Us
          </h2>
          <div className="journey-step">
            <span>01</span>
            <div>
              <h3>Sign Up in Minutes</h3>
              <p>
                A fresh start for your business. Pick your plan and make
                yourself at home.
              </p>
            </div>
          </div>
          <div className="journey-step">
            <span>02</span>
            <div>
              <h3>Connect Your Accounts Securely</h3>
              <p>
                Bring your favorite tools together and let your workflow take
                care of the rest.
              </p>
            </div>
          </div>
          <div className="journey-buttons">
            <a className="button button-purple button-small" href="#pricing">
              Get Started
            </a>
            <a
              aria-label="Learn More about Vehtvz features"
              className="button button-outline button-small"
              href="#features"
            >
              Learn More
            </a>
          </div>
        </div>
        <div className="journey-person">
          <div aria-hidden="true" className="journey-person-circle" />
          <div className="journey-portrait">
            <Image
              alt="Smiling growth expert adjusting her glasses while holding an open laptop"
              fill
              sizes="(max-width: 650px) 85vw, 430px"
              src="/images/journey-woman.png"
            />
          </div>
          <div className="journey-growth">
            <span>Looking good!</span>
            <strong>
              +32.6% <span>↗</span>
            </strong>
            <LineChart />
          </div>
          <div className="journey-badge">
            <Icon name="spark" /> A little help. A lot of growth.
          </div>
        </div>
      </article>
    </section>
  );
}

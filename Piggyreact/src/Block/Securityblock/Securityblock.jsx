
import "./securityblock.css"
import lock from "../../images/securitylock.svg"

const SecuritySection = () => (
  <section className="sec">
    <div className="security">
      <img src={lock} alt="Security"/>
      <div className="sectext">
        <h1>Your security is our priority</h1>
        <p>
          PiggyVest uses the highest level of Internet Security and it is secured
          by 256 bits SSL security encryption to ensure that your information is
          comepletely protected from fraud.
        </p>
        <h4>More on our security measures</h4>
      </div>
    </div>
  </section>
);

export default SecuritySection;
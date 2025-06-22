import investImg from '../../images/iphoneInvest.avif';
import "./Investblock.css"
const InvestmentSection = () => (
  <>
    <section className="diverse">
      <div className="diversetext">
        <h1>Diverse ways to Invest</h1>
        <p>Grow your money and invest for your future confidently.</p>
      </div>
    </section>
    <section className="pur">
      <div className="purple">
        <div className="purpletext">
          <h1>Earn Up to 35% returns</h1>
          <p>
            Invest securely and confidently on the go. Grow your money confidently
            by investing in pre-vetted investment opportunities.
          </p>
          <h5>Learn about Investments</h5>
        </div>
        <div className="purpleimg">
          <img src={investImg} alt="Investment" />
        </div>
      </div>
    </section>
  </>
);

export default InvestmentSection;
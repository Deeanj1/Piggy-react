import "./Footerblock.css";
import logoGrey from '../../images/greylogo.svg';
import complianceImg from '../../images/compliance-378fe121550ceac55d0eeb8c5edac2e7.avif';
import fb from '../../images/facebook.svg';
import ig from '../../images/instag.svg';
import twitter from '../../images/twitter.svg';
import tiktok from '../../images/titkok.svg';
import youtube from '../../images/youtube.svg';
import techcabal from '../../images/techcabal.png';
import cnbc from '../../images/cnbc.png';
import techcrunch from '../../images/techcrunch.png';
import pymnts from '../../images/pymnts.svg';
import fastcomp from '../../images/fastcomp.svg';
import cio from '../../images/cio.svg';

const Footer = () => (
  <>
    <section className="as">
      <div className="as">
        <h1>As featured in </h1>
      </div>
    </section>
    <section className="companies">
      <div className="comlogos">
        <img src={techcabal} alt="techcabal" />
        <img src={cnbc} alt="cnbc" />
        <img src={techcrunch} alt="techcrunch" />
        <img src={pymnts} alt="pymnts" />
        <img src={fastcomp} alt="fastcomp" />
        <img src={cio} alt="cio" />
      </div>
    </section>
    <section className="footer">
      <div className="footbox1">
        <img src={logoGrey} alt="Grey Logo" />
        <img src={complianceImg} alt="Compliance" />
      </div>
      <div className="foo">
        <div className="footbox2">
          <p>Products</p>
          <a href="">Piggybank</a>
          <a href="">Invest</a>
          <a href="">Safelock</a>
          <a href="">Target Savings</a>
          <a href="">Flex Naira</a>
          <a href="">Flex Dollar</a>
        </div>
        <div className="footbox2">
          <p>Company</p>
          <a href="">About </a>
          <a href="">FAQs</a>
          <a href="">Blog</a>
        </div>
        <div className="footbox2">
          <p>Legal</p>
          <a href="">Terms</a>
          <a href="">Privacy</a>
          <a href="">Security</a>
        </div>
      </div>
      <div className="footbox3">
        <div className="b3logo">
          <img src={fb} alt="Facebook" />
          <img src={ig} alt="Instagram" />
          <img src={twitter} alt="Twitter" />
          <img src={tiktok} alt="TikTok" />
          <img src={youtube} alt="YouTube" />
        </div>
        <p>Tesmot house, Abdulrahman Okene close,</p>
        <p>Victoria Island, Lagos, Nigeria.</p>
        <p>contact@piggyvest.com</p>
        <p>+234 700 933 9339</p>
      </div>
    </section>
    <section className="footinfo">
      <div className="infoo">
        <p className="info1">
          Piggyvest (formerly piggybank.ng) is the leading online savings &
          investing platform in Nigeria. For over 9 years, our customers have
          saved and invested billions of Naira that they would normally be
          tempted to spend.
        </p>
        <p className="info2">
          Capital Limited is a fund manager duly licensed by the Securities and
          Exchange Commission (SEC) of Nigeria.
        </p>
        <p className="info3">2016- 2025 PiggyTech Global Limited - RC 1405222</p>
      </div>
    </section>
  </>
);

export default Footer;
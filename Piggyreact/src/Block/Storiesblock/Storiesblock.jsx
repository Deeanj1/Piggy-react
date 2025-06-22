import fallbackImg from '../../images/fallbackImg.png';
import blackApple from '../../images/blackapple-icon.svg';
import googlePlay from '../../images/googleplay-icon.svg';
import "./Storiesblock.css"
const JoinUsSection = () => (
  <section className="join">
    <div className="joinimg">
      <img src={fallbackImg} alt="Join" />
    </div>
    <div className="jointext">
      <h1>Join 5+ million people who save and invest with us</h1>
      <div className="btn">
        <p>
          <img src={blackApple} alt="Apple" /> Get on iphone
        </p>
        <p>
          <img src={googlePlay} alt="Android" /> Get on Android
        </p>
      </div>
    </div>
  </section>
);

export default JoinUsSection;
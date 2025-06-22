import "./Heroblock.css"
import apple from "../../images/WhiteAppleLogo.svg";
import android from "../../images/googleplay-icon.svg";

const Herotext = () => {
    return (
        <div className="herotextcontainer">
            <div className="save">The 2024 PiggyVest Savings Report</div>
            <h1>The Better Way to Save & Invest</h1>
            <p>Piggyvest helps over 5 million customers achieve their financial goals by helping them save and invest with ease.</p>
            <div className="herobuttons">
            <button> <img className="tiny1" src={apple}></img> Get on iphone</button>
            <button> <img className="tiny" src={android}></img> Get on Android</button>
            
            </div>
        </div>
        
    )
}
export default Herotext;
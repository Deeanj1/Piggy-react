import "./Savingsblock.css";
import boxa from "../../images/PB 18 Small.png"
import boxb from"../../images/SL 22 Small.png"
import boxc from"../../images/iphonw.avif"
import boxd from"../../images/iPhone 14.avif"
import boxe from"../../images/iphone12.avif"
import boxg from"../../images/iPhone 14 - 1.png"

// const data = [
//   {
//     title: 'Automated Savings',
//     text: 'Build a dedicated savings faster on your terms, automatically or manually.',
//     label: 'Piggybank',
//     image: 'PB 18 Small.png',
//   },
//   {
//     title: 'Fixed Savings',
//     text: "Lock money away for a fixed duration without having access to it until maturity. It's like having a custom fixed deposit.",
//     label: 'Safelock',
//     image: 'SL 22 Small.png',
//   },
//   {
//     title: 'Goal-Oriented Savings',
//     text: 'Reach all your savings goals faster. Save towards multiple goals on your own or with a group.',
//     label: 'Target Savings',
//     image: 'iphonw.avif',
//   },
//   {
//     title: 'Flex Naira',
//     text: 'Save, transfer, manage, organise, and withdraw your money at any time.',
//     label: 'Flex Naira',
//     image: 'iPhone 14.avif',
//   },
//   {
//     title: 'Flex Dollar',
//     text: 'Save and grow your money in foreign currencies such as Dollars.',
//     label: 'Flex Dollar',
//     image: 'iphone12.avif',
//   },
//   {
//     title: 'HouseMoney',
//     text: 'Plan for your rent and household expenses',
//     label: 'HouseMoney',
//     image: 'iPhone 14 - 1.png',
//   },
// ];

const SavingsPlans = () => (
  <>
    <section className="many">
      <div className="manytext">
        <h1>Many ways to build your savings</h1>
        <p>Earn 12%-22% when you save with any of these PiggyVest plans.</p>
      </div>
    </section>
    <div className="grid-container">
        <div className="box box1">
          <div className="content">
            <span className="text">
                <h1>Automated Savings</h1>
                <p>Build a dedicated savings faster on your terms, automatically or manually.</p>
                <h5>Piggybank</h5>
            </span>
            
            <div className="overlay">
                <img src={boxa} alt="Image 1" />
                <div className="overtext"><h1>Automated Savings</h1>
                <p>Build a dedicated savings faster on your terms, automatically or manually.</p>
                <h5>Piggybank</h5></div>
            </div>
          </div>
        </div>
        <div className="box box2">
          <div className="content">
            <span className="text">
                <h1>Fixed Savings</h1>
                <p>Lock money away for a fixed duration without having access to it until maturity. It's like having a custom fixed deposit.</p>
                <h5>Safelock</h5>
            </span>
            
            <div className="overlay">
                <img src={boxb} alt="Image 1" />
                <div className="overtext"><h1>Fixed Savings</h1>
                <p>Lock money away for a fixed duration without having access to it until maturity. It's like having a custom fixed deposit.</p>
                <h5>Safelock</h5></div>
            </div>
          </div>
        </div>
        <div className="box box3">
          <div className="content">
            <span className="text">
                <h1>Goal-Oriented Savings</h1>
                <p>Reach all your savings goals faster. Save towards multiple goals on your own or with a group.</p>
                <h5>Target Savings</h5>
            </span>
            
            <div className="overlay">
                <img src={boxc} alt="Image 3" />
                <div className="overtext"><h1>Goal-Oriented Savings</h1>
                <p>Reach all your savings goals faster. Save towards multiple goals on your own or with a group.</p>
                <h5>Target Savings</h5></div>
            </div>
          </div>
        </div>
        <div className="box box4">
          <div className="content">
            <span className="text">
                <h1>Flex Naira</h1>
                <p>Save, transfer, manage, organise, and withdraw your money at any time.</p>
                <h5>Flex Naira</h5>
            </span>
            
            <div className="overlay">
                <img src={boxd} alt="Image 4" />
                <div className="overtext"><h1>Flex Naira</h1>
                <p>Save, transfer, manage, organise, and withdraw your money at any time.</p>
                <h5>Flex Naira</h5></div>
            </div>
          </div>
        </div>
        <div className="box box5">
          <div className="content">
            <span className="text">
                <h1>Flex Dollar</h1>
                <p>Save and grow your money in foreign currencies such as Dollars.</p>
                <h5>Flex Dollar</h5>
            </span>
            
            <div className="overlay">
                <img src={boxe} alt="Image 4" />
                <div className="overtext"><h1>Flex Dollar</h1>
                    <p>Save and grow your money in foreign currencies such as Dollars.</p>
                    <h5>Flex Dollar</h5></div>
            </div>
          </div>
        </div>
        <div className="box box6">
          <div className="content">
            <span className="text">
                <h1>HouseMoney</h1>
                <p>Plan for your rent and household expenses</p>
                <h5>HouseMoney</h5>
            </span>
            
            <div className="overlay">
                <img src={boxg} alt="Image 4" />
                <div className="overtext"><h1>HouseMoney</h1>
                    <p>Plan for your rent and household expenses</p>
                    <h5>HouseMoney</h5></div>
            </div>
          </div>
        </div>
      </div>
  </>
);

export default SavingsPlans;
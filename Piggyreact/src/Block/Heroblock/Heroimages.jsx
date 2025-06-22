import "./Heroblock.css";
import image1 from "../../images/pexels-ketut-subiyanto-4350099.avif";
import image2 from "../../images/Frame 80.png"
import image3 from"../../images/Frame 79.png"
import image4 from"../../images/Frame 1020.png"
import image5 from"../../images/Frame 78.png"
import image6 from"../../images/Frame 18.png"
import image7 from"../../images/Frame 82.png"

const Heroimages = () => {
    return (
        <div className="heroimagecontainer">
                
                    <img src={image1} className="bigimg" />
                    {/* <img src={image2} alt="Small Left 1" className="small-image left left1" />
                    <img src={image3} alt="Small Left 2" className="small-image left left2" />
                    <img src={image4} alt="Small Left 3" className="small-image left left3" />
                  
                    
                    <img src={image5} alt="Small Right 1" className="small-image right right1" />
                    <img src={image6} alt="Small Right 2" className="small-image right right2" />
                    <img src={image7} alt="Small Right 3" className="small-image right right3" />
                 */}
            </div>
    )
}

export default Heroimages;
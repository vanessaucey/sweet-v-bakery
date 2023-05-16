import "../style/About-Us.css"
import vanessa from "../images/vanessa.png"

function About() {
    return (
      <div className="App">
        <hr className="line"></hr>
        <section class="about-us" id="about-back">
				<h2>About Us</h2>
                <hr className="line-2"></hr>
                <h4 className="name-vanessa">
                    VANESSA VEGA - PASTRY CHEF, HOME BAKER, BLOGGER
                </h4>
                <img src={vanessa} alt="vanessa" className="vanessa-img"/>
                
				<p className="about-text">
        SweetVBakery is an online ordering platform that allows users to order delicious cakes and sweet treats from Vanessa's small business. Located in the bay area, SweetVBakery offers a wide variety of flavors and designs to choose from for any occasion.
        </p>
		</section>
      </div>
      
    );
  }
  
  export default About;
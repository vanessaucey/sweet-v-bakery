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
                    We are a family-owned cafe and bakery that has been serving the community for over 30 years. Our passion for baking and creating delicious treats is what drives us every day.
                    We are a family-owned cafe and bakery that has been serving the community for over 30 years. Our passion for baking and creating delicious treats is what drives us every day.
                </p>
		</section>
      </div>
      
    );
  }
  
  export default About;
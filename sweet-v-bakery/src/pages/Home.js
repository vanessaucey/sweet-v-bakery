import "../style/Home.css"
import "../style/About-Us.css"
// import heart1 from "../images/heart1.png";

function App() {
  return (
    <div> 
    <hr className="line"></hr>
	<div>
		<h4 className="bakery-txt">Sweet V Bakery</h4>
	</div>
        <div className="container-home">
                <section class="firstColumn">
                        <div>
                            {/*<img className="cakeImage" src={heart1} alt="Image 2" />*/}
                        </div>
                </section>
                <section class="middleColumn">
					<div>
                        <h2 className="welcomeSign">Welcome to Sweet V Bakery</h2>
                        <p id="welcomeSign-2">We serve the freshest and most delicious baked goods in town</p>
                        <a href="http://localhost:3000/order" id="btn-home">View Menu</a>        
                    </div>
                </section>

                    <section class="lastColumn">
                        <div>
                            {/*<img className="cakeImage" src={heart1} alt="Image 2" /> */}
                        </div>
                    </section>
        </div>
    </div>
  );
}

export default App;
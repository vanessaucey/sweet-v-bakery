import "../style/Home.css"
import "../style/About-Us.css"

function App() {
  return (
    <div className="App">
      <section class="hero-image">
			<div class="hero-text">
				<h1>Welcome to our cafe & bakery</h1>
				<p>We serve the freshest and most delicious baked goods in town</p>
				<a href="#" class="btn">View Menu</a>
			</div>
		</section>

		<section class="about-us">
			<div class="row">
				<div class="col-2">
					<h2>About us</h2>
					<p>We are a family-owned cafe and bakery that has been serving the community for over 30 years. Our passion for baking and creating delicious treats is what drives us every day.</p>
				</div>
				<div class="col-2">
					{/* <img src="https://via.placeholder.com/350x200" alt="Cafe and Bakery"> */}
				</div>
			</div>
		</section>

		<section class="menu">
			<h2>Our Menu</h2>
			<div class="row">
				<div class="col-3">
					<div class="menu-item">
						{/* <img src="https://via.placeholder.com/200x150" alt="Menu Item"> */}
						<h3>Menu Item 1</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis risus eget urna mollis ornare vel eu leo.</p>
						<span class="price">$5.99</span>
					</div>
				</div>
				<div class="col-3">
					<div class="menu-item">
						{/* <img src="https://via.placeholder.com/200x150" alt="Menu Item"> */}
						<h3>Menu Item 2</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis risus eget urna mollis ornare vel eu leo.</p>
						<span class="price">$4.99</span>
					</div>
				</div>
				<div class="col-3">
					<div class="menu-item">
						{/* <img src="https://via.placeholder.com/200x150" alt="Menu Item"> */}
						<h3>Menu Item 3</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis risus eget urna mollis ornare vel eu leo.</p>
						<span class="price">$3.99</span>
					</div>
				</div>
			</div>
		</section>
    </div>
    
  );
}

export default App;

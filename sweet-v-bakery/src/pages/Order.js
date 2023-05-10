function Order() {
    return (
      <div className="App">
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
  
  export default Order;
function Order() {
    return (
      <div className="App">
        <hr className="line"></hr>
          <section class="menu">
              <h2>Our Menu</h2>
              <div class="row">
                  <div class="col-3">
                      <div class="menu-item">
                          <h3>Naked Cake</h3>
                          <img src="https://via.placeholder.com/200x150" alt="Menu Item" />
                          <p>Naked cakes traditionally show the cake layer with very little buttercream</p>
                          <span class="price">$100</span>
                      </div>
                  </div>
                  <div class="col-3">
                      <div class="menu-item">
                      <h3>Frog Cake</h3>
                          <img src="https://via.placeholder.com/200x150" alt="Menu Item" />
                          <p>Your choice of cake flavor + additional designs</p>
                          <span class="price">$80</span>
                      </div>
                  </div>
                  <div class="col-3">
                      <div class="menu-item">
                      <h3>Carrot Cake</h3>
                          <img src="https://via.placeholder.com/200x150" alt="Menu Item" />
                          <p>3-Layers of carrot cake with cream cheese buttercream and toasted pecans</p>
                          <span class="price">$60</span>
                      </div>
                  </div>
              </div>
          </section>
      </div>
      
    );
  }
  
  export default Order;
import "../style/Contact.css"


function Contact() {
    return (
    <div className="App">
        <hr className="line"></hr>
        <section class="contact-us" id="contact-back">
				<h2>Contact Us</h2>
		</section>
        <section>
        <hr className="line-2"></hr>
                <h4 className="contact-info">
                    123-456-7890    |   SWEET.V.BAKERY@GMAIL.COM
                </h4>                
				<p className="contact-text">
                    Feel free to contact us during business hours. Or fill out the contact form below...           
                </p>
        </section>    
        <section className="form">
            <div className="form-name"> 
                <input type="text" placeholder="Name..." />
            </div>
            <div className="form-email"> 
                <input type="text" placeholder="Email..." />
            </div>
            <div className="form-subject"> 
                <input type="text" placeholder="Subject..." />
            </div>
            <div className="form-textarea">
                <textarea className="form-text-box" placeholder="Message..."></textarea>
            </div>
            <div className="form-btn">
                <button className="send-btn">Send Message</button>
            </div>

        </section>
        


    </div>
    );
  }
  
  export default Contact;


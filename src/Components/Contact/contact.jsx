import React from "react";
import "./contact.css";
import backgroundlogo from "../../assets/backgroundlogo.svg"
const Contact = () => {
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "549c0650-f25c-430f-8132-a36c49ff0706");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          alert(res.message);
        }
        else{
            alert(res.message, "Email has not been Sent");
        }
      };


  return (
    <div onSubmit={onSubmit} id="contact" className="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={backgroundlogo} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's Talk</h1>
          <p>I'm currently avaliable on taking a new project, so feel free to send me a message about anything that you want me to work on.You can contact anytime.</p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src="" alt="" /> <p>hamzasher7800@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src="" alt="" />
              <p>03067800089</p>
            </div>
            <div className="contact-detail">
              <img src="" alt="" /> <p>sector H-15, Islamabad</p>
            </div>
          </div>
        </div>

        <form className="contact-right">
          <label htmlFor="">Your Name</label>
          <input type="text" placeholder="Enter Your Name" name="name" />
          <label htmlFor="">Email</label>
          <input type="email" placeholder="Enter your Email" name="email" />
          <label htmlFor="">Enter your Message here</label>
          <textarea
            name="message"
            rows="8"
            placeholder="Enter your Message"
          ></textarea>
          <button type="submit" className="contact-submit">
            Submit now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

import photo from "../../images/aboutimage1.jpg";
import pic from "../../images/aboutimage2.jpg";
import './about.css';

function About() {
  return (
    <>
    <div className="about-us-title"><span>About Us</span></div>
      <div class="we-are-block">
        <div id="about-us-section">
          <div class="about-us-image">
            <img src={pic} width="708" height="458" alt="Lobby Image" />
          </div>

          <div class="about-us-info">
            <h2>Welcome</h2>

            <p>
              We understand that managing your student loans can be a
              challenging task, and we are here to help you every step of the
              way. Whether you have questions about loan repayment options, need
              assistance with your account, or want to explore opportunities for
              refinancing, our dedicated team is ready to provide you with the
              support and guidance you need. We believe that open communication
              is crucial, and we strive to provide exceptional customer service
              to ensure that your experience with us is seamless and
              stress-free. Please feel free to reach out to us using the contact
              information provided below, and we will be delighted to assist
              you.
            </p>

            <a className="about-us-a" href="#" title="About Us Button">
              HOME
            </a>
            <br/>
            <br/>
          </div>
        </div>

        <div id="history-section">
          <div class="history-image">
            <img src={photo} width="900" height="900" alt="Building Pic" />
          </div>

          <div class="history-info">
            <h2>Feel free to contact us</h2>

            <p>
              Your satisfaction is our priority, and we are committed to
              addressing any concerns or suggestions you may have. We welcome
              your comments on our services, website, or any other aspect of our
              operations. Your input allows us to continuously improve and
              provide you with the best possible experience. To get in touch
              with us, you can use the contact form below, and one of our
              representatives will respond to your message promptly.
              Alternatively, you can reach us through the provided phone number
              during our business hours. We appreciate your trust in Student
              Loan Bank and look forward to serving you with the utmost
              professionalism and efficiency.
            </p>

            <a className="about-us-a" href="#" title="History Button">
              SEARCH LOANS
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;

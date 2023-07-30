import "./Contact.css";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <>
      <section className="contact-address-area">
        <div className="container">
          <div className="sec-title-style1 text-center max-width">
            <div className="title">We Would Love TO HEAR FROM You</div>
            <div className="text">
              <div className="decor-left">
                <span></span>
              </div>
              <p>Quick Contact</p>
              <div className="decor-right">
                <span></span>
              </div>
            </div>
            <div className="bottom-text">
              <p>
                At Virtusa Bank, we are dedicated to helping students achieve
                their educational dreams by providing affordable and accessible
                student loans. With our extensive experience and commitment to
                excellence, we have become a trusted partner for students
                seeking financial support for their education.
              </p>
            </div>
          </div>
          <div className="contact-address-box row">
            <div className="col-sm-4 single-contact-address-box text-center">
              <div className="icon-holder">
                <span className="icon-clock-1">
                  <span className="path1"></span>
                  <span className="path2"></span>
                  <span className="path3"></span>
                  <span className="path4"></span>
                  <span className="path5"></span>
                  <span className="path6"></span>
                  <span className="path7"></span>
                  <span className="path8"></span>
                  <span className="path9"></span>
                  <span className="path10"></span>
                  <span className="path11"></span>
                  <span className="path12"></span>
                  <span className="path13"></span>
                  <span className="path14"></span>
                  <span className="path15"></span>
                  <span className="path16"></span>
                  <span className="path17"></span>
                  <span className="path18"></span>
                  <span className="path19"></span>
                  <span className="path20"></span>
                </span>
              </div>
              <h3>Virtusa </h3>
              <h2>Education is the key to world</h2>
            </div>
            {/* <!--End Single Contact Address Box-->
                    <!--Start Single Contact Address Box--> */}
            <div className="col-sm-4 single-contact-address-box main-branch">
              <h3>CONTACT US</h3>
              <div className="inner">
                <ul>
                  <li>
                    <div className="title">
                      <h4>Address:</h4>
                    </div>
                    <div className="text">
                      <p>
                        No:80, Annanagar
                        <br /> Chennai-64
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="title">
                      <h4>Ph & Fax:</h4>
                    </div>
                    <div className="text">
                      <p>
                        +123 456 789 <br /> test@info.com
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="title">
                      <h4>Office Hrs:</h4>
                    </div>
                    <div className="text">
                      <p>
                        Mon-Fri: 9:30am - 6:30pm
                        <br /> Sat-Sun: Closed
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            {/* <!--End Single Contact Address Box-->
                    <!--Start Single Contact Address Box--> */}
            <div className="col-sm-4 single-contact-address-box text-center">
              <div className="icon-holder">
                <span className="icon-question-2">
                  <span className="path1"></span>
                  <span className="path2"></span>
                  <span className="path3"></span>
                  <span className="path4"></span>
                </span>
              </div>
              <h3>Virtusa</h3>
              <h2>Easy loan, easy Study</h2>
            </div>
            {/* <!--End Single Contact Address Box--> */}
          </div>
        </div>
      </section>

      <section className="contact-info-area mx-auto">
        <div className="container">
          <div className="row ">
            <div className="col-xl-12 col-lg-12 col-md-6 col-sm-6">
              <div className="contact-form mx-auto">
                <div className="row">
                  
                    <div className="sec-title-style1 float-left">
                      <div className="title">Send us feedback</div>
                      <div className="text">
                        <div className="decor-left">
                          <span></span>
                        </div>
                        <p>Contact Form</p>
                      </div>
                    </div>
                    <div className="text-box float-right">
                      <p>
                        Feel Free to Contact us.{" "}
                      </p>
                    </div>
                </div>
                <div className="inner-box">
                  <form
                    id="contact-form"
                    name="contact_form"
                    className="default-form"
                    action="inc/sendmail.php"
                    method="post"
                  >
                    <div className="row">
                      <div className="col-xl-6 col-lg-12">
                      <div className="row">
                          <div className="col-xl-12">
                            <div className="input-box">
                              <input
                                type="text"
                                name="form_subject"
                                value=""
                                placeholder="Name"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-xl-12">
                            <div className="input-box">
                              <input
                                type="text"
                                name="form_subject"
                                value=""
                                placeholder="Email"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-xl-12">
                            <div className="input-box">
                              <input
                                type="text"
                                name="form_subject"
                                value=""
                                placeholder="Phone Number"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-xl-12">
                            <div className="input-box">
                              <input
                                type="text"
                                name="form_subject"
                                value=""
                                placeholder="Subject"
                              />
                            </div>
                          </div>
                        </div>

                      </div>
                      <div className="row">
                        <div className="col-xl-6 col-lg-12" >
                          <div className="input-box">
                            <textarea
                            name="form_message"
                            placeholder="Your Message..."
                            required=""
                          ></textarea>
                        </div>
                      </div>
                      <div className="row">
                        <div className="button-box">
                          <input
                            id="form_botcheck"
                            name="form_botcheck"
                            className="form-control"
                            type="hidden"
                            value=""
                          />
                          <button
                            type="submit"
                            data-loading-text="Please wait..."
                          >
                            Send Message<span className="flaticon-next"></span>
                          </button>
                        </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;

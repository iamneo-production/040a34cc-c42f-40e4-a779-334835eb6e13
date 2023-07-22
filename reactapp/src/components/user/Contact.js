import logo from './logo.svg';
import './App.css';
import photo from './download.jpeg';
var sectionStyle = {
  backgroundImage: `url(${photo})`,
};

function App() {
  return (
    <>
      <section class="contact-address-area">
        <div class="container">
          <div class="sec-title-style1 text-center max-width">
            <div class="title">We Would Love TO HEAR FROM You</div>
            <div class="text">
              <div class="decor-left">
                <span></span>
              </div>
              <p>Quick Contact</p>
              <div class="decor-right">
                <span></span>
              </div>
            </div>
            <div class="bottom-text">
              <p>
                At Virtusa Bank, we are dedicated to helping students achieve
                their educational dreams by providing affordable and accessible
                student loans. With our extensive experience and commitment to
                excellence, we have become a trusted partner for students
                seeking financial support for their education.
              </p>
            </div>
          </div>
          <div class="contact-address-box row">
            <div class="col-sm-4 single-contact-address-box text-center">
              <div class="icon-holder">
                <span class="icon-clock-1">
                  <span class="path1"></span>
                  <span class="path2"></span>
                  <span class="path3"></span>
                  <span class="path4"></span>
                  <span class="path5"></span>
                  <span class="path6"></span>
                  <span class="path7"></span>
                  <span class="path8"></span>
                  <span class="path9"></span>
                  <span class="path10"></span>
                  <span class="path11"></span>
                  <span class="path12"></span>
                  <span class="path13"></span>
                  <span class="path14"></span>
                  <span class="path15"></span>
                  <span class="path16"></span>
                  <span class="path17"></span>
                  <span class="path18"></span>
                  <span class="path19"></span>
                  <span class="path20"></span>
                </span>
              </div>
              <h3>Virtusa </h3>
              <h2>Education is the key to world</h2>
            </div>
            {/* <!--End Single Contact Address Box-->
                    <!--Start Single Contact Address Box--> */}
            <div class="col-sm-4 single-contact-address-box main-branch">
              <h3>CONTACT US</h3>
              <div class="inner">
                <ul>
                  <li>
                    <div class="title">
                      <h4>Address:</h4>
                    </div>
                    <div class="text">
                      <p>
                        Lorem Ipsum, 40C, Lorem Ipsum dummy,
                        <br /> Lorem Ipsum, Ch 98054
                      </p>
                    </div>
                  </li>
                  <li>
                    <div class="title">
                      <h4>Ph & Fax:</h4>
                    </div>
                    <div class="text">
                      <p>
                        +123 456 789 <br /> test@info.com
                      </p>
                    </div>
                  </li>
                  <li>
                    <div class="title">
                      <h4>Office Hrs:</h4>
                    </div>
                    <div class="text">
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
            <div class="col-sm-4 single-contact-address-box text-center">
              <div class="icon-holder">
                <span class="icon-question-2">
                  <span class="path1"></span>
                  <span class="path2"></span>
                  <span class="path3"></span>
                  <span class="path4"></span>
                </span>
              </div>
              <h3>Lorem Ipsum</h3>
              <h2>Science of today is technology</h2>
            </div>
            {/* <!--End Single Contact Address Box--> */}
          </div>
        </div>
      </section>

      <section class="contact-info-area mx-auto">
        <div class="container ">
          <div class="row " style={{ backgroundColor: "skyblue" }}>
            <div class="col-xl-12 col-lg-12 col-md-6 col-sm-6">
              <div class="contact-form mx-auto">
                <div class="row">
                  <div class="col-xl-6">
                    <div class="sec-title-style1 float-left">
                      <div class="title">Send us feedback</div>
                      <div class="text">
                        <div class="decor-left">
                          <span></span>
                        </div>
                        <p>Contact Form</p>
                      </div>
                    </div>
                    <div class="text-box float-right">
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.{" "}
                      </p>
                    </div>
                  </div>
                </div>
                <div class="inner-box">
                  <form
                    id="contact-form"
                    name="contact_form"
                    class="default-form"
                    action="inc/sendmail.php"
                    method="post"
                  >
                    <div class="row">
                      <div class="col-xl-6 col-lg-12">
                        <div class="row">
                          <div class="col-xl-6">
                            <div class="input-box">
                              <input
                                type="text"
                                name="form_name"
                                value=""
                                placeholder="Name"
                                required=""
                              />
                            </div>
                            <div class="input-box">
                              <input
                                type="text"
                                name="form_phone"
                                value=""
                                placeholder="Phone"
                              />
                            </div>
                          </div>
                          <div class="col-xl-6">
                            <div class="input-box">
                              <input
                                type="email"
                                name="form_email"
                                value=""
                                placeholder="Email"
                                required=""
                              />
                            </div>
                            <div class="input-box">
                              <input
                                type="text"
                                name="form_website"
                                value=""
                                placeholder="Website"
                              />
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-xl-12">
                            <div class="input-box">
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
                      <div class="col-xl-6 col-lg-12">
                        <div class="input-box">
                          <textarea
                            name="form_message"
                            placeholder="Your Message..."
                            required=""
                          ></textarea>
                        </div>
                        <div class="button-box">
                          <input
                            id="form_botcheck"
                            name="form_botcheck"
                            class="form-control"
                            type="hidden"
                            value=""
                          />
                          <button
                            type="submit"
                            data-loading-text="Please wait..."
                          >
                            Send Message<span class="flaticon-next"></span>
                          </button>
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

import React from "react";
const Section_7 = () => {
  return (
    <>
      <div className="section_7 pt-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="text-white section_7_left">
                <h2>
                  <span>KPK, </span>
                  <span>PAKISTAN </span>
                </h2>
                <h5 className="py-4">
                  Office #01, 1st Floor, Saidabad near Railway line,
                  <br /> Malakand dargai meherdy PAKISTAN
                </h5>
                <span className="fs-3">ZAREEN TECH</span>
                <h3 className="py-4">
                  <span>+92331 881 0284 , +92333 037 0057</span>
                </h3>
              </div>
            </div>
            <div className="col-md-6">
              <div className="section_7_form">
                <div class="row">
                  <div class="form-group col-sm-6">
                    <input
                      type="text"
                      name="name"
                      required=""
                      placeholder="Name*"
                      aria-required="true"
                    />
                  </div>
                  <div class="form-group col-sm-6 pt-4 pt-sm-0">
                    <input
                      type="email"
                      required=""
                      name="email"
                      placeholder="Email*"
                    />
                  </div>
                  <div class="form-group col-sm-12 py-3">
                    <input
                      type="text"
                      name="subject"
                      placeholder="Subject (Optinal)"
                    />
                  </div>
                  <div class="form-group col-sm-12">
                    <textarea
                      name="message"
                      required=""
                      placeholder="Message*"
                    ></textarea>
                  </div>
                  <div class="form-group form-group-message col-sm-12">
                    <span id="success" class="text-primary">
                      Thank You, your message is successfully sent!
                    </span>
                    <span id="error" class="text-primary">
                      Sorry, something went wrong{" "}
                    </span>
                  </div>
                  <div class="col-sm-12">
                    <button type="submit" class="s_button">
                      Contact me
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section_7;

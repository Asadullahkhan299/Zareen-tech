import React, { useState } from "react";

const ServicesCard = (props) => {
  const [fadeanimation, setFadeanimation] = useState("blockchain_right");
  const [fadeanimationLeft, setFadeanimationLeft] = useState("blockchain_left");
  const [color1, setColor1] = useState();
  const [color2, setColor2] = useState();
  const hoverEffect = () => {
    setFadeanimation("blockchain_right fadeRight");
    setColor1("#6b9b16");
    setColor2("#e8ffaf");
  };
  const hoverOutEffect = () => {
    setFadeanimation("blockchain_right");
    setColor1("#ffffff");
    setColor2("#ffffff");
  };
  const hoverEffectRight = () => {
    setFadeanimationLeft("blockchain_left fadeLeft");
    setColor1("#2a3380");
    setColor2("#287eaf");
  };
  const hoverOutEffectRight = () => {
    setFadeanimationLeft("blockchain_left");
    setColor1("#ffffff");
    setColor2("#ffffff");
  };

  return (
    <>
      <div
        className="section items pt-5"
        style={{
          background: `linear-gradient(to bottom,  ${color1} 0%,${color2} 100%)`,
        }}
      >
        <section className="blockchain">
          <div className="container web-dev">
            <div className="row">
              <div className="col-md-6 d-flex justify-content-center mb-5">
                <div
                  className={fadeanimationLeft}
                  style={{ backgroundImage: `url(${props.Leftimage})` }}
                  onMouseOver={hoverEffect}
                  onMouseOut={hoverOutEffect}
                >
                  <div className="position-absolute w-100">
                    <h4 className=" text-center pt-3">{props.LeftCardTitle}</h4>
                  </div>

                  <div className="web d-flex justify-content-center flex-column">
                    <div className="blockchain_left_inner">
                      <h3 className="heading">
                        {props.RightCardNameInLeftCard}
                      </h3>
                      <p className="para title-uppercase text-light">
                        {props.RightCardDescriptionInLeftCard}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 d-flex justify-content-center mt-5">
                <div
                  className={fadeanimation}
                  style={{ backgroundImage: `url(${props.RightImage})` }}
                  onMouseOver={hoverEffectRight}
                  onMouseOut={hoverOutEffectRight}
                >
                  <div className="position-absolute w-100">
                    <h4 className="text-center pt-3">{props.RightCardTitle}</h4>
                  </div>
                  <div className="web d-flex justify-content-center flex-column">
                    <div className="blockchain_right_inner">
                      <h3 className="heading">
                        {props.LeftCardNameInRightCard}
                      </h3>
                      <p className="para title-uppercase text-light">
                        {props.LeftCardDescriptionInRightCard}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ServicesCard;

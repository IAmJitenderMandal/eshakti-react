import React, { useState, useEffect } from "react";
import "react-responsive-modal/styles.css";
import "./productCustomization.scss";
import { Modal } from "react-responsive-modal";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { AiOutlineShareAlt } from "react-icons/ai";
import ImagesCustomization from "./ImagesCustomization";

export default function ProductCustomization({ open, close, currentVariant }) {
  const [style, setStyle] = useState({});
  useEffect(() => {
    currentVariant && getImgSize();
    currentVariant &&
      setCurrentCustom({
        neck_style: currentVariant ? currentVariant.neck_style[0] : null,
        bottom_style: currentVariant ? currentVariant.bottom_style[0] : null,
        sleeve_style: currentVariant ? currentVariant.sleeve_style[0] : null,
      });
  }, [currentVariant]);
  const [imageCustom, setImageCustom] = useState({
    top: [
      {
        id: "0",
        type: "top",
        name: "Peter Pan",
        img: "https://www.eshakti.com/styling%20images/Peter%20Pan.jpg",
        top:
          "https://www.eshakti.com/images/CL0080522/CL0080522-Neckline-Peter%20Pan.jpg?v=21011909",
      },
      {
        id: "1",
        type: "top",
        name: "Peter Pan",
        img: "https://www.eshakti.com/styling%20images/Peter%20Pan.jpg",
        top:
          "https://www.eshakti.com/images/CL0080522/CL0080522-Neckline-Peter%20Pan.jpg?v=21011909",
      },
      {
        id: "2",
        type: "top",
        name: "Mandarin Collar",
        img: "https://www.eshakti.com/styling%20images/Mandarin%20Collar.jpg",
        top:
          "https://www.eshakti.com/images/CL0080522/CL0080522-Neckline-Mandarin%20Collar.jpg?v=21012523",
      },
      {
        id: "3",
        type: "top",
        name: "Round Collar",
        img: "https://www.eshakti.com/styling%20images/Round%20Collar.jpg",
        top:
          "https://www.eshakti.com/images/CL0080522/CL0080522-Neckline-Round%20Collar.jpg?v=21012523",
      },
      {
        id: "4",
        type: "top",
        name: "Shawl collar",
        img: "https://www.eshakti.com/styling%20images/Shawl%20collar.jpg",
        top:
          "https://www.eshakti.com/images/CL0080522/CL0080522-Neckline-Shawl%20collar.jpg?v=21011910",
      },
    ],
    bottom: [
      {
        id: "0",
        type: "bottom",
        name: "Foot Length Dress",
        img: "https://www.eshakti.com/styling%20images/Floor_Length_Dress.jpg",
        bottom:
          "https://www.eshakti.com/images/CL0080522/CL0080522-Length-Floor%20Length%20Dress.jpg?v=21011909",
      },
      {
        id: "1",
        type: "bottom",
        name: "Foot Length Dress",
        img: "https://www.eshakti.com/styling%20images/Floor_Length_Dress.jpg",
        bottom:
          "https://www.eshakti.com/images/CL0080522/CL0080522-Length-Floor%20Length%20Dress.jpg?v=21011909",
      },
      {
        id: "2",
        type: "bottom",
        name: "4 Inch Above Ankle Length",
        img:
          "https://www.eshakti.com/styling%20images/4-inches-above-ankle-length.jpg",
        bottom:
          "https://www.eshakti.com/images/CL0080522/CL0080522-Length-4%20Inch%20Above%20Ankle%20Length.jpg?v=21012523",
      },
      {
        id: "3",
        type: "bottom",
        name: "Mini",
        img: "https://www.eshakti.com/styling%20images/Mini.jpg",
        bottom:
          "https://www.eshakti.com/images/CL0080522/CL0080522-Length-Mini.jpg?v=21012523",
      },
      {
        id: "4",
        type: "bottom",
        name: "Knee length",
        img: "https://www.eshakti.com/styling%20images/Knee%20length.jpg",
        bottom:
          "https://www.eshakti.com/images/CL0080522/CL0080522-Length-Knee%20length.jpg?v=21011909",
      },
    ],
    leftRight: [
      {
        id: "0",
        type: "leftRight",
        name: "Sleeveless",
        img: "https://www.eshakti.com/styling%20images/Sleeveless.jpg",
        left:
          "https://www.eshakti.com/images/CL0080522/CL0080522-SleeveType-Sleeveless_L.jpg?v=21011909",
        right:
          "https://www.eshakti.com/images/CL0080522/CL0080522-SleeveType-Sleeveless_R.jpg?v=21011909",
      },
      {
        id: "1",
        type: "leftRight",
        name: "Sleeveless",
        img: "https://www.eshakti.com/styling%20images/Sleeveless.jpg",
        left:
          "https://www.eshakti.com/images/CL0080522/CL0080522-SleeveType-Sleeveless_L.jpg?v=21011909",
        right:
          "https://www.eshakti.com/images/CL0080522/CL0080522-SleeveType-Sleeveless_R.jpg?v=21011909",
      },
      {
        id: "2",
        type: "leftRight",
        name: "Short length",
        img: "https://www.eshakti.com/styling%20images/Short%20length.jpg",
        left:
          "https://www.eshakti.com/images/CL0080522/CL0080522-SleeveType-Short%20length_L.jpg?v=21012523",
        right:
          "https://www.eshakti.com/images/CL0080522/CL0080522-SleeveType-Short%20length_R.jpg?v=21012523",
      },
      {
        id: "3",
        type: "leftRight",
        name: "Three quarter length",
        img:
          "https://www.eshakti.com/styling%20images/Three%20quarter%20length.jpg",
        left:
          "https://www.eshakti.com/images/CL0080522/CL0080522-SleeveType-Three%20quarter%20length_L.jpg?v=21012523",
        right:
          "https://www.eshakti.com/images/CL0080522/CL0080522-SleeveType-Three%20quarter%20length_R.jpg?v=21012523",
      },
      {
        id: "4",
        type: "leftRight",
        name: "Long Length",
        img: "https://www.eshakti.com/styling%20images/Long%20length.jpg",
        left:
          "https://www.eshakti.com/images/CL0080522/CL0080522-SleeveType-Long%20length_L.jpg?v=21011910",
        right:
          "https://www.eshakti.com/images/CL0080522/CL0080522-SleeveType-Long%20length_R.jpg?v=21011910",
      },
    ],
  });

  const [currentCustom, setCurrentCustom] = useState();

  const changeImage = (data) => {
    getImgSize();
    if (data.type === "neck_style") {
      setCurrentCustom({ ...currentCustom, neck_style: data });
    } else if (data.type === "bottom_style") {
      setCurrentCustom({ ...currentCustom, bottom_style: data });
    } else {
      setCurrentCustom({
        ...currentCustom,
        sleeve_style: data,
      });
    }
  };

  const getImgSize = () => {
    var style = {};

    var neck_design = new Image();
    neck_design.src = currentVariant.neck_style[0].neck_design;

    style.topWidth = neck_design.width;
    style.topHeight = neck_design.height;

    var lhand_design = new Image();
    lhand_design.src = currentVariant.sleeve_style[0].lhand_design;
    style.leftWidth = lhand_design.width;

    var rhand_design = new Image();
    rhand_design.src = currentVariant.sleeve_style[0].rhand_design;
    style.rightWidth = rhand_design.width;

    var bottom_design = new Image();
    bottom_design.src = currentVariant.bottom_style[0].bottom_design;
    style.bottomWidth = bottom_design.width;
    style.bottomHeight = bottom_design.height;

    setStyle(style);
    return style;
  };

  const onCloseModal = () => {
    close();
  };

  const left = (e) => {
    sideScroll(
      e.target.parentElement.parentElement.lastChild,
      "left",
      25,
      55,
      10
    );
  };
  const right = (e) => {
    sideScroll(
      e.target.parentElement.parentElement.lastChild,
      "right",
      25,
      55,
      10
    );
  };

  const sideScroll = (element, direction, speed, distance, step) => {
    let scrollAmount = 0;
    var slideTimer = setInterval(function () {
      if (direction == "left") {
        element.scrollLeft -= step;
      } else {
        element.scrollLeft += step;
      }
      scrollAmount += step;
      if (scrollAmount >= distance) {
        window.clearInterval(slideTimer);
      }
    }, speed);
  };

  return (
    <div>
      <Modal
        classNames={{
          modal: "customization-modal p-0",
        }}
        open={open}
        onClose={onCloseModal}
        center
      >
        <div className="main-customization-wrapper">
          <div className="product-customization-container">
            <ImagesCustomization
              currentCustom={currentCustom}
              style={style}
            ></ImagesCustomization>
            <div className="details-wrapper">
              <h5 className="product-title">
                Customize your style with eShakti FX
              </h5>
              <p className="text-lead">
                Click on any box and see the style change!
              </p>

              <div className="attribute-wrapper">
                <div className="attribute-header">NECKLINE</div>
                <div className="attribute-container">
                  <div className="default-attribute">
                    <div className="text-lead">As Shown</div>
                    {currentCustom &&
                    currentCustom.top &&
                    currentCustom.top.id === "0" ? (
                      <div className="default-image selected-image">
                        <div className="text-lead">Default</div>
                      </div>
                    ) : (
                      <div
                        className="default-image"
                        onClick={changeImage.bind(this, imageCustom.top[0])}
                      >
                        <div className="text-lead">Default</div>
                      </div>
                    )}
                  </div>
                  <div className="customize-slider-container">
                    <div className="text-lead">Click to change Neckline</div>
                    <div className="images-slider">
                      {currentVariant &&
                        currentVariant.neck_style.map(
                          (image, key) =>
                            image.id !== "0" && (
                              <div
                                key={key}
                                className="image"
                                onClick={changeImage.bind(this, image)}
                              >
                                {currentCustom &&
                                currentCustom.neck_style &&
                                currentCustom.neck_style.id === image.id ? (
                                  <img
                                    className="selected-image"
                                    src={image.design_icon}
                                    alt=""
                                  />
                                ) : (
                                  <img src={image.design_icon} alt="" />
                                )}
                                <p className="text-lead">{image.design_name}</p>
                              </div>
                            )
                        )}
                    </div>
                  </div>
                </div>
              </div>

              <div className="attribute-wrapper">
                <div className="attribute-header">SLEEVE TYPE</div>
                <div className="attribute-container">
                  <div className="default-attribute">
                    <div className="text-lead">As Shown</div>
                    {currentCustom &&
                    currentCustom.leftRight &&
                    currentCustom.leftRight.id === "0" ? (
                      <div className="default-image selected-image">
                        <div className="text-lead">Default</div>
                      </div>
                    ) : (
                      <div
                        className="default-image"
                        onClick={changeImage.bind(
                          this,
                          imageCustom.leftRight[0]
                        )}
                      >
                        <div className="text-lead">Default</div>
                      </div>
                    )}
                  </div>
                  <div className="customize-slider-container">
                    <div className="text-lead">Click to change Sleeve Type</div>
                    <div className="left-button" onClick={left}>
                      <BsChevronLeft />
                    </div>
                    <div className="right-button" onClick={right}>
                      <BsChevronRight />
                    </div>
                    <div className="images-slider">
                      {currentVariant &&
                        currentVariant.sleeve_style.map(
                          (image, key) =>
                            image.id !== "0" && (
                              <div
                                key={key}
                                className="image"
                                onClick={changeImage.bind(this, image)}
                              >
                                {currentCustom &&
                                currentCustom.sleeve_style &&
                                currentCustom.sleeve_style.id === image.id ? (
                                  <img
                                    className="selected-image"
                                    src={image.design_icon}
                                    alt=""
                                  />
                                ) : (
                                  <img src={image.design_icon} alt="" />
                                )}

                                <p className="text-lead">{image.design_name}</p>
                              </div>
                            )
                        )}
                    </div>
                  </div>
                </div>
              </div>

              <div className="attribute-wrapper">
                <div className="attribute-header">LENGTH</div>
                <div className="attribute-container">
                  <div className="default-attribute">
                    <div className="text-lead">As Shown</div>
                    {currentCustom &&
                    currentCustom.bottom &&
                    currentCustom.bottom.id === "0" ? (
                      <div className="default-image selected-image">
                        <div className="text-lead">Default</div>
                      </div>
                    ) : (
                      <div
                        className="default-image"
                        onClick={changeImage.bind(this, imageCustom.bottom[0])}
                      >
                        <div className="text-lead">Default</div>
                      </div>
                    )}
                  </div>
                  <div className="customize-slider-container">
                    <div className="text-lead">Click to change Sleeve Type</div>
                    <div className="left-button" onClick={left}>
                      <BsChevronLeft />
                    </div>
                    <div className="right-button" onClick={right}>
                      <BsChevronRight />
                    </div>
                    <div className="images-slider">
                      {currentVariant &&
                        currentVariant.bottom_style.map(
                          (image, key) =>
                            image.id !== "0" && (
                              <div
                                key={key}
                                className="image"
                                onClick={changeImage.bind(this, image)}
                              >
                                {currentCustom &&
                                currentCustom.bottom_style &&
                                currentCustom.bottom_style.id === image.id ? (
                                  <img
                                    className="selected-image"
                                    src={image.design_icon}
                                    alt=""
                                  />
                                ) : (
                                  <img src={image.design_icon} alt="" />
                                )}
                                <p className="text-lead">{image.design_name}</p>
                              </div>
                            )
                        )}
                    </div>
                  </div>
                </div>
              </div>

              <div className="other-option-wrapper">
                <div className="other-option-header">OTHER OPTIONS (FREE)</div>
                <div className="checkbox-group">
                  <input type="checkbox" />
                  <label htmlFor="">Remove Pocket</label>
                </div>
                <div className="checkbox-group">
                  <input type="checkbox" />
                  <label htmlFor="">Remove Embroidery / Embellishment</label>
                </div>
                <div className="checkbox-group">
                  <input type="checkbox" />
                  <label htmlFor="">Add Side Zip</label>
                </div>
              </div>
            </div>
          </div>
          <div className="customization-footer">
            <div className="left-footer">
              <p className="text-lead">
                Selected style options -{" "}
                {currentCustom && currentCustom.top && currentCustom.top.name},{" "}
                {currentCustom &&
                  currentCustom.leftRight &&
                  currentCustom.leftRight.name}
                ,{" "}
                {currentCustom &&
                  currentCustom.bottom &&
                  currentCustom.bottom.name}
              </p>
              <div className="share">
                <AiOutlineShareAlt /> <span> Share</span>
              </div>
            </div>
            <div className="right-footer">
              <div className="btn save-style">Save Style</div>
              <div className="btn process-style">Select style & proceed</div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}

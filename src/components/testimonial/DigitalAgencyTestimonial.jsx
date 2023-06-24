import React, { useEffect } from "react";
import { gsap } from "gsap";
import Testimonial11 from "../../../public/assets/imgs/testimonial/1/1.png";
import Testimonial12 from "../../../public/assets/imgs/testimonial/1/2.png";
import Testimonial13 from "../../../public/assets/imgs/testimonial/1/3.png";
import Image from "next/image";

const DigitalAgencyTestimonial = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      var testimonial = document.querySelector(".testimonial__area");
      if (testimonial) {
        // Testimonial Modal 1
        var modal_testimonial = document.querySelector("#modal_testimonial");
        var modal_trigger = document.querySelector(".modal-trigger");
        var modal_close = document.querySelector("#modal_close");

        modal_trigger.addEventListener("click", function () {
          modal_testimonial.classList.add("modal-show");
        });
        modal_close.addEventListener("click", function () {
          modal_testimonial.classList.remove("modal-show");
        });

        // Testimonial Modal 2
        var modal_testimonial_2 = document.querySelector("#modal_testimonial2");
        var modal_trigger_2 = document.querySelector(".modal-trigger-2");
        var modal_close_2 = document.querySelector("#modal_close2");

        modal_trigger_2.addEventListener("click", function () {
          modal_testimonial_2.classList.add("modal-show");
        });
        modal_close_2.addEventListener("click", function () {
          modal_testimonial_2.classList.remove("modal-show");
        });

        // Testimonial Modal 3
        var modal_testimonial_3 = document.querySelector("#modal_testimonial3");
        var modal_trigger_3 = document.querySelector(".modal-trigger-3");
        var modal_close_3 = document.querySelector("#modal_close3");

        modal_trigger_3.addEventListener("click", function () {
          modal_testimonial_3.classList.add("modal-show");
        });
        modal_close_3.addEventListener("click", function () {
          modal_testimonial_3.classList.remove("modal-show");
        });
      }
      imageMoving(".testimonial__area", ".testimonial__img img");
    }
  }, []);

  function imageMoving(wrapper, image_list) {
    let container = document.querySelector(wrapper);
    try {
      if (container) {
        container.addEventListener("mousemove", (e) => {
          let tHero = gsap.context(() => {
            var x = e.clientX;
            var y = e.clientY;
            let viewportWidth = window.innerWidth;
            let center = viewportWidth / 2;
            let centerHeight = innerHeight / 2;

            if (x > center) {
              gsap.to(image_list, {
                x: 15,
                duration: 5,
                ease: "power4.out",
              });
            } else {
              gsap.to(image_list, {
                x: -15,
                duration: 5,
                ease: "power4.out",
              });
            }
            if (y > centerHeight) {
              gsap.to(image_list, {
                y: 15,
                duration: 5,
                ease: "power4.out",
              });
            } else {
              gsap.to(image_list, {
                y: -15,
                duration: 5,
                ease: "power4.out",
              });
            }
          });
          return () => tHero.revert();
        });
      }
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <>
      <section className="testimonial__area" style={{ position: "relative" }}>
        <div className="container g-0 line">
          <span className="line-3"></span>
          <div className="row">
            <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-8">
              <div className="testimonial__wrapper">
                <div className="testimonial__item item-1">
                  <div className="button modal-trigger">
                    <div className="testimonial__img b-right">
                      <Image
                        priority
                        width={330}
                        style={{height: "auto"}}
                        src={Testimonial11}
                        alt="Testimonial Image"
                      />
                    </div>

                    <h2 className="testimonial__title">Jessica Sherlock</h2>
                    <h3 className="testimonial__role">Manager, Oitaka</h3>
                  </div>
                </div>
                <div className="sec-title-wrapper text-anim">
                  <h4 className="sec-sub-title">Testimonials</h4>
                  <h5 className="sec-title title-anim">
                    Clients <br />
                    feedback
                  </h5>
                  <p>
                    Our happy customers give us impactfull and positive feedback
                    on our services, customer supports & etc.
                  </p>
                </div>
              </div>

              <div className="testimonial__item item-2">
                <div className="button modal-trigger-2">
                  <div className="testimonial__img b-left">
                    <Image
                      priority
                      width={220}
                      height={300}
                      src={Testimonial13}
                      alt="Testimonial Image"
                    />
                  </div>

                  <h2 className="testimonial__title">Jessica Sherlock</h2>
                  <h3 className="testimonial__role">Manager, Oitaka</h3>
                </div>
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
              <div className="testimonial__item item-3 img-">
                <div className="button modal-trigger-3">
                  <div className="testimonial__img b-left">
                    <Image
                      priority
                      width={260}
                      height={360}
                      src={Testimonial12}
                      alt="Testimonial Image"
                    />
                  </div>

                  <h2 className="testimonial__title">adam Smith</h2>
                  <h3 className="testimonial__role">Manager, Oitaka</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DigitalAgencyTestimonial;

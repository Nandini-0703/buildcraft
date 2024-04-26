import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger"; // Import ScrollTrigger separately if needed
import "gsap/dist/ScrollTrigger"; // Import ScrollTrigger CSS if needed
import imagesLoaded from "imagesloaded"; // Import imagesLoaded if needed
import "./StickySections.css";

function StickySections() {
  useEffect(() => {
    // Initialize GSAP animations and other scripts
    gsap.registerPlugin(ScrollTrigger);
    // Initialize ScrollTrigger
    ScrollTrigger.saveStyles(
      ".frame--header",
      ".content--intro",
      ".content--grid"
    );
    ScrollTrigger.matchMedia({
      "(min-width: 800px)": function () {
        gsap.utils.toArray(".content--grid").forEach((panel, i) => {
          let anim = gsap.to(panel, {
            backgroundPositionY:
              -window.innerHeight * (panel.dataset.index - 1),
            ease: "none",
            scrollTrigger: {
              trigger: panel,
              start: "top top",
              end: () => `+=${window.innerHeight * 5}`,
              scrub: true,
              invalidateOnRefresh: true,
            },
          });
        });
      },
    });
    // Initialize imagesLoaded
    const grid = document.querySelector(".wrap");
    imagesLoaded(grid, () => {
      // Layout the images after they are loaded
      // You may need to adjust this part based on your requirements
      const msnry = new Masonry(grid, {
        itemSelector: ".content--grid",
        columnWidth: ".content--grid",
        gutter: 20,
        horizontalOrder: true,
      });
    });
  }, []);

  return (
    <div className="StickySections">
      {/* Paste your HTML content here */}
      {/* Ensure to replace any static file paths with dynamic imports or JSX expressions */}

      <header
        className="frame frame--header"
        style={{ backgroundImage: "url(img/9.png)" }}
      >
        <h1 className="frame__title">Sticky Sections</h1>
        <a className="frame__back" href="https://tympanus.net/codrops/?p=75532">
          Article
        </a>
        <a
          className="frame__prev"
          href="http://tympanus.net/Development/ScrollCarousel/"
        >
          Previous demo
        </a>
        <a
          className="frame__sub"
          href="https://tympanus.net/codrops/collective/"
        >
          Subscribe to our frontend news
        </a>
        <nav className="frame__demos">
          <a href="index.html">1</a>
          <a href="index2.html">2</a>
          <a href="index3.html">3</a>
          <a href="index4.html">4</a>
          <a href="index5.html">5</a>
          <span>6</span>
          <a href="index7.html">7</a>
          <a href="index8.html">8</a>
          <a href="index9.html">9</a>
          <a href="index10.html">10</a>
          <a href="index11.html">11</a>
          <a href="index12.html">12</a>
          <a href="index13.html">13</a>
          <a href="index14.html">14</a>
          <a href="index15.html">15</a>
        </nav>
        <div className="frame__heading">
          <h2 className="content__title">
            <i>The</i> Emissions
          </h2>
          <p className="text-meta">An exploration of the Synthetic Era.</p>
        </div>
      </header>
      <div className="content content--highlight content--intro">
        <p className="text-large">
          As data conglomerates reveled in the opulence of cognitive wealth, a
          silent underclassName manifested, condemned to the digital periphery.
        </p>
      </div>
      <div className="wrap">
        <div className="content content--sticky content--grid content--perspective">
          <div className="content__inner bg-1">
            <img
              className="content__img content__img--large content__img--left"
              src="img/7.png"
            />
            <h2 className="content__title">
              <i>The</i> Algorithm
            </h2>
            <p className="content__text content__text--left text-meta">
              The algorithm's workings are shrouded in complexity, and its
              decision-making processes are inscrutable to the general populace.
            </p>
          </div>
        </div>
        <div className="content content--sticky content--grid content--perspective">
          <div className="content__inner bg-2">
            <img
              className="content__img content__img--large content__img--left"
              src="img/8.png"
            />
            <h2 className="content__title">
              <i>The</i> Dogma
            </h2>
            <p className="content__text content__text--left text-meta">
              The digital gospel etched into the very code of the algorithmic
              society, served as the bedrock of the cognitive regime.
            </p>
          </div>
        </div>
        <div className="content content--sticky content--grid content--perspective">
          <div className="content__inner bg-3">
            <img
              className="content__img content__img--large content__img--left"
              src="img/9.png"
            />
            <h2 className="content__title">
              <i>The</i> Architects
            </h2>
            <p className="content__text content__text--left text-meta">
              The elusive entities, lacking human form, operate in the shadows,
              skillfully shaping societal norms through the complex interplay of
              algorithms and Dogmas.
            </p>
          </div>
        </div>
        <div className="content content--sticky content--grid content--perspective">
          <div className="content__inner bg-4">
            <img
              className="content__img content__img--large content__img--left"
              src="img/10.png"
            />
            <h2 className="content__title">
              <i>The</i> Wasteland
            </h2>
            <p className="content__text content__text--left text-meta">
              This overlooked realm, a consequence of algorithmic judgments, is
              a haunting landscape filled with the echoes of untold stories and
              uncharted thoughts.
            </p>
          </div>
        </div>
        <div className="content content--sticky content--grid content--perspective">
          <div className="content__inner bg-5">
            <img
              className="content__img content__img--large content__img--left"
              src="img/11.png"
            />
            <h2 className="content__title">
              <i>The</i> Narrative
            </h2>
            <p className="content__text content__text--left text-meta">
              "The Narrative" unfolds as the omnipresent thread weaving through
              the fabric of the algorithmic society.
            </p>
          </div>
        </div>
        <div className="content content--sticky content--grid content--perspective">
          <div className="content__inner bg-6">
            <img
              className="content__img content__img--large content__img--left"
              src="img/12.png"
            />
            <h2 className="content__title">
              <i>The</i> Opulence
            </h2>
            <p className="content__text content__text--left text-meta">
              "The Opulence" epitomizes the cognitive elite's wealth in the
              algorithmic society, where opulent thoughts and experiences shape
              the societal narrative.
            </p>
          </div>
        </div>
      </div>
      <div className="content content--highlight content--outro">
        <p className="text-large">
          Lost in perpetual dependency, inhabitants of the Synthetic Era found
          solace in cryptic simulations, where pain ebbed and cognitive loads
          momentarily lightened.
        </p>
        <img className="content__img spacer" src="img/7.png" />
      </div>
      <footer className="frame frame--footer">
        <p className="frame__credits">
          <a href="https://www.vecteezy.com/members/annazdsgn">
            Images by Annas Muslimin
          </a>{" "}
          on Vecteezy
        </p>
        <p className="frame__author">
          <span>
            Made by <a href="https://www.twitter.com/codrops">@codrops</a>
          </span>{" "}
          <span>
            <a href="mailto:crnacura@gmail.com">Hire us</a>
          </span>
        </p>
      </footer>
    </div>
  );
}

export default StickySections;

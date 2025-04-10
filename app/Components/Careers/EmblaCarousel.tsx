"use client";

import React, { useCallback, useEffect, useRef } from "react";
import {
  EmblaCarouselType,
  EmblaEventType,
  EmblaOptionsType,
} from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";

import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";

const TWEEN_FACTOR_BASE = 0.52;

const numberWithinRange = (number: number, min: number, max: number): number =>
  Math.min(Math.max(number, min), max);

type PropType = {
  slides: number[];
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const tweenFactor = useRef(0);
  const tweenNodes = useRef<HTMLElement[]>([]);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  const setTweenNodes = useCallback((emblaApi: EmblaCarouselType): void => {
    tweenNodes.current = emblaApi.slideNodes().map((slideNode) => {
      return slideNode.querySelector(".embla__slide__number") as HTMLElement;
    });
  }, []);

  const setTweenFactor = useCallback((emblaApi: EmblaCarouselType) => {
    tweenFactor.current = TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length;
  }, []);

  const tweenScale = useCallback(
    (emblaApi: EmblaCarouselType, eventName?: EmblaEventType) => {
      const engine = emblaApi.internalEngine();
      const scrollProgress = emblaApi.scrollProgress();
      const slidesInView = emblaApi.slidesInView();
      const isScrollEvent = eventName === "scroll";

      emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
        let diffToTarget = scrollSnap - scrollProgress;
        const slidesInSnap = engine.slideRegistry[snapIndex];

        slidesInSnap.forEach((slideIndex) => {
          if (isScrollEvent && !slidesInView.includes(slideIndex)) return;

          if (engine.options.loop) {
            engine.slideLooper.loopPoints.forEach((loopItem) => {
              const target = loopItem.target();

              if (slideIndex === loopItem.index && target !== 0) {
                const sign = Math.sign(target);

                if (sign === -1) {
                  diffToTarget = scrollSnap - (1 + scrollProgress);
                }
                if (sign === 1) {
                  diffToTarget = scrollSnap + (1 - scrollProgress);
                }
              }
            });
          }

          const tweenValue = 1 - Math.abs(diffToTarget * tweenFactor.current);
          const scale = numberWithinRange(tweenValue, 0, 1).toString();
          const tweenNode = tweenNodes.current[slideIndex];
          tweenNode.style.transform = `scale(${scale})`;
        });
      });
    },
    []
  );

  useEffect(() => {
    if (!emblaApi) return;

    setTweenNodes(emblaApi);
    setTweenFactor(emblaApi);
    tweenScale(emblaApi);

    emblaApi
      .on("reInit", setTweenNodes)
      .on("reInit", setTweenFactor)
      .on("reInit", tweenScale)
      .on("scroll", tweenScale)
      .on("slideFocus", tweenScale);
  }, [emblaApi, tweenScale]);

  return (
    <>
      {/* <ArrowBackIosNewOutlinedIcon onClick={onPrevButtonClick} className='m-20  absolute border-solid border-2 bg-[#a894c4] text-white rounded-2xl p-3'/> */}
      <div className="grid grid-cols-3 gap-2 ml-[5%]">
        <div>
        <PrevButton
            onClick={onPrevButtonClick}
            disabled={prevBtnDisabled}
           className="absolute border-solid border-2 z-20  bg-[#a894c4] mt-[125px] md:ml-[3%] lg:ml-[2%] xl:ml-[70px] text-white size-8 rounded-2xl  "
          />
        </div>

        <div className="lg:mr-[-16rem] lg:ml-[-20rem] md:mr-[-15rem] md:ml-[-15rem]  ">
  
          <div className="embla ">
            <div className="embla__viewport" ref={emblaRef}>
              <div className="embla__container">
                {slides.map((index) => (
                  <div className="embla__slide" key={index}>
                    <div className="embla__slide__number">
                      <img
                        className="img"
                        src="https://th.bing.com/th/id/OIP.NwHlFkr2nHn64-Zm9ASXKQHaE7?rs=1&pid=ImgDetMain"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

        <div>
        <NextButton
            onClick={onNextButtonClick}
            disabled={nextBtnDisabled}
            className=" absolute border-solid border-2 ml-[170px] mt-32  bg-[#a894c4] text-white size-8 rounded-2xl "
          />
        </div>
      </div>
    </>
  );
};

export default EmblaCarousel;



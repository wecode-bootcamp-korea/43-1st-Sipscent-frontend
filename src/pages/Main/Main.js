import React, { useState, useRef, useEffect } from 'react';
import { MAIN_CATEGORY } from './mainCategoryData';
import './Main.scss';

const Main = () => {
  const sectionRef = useRef();
  const [slide, setSlide] = useState(0);
  const carouselButtonCount = MAIN_CATEGORY.length / 2;

  const handleSlideBtn = value => {
    if (slide + value === carouselButtonCount + 1 || slide + value === -1)
      return;

    setSlide(prev => prev + value);
  };

  useEffect(() => {
    sectionRef.current.style.transition = 'all 0.5s ease-in-out';
    sectionRef.current.style.transform = `translateX(-${slide * 600}px)`;
  }, [slide]);

  return (
    <div className="main">
      <section className="sectionInfo">
        <div className="sectionInfoBox">
          <div className="sectionInfoContents">
            <h1 className="sectionInfoTitle">
              감각적인 실내 공간을 위한 홈 프래그런스​
            </h1>
            <p className="sectionInfoParagraph">
              분위기 전환이 필요한 가정이나 사무실에 이상적인 이솝의 홈 레인지는
              아로마틱 인센스, 룸 스프레이 등 다양한 방향 제품으로 구성되어
              있습니다.
            </p>
          </div>
          <button type="button" className="sectionInfoContentsButton">
            More {'>'}
          </button>
        </div>
        <img className="sectionInfoImage" src="/images/Main/main.png" />
      </section>
      <section className="sectionCarousel">
        <div className="sectionCarouselButtonBox">
          <button
            onClick={() => handleSlideBtn(-1)}
            className="sectionCarouselButton Prev"
          >
            {'<'}
          </button>
          <button
            onClick={() => handleSlideBtn(1)}
            className="sectionCarouselButton Next"
          >
            {'>'}
          </button>
        </div>
        <ul ref={sectionRef} className="sectionCarouselList">
          <li className="sectionCarouselInfoBox">
            <h1 className="sectionCarouselInfoBoxName">향기의 즐거움</h1>
            <p className="sectionCarouselInfoBoxParagraph">
              향수는 개발하는 동안 느꼈던 즐거움을 고객들이 사용하면서 만끽할 수
              있기를 바라며 만들어졌습니다. 각각의 향수는 플로럴, 프레쉬, 우디,
              오퓰런트 계열로 나뉘며, 경우에 따라 두 가지에 속하기도 합니다.
            </p>
          </li>
          {MAIN_CATEGORY.map(({ image, name, text }, key) => (
            <li key={key} className="sectionCarouselImageBox">
              <img className="sectionCarouselImage" src={image} />
              <div className="sectionCarouselImageInfo">
                <h2 className="sectionCarouselImageName">{name}</h2>
                <p className="sectionCarouselImageParagraph">{text}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Main;

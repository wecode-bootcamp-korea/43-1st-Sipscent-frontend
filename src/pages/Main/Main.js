import React, { useState } from 'react';
import './Main.scss';

const Main = () => {
  const [scentImg, setScentImg] = useState([]);

  fetch('http://10.58.52.201:8002/test')
    .then(res => res.json())
    .then(data => {
      setScentImg(data);
    });
  console.log(setScentImg);
  return (
    <div className="main">
      <section className="sectionInfo">
        <div className="sectionInfoBox">
          <div className="sectionInfoContents">
            <h1>감각적인 실내 공간을 위한 홈 프래그런스{scentImg}​</h1>
            <p>
              분위기 전환이 필요한 가정이나 사무실에 이상적인 이솝의 홈 레인지는
              아로마틱 인센스, 룸 스프레이 등 다양한 방향 제품으로 구성되어
              있습니다.
            </p>
          </div>
          <button type="button" className="sectionInfoContentsButton">
            More {'>'}
          </button>
        </div>
        <img className="sectionInfoImage" src="/images/Main/Main.png" />
      </section>
      <section className="sectionCarousel">
        <button>왼쪽버튼</button>
        <div className="map">
          <div className="sectionCarouselImageBox" />
          <div className="sectionCarouselImage" />
          <div />
        </div>
        <button>오른쪽버튼</button>
      </section>
    </div>
  );
};

export default Main;

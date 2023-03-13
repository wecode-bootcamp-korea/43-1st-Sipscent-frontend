import React from 'react';
import { ORDER_SUPPORT, SERVICE, INTRODUCE, SOCIAL } from './FooterData';
import './Footer.scss';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footerGrid">
        <div className="footerListWrap">
          <div className="footerListTitle">커뮤니케이션</div>
          <p className="footerListText">
            제품, 서비스, 스토어, 이벤트, 문화적 관심사 등 다양한 소식을
            받아보실 수 있도록 이메일을 구독하세요.
          </p>
          <label className="footerListText">
            <input type="checkbox" />
            본인은 만 14세 이상입니다 (필수)
          </label>
          <label className="footerListText">
            <input type="checkbox" />
            개인정보수집 및 이용에 동의합니다 (필수)
          </label>
          <p className="footerListText footerListBox">
            Sipscent는 Sipscent의 제품, 서비스 및 홍보 행사 관련 정보를 마케팅
            목적으로, 고객님이 동의 해지하시기 전까지, 고객님께 이메일로 보내
            드립니다. 마케팅 목적의 개인정보 수집 및 이용에 동의하지 않으셔도
            되고, 그러한 경우, 마케팅 정보를 수령하실 수 없습니다.
          </p>
          <label className="footerListText">
            <input type="checkbox" />
            마케팅 정보 수신에 동의합니다 (필수)
          </label>
          <p className="footerListText footerListBox">
            뉴스레터 이메일을 통한 광고성 정보 수신에 동의합니다.
          </p>
          <div className="footerListText footerListSubscribe">
            <input
              className="footerListInput"
              type="text"
              placeholder="이메일 주소"
            />
            <button className="footerListButton">→</button>
          </div>
        </div>
        <div className="footerListWrap">
          <div className="footerListTitle">주문 및 지원</div>
          {ORDER_SUPPORT.map(support => {
            return (
              <Link key={support.id} to="#none" className="footerMapData">
                {support.title}
              </Link>
            );
          })}
        </div>
        <div className="footerListWrap">
          <div className="footerListTitle">서비스</div>
          {SERVICE.map(service => {
            return (
              <Link key={service.id} to="#none" className="footerMapData">
                {service.title}
              </Link>
            );
          })}
        </div>
        <div className="footerListWrap">
          <div className="footerListTitle">위치 기본 설정</div>
          <div className="footerLocation">
            <p>배송 : </p>
            <button className="footerLocationCountry">대한민국</button>
          </div>
          <div className="footerLocation">
            <p>언어 : </p>
            <Link to="#none" className="footerListLanguage">
              한국어
            </Link>
          </div>
        </div>
        <div className="footerListWrap">
          <div className="footerListTitle">지속가능성</div>
          <p className="footerListText vegan">
            Sipscent는 비콥 인증을 획득한 브랜드이며, PETA로부터 비건 인증을
            받은 브랜드입니다.
          </p>
          <Link to="#none" className="vegan">
            더 알아보기
          </Link>
        </div>
        <div className="footerListWrap">
          <div className="footerListTitle">소개</div>
          {INTRODUCE.map(introduce => {
            return (
              <Link key={introduce.id} to="#none" className="footerMapData">
                {introduce.title}
              </Link>
            );
          })}
        </div>
        <div className="footerListWrap">
          <div className="footerListTitle">소셜</div>
          {SOCIAL.map(sns => {
            return (
              <a key={sns.id} href="#none" className="footerMapData">
                {sns.title}
              </a>
            );
          })}
        </div>
        <div className="footerListWrap">
          <div className="footerListTitle">주의</div>
          <p className="footerListText">
            상호: Sipscent코리아 유한회사 | 주소: 서울특별시 강남구 테헤란로 427
            위워크타워 | 대표자: Sipscent | 대표전화: 02-521-7777 | 대표 이메일:
            sipscent@wecode.com | 호스팅 사업자: SIP COMPANY | 사업자 등록 번호:
            222-33-00000 사업자정보확인 | 통신판매업 신고번호:
            2014-서울강남-02300
          </p>
        </div>
      </div>
      <div className="logo">© Sipscent</div>
    </footer>
  );
};

export default Footer;

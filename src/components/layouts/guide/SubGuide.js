import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './SubGuide.scss';
// import BasicButton from '../../btn/BasicButton';

const SubGuide = () => {
  const { tab } = useParams();
  const [activeTab, setActiveTab] = useState(1);

  useEffect(() => {
    console.log('Tab from URL:', tab);
    if (!tab) {
      console.log('Setting default tab: 1');
      setActiveTab(1);
    } else if (tab === 'star') {
      console.log('Setting active tab: 1');
      setActiveTab(1);
    } else if (tab === 'moon') {
      console.log('Setting active tab: 2');
      setActiveTab(2);
    } else if (tab === 'night') {
      console.log('Setting active tab: 3');
      setActiveTab(3);
    }
  }, [tab]);

  const changeTab = (tab) => {
    setActiveTab(tab);
  };
  const TabContent = () => {
    if (activeTab === 1) {
      return (
        <main className="subGuideContent">
          <div className="subGuideTitle">안내사항</div>
          <div className="subGuideBoxWrap">
            <div className="subguideBox">
                <h2>행사일정</h2>
                <p>2023.09.08 (금)</p>
                <p>2023.10.04 (수)</p>
                <div>25일간</div>
            </div>
            <div className="subguideBox">
                <h2>관람시간</h2>
                <p>1부 : 18:40 - 20:30</p>
                <p>2부 : 19:40 - 21:30</p>
                <div>약 110분</div>
            </div>
            <div className="subguideBox">
                <h2>가격</h2>
                <p>일반석 60,000원</p>
                <p>시야제한석 55,000원</p>
            </div>
            <div className="subguideBox">
                <h2>나이제한</h2>
                <p>8세 이상</p>
            </div>  
        </div>
        <section className="subGuideNotification">
            <h2>예매권 추첨</h2>
            <p>예 매 기 간</p>
            <p>당첨자 발표</p>
            <p>당첨자 예매</p>
        </section>
        <section className="subGuideNotification">
            <h2>전화예매</h2>
        </section>
        <section className="subGuideNotification">
            <h2>할인정보</h2>
            <p>- 장애인 50% 할인 중증(1~3급) 본인 포함 2인, 경증(4급 이하) 본인 한정</p>
            <p>- 국가 유공자 본인 한정 50% 할인</p>
            <p className="subGuideCaution">* 전화예매와 할인으로 티켓을 구매하신 체험객은 꼭 해당자가 참여하여야 합니다.</p>
            <p className="subGuideCaution">* 참여하지 않으면 현장에서 취소될 수 있습니다.</p>
        </section>
        <section className="guideMap">
            <h1>오시는 길</h1>
            <div className="map"></div>
            <div>
                <div></div>
                <div></div>
            </div>
        </section>








        </main>
      );
    } else if (activeTab === 2) {
      return <div></div>;
    } else if (activeTab === 3) {
      return <div></div>;
    }
  };

  return (
    <section className="subGuide">
      <div className="subGuideHeader">
        <h1>행사안내</h1>
        <p>내용을 입력하세요</p>
      </div>
      <div className="subGuideScreen">
        <div className="tabWrap">
          <div
            className={`tabMenu ${activeTab === 1 ? 'tabAcitve' : ''}`}
            onClick={() => changeTab(1)}
          >
            별빛야행
          </div>
          <div className="tabDivide"> | </div>
          <div
            className={`tabMenu ${activeTab === 2 ? 'tabAcitve' : ''} `}
            onClick={() => changeTab(2)}
          >
            달빛기행
          </div>
          <div className="tabDivide"> | </div>
          <div
            className={`tabMenu ${activeTab === 3 ? 'tabAcitve' : ''}`}
            onClick={() => changeTab(3)}
          >
            밤의 석조전
          </div>
        </div>
        <TabContent />
      </div>
    </section>
  );
};

export default SubGuide;

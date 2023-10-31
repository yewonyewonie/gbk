import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './SubProgram.scss';
import BasicButton from '../../btn/BasicButton';

const SubProgram = () => {
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
        <div className="programContent">
          <h1 className="programContentTitle">별빛야행</h1>
          <p className="programContentText">
            경복궁 소주방에서 전통국악공연을 즐기며 임금님의 수라상을 맛보고,
            <br />
            전문가의 해설을 들으며 경복궁 북측 권역으로의 아름다운 야행을
            시작합니다.
          </p>
          <div className="subProgramWrap">
            <div className="subProgramBox">
              <div className="subProgramBoxPic subProgramStarPic1"></div>
              <div className="subProgramBoxText">
                <h2>궁중음식 체험 및 국악공연 관람</h2>
                <p>
                  궁궐의 부엌인 ‘소주방’에 들러 조선의 왕이 먹던 일상식인 12첩
                  반상을
                  현대적으로 재해석한 <br /> ‘도슭수라상’을 맛보게 됩니다.
                  맛있는 수라상을 먹는 동안 국악공연이 함께 펼쳐져 맛과 멋의 <br />
                  풍류로 가득한
                  밤이 될 것입니다.
                </p>
                <BasicButton />
              </div>
            </div>

            <div className="subProgramBox">
              <div className="subProgramBoxPic subProgramStarPic2"></div>
              <div className="subProgramBoxText">
                <h2>야간해설탐방 (소요시간 : 약110분)</h2>
                <p>
                경복궁 별빛야행은 야간 특별관람 때에 공개되지 않았던 경복궁 북측 권역을 탐방하며,<br />복원을 완료한 향원정을 고즈넉한 분위기에서 감상하실 수 있습니다.
                </p>
                <BasicButton />
              </div>
            </div>
          </div>
        </div>
      );


    } else if (activeTab === 2) {
      return (
        <div className="programContent">
          <h1 className="programContentTitle">달빛기행</h1>
          <p className="programContentText">
            달빛 가득한 창덕궁의 정경 속에서 청사초롱으로 불을 밝히며<br />
            전문해설사를 따라오세요. 궁궐 곳곳에 깃든 옛 이야기를 들려드립니다.
          </p>
          <div className="subProgramWrap">
            <div className="subProgramBox">
              <div className="subProgramBoxPic subProgramMoonPic1"></div>
              <div className="subProgramBoxText">
                <h2>왕가의 산책</h2>
                <p>
                  왕과 왕비와 함께 걸으며 조선시대 궁궐의 일상을 즐겨보세요.<br />
                  함께 걷는 순간, 여러분이 계시는 경복궁은 조선의 어느 좋은 날이 될 것입니다.
                </p>
                <BasicButton />
              </div>
            </div>

            <div className="subProgramBox">
              <div className="subProgramBoxPic subProgramMoonPic2"></div>
              <div className="subProgramBoxText">
                <h2>야간해설탐방 (소요시간 : 약110분)</h2>
                <p>
                경복궁 별빛야행은 야간 특별관람 때에 공개되지 않았던 경복궁 북측 권역을 탐방하며,<br />복원을 완료한 향원정을 고즈넉한 분위기에서 감상하실 수 있습니다.
                </p>
                <BasicButton />
              </div>
            </div>
          </div>
        </div>
      );


      
    } else if (activeTab === 3) {
      return (
        <div className="programContent">
          <h1 className="programContentTitle">밤의 석조전</h1>
          <p className="programContentText">
석조전에 담긴 황실의 역사를 마주하고 준비된 가배(커피)와 서양 디저트를 맛보며<br />
귀빈을 맞이하던 접견실에서의 뮤지컬 공연 관람을 하며 궁궐의 낭만과 감동이 가득한 순간을 선물합니다.
          </p>
          <div className="subProgramWrap">
            <div className="subProgramBox">
              <div className="subProgramBoxPic subProgramNightPic1"></div>
              <div className="subProgramBoxText">
                <h2>황제의 가배(커피)와 디저트 체험</h2>
                <p>
                밤의 석조전에 초대된 귀빈들만을 위한 작은 연회가 준비되었습니다.<br />
                이국적 분위기의 클래식 공연과 황실 디저트를 함께 올리오니,<br /> 석조전 테라스에서 소중한 사람과 뜻 깊은 시간을 나누는 기회가 되기를 바랍니다.
                </p>
                <BasicButton />
              </div>
            </div>

            <div className="subProgramBox">
              <div className="subProgramBoxPic subProgramNightPic2"></div>
              <div className="subProgramBoxText">
                <h2>창작뮤지컬 : 고종-대한(大韓)의 꿈 </h2>
                <p>
                석조전 완공이후, 약해져 가는 국권을 지키고자<br />
                다시 한번 의지를 다지는 고종과 명성황후의 이야기
                </p>
                <BasicButton />
              </div>
            </div>
          </div>
        </div>
      );
    }
  };



  return (
    <section className="subProgram">
      <div className="subProgramHeader">
        <div className="subProgramHeaderPic"></div>
        <h1>프로그램</h1>
        <p>문구를 입력해주세요</p>
      </div>
      <div className="subProgramScreen">
        <div className="tabWrap">
          <div className={`tabMenu ${activeTab === 1 ? 'tabAcitve' : ''}`} onClick={() => changeTab(1)}>
            별빛야행
          </div>
          <div className="tabDivide"> | </div>
          <div className={`tabMenu ${activeTab === 2 ? 'tabAcitve' : ''} `} onClick={() => changeTab(2)}>
            달빛기행
          </div>
          <div className="tabDivide"> | </div>
          <div className={`tabMenu ${activeTab === 3 ? 'tabAcitve' : ''}`} onClick={() => changeTab(3)}>
            밤의 석조전
          </div>
        </div>
        <TabContent />
      </div>
      <div className="subProgramFooter"></div>
    </section>
  );
};

export default SubProgram;
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './SubProgram.scss';
import ProgramStar from './ProgramStar';
import ProgramMoon from './ProgramMoon';
import ProgramNight from './ProgramNightNight';

const SubProgram = () => {
  const { tab } = useParams();
  const [activeTab, setActiveTab] = useState(1);

  useEffect(() => {

    if (!tab) {
      setActiveTab(1);
    } else if (tab === 'star') {
      setActiveTab(1);
    } else if (tab === 'moon') {
      setActiveTab(2);
    } else if (tab === 'night') {
      setActiveTab(3);
    }
  }, [tab]);
  
  const changeTab = (tab) => {
    setActiveTab(tab);
};

  const TabContent = () => {
    if (activeTab === 1) {
      return (
        <ProgramStar />
      );

    } else if (activeTab === 2) {
      return (
        <ProgramMoon />
      );

    } else if (activeTab === 3) {
      return (
       <ProgramNight />
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
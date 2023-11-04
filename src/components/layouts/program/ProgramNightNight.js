import React from 'react';
import BasicButton from '../../btn/BasicButton';

const ProgramNight = () => {
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
};

export default ProgramNight;
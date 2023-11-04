import React from 'react';
import BasicButton from '../../btn/BasicButton';


const ProgramStar = () => {
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
};

export default ProgramStar;
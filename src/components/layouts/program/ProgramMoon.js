import React from 'react';
import BasicButton from '../../btn/BasicButton';

const ProgramMoon = () => {
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
};

export default ProgramMoon;
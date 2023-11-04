import React from 'react';

const GuideNight = () => {
    const spacing = { letterSpacing: '0.7px' };
    return (
        <main className="subGuideContent">
          <div className="subGuideTitle">안내사항</div>
          <div className="subGuideBoxWrap">
            <div className="subGuideBox">
              <h2>행사일정</h2>
              <p>2023.10.6(금) ~ 11.2(목)</p>
              <p>*덕수궁 휴궁일 제외(매주 월)</p>
              <div>35일간</div>
            </div>
            <div className="subGuideBox">
              <h2>관람시간</h2>
              <p>1부 : 18:20 - 19:50</p>
              <p>2부 : 19:20 - 20:50</p>
              <div>90분 내외</div>
            </div>

            <div className="subGuideBox">
              <h2>가격</h2>
              <p>1인 26,000원</p>
              <p>(1인 2매 예매 가능)</p>
            </div>
            <div className="subGuideBox">
              <h2>나이제한</h2>
              <p>8세 이상 관람 가능</p>
              <p>(취학아동 및 청소년 보호자 동반)</p>
            </div>
          </div>
          <section className="subGuideNotification">
            <h2>예매권추첨</h2>
            <table>
              <tr>
                <td className="subGuideTableTitle" style={spacing}>
                  예 매 기 간
                </td>
                <td className="subGuideTableText">
                  9.14(목) 14:00 ~ 9.19(화) 23:59
                </td>
              </tr>
              <tr>
                <td className="subGuideTableTitle">당첨자 발표</td>
                <td className="subGuideTableText">9.20(수) 14:00</td>
              </tr>
              <tr>
                <td className="subGuideTableTitle">당첨자 예매</td>
                <td className="subGuideTableText">
                  *당첨자들에게 티켓링크 회원정보에 기입 핸드폰 번호로 당첨 확인
                  문자가 개별적으로 발송됩니다.
                </td>
              </tr>
              <tr>
                <td></td>
                <td className="subGuideTableText">
                  (티켓링크 마이페이지에서 연락처를 최신 정보로 수정해주세요.
                  당첨자는 한국문화재단 홈페이지를 통해서도 확인 가능합니다.)
                </td>
              </tr>
              <tr>
                <td></td>
                <td className="subGuideTableText">
                  9.21(목) 14:00 ~ 9.26(화) 23:59
                </td>
              </tr>
              <tr>
                <td></td>
                <td className="subGuideTableText">*최대 1인 2매 가능합니다.</td>
              </tr>
              <tr>
                <td></td>
                <td className="subGuideTableText">
                  *참가비 26,000원 / ID당 2매 가능
                </td>
              </tr>
              <tr>
                <td></td>
                <td className="subGuideTableText">
                  일반예매(잔여석) 9.27(수) 14:00
                </td>
              </tr>
            </table>
          </section>
          <section className="subGuideNotification">
            <h2>전화예매</h2>
            <table>
              <tr>
                <td className="subGuideTableTitle">예 매 대 상</td>
                <td className="subGuideTableText">
                  만 65세 이상 · 장애인 · 국가유공자
                </td>
              </tr>
              <tr>
                <td className="subGuideTableTitle">예 매 방 법</td>
                <td className="subGuideTableText">
                  1588-7890 티켓링크 고객센터로 전화 예매
                </td>
              </tr>
              <tr>
                <td className="subGuideTableTitle">예 매 시 간</td>
                <td className="subGuideTableText">평일 10:00 ~ 19:00</td>
              </tr>
              <tr>
                <td></td>
                <td className="subGuideTableText">
                  *1인 2매까지 예약 가능합니다.
                </td>
              </tr>
              <tr>
                <td></td>
                <td className="subGuideTableText">
                  *현장에서 증빙자료를 확인할 예정이오니
                  신분증(국가유공자증,장애인복지카드등)을 반드시 지참하여 주시기
                  바랍니다.
                </td>
              </tr>
              <tr>
                <td></td>
                <td className="subGuideTableText">
                  *전화예매는 예매권 추첨 방식이 아닌 선착순으로 예매가
                  진행됩니다.
                </td>
              </tr>
            </table>
          </section>
          <section className="subGuideNotification">
            <h2>할인정보</h2>
            <p>
              - 장애인 50% 할인 중증(1~3급) 본인 포함 2인, 경증(4급 이하) 본인
              한정
            </p>
            <p>- 국가 유공자 본인 한정 50% 할인</p>
            <p className="subGuideCaution">
              * 전화예매와 할인으로 티켓을 구매하신 체험객은 꼭 해당자가
              참여하여야 합니다.
            </p>
            <p className="subGuideCaution">
              * 참여하지 않으면 현장에서 취소될 수 있습니다.
            </p>
          </section>
          <section className="subGuideNotification guideMap">
            <h1>오시는 길</h1>
            <div className="map"></div>
            <div className="addressTel">
              <div className="mapAddress">
                <div className="mapIcon"></div>
                <p>서울특별시 중구 세종대로 99 덕수궁</p>
              </div>
              <div className="telFax">
                <div className="iconBg">
                  <div className="telIcon"></div>
                </div>
                <p>
                  TEL
                  <br />
                  <span>02-771-9955</span>
                </p>
                <div className="iconBg">
                  <div className="faxIcon"></div>
                </div>
                <p>
                  FAX
                  <br />
                  <span>02-771-9953</span>
                </p>
              </div>
            </div>
          </section>
          <section className="subGuideNotification transport">
            <h1>대중교통 안내</h1>

            <div className="transportWrap">
              <div className="iconBg">
                <div className="subwayIcon"></div>
              </div>
              <p>
                지하철
                <br />
                <span className="tabletFlex">
                  1,2호선 &lt;시청역&gt; 1번 출구 도보 5분,{' '}
                </span>
                <span className="mobileFlex">
                  2호선 &lt;을지로입구역&gt; 1-1번 출구 도보 15분,{' '}
                </span>
              </p>
            </div>

            <div className="transportWrap">
              <div className="iconBg">
                <div className="busIcon"></div>
              </div>
              <p>
                버스
                <br />
                <span>종로 9번,11번 버스 &lt;시청앞 덕수궁&gt;정류장</span>
              </p>
            </div>
            <p>
              ※ 원활한 운영을 위하여 차량을 통제하오니 대중교통 이용을
              부탁드립니다.
            </p>
          </section>
        </main>
    );
};

export default GuideNight;
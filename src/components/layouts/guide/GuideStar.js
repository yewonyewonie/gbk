import React from 'react';

const GuideStar = () => {
  const spacing = { letterSpacing: '0.7px' };
  return (
    <main className="subGuideContent">
      <div className="subGuideTitle">안내사항</div>
      <div className="subGuideBoxWrap">
        <div className="subGuideBox">
          <h2>행사일정</h2>
          <p>2023.09.08 (금)</p>
          <p>2023.10.04 (수)</p>
          <div>25일간</div>
        </div>
        <div className="subGuideBox">
          <h2>관람시간</h2>
          <p>1부 : 18:40 - 20:30</p>
          <p>2부 : 19:40 - 21:30</p>
          <div>약 110분</div>
        </div>

        <div className="subGuideBox">
          <h2>가격</h2>
          <p>일반석 60,000원</p>
          <p>시야제한석 55,000원</p>
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
              8.23(수 / 14시부터) ~ 8.28(월)
            </td>
          </tr>
          <tr>
            <td className="subGuideTableTitle">당첨자 발표</td>
            <td className="subGuideTableText">8.29(화) 14시</td>
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
            <td className="subGuideTableText">8.30(수 / 14시부터) ~ 9.4(월)</td>
          </tr>
          <tr>
            <td></td>
            <td className="subGuideTableText">*최대 1인 2매 가능합니다.</td>
          </tr>
          <tr>
            <td></td>
            <td className="subGuideTableText">
              *참가비 60,0000원 / 55,000원 (시야제한석)
            </td>
          </tr>
          <tr>
            <td></td>
            <td className="subGuideTableText">
              (일반(잔여석)예매) 9.5(화/11시)
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
            <td className="subGuideTableText">1588-7890</td>
          </tr>
          <tr>
            <td className="subGuideTableTitle">예 매 시 간</td>
            <td className="subGuideTableText">8.23(수 / 14시부터) ~</td>
          </tr>
          <tr>
            <td></td>
            <td className="subGuideTableText">*1인 2매까지 예약 가능합니다.</td>
          </tr>
          <tr>
            <td></td>
            <td className="subGuideTableText">
              *현장에서 증빙자료를 확인할 예정이오니
              신분증(국가유공자증,장애인복지카드등)을 반드시 지참하여 주시기
              바랍니다.
            </td>
          </tr>
        </table>
      </section>
      <section className="subGuideNotification">
        <h2>할인정보</h2>
        <p>
          - 장애인 50% 할인 중증(1~3급) 본인 포함 2인, 경증(4급 이하) 본인 한정
        </p>
        <p>- 국가 유공자 본인 한정 50% 할인</p>
        <p className="subGuideCaution">
          * 전화예매와 할인으로 티켓을 구매하신 체험객은 꼭 해당자가 참여하여야
          합니다.
        </p>
        <p className="subGuideCaution">
          * 참여하지 않으면 현장에서 취소될 수 있습니다.
        </p>
      </section>
      <section className="subGuideNotification guideMap">
        <h1>오시는 길</h1>

        <iframe className="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3161.975305886591!2d126.97365091661926!3d37.579199174072336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca2c74aeddea1%3A0x8b3046532cc715f6!2z6rK967O16raB!5e0!3m2!1sko!2skr!4v1699231608774!5m2!1sko!2skr"
          width="100%"
          height="600"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>

        {/* <div className="map"></div> */}
        <div className="addressTel">
          <div className="mapAddress">
            <div className="mapIcon"></div>
            <p>서울특별시 종로구 사직로 161 경복궁</p>
          </div>
          <div className="telFax">
            <div className="telFaxWrap">
              <div className="iconBg">
                <div className="telIcon"></div>
              </div>
              <p>TEL<br /><span>02-123-456</span></p>
            </div>

            <div className="telFaxWrap">
              <div className="iconBg">
                <div className="faxIcon"></div>
              </div>
              <p>FAX<br /><span>02-123-456</span></p>
            </div>
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
              3호선 &lt; 안국역&gt; 1번 출구 도보 13분,{' '}
            </span>
            <span className="mobileFlex">
              3호선 &lt;경복궁역&gt; 4번 출구 도보 16분,{' '}
            </span>
            <span>5호선 &lt;광화문역&gt; 2번 출구 도보 약 14분 </span>
          </p>
        </div>

        <div className="transportWrap">
          <div className="iconBg">
            <div className="busIcon"></div>
          </div>
          <p>
            버스
            <br />
            <span>종로 11번 버스 &lt;법련사&gt;정류장</span>
          </p>
        </div>
        <p className="guideCaution">
          ※ 원활한 운영을 위하여 차량을 통제하오니 대중교통 이용을 부탁드립니다.
        </p>
      </section>
    </main>
  );
};

export default GuideStar;

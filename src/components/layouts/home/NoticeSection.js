import { Link } from 'react-router-dom';
import BasicButton from '../../btn/BasicButton';
import './NoticeSection.scss';

const NoticeSection = () => {
  return ( 
    <section className="NoticeSection">
      <div className="noticeSectionMain">
        <div className="noticeLeft" data-aos="fade-down">
          <h1 >알림마당</h1>
          <p>고궁의 중요한 소식을 알려드립니다.</p>
          <div data-aos="fade-down" data-aos-delay="300">
            <Link to="/notice"><BasicButton></BasicButton></Link>
          </div>
        </div>
        <div className="noticeRight">
          <div className="noticeBoxWrap">

            <div className="noticeBox" data-aos="fade-down" data-aos-delay="1000">
              <div className="noticeBoxDate">2023-10-07</div>
              <h1>달빛기행 외국인 행사 예매안내</h1>
              <p>10.27(금)~10.31(화) 영·중·일 3개 국어로 운영되며<br />예매 시작은 10.14(토) 오후 2시부터 입니다.<br /></p>
              <p>이용에 불편함 없으시길 바랍니다.</p>
              <div className="noticeBoxLogo"></div>
            </div>

            <div className="noticeBox" data-aos="fade-down" data-aos-delay="1000">
              <div className="noticeBoxDate">2023-10-16</div>
              <h1>별빛야행 도슭수라상 메뉴변경</h1>
              <p>10.20(금)부터 도슭수라상의 기존메뉴인 완자전이<br />생선에서 돼지고기로 변경됩니다.<br /></p>
              <p>이용에 불편함 없으시길 바랍니다.</p>
              <div className="noticeBoxLogo"></div>
            </div>

            <div className="noticeBox" data-aos="fade-down" data-aos-delay="1500">
              <div className="noticeBoxDate">2023-10-18</div>
              <h1>밤의 석조전 테라스 카페 체험 <br />장소변경 안내</h1>
              <p>금일 진행 예정이던 테라스 카페 체험 행사가<br />우천으로 인하여 테라스가 아닌<br /></p>
              <p>석조전 내부에서 진행될 예정입니다.</p>
              <div className="noticeBoxLogo"></div>
            </div>

            <div className="noticeBox" data-aos="fade-down" data-aos-delay="1500">
              <div className="noticeBoxDate">2023-10-20</div>
              <h1>사회적 배려 대상자<br />궁궐 초청 행사 접수 시작!</h1>
              <p>10.20(금) 오후 2시부터 접수시작입니다.</p>
              <p>경복궁 별빛야행 - 11.01.(수) ~ 11.14.(화)<br />창덕궁 달빛기행 - 11.01.(수) ~ 11.14.(화)<br /></p>
              <div className="noticeBoxLogo"></div>
            </div>

          </div>
        </div>
      </div>
    </section>
   );
};
 
export default NoticeSection;
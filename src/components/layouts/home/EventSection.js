import BasicButton from '../../btn/BasicButton';
import './EventSection.scss';
// import FooterImg from '../../../asset/img/footerWeb.png';

const EventSection = () => {


  
  return (
    <section className="onlineEvent">
      <div className="onlineEventMain">
        <h1 className="onlineEventMainTitle">온라인 이벤트</h1>
        <div className="onlineWrap">
          <div className="onlineBox">
            <div className='onlineImgWrap'>
              <div className="onlineBoxPic onlinePic1"></div>
            </div>
            <div className="onlineBoxTxt">
              <h1>모두의 풍속도</h1>
              <div className="text">그림을 그리고 다양한 혜택을 받아가세요!</div>
              <BasicButton />
            </div>
          </div>

          
          <div className="onlineBox">
            <div className='onlineImgWrap'>
              <div className="onlineBoxPic onlinePic2"></div>
            </div>
            <div className="onlineBoxTxt">
              <h1>달빛기행 체험 후기 이벤트</h1>
              <div>추첨을 통해 다양한 상품을 드립니다.</div>
              <BasicButton />
            </div>
          </div>

          <div className="onlineBox">
            <div className='onlineImgWrap'>
              <div className="onlineBoxPic onlinePic3"></div>
            </div>
            <div className="onlineBoxTxt">
              <h1>조선왕릉 모바일 스탬프 투어</h1>
              <div>스탬프를 모두 모으면 선물이 한가득~!</div>
              <BasicButton />
            </div>
          </div>
        </div>
      </div>
      <div className="eventSectionFooter"></div>
      {/* <img className="eventSectionFooter" src={FooterImg}></img> */}
    </section>
  );
};

export default EventSection;

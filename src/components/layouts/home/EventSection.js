import BasicButton from '../../btn/BasicButton';
import './EventSection.scss';

const EventSection = () => {
    return ( 
        <section className="onlineEvent">
            <div className="onlineEventMain">
                <h1 className="onlineEventMainTitle">온라인 이벤트</h1>
                <div className="onlineWrap">


                    <div className="onlineBox">
                        <div className="onlineBoxPic onlinePic1"></div>
                        <div className="onlineBoxTxt">
                            <h1>온라인 이벤트</h1>
                            <div className="text">text text text</div>
                            <BasicButton />
                        </div>
                    </div>


                    <div className="onlineBox">
                        <div className="onlineBoxPic onlinePic2"></div>
                        <div className="onlineBoxTxt">
                            <h1>온라인 이벤트</h1>
                            <div>text text text</div>
                            <BasicButton />
                        </div>
                    </div>


                    <div className="onlineBox">
                        <div className="onlineBoxPic onlinePic3"></div>
                        <div className="onlineBoxTxt">
                            <h1>온라인 이벤트</h1>
                            <div>text text text</div>
                            <BasicButton />
                        </div>
                    </div>
                </div>
            </div>
        </section>
     );
};
 
export default EventSection;
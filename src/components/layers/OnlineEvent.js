import './OnlineEvent.scss';

const OnlineEvent = () => {
    return ( 
        <div className="onlineEvent">
            <div className="onlineEventMain">
                <h1>온라인 이벤트</h1>
                <div className="onlineWrap">
                    <div className="onlineBox">
                        <div className="onlineBox_pic">안녕하세요</div>
                        <div>
                            <div>Title</div>
                            <div>text</div>
                            <div>Button</div>
                        </div>
                    </div>
                    <div className="onlineBox">
                        <div className="onlineBox_pic"></div>
                        <div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                    <div className="onlineBox">
                        <div className="onlineBox_pic"></div>
                        <div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
};
 
export default OnlineEvent;
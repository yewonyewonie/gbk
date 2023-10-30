import React , {useState} from 'react';
import './SubGuide.scss';


const SubGuide = () => {

    const [activeTab,setActiveTab] = useState('tab1');
    
    const TabContent = () => {
        if(activeTab === 'tab1'){
            return <div>별빛야행 입니다.</div>;
        } else if(activeTab === 'tab2'){
            return <div>달빛기행 입니다.</div>;
        } else if(activeTab === 'tab3'){
            return <div>밤의 석조전 입니다.</div>;
        }
    };

    const changeTab = (tab) => {
        setActiveTab(tab);
    };

    return ( 
        <section className="subGuide">
            <div className={`tabMenu ${activeTab === 'tab1' ? 'tabActive' : ''}`} 
            onClick={()=>changeTab('tab1')}>별빛야행</div>
            <div className={`tabMenu ${activeTab === 'tab2' ? 'tabActive' : ''}`} 
            onClick={()=>changeTab('tab2')}>달빛기행</div>
            <div className={`tabMenu ${activeTab === 'tab3' ? 'tabActive' : ''}`} 
            onClick={()=>changeTab('tab3')}>밤의 석조전</div>
            <TabContent />
        </section>
     );
};
 
export default SubGuide;

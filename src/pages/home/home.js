import Content from '../../components/Content/Content';
import RightBar from '../../components/RightBar/RightBar';
import Sidebar from '../../components/SideBar/Sidebar';
import TopBar from '../../components/TopBar/TopBar';
import './home.css';

function HomePage() {
    return (
        <div className="homePage">
            <TopBar />
            <div className="homePage_Content">
                <Sidebar />
                <Content />
                <RightBar />
            </div>
        </div>
    );
}

export default HomePage;

import './TopBar.css';
import {
    FaceBookIcon,
    GroupIcon,
    HomeIcon,
    MessengerIcon,
    NotifyIcon,
    SelectIcon,
    StoreIcon,
    VideoIcon,
} from '../../icons/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

function TopBar() {
    return (
        <div className="topbar_container">
            <div className="topbar_container_left">
                <FaceBookIcon className="topbar_container_facebook" />
                <div>
                    <button className="topbar_container_search_buttom">
                        <FontAwesomeIcon className="topbar_container_search_glass" icon={faMagnifyingGlass} />
                    </button>
                    <input className="topbar_container_search_input" placeholder="Search on facebook" />
                </div>
            </div>
            <div className="topbar_container_center">
                <HomeIcon className="topbar_container_center_icons" />
                <VideoIcon className="topbar_container_center_icons" />
                <StoreIcon className="topbar_container_center_icons" />
                <GroupIcon className="topbar_container_center_icons" />
            </div>
            <div className="topbar_container_right">
                <SelectIcon className="topbar_container_right_icons" />
                <MessengerIcon className="topbar_container_right_icons" />
                <NotifyIcon className="topbar_container_right_icons" />
            </div>
        </div>
    );
}

export default TopBar;

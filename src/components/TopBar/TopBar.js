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
import { Link } from 'react-router-dom';

function TopBar() {
    return (
        <div className="topbar_container">
            <div className="topbar_container_left">
                <Link to="/">
                    <FaceBookIcon className="topbar_container_facebook" />
                </Link>
                <div>
                    <button className="topbar_container_search_buttom">
                        <FontAwesomeIcon className="topbar_container_search_glass" icon={faMagnifyingGlass} />
                    </button>
                    <input className="topbar_container_search_input" placeholder="Search on facebook" />
                </div>
            </div>
            <div className="topbar_container_center">
                <Link to="/">
                    <HomeIcon className="topbar_container_center_icons" />
                </Link>
                <Link to="/">
                    <VideoIcon className="topbar_container_center_icons" />
                </Link>
                <Link to="/">
                    <StoreIcon className="topbar_container_center_icons" />
                </Link>
                <Link to="/">
                    <GroupIcon className="topbar_container_center_icons" />
                </Link>
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

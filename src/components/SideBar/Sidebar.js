import {
    faAngleDown,
    faNewspaper,
    faPeopleGroup,
    faStore,
    faUserGroup,
    faVideo,
} from '@fortawesome/free-solid-svg-icons';
import './Sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Line from '../lines/line';

function Sidebar() {
    return (
        <div className="SideBar">
            <div>
                <div>
                    <ul className="SideBarItem">
                        <li className="SideBarItem_list">
                            <span className="SideBarItem_list_user">
                                <img
                                    src="https://i.pinimg.com/564x/66/9a/d6/669ad6d0f736a2a28b3ffdbe7251b33d.jpg"
                                    alt=""
                                ></img>
                                <p>Viet Ha</p>
                            </span>
                        </li>
                        <li className="SideBarItem_list">
                            <FontAwesomeIcon icon={faUserGroup} />
                            <p className="SideBarItem_list_text">Friends</p>
                        </li>
                        <li className="SideBarItem_list">
                            <FontAwesomeIcon icon={faPeopleGroup} />
                            <p className="SideBarItem_list_text">Groups</p>
                        </li>
                        <li className="SideBarItem_list">
                            <FontAwesomeIcon icon={faNewspaper} />
                            <p className="SideBarItem_list_text">New Feeds</p>
                        </li>
                        <li className="SideBarItem_list">
                            <FontAwesomeIcon icon={faStore} />
                            <p className="SideBarItem_list_text">Marketplace</p>
                        </li>
                        <li className="SideBarItem_list">
                            <FontAwesomeIcon icon={faVideo} />
                            <p className="SideBarItem_list_text">Videos</p>
                        </li>
                        <li className="SideBarItem_list">
                            <button className="SideBarItem_list_button">
                                <FontAwesomeIcon icon={faAngleDown} />
                            </button>
                            <p className="SideBarItem_list_text">More</p>
                        </li>
                    </ul>
                </div>
                <Line className="line_SideBar" />
                <div>
                    <span className="SideBarItem_title">
                        <p className="SideBarItem_title_text_left">Your shortcut</p>
                        <p className="SideBarItem_title_text_right">Edit</p>
                    </span>
                    <ul className="SideBarItem">
                        <li className="SideBarItem_group">
                            <span className="SideBarItem_list_group">
                                <img
                                    src="https://i.pinimg.com/564x/66/9a/d6/669ad6d0f736a2a28b3ffdbe7251b33d.jpg"
                                    alt=""
                                ></img>
                                <p>Nguyen Viet Ha</p>
                            </span>
                        </li>
                        <li className="SideBarItem_group">
                            <span className="SideBarItem_list_group">
                                <img
                                    src="https://i.pinimg.com/564x/66/9a/d6/669ad6d0f736a2a28b3ffdbe7251b33d.jpg"
                                    alt=""
                                ></img>
                                <p>Nguyen Viet Ha</p>
                            </span>
                        </li>
                        <li className="SideBarItem_group">
                            <span className="SideBarItem_list_group">
                                <img
                                    src="https://i.pinimg.com/564x/66/9a/d6/669ad6d0f736a2a28b3ffdbe7251b33d.jpg"
                                    alt=""
                                ></img>
                                <p>Nguyen Viet Ha</p>
                            </span>
                        </li>
                        <li className="SideBarItem_group">
                            <span className="SideBarItem_list_group">
                                <img
                                    src="https://i.pinimg.com/564x/66/9a/d6/669ad6d0f736a2a28b3ffdbe7251b33d.jpg"
                                    alt=""
                                ></img>
                                <p>Nguyen Viet Ha</p>
                            </span>
                        </li>
                        <li className="SideBarItem_group">
                            <span className="SideBarItem_list_group">
                                <img
                                    src="https://i.pinimg.com/564x/66/9a/d6/669ad6d0f736a2a28b3ffdbe7251b33d.jpg"
                                    alt=""
                                ></img>
                                <p>Nguyen Viet Ha</p>
                            </span>
                        </li>
                        <li className="SideBarItem_group">
                            <button className="SideBarItem_list_button">
                                <FontAwesomeIcon icon={faAngleDown} />
                            </button>
                            <p className="SideBarItem_list_text">More</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;

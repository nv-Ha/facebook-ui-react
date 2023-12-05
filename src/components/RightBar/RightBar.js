import './RightBar.css';
import Line from '../lines/line';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis, faGift, faSearch } from '@fortawesome/free-solid-svg-icons';

function RightBar() {
    return (
        <div className="RightBar">
            <div className="RightBar_list">
                <div className="RightBar_list_Items">
                    <p>BirthDay</p>
                    <span className="RightBar_list_Items_gift">
                        <FontAwesomeIcon icon={faGift} className="gift_icon" />
                        <p>Today is xxx's birthday</p>
                    </span>
                </div>
                <Line className="RightBar_line" />
                <div className="RightBar_list_Items">
                    <span className="RightBar_list_Items_title">
                        <p className="RightBar_list_Items_title_Item">Contact Persons</p>
                        <p className="RightBar_list_Items_title_Item">
                            <FontAwesomeIcon
                                className="RightBar_list_Items_title_Item_Icons RightBar_list_Items_title_Item_Icons_Search"
                                icon={faSearch}
                            />
                            <FontAwesomeIcon className="RightBar_list_Items_title_Item_Icons" icon={faEllipsis} />
                        </p>
                    </span>

                    {/* list user online */}
                    <div className="RightBar_list_Items_User">
                        <ul>
                            <li className="RightBar_User_Online">
                                <img
                                    src="https://i.pinimg.com/564x/66/9a/d6/669ad6d0f736a2a28b3ffdbe7251b33d.jpg"
                                    alt=""
                                />
                                <span className="RightBar_point_online"></span>
                                <p>Nguyen Viet Ha</p>
                            </li>
                            {/* -- */}
                            <li className="RightBar_User_Online">
                                <img
                                    src="https://i.pinimg.com/564x/66/9a/d6/669ad6d0f736a2a28b3ffdbe7251b33d.jpg"
                                    alt=""
                                />
                                <span className="RightBar_point_online"></span>
                                <p>Nguyen Viet Ha</p>
                            </li>

                            <li className="RightBar_User_Online">
                                <img
                                    src="https://i.pinimg.com/564x/66/9a/d6/669ad6d0f736a2a28b3ffdbe7251b33d.jpg"
                                    alt=""
                                />
                                <span className="RightBar_point_online"></span>
                                <p>Nguyen Viet Ha</p>
                            </li>
                            <li className="RightBar_User_Online">
                                <img
                                    src="https://i.pinimg.com/564x/66/9a/d6/669ad6d0f736a2a28b3ffdbe7251b33d.jpg"
                                    alt=""
                                />
                                <span className="RightBar_point_online"></span>
                                <p>Nguyen Viet Ha</p>
                            </li>
                            <li className="RightBar_User_Online">
                                <img
                                    src="https://i.pinimg.com/564x/66/9a/d6/669ad6d0f736a2a28b3ffdbe7251b33d.jpg"
                                    alt=""
                                />
                                <span className="RightBar_point_online"></span>
                                <p>Nguyen Viet Ha</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RightBar;

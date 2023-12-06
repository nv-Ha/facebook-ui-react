import './RightBar.css';
import Line from '../lines/line';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis, faGift, faSearch } from '@fortawesome/free-solid-svg-icons';
import { Posts } from '../../data';
import { Link } from 'react-router-dom';

function RightBar() {
    return (
        <div className="RightBar">
            <div className="RightBar_list">
                <div className="RightBar_list_Items">
                    <p>BirthDay</p>
                    <span className="RightBar_list_Items_gift">
                        <FontAwesomeIcon icon={faGift} className="gift_icon" />
                        <p>Today is 's birthday</p>
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
                            {Posts.map((post) => (
                                <Link key={post.id} to={`/profile/${post.userId}`} style={{ textDecoration: 'none' }}>
                                    <li className="RightBar_User_Online">
                                        <img src={post.profilePicture} alt="" />
                                        <span className="RightBar_point_online"></span>
                                        <p className="RightBar_User_Online_name">{post.username}</p>
                                    </li>
                                </Link>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RightBar;

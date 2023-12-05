import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { GlobalTime } from '../../../icons/icons';
import './NewFeed.css';
import { faEllipsis, faXmark, faThumbsUp, faComment, faShare } from '@fortawesome/free-solid-svg-icons';
import Line from '../../lines/line';

function NewFeed() {
    return (
        <div className="newFeed">
            {/* 1 -left */}
            <div className="newFeed_Header">
                <div className="newFeed_Header_list">
                    <img src="https://i.pinimg.com/564x/66/9a/d6/669ad6d0f736a2a28b3ffdbe7251b33d.jpg" alt="" />
                    <span className="newFeed_Header_Items">
                        <p>La LiSa</p>
                        <span className="newFeed_Time_Post">
                            <p>1 hour ago</p>
                            <p>•</p>
                            <GlobalTime />
                        </span>
                    </span>
                </div>
                {/* 1 -right */}
                <div className="newFeed_Header_list">
                    <FontAwesomeIcon icon={faEllipsis} className="newFeed_Header_list_icon" />
                    <FontAwesomeIcon icon={faXmark} className="newFeed_Header_list_icon" />
                </div>
            </div>

            {/* 2 */}
            <div className="newFeed_text">
                <p>Love For All, Hatred For None.</p>
            </div>

            {/* 3 */}
            <div className="newFeed_image">
                <img src="assets/persons/person_id_5.jpg" alt=""></img>
            </div>

            {/* 4 */}
            <div className="newFeed_status">
                <div className="newFeed_status_icons newFeed_status_icons_like">
                    <img src="assets/like_icon.png" alt=""></img>
                </div>
                <div className="newFeed_status_icons">
                    <img src="assets/love_icon.png" alt=""></img>
                </div>
                <div className="newFeed_status_total">
                    <p>72</p>
                </div>
            </div>
            <Line className="newFeed_line" />

            {/* 5 */}
            <div className="newFeed_Action">
                <div className="newFeed_Action_Item">
                    <FontAwesomeIcon icon={faThumbsUp} />
                    <p>Like</p>
                </div>
                <div className="newFeed_Action_Item">
                    <FontAwesomeIcon icon={faComment} />
                    <p>Comment</p>
                </div>
                <div className="newFeed_Action_Item">
                    <FontAwesomeIcon icon={faShare} />
                    <p>Share</p>
                </div>
            </div>
        </div>
    );
}

export default NewFeed;

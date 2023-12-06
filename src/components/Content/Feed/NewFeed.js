import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { GlobalTime } from '../../../icons/icons';
import './NewFeed.css';
import { faEllipsis, faXmark, faThumbsUp, faComment, faShare } from '@fortawesome/free-solid-svg-icons';
import Line from '../../lines/line';
import { useState } from 'react';

function NewFeed({ post }) {
    const [like, setLike] = useState(post.like);
    const [likeValue, setLikeValue] = useState(true);

    const hangdleLike = () => {
        const LikeResult = likeValue ? like + 1 : like - 1;

        setLike(LikeResult);
        setLikeValue(!likeValue);
    };

    return (
        <div className="newFeed">
            {/* 1 -left */}
            <div className="newFeed_Header">
                <div className="newFeed_Header_list">
                    <img src={post.profilePicture} alt="" />
                    <span className="newFeed_Header_Items">
                        <p>{post.username}</p>
                        <span className="newFeed_Time_Post">
                            <p>{post.date}</p>
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
                <p>{post.desc}</p>
            </div>

            {/* 3 */}
            <div className="newFeed_image">
                <img src={post.photo} alt=""></img>
            </div>

            {/* 4 */}
            <div className="newFeed_status">
                <div className="newFeed_status_icons newFeed_status_icons_like">
                    <img src="../assets/like_icon.png" alt=""></img>
                </div>
                <div className="newFeed_status_icons">
                    <img src="../assets/love_icon.png" alt=""></img>
                </div>
                <div className="newFeed_status_total">
                    <p>{like}</p>
                </div>
            </div>
            <Line className="newFeed_line" />

            {/* 5 */}
            <div className="newFeed_Action">
                <div
                    className="newFeed_Action_Item"
                    onClick={hangdleLike}
                    style={{ color: likeValue ? '#CBCDD2' : '#0979FE' }}
                >
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

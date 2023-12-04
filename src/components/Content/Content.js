import './Content.css';
import Line from '../lines/line';
import NewFeed from './Feed/NewFeed';

function Content() {
    return (
        <div className="Content">
            <div className="Content_User_Post">
                <div className="Content_User_Post_input">
                    <img src="https://i.pinimg.com/564x/66/9a/d6/669ad6d0f736a2a28b3ffdbe7251b33d.jpg" alt="" />
                    <input className="Content_User_Post_input_Value" placeholder="Hey! What are you thinking ?" />
                </div>
                <Line className="Content_User_Post_Line" />
                {/* ---Icons */}
                <div className="Content_User_Post_icons">
                    <div className="Content_User_Post_icons_text">
                        <img
                            alt=""
                            className="Content_User_Live"
                            referrerpolicy="origin-when-cross-origin"
                            src="https://static.xx.fbcdn.net/rsrc.php/v3/yF/r/v1iF2605Cb5.png"
                        />
                        <p>Video Live</p>
                    </div>
                    <div className="Content_User_Post_icons_text">
                        <img
                            alt=""
                            className="Content_User_Img"
                            referrerpolicy="origin-when-cross-origin"
                            src="https://static.xx.fbcdn.net/rsrc.php/v3/yC/r/a6OjkIIE-R0.png"
                        />
                        <p>Image/Video</p>
                    </div>
                    <div className="Content_User_Post_icons_text">
                        <img
                            alt=""
                            className="Content_User_Emoji"
                            referrerpolicy="origin-when-cross-origin"
                            src="https://static.xx.fbcdn.net/rsrc.php/v3/yk/r/yMDS19UDsWe.png"
                        ></img>
                        <p>Emoji/Action</p>
                    </div>
                </div>
            </div>

            {/* ----New Feeds---- */}
            <NewFeed />
        </div>
    );
}

export default Content;

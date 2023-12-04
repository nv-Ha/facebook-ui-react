import { GlobalTime } from '../../../icons/icons';
import './NewFeed.css';

function NewFeed() {
    return (
        <div className="newFeed">
            <div>
                <div className="newFeed_Header">
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
                <div></div>
            </div>
            <div></div>
            <div></div>
            <div>
                <div></div>
                <div></div>
            </div>
            <div></div>
        </div>
    );
}

export default NewFeed;

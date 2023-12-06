import React from 'react';
import { useParams } from 'react-router-dom';
import './profile.css';
import { Posts } from '../../data';
import TopBar from '../../components/TopBar/TopBar';
import Line from '../../components/lines/line';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faEllipsis } from '@fortawesome/free-solid-svg-icons';
import ProfilePost from './ProfilePost/ProfilePost';
function Profile() {
    // Sử dụng hook useParams để lấy giá trị `userId` từ địa chỉ URL
    const { userId } = useParams();

    // Lọc thông tin người dùng dựa trên `userId`
    const userProfile = Posts.find((post) => post.userId === parseInt(userId, 10));

    return (
        <div>
            <TopBar />
            <div className="Profile">
                <div className="Profile_Top">
                    <div className="Profile_Top_Content">
                        {/* Background User */}
                        <div className="Profile_Background">
                            <img src={userProfile.background} alt="" />
                        </div>

                        {/* Avatar and messenger */}
                        <div className="Profile_Avatar">
                            <div className="Profile_Avatar_Image">
                                <img src={userProfile.profilePicture} alt="" />
                            </div>
                            {/* --- */}
                            <div className="Profile_Avatar_Messe">
                                <div className="Profile_Avatar_Messe_Friend">
                                    <p className="Profile_Avatar_UserName">{userProfile.username}</p>
                                    <span className="Profile_Avatar_Messe_Friend_List">
                                        <p>{userProfile.friend} friends</p>
                                        <p>•</p>
                                        <p>{userProfile.mutualFriends} mutual friends</p>
                                    </span>
                                </div>
                                {/* - */}
                                <div className="Profile_Avatar_Messe_Button">
                                    <button className="Profile_Avatar_Messe_Button_Item">
                                        <img
                                            class="Profile_Avatar_Messe_Button_icon"
                                            src="https://static.xx.fbcdn.net/rsrc.php/v3/ye/r/c9BbXR9AzI1.png"
                                            alt=""
                                        />
                                        <p>Friend</p>
                                    </button>
                                    <button className="Profile_Avatar_Messe_Button_Item">
                                        <img
                                            class="Profile_Avatar_Messe_Button_icon"
                                            src="https://static.xx.fbcdn.net/rsrc.php/v3/yE/r/1z-5F6qDswz.png"
                                            alt=""
                                        />
                                        <p>Contact</p>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <Line className="Profile_Nav_Line" />

                        {/* Nav conntroll */}
                        <div className="Profile_Nav">
                            <div>
                                <button className="Profile_Nav_Button">Post</button>
                                <button className="Profile_Nav_Button">Introduce</button>
                                <button className="Profile_Nav_Button">Friend</button>
                                <button className="Profile_Nav_Button">Image</button>
                                <button className="Profile_Nav_Button">Video</button>
                                <button className="Profile_Nav_Button">
                                    See More
                                    <FontAwesomeIcon icon={faCaretDown} style={{ marginLeft: '0.5rem' }} />
                                </button>
                            </div>
                            <div>
                                <button className="Profile_Nav_Button Profile_Ellipsis">
                                    <FontAwesomeIcon icon={faEllipsis} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Posts */}
                <ProfilePost userProfile={userProfile} />
            </div>
        </div>
    );
}

export default Profile;

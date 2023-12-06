import ProfilePostList from './PostList';
// import { useState, useEffect } from 'react';
import './ProfilePost.css';

function ProfilePost({ userProfile }) {
    const userImages = userProfile.images.slice(0, 9);
    const userImagesFriend = userProfile.friends.slice(0, 9);

    return (
        <div className="Profile_Botttom">
            <div className="Profile_NewFeed">
                {/* Introduce user -  left */}
                <div className="Profile_Introduce">
                    {/* --Top */}
                    <div className="Profile_Introduce_Top">
                        <h2 className="Profile_Introduce_Title">Introduce</h2>
                        {userProfile.study !== undefined && (
                            <span className="Profile_Introduce_Top_User">
                                <img
                                    className="Profile_Introduce_Top_User_Icon"
                                    src="https://static.xx.fbcdn.net/rsrc.php/v3/yG/r/H804hWf2rBh.png"
                                    alt=""
                                />
                                <p>{userProfile.study}</p>
                            </span>
                        )}
                        {userProfile.home !== undefined && (
                            <span className="Profile_Introduce_Top_User">
                                <img
                                    className="Profile_Introduce_Top_User_Icon"
                                    src="https://static.xx.fbcdn.net/rsrc.php/v3/y3/r/Yifeo6sHdtL.png"
                                    alt=""
                                />
                                <p>{userProfile.home}</p>
                            </span>
                        )}
                        {userProfile.locate !== undefined && (
                            <span className="Profile_Introduce_Top_User">
                                <img
                                    className="Profile_Introduce_Top_User_Icon"
                                    src="https://static.xx.fbcdn.net/rsrc.php/v3/yK/r/dkccKhK21Su.png"
                                    alt=""
                                />
                                <p>{userProfile.locate}</p>
                            </span>
                        )}
                    </div>

                    {/* --Center */}
                    <div className="Profile_Introduce_Center">
                        <h2 className="Profile_Introduce_Title">Image</h2>
                        <div className="Profile_Introduce_Center_Image">
                            {userImages.map((res, index) => (
                                <div key={index} className="Profile_Introduce_Center_Image_Boder">
                                    <img className="Profile_Image_Item" src={res.img} alt="" />
                                </div>
                            ))}
                            {/* {userProfile.images !== undefined && } */}
                        </div>
                    </div>

                    <div className="Profile_Introduce_Bottom">
                        <h2 className="Profile_Introduce_Title">Friends</h2>
                        <span className="Profile_Introduce_Friend">
                            <p>{userProfile.friend}</p>
                            <p>
                                {userProfile.mutualFriends !== undefined && (
                                    <p>({userProfile.mutualFriends} mutual friends)</p>
                                )}
                            </p>
                        </span>
                        {/* list friend */}
                        <div className="Profile_Introduce_Bottom_ListFriend">
                            {userImagesFriend.map((res, index) => (
                                <>
                                    {res.id !== undefined && (
                                        <div className="Profile_Introduce_Bottom_father">
                                            <div key={index} className="Profile_Introduce_Bottom_Boder">
                                                <img className="Profile_Image_Item" src={res.img} alt="" />
                                            </div>
                                            <p className="Profile_Introduce_Bottom_UserName">{res.username}</p>
                                            <p>{userProfile.mutualFriends} mutual friends</p>
                                        </div>
                                    )}
                                </>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="Profile_Introduce_Transprent"></div>

                {/* Content user */}
                <div className="Profile_Content">
                    {userProfile.post.map((res) => (
                        <>
                            <ProfilePostList post={res} />
                        </>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ProfilePost;

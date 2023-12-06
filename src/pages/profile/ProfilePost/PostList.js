import './ProfilePost.css';
import NewFeed from '../../../components/Content/Feed/NewFeed';

function ProfilePostList({ post }) {
    return (
        <div>
            <NewFeed post={post} />
        </div>
    );
}

export default ProfilePostList;

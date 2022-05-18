import { useParams } from 'react-router-dom';

function Profile({user}) {
    return (
        <div>
            User is: {user.username}
        </div>
    )
}

export default Profile
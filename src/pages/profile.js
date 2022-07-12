function Profile({user}) {
    return (
        <div className="p-5">
            Profile<br/><br/>
            User is: {user.username}<br/><br/>
        </div>
    )
}

export default Profile
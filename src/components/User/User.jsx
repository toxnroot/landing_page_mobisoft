
const User = ({bio, name,image,job}) => {
    return (
        <>
        <div className="user">
            <img className="image iamge2" src={image} alt="image" />
            <div className="info">
                <h1 className="name name2">{name}</h1>
                <p className="job job2">{job}</p>
            </div>
           
        </div>
        <span className="bio message">
            {bio}
        </span>
        </>
    );
}

export default User;

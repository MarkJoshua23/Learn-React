function ProfilePicture(){
    const imageURL = "./src/assets/me.png"
    const handleClick = (e: React.MouseEvent<HTMLImageElement>) => e.currentTarget.style.display = "none"
    return(
        <img className="img-me" onClick={(e)=> handleClick(e)}  src={imageURL} alt="me" />
    );
}

export default ProfilePicture
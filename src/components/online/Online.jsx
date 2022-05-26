import "./online.css"

export default function Online({user}) {
  return (
    <li className="rigthbarFriend">
            <div className="rigthProfileImgContainer">
              <img className="rigthbarProfileImg"
              src={user.profilePicture}
              />
              <span className="rigthbarOnline"></span>
            </div>
            <span className="rightbarUsername">{user.username}</span>
          </li>
  )
}

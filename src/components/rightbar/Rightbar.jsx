import "./rightbar.css"
import {Users} from "../../dummyData"
import Online from "../online/Online"

export default function Rightbar({profile}) {

  const HomeRightBar = () =>{
    return(
      <>
      <div className="birthdayContainer">
          <img className="birthdayImg" src="assets/gift.png" />
          <span className="birthdayText">
         <b>Ирина Цай</b> и <b>3 друга </b> сегодня день рождения
          </span>
        </div>
        <img className="rightbarAd" src="assets/ad.png"/>
        <h4 className="rigthbarTitle">Друзья Онлайн</h4>
        <ul className="rightFriendsList">
          {Users.map(u =>(
            <Online key= {u.id} user={u} />
          ))}
        </ul>
      </>
    )
  }
  const ProfileRigthbar = () =>{
    return(<h1>firfjirfj</h1>)
  }
  return (
    <div className="rightbar">
      <div className="rightWrapper">
        <ProfileRigthbar />
      </div>
    </div>
  )
}

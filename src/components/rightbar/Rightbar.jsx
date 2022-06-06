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
    return( 
      <>
      <h4 className="rightbarTitle" >Обо Мне</h4>
      <div className="rigthbarInfo">
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">Город:</span>
          <span className="rightbarInfoValue">Минск</span>
        </div>
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">РОДИНА:</span>
          <span className="rightbarInfoValue">Гомель</span>
        </div>
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">Отношения:</span>
          <span className="rightbarInfoValue">Женат</span>
        </div>
      </div>
      <h4 className="rightbarTitle">Друзья</h4>
      <div className="rightbarFollowings">
        <div className="rightbarFollowing">
          <img src="assets/person/1.jpeg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Джон Картер</span>
        </div>
        <div className="rightbarFollowing">
          <img src="assets/person/2.jpeg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Джон Картер</span>
        </div>
        <div className="rightbarFollowing">
          <img src="assets/person/3.jpeg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Джон Картер</span>
        </div>
        <div className="rightbarFollowing">
          <img src="assets/person/4.jpeg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Джон Картер</span>
        </div>
        <div className="rightbarFollowing">
          <img src="assets/person/5.jpeg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Джон Картер</span>
        </div>
        <div className="rightbarFollowing">
          <img src="assets/person/6.jpeg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Джон Картер</span>
        </div>
      </div>
      </>
    )
  }
  return (
    <div className="rightbar">
      <div className="rightWrapper">
        <ProfileRigthbar />
      </div>
    </div>
  )
}

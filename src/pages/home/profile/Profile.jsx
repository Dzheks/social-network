import Feed from "../../../components/feed/Feed"
import Navbar from "../../../components/navbar/Navbar"
import Rightbar from "../../../components/rightbar/Rightbar"
import Sidebar from "../../../components/sidebar/Sidebar"
import "./profile.css"



export default function Profile() {
  return (
    <>
      <Navbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img 
              className="profileCoverImg" 
              src="assets/post/3.jpeg"
               />
              <img 
              className="profileUserImg" 
              src="assets/person/8.jpeg" 
              />
            </div>
              <div className="profileInfo">
                <h4 className="profileInfoName">Ксения Андреевна</h4>
                <span className="profileInfoDesc">Привет, Друзья!</span>
              </div>
            </div>
            <div className="profileRightBottom">
              <Feed />
              <Rightbar profile/>
            </div>
          </div>
        </div>
    </>
  )
}

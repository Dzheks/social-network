import Feed from "../../../components/feed/Feed"
import Navbar from "../../../components/navbar/Navbar"
import Rightbar from "../../../components/rightbar/Rightbar"
import Sidebar from "../../../components/sidebar/Sidebar"
import "./profile.css"



export default function Profile() {
  return (
    <>
    <Navbar />
    <div className="homeContainer">
        <Sidebar />
        <Feed />
        <Rightbar />
        
    </div>
</>
  )
}

import "./post.css";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Users } from "../../dummyData"
import {useState} from "react"

export default function Post({post}) {
  const [like, setLike] = useState(post.like)
  const [isliked, setIsLiked] = useState(false)

  const likeHandler= ()=>{
    setLike(isliked ? like-1 : like +1)
    setIsLiked(!isliked)
  }
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img className="postProfileImg" src={Users.filter((u) => u.id === post.userId)[0].profilePicture}/>
              <span className="postUsername">{Users.filter((u) => u.id === post.userId)[0].username}
              <div><span className="postDate">{post?.date}</span>
              </div>
              </span>
          </div>
          <div className="postTopRight">
            <MoreVertIcon />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post?.desc}</span>
          <img className="postImg" src={post.photo}/>
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img className="likeIcon" src="assets/like.png" onClick={likeHandler}/>
            <img className="likeIcon" src="assets/heart.png" onClick={likeHandler}/>
            <span className="postLikeCounter">{like} Лайков</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{post.comment} Комментарии</span>
          </div>
        </div>
      </div>
    </div>
  );
}

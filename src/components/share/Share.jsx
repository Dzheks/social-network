import "./share.css"
import PermMediaIcon from '@mui/icons-material/PermMedia';
import LabelIcon from '@mui/icons-material/Label';
import RoomIcon from '@mui/icons-material/Room';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';

export default function Share() {
  return (
    <div className="share">
     <div className="shareWrapper">
         <div className="shareTop">
             <img className="shareProfileImg" src="/assets/person/1.jpeg"/>
             <input placeholder="Делюсь своими мыслями..." className="shareInput"/>
         </div>
         <hr className="shareHr"/>
         <div className="shareBottom">
             <div className="shareOptions">
                 <div className="shareOption">
                     <PermMediaIcon className="=shareIcon" color="primary" sx={{ fontSize: 24, marginRight:1 }} />
                     <span className="shareOptionText">Фото / Видео</span>
                 </div>
                 <div className="shareOption">
                     <LabelIcon className="=shareIcon" color="secondary" sx={{ fontSize: 24, marginRight:1 }}/>
                     <span className="shareOptionText">Избранное</span>
                 </div>
                 <div className="shareOption">
                     <RoomIcon className="=shareIcon" color="success" sx={{ fontSize: 24, marginRight:1 }}/>
                     <span className="shareOptionText">Местоположение</span>
                 </div>
                 <div className="shareOption">
                     <EmojiEmotionsIcon className="=shareIcon" htmlColor="gold" sx={{ fontSize: 24, marginRight:1 }}/>
                     <span className="shareOptionText">Состояние</span>
                 </div>
             </div>
             <button className="shareButton">Поделиться</button>
         </div>
     </div>
    </div>
  )
}

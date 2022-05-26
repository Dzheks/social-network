import "./sidebar.css"
import { RssFeed, Chat } from "@mui/icons-material"
import VideocamIcon from '@mui/icons-material/Videocam';
import GroupsIcon from '@mui/icons-material/Groups';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import WorkIcon from '@mui/icons-material/Work';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import SchoolIcon from '@mui/icons-material/School';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ExploreIcon from '@mui/icons-material/Explore';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import { Users } from "../../dummyData"
import CloseFriend from "../сloseFriend/CloseFriend";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <RssFeed className="sidebarIcon" />
            <span className="sidebarListItemText">Новости</span>
          </li>
          <li className="sidebarListItem">
            <NotificationsNoneIcon className="sidebarIcon" />
            <span className="sidebarListItemText">Уведомления</span>
          </li>
          <li className="sidebarListItem">
            <ExploreIcon className="sidebarIcon" />
            <span className="sidebarListItemText">Рекоммендации</span>
          </li>
          <li className="sidebarListItem">
            <Chat className="sidebarIcon" />
            <span className="sidebarListItemText">Мессенджер</span>
          </li>
          <li className="sidebarListItem">
            <PersonOutlineIcon className="sidebarIcon" />
            <span className="sidebarListItemText">Друзья</span>
          </li>
          <li className="sidebarListItem">
            <GroupsIcon className="sidebarIcon" />
            <span className="sidebarListItemText">Сообщества</span>
          </li>
          <li className="sidebarListItem">
            <PhotoCameraIcon className="sidebarIcon" />
            <span className="sidebarListItemText">Фото</span>
          </li>
          <li className="sidebarListItem">
            <VideocamIcon className="sidebarIcon" />
            <span className="sidebarListItemText">Видео</span>
          </li>
          <li className="sidebarListItem">
            <LibraryMusicIcon className="sidebarIcon" />
            <span className="sidebarListItemText">Музыка</span>
          </li>
          <li className="sidebarListItem">
            <BookmarksIcon className="sidebarIcon" />
            <span className="sidebarListItemText">Избранное</span>
          </li>
          <li className="sidebarListItem">
            <QuestionAnswerIcon className="sidebarIcon" />
            <span className="sidebarListItemText">Вопрос/Ответ</span>
          </li>
          <li className="sidebarListItem">
            <WorkIcon className="sidebarIcon" />
            <span className="sidebarListItemText">Работа</span>
          </li>
          <li className="sidebarListItem">
            <EmojiEventsIcon className="sidebarIcon" />
            <span className="sidebarListItemText">События</span>
          </li>
          <li className="sidebarListItem">
            <SchoolIcon className="sidebarIcon" />
            <span className="sidebarListItemText">Курсы</span>
          </li>
        </ul>
        <button className="sidebarButton">Показать больше</button>
        <hr className="sidebarHr" />
        <ul className="sidebarFriendList">
          {Users.map((u) => (
            <CloseFriend key={u.id} user={u} />
          ))}
        </ul>
      </div>
    </div>
  )
}

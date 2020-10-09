import React from 'react'
import './Sidebar.css'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord'
import CreateIcon from '@material-ui/icons/Create'
import SidebarOption from './SidebarOption'
import InsertCommentIcon from '@material-ui/icons/InsertComment'
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder"
import AppsIcon from "@material-ui/icons/Apps"
import AddIcon from "@material-ui/icons/Add"

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <div className="sidebar__info">
          <h2>Workspace Name</h2>
          <h3>
            <FiberManualRecordIcon />
            Dev Chea
          </h3>
        </div>
        <CreateIcon />
      </div>
      <SidebarOption Icon={InsertCommentIcon} title="Threads" />
      <SidebarOption Icon={BookmarkBorderIcon} title="Channel Browser" />
      <SidebarOption Icon={AppsIcon} title="Apps" />
      <SidebarOption title="CompanyWideChannel" />
      <SidebarOption title="Marketing" />
      <SidebarOption title="Dev" />
      <SidebarOption title="Finance" />
      <hr />
      <SidebarOption Icon={AddIcon} title="Add Channel" />
    </div>
  );
}

export default Sidebar
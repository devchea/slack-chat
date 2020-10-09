import React from 'react'
import './Sidebar.css'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord'
import CreateIcon from '@material-ui/icons/Create'
import SidebarOption from './SidebarOption'

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <div className="sidebar__info">
          <h2>Workspace Name</h2>
          <h3>
            <FiberManualRecordIcon />
            Richard
          </h3>
        </div>
        <CreateIcon />
        <SidebarOption title='Threads'/>
      </div>
    </div>
  );
}

export default Sidebar
import React from 'react'
import './Sidebar.css'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord'
import CreateIcon from '@material-ui/icons/Create'

function Sidebar() {
  return(
    <div className='sidebar'>
      <div className='sidebar__header'>
        <h2>My Slack Workspace</h2>
        <h3>
          <FiberManualRecordIcon />
            MyName
        </h3>
        <CreateIcon />
      </div>
    </div>
  )
}

export default Sidebar
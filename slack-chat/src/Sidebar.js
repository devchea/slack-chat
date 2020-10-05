import React from 'react'
import './Sidebar.css'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord'

function Sidebar() {
  return(
    <div className='sidebar'>
      <div className='sidebar__header'>
        <h2>My Slack Workspace</h2>
        <h3>
          <FiberManualRecordIcon/>
          MyName
        </h3>
      </div>
    </div>
  )
}

export default Sidebar
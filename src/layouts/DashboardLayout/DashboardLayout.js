import React from 'react'
import { Container } from 'reactstrap'
import NavBar from 'components/NavBar'
// import PostModal from 'components/Modal'
// import Post from 'components/Post'

function DashboardLayout({ children }) {
  return (
    <div className="dashboard-layout">
      <NavBar />
      {/* <PostModal /> */}
      <Container>{children}</Container>
    </div>
  )
}

export default DashboardLayout

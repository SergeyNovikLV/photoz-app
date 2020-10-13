import React from 'react'
import { Card } from 'reactstrap'
import Image from 'components/Image'
import Comments from 'components/Comments'
import './post.scss'

function Post({ title, imgUrl, postId }) {
  return (
    <Card className="post-card mt-4">
      <h4 className="post-title">{title}</h4>
      <Image alt="butterfly" className="post-image" src={imgUrl} />
      <Comments postId={postId} />
    </Card>
  )
}
export default Post

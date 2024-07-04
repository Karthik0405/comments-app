// Write your code here
import {formatDistanceToNow} from 'date-fns'
import './index.css'

const CommentItem = props => {
  const {commentItem, isCommentIsLiked, isCommentIsDeleted} = props
  const {name, id, comment, classname, dateIs, isActive} = commentItem
  const dateFormat = formatDistanceToNow(dateIs)
  const isLiked = isActive ? 'is-liked' : ''
  const imageIs = isActive
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'
  const isCommentLiked = () => {
    isCommentIsLiked(id)
  }
  const isCommentDeleted = () => {
    isCommentIsDeleted(id)
  }
  return (
    <li>
      <div className="user-details-container">
        <div className={`${classname} inital-continer initaial-name `}>
          <p>{name[0].toUpperCase()}</p>
        </div>
        <div>
          <div className="comment-continer-user">
            <h1 className="user-name">{name}</h1>
            <p className="time-class">{dateFormat}</p>
          </div>
          <p className="comment-description">{comment}</p>
        </div>
      </div>
      <div className="buttons-container">
        <button className="like-button" type="button" onClick={isCommentLiked}>
          <img src={imageIs} className="like-button-img" alt="like" />
          <p className={`like-text ${isLiked}`}>Like</p>
        </button>
        <button
          className="like-button"
          type="button"
          data-testid="delete"
          onClick={isCommentDeleted}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            className="like-button-img"
            alt="delete"
          />
        </button>
      </div>
      <hr className="hr-line-comment" />
    </li>
  )
}

export default CommentItem

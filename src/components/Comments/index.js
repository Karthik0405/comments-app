import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import CommentItem from '../CommentItem'
import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here
class Comments extends Component {
  state = {
    usernameInput: '',
    commentInput: '',
    commentList: [],
    isActive: false,
  }

  getUsername = e => {
    this.setState({
      usernameInput: e.target.value,
    })
  }

  getComment = e => {
    this.setState({
      commentInput: e.target.value,
    })
  }

  gettingCommentList = () => {
    const {usernameInput, commentInput, isActive} = this.state
    const randomnum = Math.floor(
      Math.random() * initialContainerBackgroundClassNames.length,
    )
    const userDetils = {
      id: uuidv4(),
      name: usernameInput,
      comment: commentInput,
      classname: initialContainerBackgroundClassNames[randomnum],
      dateIs: new Date(),
      isActive,
    }
    this.setState(prevState => ({
      commentList: [...prevState.commentList, userDetils],
      usernameInput: '',
      commentInput: '',
    }))
  }

  isCommentIsLiked = id => {
    this.setState(prevState => ({
      commentList: prevState.commentList.map(commentItem => {
        if (commentItem.id === id) {
          return {...commentItem, isActive: !commentItem.isActive}
        }
        return commentItem
      }),
    }))
  }

  isCommentIsDeleted = id => {
    this.setState(prevState => ({
      commentList: prevState.commentList.filter(
        commentItem => commentItem.id !== id,
      ),
    }))
  }

  render() {
    const {usernameInput, commentInput, commentList} = this.state

    return (
      <div className="comments-container">
        <h1 className="comments-input-heading">Comments</h1>
        <div className="comments-input-img-container">
          <form className="comments-input-container">
            <p className="comments-input-para">
              Say something about 4.O Technologies
            </p>
            <input
              type="text"
              className="user-name-input"
              placeholder="Your Name"
              value={usernameInput}
              onChange={this.getUsername}
            />
            <textarea
              rows="8"
              cols="55"
              placeholder="Your Comment"
              className="user-Comment-input"
              value={commentInput}
              onChange={this.getComment}
            />
            <button
              className="user-button"
              type="button"
              onClick={this.gettingCommentList}
            >
              Add Comment
            </button>
          </form>
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
            alt="comments"
          />
        </div>
        <hr className="hr-line" />
        <p className="comments-para">
          <span className="comment-span">{commentList.length}</span> Comments
        </p>
        <ul className="list-items">
          {commentList.map(commentItem => (
            <CommentItem
              commentItem={commentItem}
              key={commentItem.id}
              isCommentIsLiked={this.isCommentIsLiked}
              isCommentIsDeleted={this.isCommentIsDeleted}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default Comments

import './index.css'

import {MdDelete} from 'react-icons/md'

const MusicsList = props => {
  const {listItem, onClickDeleteButton} = props
  const {imageUrl, name, genre, duration, id} = listItem

  const onClickButton = () => {
    onClickDeleteButton(id)
  }

  return (
    <li className="music-list-item">
      <div className="image-container">
        <img className="image" src={imageUrl} alt="track" />
        <div className="name-container">
          <p className="music-directer-name">{name}</p>
          <p className="genre">{genre}</p>
        </div>
      </div>
      <div className="duration-container">
        <p className="duration">{duration}</p>
        <button
          type="button"
          className="delete-button"
          data-testid="delete"
          onClick={onClickButton}
        >
          <MdDelete size={20} className="delete-icon" />
        </button>
      </div>
    </li>
  )
}

export default MusicsList

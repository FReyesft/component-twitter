import { useState } from "react";
export default function TwitterFollowCard({
  name,
  username,
  avatar,
  initialIsFollowing,
}) {
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing);
  const text = isFollowing ? "Siguiendo" : "Seguir";
  const buttonClassName = isFollowing
    ? "tw-followCard-button is-following"
    : "tw-followCard-button";

  const handleClick = () => {
    setIsFollowing(!isFollowing);
  };
  return (
    <>
      <div className="tw-followCard">
        <div className="tw-cardUser">
          <img className="tw-cardUser-avatar" src={avatar}></img>
          <div className="tw-info">
            <p className="tw-name">{name}</p>
            <p className="tw-userName">@{username}</p>
          </div>
          <button className={buttonClassName} onClick={handleClick}>
            <span className="tw-followCard-text">{text}</span>
            <span className="tw-followCard-stopFollow">Dejar de seguir</span>
          </button>
        </div>
      </div>
    </>
  );
}

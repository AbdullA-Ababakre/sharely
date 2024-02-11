import React from "react";
import man from "../../assets/man.png";
import "./index.scss";
function CreatorCard({
  name,
  email,
  onlineProfile,
  twitter,
  ticktok,
  instagram,
  tags,
}) {
  return (
    <div className="profile-card">
      <div className="profile-image">
        <img src={man} alt="" />
      </div>
      <div className="profile-info">
        <h2>{name}</h2>
        {email && <p className="info-item">Email: {email}</p>}
        {onlineProfile && (
          <p className="info-item">
            <a target="_blank" rel="noreferrer" href={onlineProfile}>
              Online Profile
            </a>
          </p>
        )}
        {twitter && (
          <p className="info-item">
            <a target="_blank" rel="noreferrer" href={twitter}>
              Twitter
            </a>
          </p>
        )}
        {ticktok && (
          <p className="info-item">
            <a target="_blank" rel="noreferrer" href={ticktok}>
              TickTok
            </a>
          </p>
        )}
        {instagram && (
          <p className="info-item">
            <a target="_blank" rel="noreferrer" href={instagram}>
              Instagram
            </a>
          </p>
        )}
        <div className="profile-meta">
          {tags.map((tag, index) => (
            <p className="meta-item" key={index}>
              {tag}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CreatorCard;

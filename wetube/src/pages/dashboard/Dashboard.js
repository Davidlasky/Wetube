import React from "react";
import "./dashboard.css"; // Importing the CSS file
import Bar from "../../components/barchart/Barchart";
import Pie from "../../components/piechart/Piechart";
import YouTubeEmbed from "../../components/thumbnail/Thumbnail";

const Dashboard = () => {
  return (
    <div className="dashboard">
      {/* Header Section */}
      <div className="header">
        <div className="date-section">
          <div className="label">Total videos</div>
          <div className="value">114514 videos</div>
        </div>
        <div className="bar-chart">
          <Bar />
        </div>
        <div className="category-section">
          <Pie />
        </div>
      </div>
      {/* Stats Section */}
      <div className="stats">
        <div className="label">Total Playlists</div>
        <div className="value">23333 lists</div>
      </div>
      <hr className="divider" />
      {/* Recommended Videos Section */}
      <div className="videos-grid">
        <div className="video-card">
          {" "}
          //to be changed to a button
          <YouTubeEmbed videoId="-XFBVAAzXjc" />
          <div className="label">Playlist 1</div>
          <div className="value">New American Nazis</div>
        </div>
        <div className="video-card">
          {" "}
          //to be changed to a button
          <YouTubeEmbed videoId="dVihVavsYE4" />
          <div className="label">Playlist 2</div>
          <div className="value">THIS IS HOW I CARRY ON DOOMFIST</div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

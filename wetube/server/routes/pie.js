const express = require("express");
const router = express.Router();
const connection = require("../connection");

router.get("/", (req, res) => {
  const sqlQuery = `
    SELECT videoCategory, SUM(videoView) AS totalViews
    FROM Video
    GROUP BY videoCategory
    ORDER BY totalViews DESC
    LIMIT 5;
  `;

  connection.query(sqlQuery, (err, results) => {
    if (err) {
      res.status(500).send("Error fetching data");
    } else {
      res.json(results);
    }
  });
});

router.get("/:id/countRegionVideos", (req, res) => {
  // Step 1: Get the user's region
  let userId = req.params.id;
  let getRegionSql = `SELECT userRegion FROM Users WHERE userID = ?;`;

  connection.query(getRegionSql, [userId], function (err, regionResult) {
    if (err) {
      res.status(500).send(err);
      return;
    }

    if (regionResult.length === 0) {
      res.status(404).send("User not found");
      return;
    }

    // Step 2: Construct the dynamic SQL query
    let region = regionResult[0].userRegion;
    let countVideosSql = `
    SELECT v.videoCategory, COUNT(*) AS totalVideos
    FROM ?? r JOIN Video v
    ON r.video_id = v.videoID
    GROUP BY v.videoCategory
    ORDER BY totalVideos DESC
    LIMIT 5;`;

    // Step 3: Execute the query
    connection.query(countVideosSql, [region], function (err, countResult) {
      if (err) {
        res.status(500).send(err);
        return;
      }
      res.json(countResult);
    });
  });
});


router.get("/:id/countListCats", (req, res) => {
  const userId = req.params.id;

  // MySQL query to retrieve the top 5 categories with the most videos
  const query = `
    SELECT v.videoCategory, COUNT(*) AS numVideos
    FROM UserPlaylist up
    JOIN Contain c ON up.playlistID = c.playListID
    JOIN Video v ON c.videoID = v.videoID
    WHERE up.userID = ?
    GROUP BY v.videoCategory
    ORDER BY numVideos DESC
    LIMIT 5;
  `;

  // Execute the query with the user ID as a parameter
  connection.query(query, [userId], (error, results) => {
    if (error) {
      console.error("Error executing query:", error);
      res.status(500).json({ error: "An error occurred" });
    } else {
      res.json(results);
    }
  });
});

module.exports = router;

module.exports = router;

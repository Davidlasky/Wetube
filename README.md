# WETUBE: Your Personalized Video Playlist Platform
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-4-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->
![logo-photoaidcom-2x-ai-zoom](https://github.com/Davidlasky/Wetube/assets/40486797/8f082045-6bcb-4bdb-9141-7374ec35ab9a)


Welcome to WETUBE, a personalized playlist platform that brings a world of curated content right to your fingertips!  

Our website, powered by robust MySQL databases, offers an intuitive interface that lets you explore and organize videos into playlists for a seamless viewing experience. You can explore videos based on your interests and make new friends with similar preferences.🍿
<img width="1920" alt="Screenshot 2023-12-19 at 17 45 20" src="https://github.com/Davidlasky/Wetube/assets/40486797/53b8d347-f99a-4121-aa1f-a81237f1b6a5">


## Features
- Embedded Videos:

  At WETUBE, we believe that every video tells a story, and every playlist sets a mood. Dive into an expansive library where each video is presented within an iframe for uninterrupted play, allowing you to immerse yourself in content without ever leaving the comfort of your dashboard. For every video you watch, you'll find a detailed stats section. This is where the story behind the screen comes to life, displaying the channel name, category, and the number of views & likes —- a testament to the video's impact and popularity.
  <img width="1920" alt="Screenshot 2023-12-19 at 17 18 29" src="https://github.com/Davidlasky/Wetube/assets/40486797/f3defbc5-ab09-4731-ac9c-68de03fbced1">


- Browsing Habits Analysis:
    
    WETUBE introduces Browsing Habits Analysis, showcasing your video preferences through visually appealing bar and pie charts. Easily understand your favorite genres and how your interests evolve over time, enhancing your overall video discovery experience.<img width="1703" alt="Screenshot 2023-12-19 at 17 22 27" src="https://github.com/Davidlasky/Wetube/assets/40486797/4967b64b-668c-4148-9513-f36052a02f4f">

    
- Friends Recommendation:
    
    Find friends who love the same videos as you do, and explore new content through the lens of common preferences. Our recommendation engine not only suggests videos but also potential friends, enhancing your social experience by connecting you with like-minded individuals based on locations, commonly liked videos and personal category preferences. Build a vibrant network around common interests, fostering meaningful interactions and expanding your social circle.
    <img width="1765" alt="Screenshot 2023-12-19 at 17 27 16" src="https://github.com/Davidlasky/Wetube/assets/40486797/f9b82047-c947-4164-9729-b7b5e62c148c">

- Trending Videos:

  Our trending page is the pulse of WETUBE. Here, you'll discover what's hot in your region through engaging bar and pie charts, visualizing the popularity and viewership of the latest trends. This interactive page not only highlights trending videos but also connects you with other users who are riding the same wave of trending content.

    At the bottom of the trending page, you'll find personalized user recommendations, bringing you closer to others in your region who are watching what's in vogue. It's a social and visual feast, tailored to keep you at the forefront of regional trends and connected to the WETUBE community.<img width="1739" alt="Screenshot 2023-12-19 at 17 54 07" src="https://github.com/Davidlasky/Wetube/assets/40486797/7d0d26ab-ccab-414d-822d-1fdff234751f">
 


## Getting Started

- Create a Playlist:
    
    Start the journey by creating a playlist and give it a fitted name, you can also try naming it “friends’ playlists” to auto-generate playlists from your friend’s favorite videos.
  <img width="1920" alt="Screenshot 2023-12-19 at 17 29 28" src="https://github.com/Davidlasky/Wetube/assets/40486797/66ed1d79-5b39-48bf-a5fd-89d0db1ed15c">

    

- Add a friend:
    
     Wanna see what other people are watching? Add a friend!
    

## Technologies

| 🖥️ | ⚙️ |
| --- | --- |
| Frontend | ![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB) ![React Route](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white) |
| Backend | ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) ![MySQL](https://img.shields.io/badge/MySQL-00000F?style=for-the-badge&logo=mysql&logoColor=white) ![Google Cloud](https://img.shields.io/badge/Google_Cloud-4285F4?style=for-the-badge&logo=google-cloud&logoColor=white) |
| UI/UX Design | ![CSS](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white) ![Figma](https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white) |
| Libraries  | ![Toastify](https://img.shields.io/badge/Toastify-272b33?logo=square&logoColor=white&style=for-the-badge) ![ReCharts](https://img.shields.io/badge/ReCharts-272b33?logo=square&logoColor=white&style=for-the-badge) |



## Instructions

If you want to run this project on your own, first setup a sql server on platforms like GCP or AWS, then download the Trending YT Video datasets from Kaggle, create tables as specified in this [guide](https://github.com/Davidlasky/Wetube/blob/main/doc/stage3.md), and finally do the following steps:

1. Clone the repo:
    
    ```bash
    git clone
    ```
    
2. Navigate to the wetube folder
    
    ```bash
    cd wetube
    ```
    
3. Install the dependencies:
    
    ```bash
    npm install
    ```
4. Change the IP address in each file(except from the connection.js, where you should replace the IP address with your sql server's IP) to your server's IP or change to 'localhost' if you just want to run it locally.

5. Start the backend server:
    
    ```bash
    node server/server.js
    ```
    
6. Start the frontend server:
    
    ```bash
    npm start
    ```
    


## Contributors

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/Davidlasky"><img src="https://avatars.githubusercontent.com/u/40486797?v=4?s=100" width="100px;" alt="LaskyJ"/><br /><sub><b>LaskyJ</b></sub></a><br /><a href="https://github.com/Davidlasky/Wetube/commits?author=Davidlasky" title="Code">💻</a> <a href="#blog-Davidlasky" title="Blogposts">📝</a> <a href="#maintenance-Davidlasky" title="Maintenance">🚧</a> <a href="#platform-Davidlasky" title="Packaging/porting to new platform">📦</a> <a href="#security-Davidlasky" title="Security">🛡️</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/Lumi-works"><img src="https://avatars.githubusercontent.com/u/102558017?v=4?s=100" width="100px;" alt="Lumi-works"/><br /><sub><b>Lumi-works</b></sub></a><br /><a href="https://github.com/Davidlasky/Wetube/commits?author=Lumi-works" title="Code">💻</a> <a href="#blog-Lumi-works" title="Blogposts">📝</a> <a href="#design-Lumi-works" title="Design">🎨</a> <a href="#financial-Lumi-works" title="Financial">💵</a> <a href="https://github.com/Davidlasky/Wetube/commits?author=Lumi-works" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/Bruceyty"><img src="https://avatars.githubusercontent.com/u/93013049?v=4?s=100" width="100px;" alt="Bruceyty"/><br /><sub><b>Bruceyty</b></sub></a><br /><a href="https://github.com/Davidlasky/Wetube/commits?author=Bruceyty" title="Code">💻</a> <a href="#ideas-Bruceyty" title="Ideas, Planning, & Feedback">🤔</a> <a href="https://github.com/Davidlasky/Wetube/issues?q=author%3ABruceyty" title="Bug reports">🐛</a> <a href="#content-Bruceyty" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/johnjr4"><img src="https://avatars.githubusercontent.com/u/92764125?v=4?s=100" width="100px;" alt="johnjr4"/><br /><sub><b>johnjr4</b></sub></a><br /><a href="https://github.com/Davidlasky/Wetube/commits?author=johnjr4" title="Code">💻</a> <a href="#data-johnjr4" title="Data">🔣</a> <a href="#design-johnjr4" title="Design">🎨</a> <a href="#platform-johnjr4" title="Packaging/porting to new platform">📦</a> <a href="#userTesting-johnjr4" title="User Testing">📓</a></td>
    </tr>
  </tbody>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

## Developer Team

- [Bruce Yin](https://github.com/Bruceyty)
- [David Jiang](https://github.com/Davidlasky)
- [John Randolph](https://github.com/johnjr4)
- [Lumi Xu](https://github.com/Lumi-works)

## Mentors

- UIUC CS411 Course Staffs

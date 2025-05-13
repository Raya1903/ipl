<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
    <title>IPL 2025 App</title>
    <style>
        /* Reset & base */
        * {
            box-sizing: border-box;
        }
        body {
            margin: 0;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: #0B1446; /* IPL dark blue */
            color: #f1f1f1;
            display: flex;
            flex-direction: column;
            height: 100vh;
            max-height: 600px;
            max-width: 350px;
            overflow: hidden;
        }
        header {
            background: #e03a3e; /* IPL red */
            padding: 1rem;
            text-align: center;
            font-weight: 700;
            font-size: 1.5rem;
            letter-spacing: 0.1rem;
            user-select: none;
        }
        nav {
            display: flex;
            background: #141d4b;
        }
        nav button {
            flex-grow: 1;
            background: transparent;
            border: none;
            color: #bbb;
            padding: 0.75rem 0;
            font-weight: 600;
            font-size: 1rem;
            cursor: pointer;
            transition: color 0.3s, border-bottom 0.3s;
            border-bottom: 3px solid transparent;
        }
        nav button.active {
            color: #ffd30d; /* IPL yellow */
            border-bottom: 3px solid #ffd30d;
        }
        main {
            flex-grow: 1;
            overflow-y: auto;
            padding: 0.5rem 1rem;
        }
        /* Scrollbar for main */
        main::-webkit-scrollbar {
            width: 6px;
        }
        main::-webkit-scrollbar-thumb {
            background-color: #e03a3e;
            border-radius: 3px;
        }
        h2 {
            color: #ffd30d;
            margin-top: 0;
            font-weight: 700;
            font-size: 1.3rem;
        }
        /* Sections */
        section {
            display: none;
        }
        section.active {
            display: block;
        }
        /* Player List */
        .player-list {
            display: flex;
            flex-wrap: wrap;
            gap: 0.4rem;
            justify-content: center;
        }
        .player-card {
            background: #192a6a;
            border-radius: 6px;
            padding: 0.5rem;
            width: 45%;
            cursor: pointer;
            box-shadow: 0 0 6px #141d4b;
            transition: background-color 0.3s;
            text-align: center;
        }
        .player-card:hover {
            background: #e03a3e;
            color: #fff;
        }
        .player-name {
            font-weight: 600;
            font-size: 1rem;
            margin: 0.3rem 0 0.1rem 0;
        }
        .player-role {
            font-size: 0.85rem;
            color: #ccc;
        }
        /* Player Details */
        .player-details {
            background: #192a6a;
            border-radius: 8px;
            padding: 1rem;
            box-shadow: 0 0 12px #e03a3e;
        }
        .player-details h3 {
            margin-top: 0;
            color: #ffd30d;
        }
        .player-photo {
            max-width: 100%;
            border-radius: 8px;
            margin-bottom: 1rem;
        }
        .player-info {
            font-size: 0.9rem;
            line-height: 1.3;
        }
        .back-btn {
            margin: 0.8rem 0;
            background: #e03a3e;
            border: none;
            padding: 0.4rem 1rem;
            color: #fff;
            font-weight: 600;
            font-size: 0.9rem;
            border-radius: 20px;
            cursor: pointer;
            transition: background-color 0.3s;
        }
        .back-btn:hover {
            background: #ffbf00;
            color: #0B1446;
        }
        /* Venue list */
        .venue-list {
            display: flex;
            flex-direction: column;
            gap: 0.6rem;
        }
        .venue-card {
            background: #192a6a;
            padding: 0.75rem;
            border-radius: 6px;
            box-shadow: 0 0 6px #141d4b;
        }
        .venue-name {
            font-weight: 700;
            color: #ffd30d;
        }
        /* Schedule list */
        .schedule-list {
            display: flex;
            flex-direction: column;
            gap: 0.6rem;
        }
        .schedule-card {
            background: #192a6a;
            padding: 0.75rem;
            border-radius: 6px;
            box-shadow: 0 0 6px #141d4b;
        }
        .schedule-team {
            font-weight: 700;
            color: #ffd30d;
        }
        .schedule-venue {
            font-size: 0.85rem;
            color: #ccc;
        }
    </style>
</head>
<body>
    <header>IPL 2025 App</header>
    <nav>
        <button class="active" onclick="showSection('players')">Players</button>
        <button onclick="showSection('venues')">Venues</button>
        <button onclick="showSection('schedule')">Schedule</button>
    </nav>
    <main>
        <section id="players" class="active">
            <h2>Players</h2>
            <div class="player-list">
                <div class="player-card" onclick="showPlayerDetails('rohit-sharma')">
                    <div class="player-name">Rohit Sharma</div>
                    <div class="player-role">Batsman</div>
                </div>
                <div class="player-card" onclick="showPlayerDetails('virat-kohli')">
                    <div class="player-name">Virat Kohli</div>
                    <div class="player-role">Batsman</div>
                </div>
                <div class="player-card" onclick="showPlayerDetails('jadeja')">
                    <div class="player-name">Ravindra Jadeja</div>
                    <div class="player-role">All-Rounder</div>
                </div>
                <div class="player-card" onclick="showPlayerDetails('bumrah')">
                    <div class="player-name">Jasprit Bumrah</div>
                    <div class="player-role">Bowler</div>
                </div>
            </div>
        </section>
        <section id="venues">
            <h2>Venues</h2>
            <div class="venue-list">
                <div class="venue-card">
                    <div class="venue-name">Wankhede Stadium</div>
                </div>
                <div class="venue-card">
                    <div class="venue-name">M. A. Chidambaram Stadium</div>
                </div>
                <div class="venue-card">
                    <div class="venue-name">Feroz Shah Kotla Ground</div>
                </div>
            </div>
        </section>
        <section id="schedule">
            <h2>Schedule</h2>
            <div class="schedule-list">
                <div class="schedule-card">
                    <div class="schedule-team">Mumbai Indians</div>
                    <div class="schedule-venue">Wankhede Stadium</div>
                </div>
                <div class="schedule-card">
                    <div class="schedule-team">Chennai Super Kings</div>
                    <div class="schedule-venue">M. A. Chidambaram Stadium</div>
                </div>
                <div class="schedule-card">
                    <div class="schedule-team">Delhi Capitals</div>
                    <div class="schedule-venue">Feroz Shah Kotla Ground</div>
                </div>
            </div>
        </section>
        <section id="player-details" style="display: none;">
            <h2 id="player-name"></h2>
            <div class="player-details">
                <img id="player-photo" src="" alt="">
                <div id="player-info"></div>
            </div>
            <button class="back-btn" onclick="hidePlayerDetails()">Back</button>
        </section>
    </main>
    <script>
        function showSection(section) {
            const sections = document.querySelectorAll('section');
            sections.forEach(s => s.classList.remove('active'));
            document.getElementById(section).classList.add('active');
            const buttons = document.querySelectorAll('nav button');
            buttons.forEach(b => b.classList.remove('active'));
            const activeButton = document.querySelector(`nav button:nth-child(${Array.prototype.indexOf.call(sections, document.getElementById(section)) + 1})`);
            activeButton.classList.add('active');
        }

        function showPlayerDetails(playerId) {
            const playerDetailsSection = document.getElementById('player-details');
            playerDetailsSection.style.display = 'block';
            const playerNameElement = document.getElementById('player-name');
            const playerPhotoElement = document.getElementById('player-photo');
            const playerInfoElement = document.getElementById('player-info');
            switch (playerId) {
                case 'rohit-sharma':
                    playerNameElement.innerText = 'Rohit Sharma';
                    playerPhotoElement.src = 'https://example.com/rohit-sharma.jpg';
                    playerInfoElement.innerHTML = 'Batsman, Mumbai Indians';
                    break;
                case 'virat-kohli':
                    playerNameElement.innerText = 'Virat Kohli';
                    playerPhotoElement.src = 'https://example.com/virat-kohli.jpg';
                    playerInfoElement.innerHTML = 'Batsman, Royal Challengers Bangalore';
                    break;
                case 'jadeja':
                    playerNameElement.innerText = 'Ravindra Jadeja';
                    playerPhotoElement.src = 'https://example.com/jadeja.jpg';
                    playerInfoElement.innerHTML = 'All-Rounder, Chennai Super Kings';
                    break;
                case 'bumrah':
                    playerNameElement.innerText = 'Jasprit Bumrah';
                    playerPhotoElement.src = 'https://example.com/bumrah.jpg';
                    playerInfoElement.innerHTML = 'Bowler, Mumbai Indians';
                    break;
            }
            showSection('player-details');
        }

        function hidePlayerDetails() {
            document.getElementById('player-details').style.display = 'none';
            showSection('players');
        }
    </script>
</body>
</html>
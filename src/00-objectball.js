function gameObject() {
  return {
    home: {
      teamName: "Brooklyn Nets",
      colors: ["Black", "White"],
      players: {
        alanAnderson: {
          number: 0,
          shoe: 16,
          points: 22,
          rebounds: 12,
          assists: 12,
          steals: 3,
          blocks: 1,
          slamDunks: 1,
        },
        reggieEvans: {
          number: 30,
          shoe: 14,
          points: 12,
          rebounds: 12,
          assists: 12,
          steals: 12,
          blocks: 12,
          slamDunks: 7,
        },
        brookLopez: {
          number: 11,
          shoe: 17,
          points: 17,
          rebounds: 19,
          assists: 10,
          steals: 3,
          blocks: 1,
          slamDunks: 15,
        },
        masonPlumlee: {
          number: 1,
          shoe: 19,
          points: 26,
          rebounds: 12,
          assists: 6,
          steals: 3,
          blocks: 8,
          slamDunks: 5,
        },
        jasonTerry: {
          number: 31,
          shoe: 15,
          points: 19,
          rebounds: 2,
          assists: 2,
          steals: 4,
          blocks: 11,
          slamDunks: 1,
        },
      },
    },
    away: {
      teamName: "Charlotte Hornets",
      colors: ["Turquoise", "Purple"],
      players: {
        jeffAdrien: {
          number: 4,
          shoe: 18,
          points: 10,
          rebounds: 1,
          assists: 1,
          steals: 2,
          blocks: 7,
          slamDunks: 2,
        },
        bismakBiyombo: {
          number: 0,
          shoe: 16,
          points: 12,
          rebounds: 4,
          assists: 7,
          steals: 7,
          blocks: 15,
          slamDunks: 10,
        },
        desagnaDiop: {
          number: 2,
          shoe: 14,
          points: 24,
          rebounds: 12,
          assists: 12,
          steals: 4,
          blocks: 5,
          slamDunks: 5,
        },
        benGordon: {
          number: 8,
          shoe: 15,
          points: 33,
          rebounds: 3,
          assists: 2,
          steals: 1,
          blocks: 1,
          slamDunks: 0,
        },
        brendanHaywood: {
          number: 33,
          shoe: 15,
          points: 6,
          rebounds: 12,
          assists: 12,
          steals: 22,
          blocks: 5,
          slamDunks: 12,
        },
      },
    },
  };
}

function numPointsScored(playerName) {
  const nba = gameObject();

  for (let teamtype in nba) {
    let team = nba[teamtype];
    let players = team.players;

    if (playerName in players) {
      return players[playerName].points;
    }
  }
}

function shoeSize(playerName) {
  const nba = gameObject();

  for (let teamType in nba) {
    let team = nba[teamType];
    let players = team.players;

    if (playerName in players) {
      return players[playerName].shoe;
    }
  }
}

function teamColors(teamcolor) {
  const nba = gameObject();

  for (let teamType in nba) {
    let team = nba[teamType];

    if (team.teamName === teamcolor) {
      return team.colors;
    }
  }
}

function teamNames() {
  const nba = gameObject();
  return [nba.home.teamName, nba.away.teamName];
}

function playerNumbers(teamName) {
  const nba = gameObject();

  for (let teamKey in nba) {
    if (nba[teamKey].teamName === teamName) {
      return Object.values(nba[teamKey].players).map((player) => player.number);
    }
  }
}

function playerStats(playerName) {
  const nba = gameObject();

  for (let teamKey in nba) {
    let team = nba[teamKey];
    let players = team.players;

    if (playerName in players) {
      return players[playerName];
    }
  }
}

function bigShoeRebounds() {
  const nba = gameObject();
  let largestShoeSize = 0;
  let rebounds = 0;

  for (let teamKey in nba) {
    let team = nba[teamKey];
    let players = team.players;

    for (let playerName in players) {
      let player = players[playerName];

      if (player.shoe > largestShoeSize) {
        largestShoeSize = player.shoe;
        rebounds = player.rebounds;
      }
    }
  }

  return rebounds;
}

function mostPointsScored() {
  const nba = gameObject();
  let topPlayer = null;
  let maxPoints = 0;

  for (let teamKey in nba) {
    let players = nba[teamKey].players;

    for (let player in players) {
      if (players[player].points > maxPoints) {
        maxPoints = players[player].points;
        topPlayer = player;
      }
    }
  }
  return topPlayer;
}

function winningTeam() {
  const nba = gameObject();
  let maxTeam = null;
  let maxPoints = 0;

  for (let teamKey in nba) {
    let team = nba[teamKey];
    let totalPoints = 0;

    for (let player in team.players) {
      totalPoints += team.players[player].points;
    }

    if (totalPoints > maxPoints) {
      maxPoints = totalPoints;
      maxTeam = team.teamName;
    }
  }
  return maxTeam;
}

function playerWithLongestName() {
  const nba = gameObject();
  let longestName = "";
  let longestPlayer = null;

  for (let teamKey in nba) {
    let players = nba[teamKey].players;

    for (let player in players) {
      if (player.length > longestName.length) {
        longestName = player;
        longestPlayer = player;
      }
    }
  }
  return longestPlayer;
}

function doesLongNameStealATon() {
  const nba = gameObject();
  let longestPlayer = playerWithLongestName();
  let mostSteals = 0;
  let topStealer = null;

  for (let teamKey in nba) {
    let players = nba[teamKey].players;

    for (let player in players) {
      if (players[player].steals > mostSteals) {
        mostSteals = players[player].steals;
        topStealer = player;
      }
    }
  }
  return longestPlayer === topStealer;
}

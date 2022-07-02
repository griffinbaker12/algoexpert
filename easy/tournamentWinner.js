function tournamentWinner(competitions, results) {
  // Write your code here.
  const teamsAndScore = {};
  for (let i = 0; i < competitions.length; i++) {
    if (results[i] === 0) {
      const winner = competitions[i][1];
      if (teamsAndScore[winner]) {
        teamsAndScore[winner] += 3;
      } else {
        teamsAndScore[winner] = 3;
      }
    } else {
      const winner = competitions[i][0];
      if (teamsAndScore[winner]) {
        teamsAndScore[winner] += 3;
      } else {
        teamsAndScore[winner] = 3;
      }
    }
  }
  const objEntries = Object.entries(teamsAndScore);
  let winner = '';
  let scoreToBeat = 0;
  for (let i = 0; i < objEntries.length; i++) {
    const score = objEntries[i][1];
    const team = objEntries[i][0];
    if (objEntries[i][1] > scoreToBeat) {
      winner = objEntries[i][0];
      scoreToBeat = score;
    }
  }
  return winner;
}

function tournamentWinner(competitions, results) {
  // Write your code here.
  const teamsAndScore = {};
  let highScore = 0;
  let currentWinner = '';

  for (let i = 0; i < competitions.length; i++) {
    const winnerIdx = Math.abs(results[i] - 1);
    const winner = competitions[i][winnerIdx];

    let points = 0;

    if (winner in teamsAndScore) {
      points = teamsAndScore[winner];
      points += 3;
      teamsAndScore[winner] = points;
    } else {
      points = 3;
      teamsAndScore[winner] = points;
    }

    if (points > highScore) {
      currentWinner = winner;
      highScore = points;
    }
  }
  return currentWinner;
}

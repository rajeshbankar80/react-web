// A simple data API that will be used to get the data for our
// components. On a real website, a more robust data fetching
// solution would be more appropriate.
const PLAYER_API = {
  players: [
    { number: 1, name: "Zahir Khan", position: "Boller" },
    { number: 2, name: "Virat Koli", position: "batsman" },
    { number: 3, name: "M H Dhoni", position: "wicket keeper batsman" },
    { number: 4, name: "Rahul Dravid", position: "batsman" },
    { number: 5, name: "Sachin Tendulkar", position: "batsman" },
    { number: 6, name: "Kapil Dev", position: "all rounder" },
    { number: 7, name: "Yuvraj Singh", position: "all rounder" }
  ],
  getAllPlayers: function () { return this.players },
  getPlayerById: function (id) {
    const isPlayer = p => p.number === id
    return this.players.find(isPlayer)
  }
}

export default PLAYER_API

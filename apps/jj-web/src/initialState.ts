const initialState = {
  fut: {
    id, // id incremental
    futName, // string
    futSchedule, // date
  },
  player: {
    id, //id incremental
    fistName, //string
    nickname, //string
    seasonGoals, //int
    seasonAssists, //int
    completedMatchs, //int
  },
  match: {
    id, //id incremental
    date, // date
    confirmedPlayers: [],
    teams: {
      1: {
        firstName, // string
        goals, // string
        assists, // string
      },
      // ...
    },
  },
};

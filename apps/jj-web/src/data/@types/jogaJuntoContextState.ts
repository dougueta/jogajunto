export type jogaJuntoContextState = {
  fut: {
    id: string;
    futName: string;
    futSchedule: string;
  };
  player: {
    id: string;
    fistName: string;
    nickname: string;
    seasonGoals: number;
    seasonAssists: number;
    completedMatchs: number;
  };
  match: {
    id: number;
    date: string;
    confirmedPlayers: string[];
    teams: IMatch[];
  };
};

interface IMatch {
  playerid: string;
  date: string;
  confirmedPlayers: string[];
  teams: string[];
}

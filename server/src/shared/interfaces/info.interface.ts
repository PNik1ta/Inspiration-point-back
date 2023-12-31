export interface IInfo {
  _id?: string;
  fightId?: number;
  startTime?: string;
  piste?: string;
  compe?: string;
  phase?: number;
  poulTab?: string;
  match?: number;
  round?: number;
  referees?: number[];
  stopwatch?: string;
  priority?: string;
  state?: string;
  nicknameRight?: number;
  scoreRight?: number;
  yCardRight?: number;
  rCardRight?: number;
  medicalRight?: number;
  pCardRight?: number;
  currentFightScoreRight?: number;
  videoRight?: number;
  nicknameLeft?: number;
  scoreLeft?: number;
  yCardLeft?: number;
  rCardLeft?: number;
  medicalLeft?: number;
  pCardLeft?: number;
  currentFightScoreLeft?: number;
  videoLeft?: number;
  winner?: number;
}
export interface Timer {
  id: number;
  title: string;
  description: string;
  datetime: any;
  countdown?: CountdownObj[];
  years?: number;
  weeks?: number;
  days?: number;
  hours?: number;
  minutes?: number;
  seconds?: number;
}

export interface CountdownObj {
  unit: string;
  amount: number;
}

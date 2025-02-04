export interface AllPlace {
  [key: string]: Place[];
}

export interface Place {
  area: string;
  name: string;
  address: string;
  googlemap: string;
}

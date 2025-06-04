export interface RegionsResponse {
  count:    number;
  next:     null;
  previous: null;
  results:  RegionResult[];
}

export interface RegionResult {
  name: string;
  url:  string;
}

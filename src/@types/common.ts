type Dictionary<T> = Record<string, T>;

export type EntityState<T> = {
  ids: string[];
  entities: Dictionary<T>;
};

export type RecordKey = string | number | symbol;

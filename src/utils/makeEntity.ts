import type { EntityState } from '@types';

export const makeEntity = <T>(array: T[]): EntityState<T> =>
  array.reduce<EntityState<T>>(
    ({ ids, entities }, item, i) => {
      const id = `${i}`;

      return {
        ids: [...ids, id],
        entities: { ...entities, [id]: { id, ...item } },
      };
    },
    { ids: [], entities: {} }
  );

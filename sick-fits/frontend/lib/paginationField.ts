import { ALL_PRODUCTS_META_QUERY } from "../graphql/queries/allProductsMeta";

export const paginationField = () => {
  return {
    keyArgs: false as false, // tells apollo we will take care of everything
    read: (existing = [], { args, cache }) => {
      const { skip, first } = args;

      // Read the number of items on the page from the cache
      const data = cache.readQuery({
        query: ALL_PRODUCTS_META_QUERY,
      });
      const count = data?._allProductsMeta.count;
      const page = skip / first + 1;
      const pages = Math.ceil(count / first);

      // Check if we have existing items
      const items = existing.slice(skip, skip + first).filter((x) => x);

      // If
      // There are items
      // AND there aren't enough items to satisfy how many were requested
      // AND we are on the last page
      // THEN JUST SEND IT
      if (items.length && items.length !== first && page === pages) {
        return items;
      }

      // We don't have any items, we must go to the network to fetch them
      if (items.length !== first) {
        return false;
      }

      // If there are items, just return them from the cache, and we don't need to go to the network
      if (items.length > 0) {
        console.log(
          `There are ${items.length} items in the cache! Gonna send them to apollo`
        );
        return items;
      }

      return false;
    },
    merge: (existing, incoming, { args }) => {
      const { skip, first } = args;
      console.log(`Merging items form the network ${incoming.length}`);
      const merged = existing ? existing.slice(0) : [];
      for (let i = skip; i < skip + incoming.length; ++i) {
        merged[i] = incoming[i - skip];
      }
      // Finally we return the merged items from the cache
      return merged;
    },
  };
};

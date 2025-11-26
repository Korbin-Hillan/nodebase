import {
  defaultShouldDehydrateQuery,
  QueryClient,
} from "@tanstack/react-query";
import superjson from "superjson";
/**
 * Constructs a QueryClient preconfigured for the application's React Query usage.
 *
 * @returns A QueryClient with queries set to a 30-second staleTime and dehydration behavior that preserves queries for which `defaultShouldDehydrateQuery` returns true or whose state status is `"pending"`.
 */
export function makeQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 30 * 1000,
      },
      dehydrate: {
        // serializeData: superjson.serialize,
        shouldDehydrateQuery: (query) =>
          defaultShouldDehydrateQuery(query) ||
          query.state.status === "pending",
      },
      hydrate: {
        // deserializeData: superjson.deserialize,
      },
    },
  });
}
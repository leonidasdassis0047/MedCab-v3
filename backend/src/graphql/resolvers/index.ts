import merge from "lodash.merge";

import UserResolvers from "./user";

// merging our resolvers to avoid conflicts from multiple resolvers
export const resolvers = merge({}, UserResolvers);

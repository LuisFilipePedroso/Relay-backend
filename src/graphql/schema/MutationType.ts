import { GraphQLObjectType } from "graphql";

import PostMutations from '../post/mutations';

const MutationType = new GraphQLObjectType({
  name: 'Mutation',
  fields: () => ({
    ...PostMutations
  })
});

export default MutationType;
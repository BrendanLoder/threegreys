// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Blog, Post, Comment, Todo, Note } = initSchema(schema);

export {
  Blog,
  Post,
  Comment,
  Todo,
  Note
};
import { env } from '$env/dynamic/private';
import { GraphQLClient } from 'graphql-request';

const url = (process.env.GRAPHQL_URL ?? env.GRAPHQL_URL) as string;

export const client = new GraphQLClient(url, { fetch: fetch });

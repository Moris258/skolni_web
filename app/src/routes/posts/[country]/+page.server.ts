import { client } from '$lib/graphql';
import { gql } from 'graphql-request';

import type { Entry } from '$lib/Document/document';
import type { PageServerLoad } from './$types';

type Posts = {
	posts: {
		id: string;
		author: {
			name: string;
		};
		creation: string;
		title: string;
		content: {
			document: Entry[];
		};
		country: string;
	}[];
};

const query = gql`
	query {
		posts {
			id
			author {
				name
			}
			creation
			title
			content {
				document
			}
			country
		}
	}
`;

export const load = (async ({params}) => {
	const result: Posts = await client.request(query);

	return {
		...result,
		posts: result.posts.filter((post) => post.country === params.country),
	}
}) satisfies PageServerLoad;

export const config = {
	isr: {
		expiration: 60
	},
	
};

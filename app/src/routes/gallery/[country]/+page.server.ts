import { client } from '$lib/graphql';
import { gql } from 'graphql-request';

import type { PageServerLoad } from './$types';

type Galleries = {
	galleries: {
		country: string,
		images: {photo: {url: string}}[],
		author: {name: string},
		name: string,
	}[];
};

const query = gql`
	query {
		galleries {
			author {
				name
			}
			images {
				photo {
					url
				}
			}
			country
			name
		}
	}
`;

export const load = (async ({params}) => {
	const result: Galleries = await client.request(query);

	return {
		...result,
		galleries: result.galleries.filter((gallery) => gallery.country === params.country),
	};
}) satisfies PageServerLoad;

export const config = {
	isr: {
		expiration: 60
	},
	
};

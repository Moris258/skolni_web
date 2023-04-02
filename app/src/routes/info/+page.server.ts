import { client } from '$lib/graphql';
import { gql } from 'graphql-request';

import type { Entry } from '$lib/Document/document';
import type { PageServerLoad } from './$types';

type Info = {
	infos: {
		content: {
			document: Entry[];
		};
	}[];
};

const query = gql`
	query {
		infos {
			content {
				document
			}
		}
	}
`;

export const load = (async () => {
	const result: Info = await client.request(query);

	return result;
}) satisfies PageServerLoad;

export const config = {
	isr: {
		expiration: 60
	}
};

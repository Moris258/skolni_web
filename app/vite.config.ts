import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';

import { imagetools } from 'vite-imagetools';
import WindiCSS from 'vite-plugin-windicss';

const config: UserConfig = {
	plugins: [
		sveltekit(),
		WindiCSS(),
		imagetools({ defaultDirectives: () => new URLSearchParams({ format: 'png' }) })
	]
};

export default config;

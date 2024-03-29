import { error } from '@sveltejs/kit';
import { getAllPosts } from '$lib/helpers/posts';
import { getAllProjets } from '$lib/helpers/projects';
import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
	try {
		return {
			articles: (await getAllPosts()).slice(0, 5),
			projects: (await getAllProjets()).slice(0, 5)
		};
	} catch (e) {
		error(404);
	}
};

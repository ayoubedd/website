import { error } from '@sveltejs/kit';
import { getAllPosts } from '$lib/helpers/posts';
import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
	try {
		return { posts: await getAllPosts() };
	} catch (e) {
		error(404);
	}
};

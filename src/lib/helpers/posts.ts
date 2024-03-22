import type { Post } from '$lib/types/post';

export async function getAllPosts() {
	let posts: Post[] = [];

	const paths = await import.meta.glob('/content/posts/*.md', { eager: true });

	for (const path in paths) {
		const file = paths[path];
		const slug = path.split('/').at(-1)?.replace('.md', '');

		if (file && typeof file === 'object' && 'metadata' in file && slug) {
			const metadata = file.metadata as Omit<Post, 'slug'>;
			console.log({ file });
			console.log({ meta: file.metadata });
			const post = { slug, ...metadata } satisfies Post;
			post.content = file.default;
			if (post.draft == false) posts.push(post);
		}
	}

	posts = posts.sort(
		(first, second) => new Date(second.date).getTime() - new Date(first.date).getTime()
	);

	return posts;
}

export async function getPost(slug: string) {
	const posts = await getAllPosts();

	for (const post of posts) {
		if (post.slug === slug) return post;
	}
}

import blogData from '$lib/blog.json';
import { error } from '@sveltejs/kit';

export function load({ params }) {
    const post = blogData.find((blog) => blog.id === params.slug);

    if (!post) {
        throw error(404, 'Post not found');
    }

    return { post };
}
import { json } from '@sveltejs/kit';

export async function load() {
    const response = await import('$lib/blog.json');
    return {
        blogs: response.default
    };
}

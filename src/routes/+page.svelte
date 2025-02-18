<script lang="ts">
    import Header from '$lib/components/Header.svelte';
    export let data;
</script>

<Header title="Blogposts" />

<div class="blog-list">
    {#each data.blogs as blog}
        <div class="blog-card">
            <div class="blog-content">
                <div class="blog-card-title">
                    <p class="blog-date">{blog.date}</p>
                    <h2>{blog.title}</h2>
                </div>
                <p>{blog.text}</p>
                <a href="{blog.route}" class="read-more">Read More</a>
            </div>
        </div>
    {/each}
</div>

<style>
    .blog-list {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 20px;
        align-items: center;
        justify-content: center;
        margin: 0 auto;
        height: 100%;
    }


    .blog-card {
        padding: 8px;
        max-width: 342px;
        justify-self: center;
    }

    .blog-content {
        display: flex;
        flex-direction: column;
        gap: 25px;
    }

    .blog-content p {
        display: -webkit-box;
        -webkit-line-clamp: 5;
        -webkit-box-orient: vertical;
        overflow: hidden;
        line-height: 19.36px;
        letter-spacing: 0;
        font-weight: 400;
    }

    .blog-content a {
        padding: 4px 14px;
        border-radius: 100px;
        border: 1px solid black;
        width: fit-content;
        color: black;
        font-weight: 600;
        font-size: 12px;
    }

    .blog-card-title {
        display: flex;
        flex-direction: column;
        gap: 7px;
    }

    .blog-card-title h2 {
        line-height: 24.2px;
        font-weight: 600;
        font-size: 20px;
    }

    .blog-date {
        font-size: 12px;
        color: #000;
        font-weight: 600;
        line-height: 14.52px;
    }

    .read-more {
        display: inline-block;
        text-decoration: none;
        font-weight: bold;
        transition: background-color 0.2s;
    }

    .read-more:hover {
        background-color: lightgray;
    }
</style>

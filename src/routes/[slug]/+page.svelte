<script lang="ts">
    import Header from '$lib/components/Header.svelte';
    export let data;
</script>

<Header title="Blogposts" />

<article class="blog-post">
    <div class="blog-post-title">
        <p class="blog-post-date">{data.post.date}</p>
        <h1>{data.post.title}</h1>
    </div>
    <div class="blog-post-wrapper">
        <p>{data.post.text}</p>
        <img src="{data.post.image}" alt="{data.post.title}" class="blog-image" />
    </div>

    <!-- Maybe put the closebutton into header and add conditional rendering -->
    <a href="/" class="back-link">Close</a>
</article>

<style>
    .blog-post {
        display: flex;
        flex-direction: column;
        height: 100%;
        gap: 36px;
        padding: 0 46px;
        margin-top: 166px;
    }

    .blog-post-wrapper {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        flex-direction: column;
    }

    .blog-post-wrapper p {
        max-width: 397px;
        font-weight: 400;
        font-size: 12px;
        line-height: 14.52px;
        letter-spacing: 0%;
    }

    .blog-post-title {
        display: flex;
        flex-direction: column;
        gap: 6px;
    }

    .blog-post-date {
        font-weight: 600;
        font-size: 10px;
        line-height: 12.1px;
        letter-spacing: 0%;
    }

    .blog-post-title h1 {
        font-weight: 600;
        font-size: 20px;
        line-height: 24.2px;
        letter-spacing: 0%;
    }

    .back-link {
        position: absolute;
        top: 38px;
        right: 41px;
        border: 1px solid black;
        border-radius: 100px;
        padding: 4px 14px;
        font-weight: 600;
        font-size: 12px;
        line-height: 14.52px;
        transition: background-color 0.2s;
    }

    .back-link:hover {
        background-color: lightgray;
    }
</style>

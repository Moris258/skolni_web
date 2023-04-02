<script lang="ts">
    import {flags} from "./menu_flags";

</script>
<nav class="post_nav">
    {#each flags as [name, logo, posts, gallery], i}
        <div class="dropdown">
            <img src={logo} class="h-auto max-h-30" title={name} alt={name} />
            <div class="dropdown-content">
                <a href={posts}>Posts</a>
                <a href={gallery}>Gallery</a>
            </div>
        </div>
    {/each}

</nav>

<style>
    .post_nav{
        @apply flex flex-wrap justify-center gap-20 p-2 bg-grey-700 shadow shadow-gray-200 select-none;
		@apply <sm:(flex-col items-center text-center);
    }

    .dropdown:hover .dropdown-content {display: block;}

    .dropdown-content a:hover {background-color: #ddd;}

    .dropdown {
        position: relative;
        display: inline-block;
    }
    .dropdown-content a {
        text-align: center;
        color: black;
        width: auto;
        padding: 12px 16px;
        text-decoration: none;
        display: block;
    }
    .dropdown-content{

        display: none;
        position: absolute;
        background-color: #f1f1f1;
        min-width: 180px;
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
        z-index: 1;
    }
</style>
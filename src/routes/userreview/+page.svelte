<script lang="ts">
    import { supabase } from '$lib/supabaseClient';

    // Svelte 5 Runes for form state
    let username = $state('');
    let rating = $state(5);
    let comment = $state('');
    let status = $state('');

    async function handleSubmit(e: SubmitEvent) {
        e.preventDefault();
        status = 'Submitting...';

        const { data, error } = await supabase.from('user_review').insert([
            {
                user_name: username,
                rating: rating,
                review_text: comment,
            },
        ]);

        if (error) {
            status = `Error: ${error.message}`;
        } else {
            status = 'Review submitted successfully!';
            // Reset form
            username = '';
            rating = 5;
            comment = '';
        }
    }
</script>

<h1>Submit a Review</h1>

<form onsubmit={handleSubmit}>
    <div>
        <label for="username">Name:</label>
        <input id="username" type="text" bind:value={username} required />
    </div>

    <div>
        <label for="rating">Rating (1-5):</label>
        <input
            id="rating"
            type="number"
            min="1"
            max="5"
            bind:value={rating}
            required
        />
    </div>

    <div>
        <label for="comment">Comment:</label>
        <textarea id="comment" bind:value={comment} required></textarea>
    </div>

    <button type="submit">Submit Review</button>
</form>

{#if status}
    <p>{status}</p>
{/if}

<script>
    import { base } from '$app/paths';
    import { page } from '$app/stores';
    import { supabase } from '$lib/supabaseClient';

    let dialogRef = $state();
    let isSubmitting = $state(false);
    let showSuccess = $state(false); // New state for "Thank You" message

    let reviewType = $state('Design Review');
    let feedback = $state('');

    const openModal = () => {
        showSuccess = false;
        dialogRef.showModal();
    };

    const closeModal = () => {
        feedback = '';
        dialogRef.close();
    };

    async function submitReview() {
        if (!feedback.trim()) return;
        isSubmitting = true;

        const { error } = await supabase.from('ui_ux_reviews').insert([
            {
                user_name: 'Aravinda Prabath',
                page_url: $page.url.pathname,
                review_type: reviewType,
                feedback_text: feedback,
            },
        ]);

        isSubmitting = false;

        if (!error) {
            showSuccess = true;
            // Wait 2 seconds so they can see the "Thank You", then close
            setTimeout(() => {
                closeModal();
            }, 2000);
        } else {
            alert('Error: ' + error.message);
        }
    }
</script>

<dialog
    bind:this={dialogRef}
    class="fixed inset-0 m-auto rounded-xl border-none p-0 backdrop:bg-gray-900/50 backdrop:backdrop-blur-sm shadow-2xl border"
>
    <div class="relative flex flex-col bg-white rounded-xl w-full min-w-125">
        {#if !showSuccess}
            <div class="absolute top-2 end-2">
                <button
                    title="asdad"
                    onclick={closeModal}
                    type="button"
                    class="size-8 inline-flex justify-center items-center rounded-full bg-gray-100 text-gray-800 hover:bg-gray-200"
                >
                    <svg
                        class="shrink-0 size-4"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        ><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg
                    >
                </button>
            </div>

            <div class="p-4 sm:p-10 text-center">
                <span
                    class="mb-4 inline-flex justify-center items-center size-16 rounded-full border-4 border-blue-50 bg-blue-100 text-blue-500"
                >
                    <svg
                        class="shrink-0 size-6"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        ><path
                            d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
                        /></svg
                    >
                </span>

                <h3 class="mb-2 text-2xl font-bold text-gray-800">
                    Page Review
                </h3>
                <p class="text-gray-500 text-sm mb-6">
                    Reviewing: <span class="text-blue-600 font-mono"
                        >{$page.url.pathname}</span
                    >
                </p>

                <div class="space-y-4 text-left">
                    <div>
                        <label class="block text-sm font-medium mb-2"
                            >Category</label
                        >
                        <select
                            bind:value={reviewType}
                            class="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500"
                        >
                            <option>Design Review</option>
                            <option>Business Requirement</option>
                        </select>
                    </div>

                    <div>
                        <label class="block text-sm font-medium mb-2"
                            >Feedback</label
                        >
                        <textarea
                            bind:value={feedback}
                            class="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500"
                            rows="4"
                            placeholder="How can we improve?"
                        ></textarea>
                    </div>
                </div>

                <div class="mt-8 flex w-full justify-between">
                    <button
                        onclick={closeModal}
                        type="button"
                        class="py-2 px-4 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 hover:bg-gray-50"
                        >Cancel</button
                    >
                    <button
                        onclick={submitReview}
                        disabled={isSubmitting || !feedback.trim()}
                        type="button"
                        class="py-2 px-4 text-sm font-semibold rounded-lg bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50"
                    >
                        {isSubmitting ? 'Sending...' : 'Submit'}
                    </button>
                </div>
            </div>
        {:else}
            <div
                class="p-4 sm:p-10 text-center animate-in fade-in zoom-in duration-300"
            >
                <span
                    class="mb-4 inline-flex justify-center items-center size-16 rounded-full border-4 border-green-50 bg-green-100 text-green-500"
                >
                    <svg
                        class="shrink-0 size-6"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        ><polyline points="20 6 9 17 4 12" /></svg
                    >
                </span>
                <h3 class="mb-2 text-2xl font-bold text-gray-800">
                    Your Feedbacks are really imporant, Thank You!
                </h3>
                <p class="text-gray-500 text-sm">
                    Your feedback has been submitted successfully.
                </p>
                <div class="mt-6">
                    <p class="text-xs text-gray-400 italic">
                        Closing window...
                    </p>
                </div>
            </div>
        {/if}
    </div>
</dialog>
<div class="top-menu bg-white border-b border-neutral-300">
    <div class="left">
        <div>
            <div class="system-status">
                <div class="system-status__circle"></div>
                <div>Dev Server</div>
            </div>
        </div>
    </div>
    <div class="right">
        <div class="w-50">
            <!-- <label
                for="location"
                class="block text-sm font-medium text-gray-700">Location</label
            > -->
            <select
                id="location"
                name="location"
                class=" block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            >
                <option>United States</option>
                <option selected>Canada</option>
                <option>Mexico</option>
            </select>
        </div>
        <div class="w-50">
            <!-- <label
                for="location"
                class="block text-sm font-medium text-gray-700">Location</label
            > -->
            <select
                id="location"
                name="location"
                class=" block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            >
                <option>United States</option>
                <option selected>Canada</option>
                <option>Mexico</option>
            </select>
        </div>

        <div class="w-50">
            <label for="search" class="sr-only">Search</label>
            <div class="relative">
                <!-- Search Icon -->
                <div
                    class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"
                >
                    <svg
                        class="h-5 w-5 text-gray-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            fill-rule="evenodd"
                            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                            clip-rule="evenodd"
                        />
                    </svg>
                </div>
                <!-- Input Field -->
                <input
                    type="search"
                    name="search"
                    id="search"
                    class="block w-full rounded-lg border-gray-300 pl-10 pr-3 py-2 text-sm placeholder-gray-500 focus:border-blue-500 focus:ring-blue-500"
                    placeholder="Search projects..."
                />
            </div>
        </div>

        <div class="right__cfa">
            <a href="https://holtara.io/" target="_blank">
                <img src="{base}/globe.gif" alt="" />
                <i class="ph-fill ph-globe-hemisphere-west"></i>
            </a>
        </div>
        <div class="user-details">
            <p>Aravinda</p>
            <div class="user-details__avatar">
                <img src="{base}/profile.jpg" alt="" />
            </div>
            <div>
                <button
                    onclick={openModal}
                    class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg bg-white text-gray-500 hover:bg-gray-100 border border-gray-300 hover:cursor-pointer"
                >
                    UX Feedback
                </button>
            </div>
        </div>
    </div>
</div>

<style lang="scss">
    .top-menu {
        grid-row: 1/2;
        grid-column: 2/3;

        height: auto;
        padding: 20px 24px;
        display: flex;
        justify-content: space-between;
        // border: 10px solid red;
    }

    .left {
        display: flex;
        align-items: center;
        gap: 16px;
    }

    .system-status {
        height: 30px;
        font-size: 13px;
        background-color: hsla(141, 84%, 93%, 1);
        color: hsla(142, 72%, 29%, 1);
        padding: 0 16px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 8px;
        border-radius: 1000px;

        &__circle {
            width: 8px;
            height: 8px;
            border-radius: 1000px;
            background-color: hsla(142, 71%, 45%, 1);
        }
    }

    .right {
        display: flex;
        align-items: center;
        gap: 8px;

        &__cfa {
            margin-left: 16px;
            height: 36px;
            width: 36px;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 1000px;
            border: 1px solid rgb(187, 187, 187);
            transition: img transform 0.3s ease;
            overflow: hidden;

            a {
                text-decoration: none;
                display: flex;
                justify-content: center;
                align-items: center;
                color: black;
            }

            i {
                font-size: 20px;
                transition: img transform 0.3s ease;
            }

            img {
                display: none;
                transition: img transform 0.3s ease;
            }

            &:hover {
                cursor: pointer;

                i {
                    display: none;
                    transition: img transform 0.3s ease;
                }

                img {
                    display: block;
                    width: 30px;
                    height: 30px;
                    border-radius: 1000px;
                    transition: img transform 0.3s ease;
                }
            }
        }
    }

    .user-details {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        gap: 16px;
        padding-left: 16px;

        p {
            margin: 0;
        }

        &__avatar {
            width: 36px;
            height: 36px;
            border-radius: 1000px;
            // background-color: hsla(104, 50%, 85%, 1);
            display: flex;
            justify-content: center;
            align-items: center;
            border: 1px solid gray;
            overflow: hidden;
        }
    }

    /* Crucial for centering and backdrop */
    dialog::backdrop {
        background: rgba(0, 0, 0, 0.5);
        backdrop-filter: blur(4px);
    }

    dialog {
        border: none;
        outline: none;
    }

    /* Standard Tailwind doesn't always handle dialog centering 
       automatically in all browsers without this: */
    dialog[open] {
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>

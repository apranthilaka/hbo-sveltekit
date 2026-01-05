<script>
    import { base } from '$app/paths';
</script>

<div class="top-menu border-b border-neutral-300">
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
            <p>Aravinda Prabath</p>
            <div class="user-details__avatar">
                <img src="{base}/profile.jpg" alt="" />
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
</style>

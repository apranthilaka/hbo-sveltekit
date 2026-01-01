<script>
    import { base } from '$app/paths';
</script>

<div class="top-menu">
    <div class="left">
        <div>
            <div class="system-status">
                <div class="system-status__circle"></div>
                <div>Dev Server</div>
            </div>
        </div>
    </div>
    <div class="right">
        <div class="relative group w-55">
            <select
                class="  h-9 w-full appearance-none rounded-xl border border-gray-300 bg-white px-4 pr-10 text-gray-700 transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none cursor-pointer"
            >
                <option value="" disabled selected>History</option>
                <option>Standard Delivery</option>
                <option>Express Shipping</option>
                <option>Overnight Pickup</option>
            </select>

            <div
                class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4 text-gray-400 group-focus-within:text-blue-500"
            >
                <i class="ph ph-caret-down"></i>
            </div>
        </div>

        <div class="relative group w-55">
            <select
                class="h-9 w-full appearance-none rounded-xl border border-gray-300 bg-white px-4 pr-10 text-gray-700 transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none cursor-pointer"
            >
                <option value="" disabled selected>IQ system</option>
                <option>Standard Delivery</option>
                <option>Express Shipping</option>
                <option>Overnight Pickup</option>
            </select>

            <div
                class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4 text-gray-400 group-focus-within:text-blue-500"
            >
                <i class="ph ph-caret-down"></i>
            </div>
        </div>

        <div class="relative group w-55">
            <div
                class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
            >
                <svg
                    class="w-5 h-5 text-gray-400 group-focus-within:text-indigo-500 transition-colors"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                </svg>
            </div>

            <input
                type="search"
                placeholder="Search..."
                class="h-9 block w-full rounded-xl border border-gray-200 bg-white py-3 pl-10 pr-4 text-sm placeholder-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 outline-none transition-all shadow-sm"
            />
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

        border-bottom: 1px solid rgb(235, 235, 235);
        height: auto;
        padding: 20px 24px;
        display: flex;
        justify-content: space-between;
        // border: 10px solid red;

        select,
        input {
            margin: 0;
            border-radius: 1000px;
        }
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

        select,
        input {
            color: gray;
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

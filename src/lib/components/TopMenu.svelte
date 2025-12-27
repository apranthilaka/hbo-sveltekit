<script>
    import { base } from '$app/paths';
</script>

<div class="topMenu">
    <div class="left">
        <div>
            <div class="system-status">
                <div class="system-status__circle"></div>
                <div>Dev Server</div>
            </div>
        </div>
    </div>
    <div class="right">
        <div>
            <select
                name="favorite-cuisine"
                aria-label="Select your favorite cuisine..."
                required
            >
                <option selected disabled value="">History</option>
                <option>Italian</option>
                <option>Japanese</option>
                <option>Indian</option>
                <option>Thai</option>
                <option>French</option>
            </select>
        </div>
        <div>
            <select
                name="favorite-cuisine"
                aria-label="Select your favorite cuisine..."
                required
            >
                <option selected disabled value="">IQ System</option>
                <option>Italian</option>
                <option>Japanese</option>
                <option>Indian</option>
                <option>Thai</option>
                <option>French</option>
            </select>
        </div>
        <div>
            <input
                type="search"
                name="search"
                placeholder="Search"
                aria-label="Search"
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

<style lang="scss" scoped>
    .topMenu {
        grid-row: 1/2;
        grid-column: 2/3;

        border-bottom: 1px solid rgb(235, 235, 235);
        height: auto;
        padding: 20px 24px;
        display: flex;
        justify-content: space-between;

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

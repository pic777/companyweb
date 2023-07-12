<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <header :class="{ 'scrolled-nav': scrollNav }">
        <nav>
            <div class="branding">
                <img src="@/assets/company_logo.png" alt="">
            </div>
            <!-- desktop menu -->
            <ul v-show="!mobile" class="navigation">
                <li><router-link class="link" :to="{ name: 'Home' }">Home</router-link></li>
                <li><router-link class="link" :to="{ name: '' }">Bingo</router-link></li>
                <li><router-link class="link" :to="{ name: '' }">Slot</router-link></li>
                <li><router-link class="link" :to="{ name: '' }">Contact</router-link></li>
            </ul>

            <!-- mobile menu icon -->
            <div class="icon">
                <fa @click="toggleMobileNav" v-show="mobile" class="bar" icon="bars"
                    :class="{ 'icon-active': mobileNav }" />
            </div>

            <!-- mobile menu when icon is pressed -->
            <transition name="mobile-nav">
                <ul v-show="mobileNav" class="dropdown-nav">
                    <li><router-link class="link" :to="{ name: 'Home' }">Home</router-link></li>
                    <li><router-link class="link" :to="{ name: '' }">Bingo</router-link></li>
                    <li><router-link class="link" :to="{ name: '' }">Slot</router-link></li>
                    <li><router-link class="link" :to="{ name: '' }">Contact</router-link></li>
                </ul>
            </transition>
        </nav>
    </header>
</template>
  
<script setup>
import { ref, onMounted } from 'vue';
const scrollNav = ref(null);
const mobile = ref(null);
const mobileNav = ref(null);
const windowWidth = ref(null);

//addlistener in setup
window.addEventListener('resize', checkScreen);
checkScreen();

onMounted(()=>{
    window.addEventListener('scroll', updateScroll);
})

//triggered by pressing bar button
function toggleMobileNav() {
    mobileNav.value = !mobileNav.value;
}

//trigger when resizing screen, determine if mobile is true/false
function checkScreen() {
    windowWidth.value = window.innerWidth;
    if (windowWidth.value <= 750) {
        mobile.value = true;
        return;
    }
    mobile.value = false;
    mobileNav.value = false;
}

function updateScroll() {
    const scrollPosition = window.scrollY;
    if (scrollPosition > 50) {
        scrollNav.value = true;
        return;
    }
    scrollNav.value = false;
}

</script>
  
<style lang="scss" scoped>
header {
    background-color: rgba($color: #000000, $alpha: 0.8);
    z-index: 99;
    width: 100%;
    position: fixed;
    transition: 0.5s ease all;
    color: #ffffff;

    nav {
        display: flex;
        flex-direction: row;
        padding: 12px 0;
        transition: 0.5s ease all;
        width: 90%;
        margin: 0 auto;

        @media (min-width: 1140px) {
            max-width: 1140px;
        }

        ul,
        .link {
            font-weight: 500;
            color: #ffffff;
            list-style: none;
            text-decoration: none;
        }

        li {
            text-transform: uppercase;
            padding: 16px;
            margin-left: 16px;
        }

        .link {
            font-size: 14px;
            transition: 0.5s, ease all;
            padding-bottom: 4px;
            border-bottom: 1px solid transparent;

            &:hover {
                color: #00afea;
                border-color: #00afea;
            }
        }

        .branding {
            display: flex;
            align-items: center;

            img {
                width: 250px;
                transition: 0.5s ease all;
            }
        }

        .navigation {
            display: flex;
            align-items: center;
            flex: 1;
            justify-content: flex-end;
        }

        .icon {
            display: flex;
            align-items: center;
            position: absolute;
            top: 0;
            right: 24px;
            height: 100%;

            .bar {
                cursor: pointer;
                font-size: 24px;
                transition: 0.8s ease all;
            }
        }

        .icon-active {
            transform: rotate(180deg);
        }

        .dropdown-nav {
            display: flex;
            flex-direction: column;
            position: fixed;
            width: 100%;
            max-width: 200px;
            height: 100%;
            background-color: #ffffff;
            top: 0;
            left: 0;

            li {
                margin-left: 0;

                .link {
                    color: #000000;
                }
            }
        }

        .mobile-nav-enter-active,
        .mobile-nav-leave-active {
            transition: 1s ease all;
        }
        .mobile-nav-enter-from,
        .mobile-nav-leave-to {
            transform: translateX(-200px);
        }

        .mobile-nav-enter-to {
            transform: translateX(0px);
        }
    }
}

.scrolled-nav {
    background-color: #000000;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);

    nav {
        padding: 8px 0;

        .branding {
            img {
                width: 200px;
                box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
            }
        }
    }
}

</style>
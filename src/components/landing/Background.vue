<template>
    <div class="bg-no-repeat bg-auto bg-center relative h-screen" :style="{ backgroundImage: `url(${backgroundUrl})` }"></div>
</template>

<script>
import backgroundUrl from '../../assets/background1.jpg'
export default {
    data() {
        return {
        backgroundUrl
        }
    }
}
</script>
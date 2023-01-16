<template>
    <div>
        <NuxtIcon style="background-color: black; width: 100%;" />
        <NuxtWelcome />
    </div>
</template>

<script lang="ts" setup>
import { useStore } from '@/stores/index';

const store = useStore();
console.log('store.test', store.test);
console.log('NODE_ENV', process.env.NODE_ENV);
console.log('isMobile', useDevice().isMobile);
// plugin
// const { $date } = useNuxtApp();

onMounted(() => {
    callAPI(httpMethod.get, apiPath.member)
        .then(rsp => {
            console.log(rsp);
        });
});
</script>

<style>

</style>

<template>
    <div
        class="max-w-5xl min-h-[640px] mt-28 flex justify-center items-center relative mx-4 md:mx-auto   rounded-lg p-12   md:p-4">
        <img class="absolute  top-0 w-full object-cover md:object-fill  h-full left-0" src="../assets/borderRound.png" alt="delete" />
        <div class="  relative flex max-w-3xl   gap-12 md:gap-20  items-center md:flex-row-reverse flex-col">
            <img :src="image1" class="md:w-[240px] w-[120px] h-auto  object-cover" alt="image">
            <div class="flex flex-col gap-4  max-w-[340px]">
                <h1 class="text-[36px] text-[#191919] font-medium heading">Social Impact                </h1>
                <p class="text-gray-500 font-[300] text-[#191919] text-base">
                    Join a community of like-minded owners who are helping local businesses purchase solar credits to meet their climate goals.


                </p>
            </div>
        </div>

    </div>
</template>

<script setup>
import image1 from '../assets/image4.png'
//square image as pr
</script>

 
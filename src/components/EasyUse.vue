<template>
    <div
        class="max-w-6xl mt-28 min-h-[550px] flex justify-center items-center relative mx-4 md:mx-auto   rounded-lg p-12   md:p-4">
        <img class="absolute  top-0 w-full object-cover md:object-fill  h-full left-0" src="../assets/beige.png" alt="delete" />
        <div class="  relative flex max-w-4xl   gap-12 md:gap-0  items-center md:flex-row flex-col">
            <img :src="image1" class="md:w-[470px] w-[220px] h-auto  object-cover" alt="image">
            <div class="flex flex-col gap-4  max-w-full">
                <h1 class="text-[36px] text-[#191919] font-medium heading">Free & Easy to Use</h1>
                <p class="text-gray-500 font-[300] text-[#191919] text-base">
                    There's no fee to join Brytr, ever, and you can cancel at anytime. The platform is easy to use, and we're here to help.nd-picked merchants in Brytr's rewards catalog.
                </p>
            </div>
        </div>

    </div>
</template>

<script setup>
import image1 from '../assets/image3.png'
//square image as pr
</script>

 
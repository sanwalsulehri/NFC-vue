<template>
    <div
        class="max-w-5xl my-20  min-h-[480px] flex justify-center items-center relative mx-4 md:mx-auto   rounded-lg p-12   md:p-4">
        <img class="absolute  top-0 object-cover w-full h-full left-0" src="../assets/square.png" alt="delete" />
        <div class="  relative flex max-w-3xl gap-12 md:gap-20  items-center md:flex-row flex-col">
            <img :src="image1" class="md:w-[230px] w-[120px] h-auto object-cover" alt="image">
            <div class="flex flex-col gap-4 max-w-[340px]">
                <h1 class="text-[36px] text-[#191919] font-medium heading">Better Returns</h1>
                <p class="text-gray-500 font-[300] text-[#191919] text-base">Brytr helps you monitor, track and monetize
                    your valuable solar credits. You earn one credit for every megawatt-hour of solar energy you produce.
                </p>
            </div>
        </div>

    </div>
</template>

<script setup>
import image1 from '../assets/image1.png'
//square image as pr
</script>

 
<template>
   <div class="w-full bg-[#C2DBFF]">
    <div class="max-w-7xl mx-auto  px-4 py-4 flex items-center justify-between">
        <img :src="logo" alt="logo" class="w-auto h-12" >
        <div class="flex items-center gap-4">
            <button class="text-[13px] font-[500] px-6 inter text-white rounded-md py-3 bg-[#424BB2]">
                Questions?
            </button>
        </div>
    </div>
   </div>
</template>

<script setup>
import logo from '../assets/logo.svg'
</script>

 
<template>
    <div class="min-h-[130vh] md:min-h-[110vh] bg-red-400 flex items-center justify-center lg:block flex-col relative w-full  ">
        <div >
            <img :src="imgBg" alt="girl" class="absolute top-0 z-10 left-0 w-full h-full" >
        </div>
        <img :src="girl" alt="girl" class="relative top-0 z-10 md:pr-0 pr-16   w-auto   h-[65vw] xl:h-[60vw] top-4 xl:right-8 lg:right-0 lg:absolute right-0 top-4 object-contain" >
 
        <div class="max-w-7xl relative z-40 mx-auto px-4 py-12 lg:py-52">
           <div class="flex flex-col max-w-xl gap-4">
            <h1 class="text-[46px] md:block hidden md:text-[66px] heading font-[900] leading-[55px] text-[#191919] mb-6 text-left">
                Welcome, <br />
                Solarize Athens <br /> customers.
            </h1>
            <h1 class="text-[32px] md:hidden block md:text-[66px] heading font-[700] text-[#3F53D8] mb-6 text-left">
                Welcome,  
                Solarize Athens customers.
            </h1>
            <h2 class="text-[21px] noto text-[#FC498E] font-[900] text-left">
                Your solar power just got more rewarding. 
            </h2>
            <p class="text-[16px] text-[#191919] font-[500] text-left">
                Now, for the first time ever, you can trade your solar energy system's credits for cash, gift cards and other rewards, thanks to our partnership with Brytr. 
                <br />
                
                <span class=" ">
                    Brytr, based in Atlanta, has developed the world's first marketplace to help homeowners like you monetize your solar credits.  <b>Joining the Brytr platform is free, easy to use and takes only a few minutes to set up.</b>
                </span>
            </p>
           </div>
        </div>
    </div>
</template>

<script setup>
import girl from '../assets/girl.png'
import imgBg from '../assets/image.png'

</script>
 
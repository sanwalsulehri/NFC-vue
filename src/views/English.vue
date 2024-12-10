<template lang="">
    <div
      class="min-h-screen w-full lg:pt-6 bg-gradient-to-r"
      style="
        background-image: linear-gradient(to right, #0097fe 0%, #14358a 15%);
      "
    >
    <ChatButton /> 

 


<BottomBar />


     <SideBar />


      <div class="lg:pl-[330px]">
        <div
          class="bg-[#F6F8FA] lg:rounded-tl-[60px] min-h-screen pb-24 overflow-hidden h-full w-full"
        >
        
          <div class="py-20  px-4 sm:px-6 lg:px-14">
            <div class="md:max-w-[596px] md:mt-12 w-full sm:mx-auto mb-28  px-4">

                <div class="bg-white  px-6 py-10 rounded-[15px]">
                <div class="text-center">
                  <h2 class="sm:text-[32px] text-[25px] font-semibold text-gray-900">You didn’t find your company?</h2>
                  
                  <ul class="mt-4 space-y-4 text-black">
                    <li class="flex justify-center text-start   items-center">
                      <span class=" flex mr-7 h-[40px] w-[40px] flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-[#0097FE] to-[#14358A] text-[24px] font-semibold text-white"> 1 </span>
                      <p class="sm:text-[24px] text-[18px] font-[400] leading-[1.7rem] ">Make sure you have set up <br> a professional profile on Google.</p>
                    </li>
                    <li class="flex justify-center  text-start items-center">
                      <span class="flex sm:ml-10 mr-5  h-[40px] w-[40px] flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-[#0097FE] to-[#14358A] text-[24px] font-semibold text-white"> 2 </span>
                      <p class="sm:text-[24px]  font-[400] ">Watch this video and paste your link.</p>
                    </li>
                  </ul>
                </div>
                </div>
                
                <div class="mt-6 flex h-48 items-center justify-center rounded-[15px] bg-gray-200">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-20" viewBox="0 0 256 180">
                    <rect width="256" height="180" fill="none" />
                    <path fill="#000" d="M250.346 28.075A32.18 32.18 0 0 0 227.69 5.418C207.824 0 127.87 0 127.87 0S47.912.164 28.046 5.582A32.18 32.18 0 0 0 5.39 28.24c-6.009 35.298-8.34 89.084.165 122.97a32.18 32.18 0 0 0 22.656 22.657c19.866 5.418 99.822 5.418 99.822 5.418s79.955 0 99.82-5.418a32.18 32.18 0 0 0 22.657-22.657c6.338-35.348 8.291-89.1-.164-123.134" />
                    <path fill="#fff" d="m102.421 128.06l66.328-38.418l-66.328-38.418z" />
                  </svg>
                </div>
                
                <form class="space-y-4 py-8 px-5 rounded-[15px] bg-white mt-8">
                  <div>
                    <label htmlFor="google-link" class="block text-[16px]  text-black"> Your Google review link </label>
                    <input type="url" id="google-link"  placeholder="https://" class="mt-1 block w-full rounded-[5px] border border-gray-300 shadow-sm focus:ring-blue-600 focus:border-blue-600 text-sm px-3 py-1.5" />
                  </div>
                  <div>
                    <label htmlFor="product-" class="block text-[16px]  text-black"> Product  </label>
                    <input type="text" id="product-" value="Le Café Parisien Plate 1" readonly class="mt-1 block w-full rounded-[5px] border border-gray-300 shadow-sm text-gray-400 text-sm px-3 py-1.5" />
                  </div>
                  <div class="flex sm:justify-start justify-center">
                    <button type="submit" class="bg-[#3174F1] text-white font-[500] text-[20px] py-1 px-10 rounded-[10px] hover:bg-blue-700 transition focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">Save</button>
                  </div>
                </form>
                </div>
          </div>
        </div>
      </div>
    </div>
</template>
<script setup>
import SideBar from '../components/SideBar.vue'
import ChatButton from '../components/ChatButton.vue'
import BottomBar from '../components/BottomBar.vue'
</script>
<style lang="">
    
</style>
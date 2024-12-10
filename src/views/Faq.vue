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
          <div
            class="min-h-[104px] lg:flex hidden shadow-[0px_4px_4px_0px_#00000033] px-4 sm:px-6 lg:px-14 items-center justify-between gap-2"
          >
            <div class="flex text-[20px] font-medium items-center gap-6">
                <svg width="24" height="36" viewBox="0 0 24 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.75 10.5C5.75 7.74219 7.99219 5.5 10.75 5.5H13.25C16.0078 5.5 18.25 7.74219 18.25 10.5V10.7813C18.25 12.4844 17.3828 14.0703 15.9531 14.9844L12.6562 17.1016C11.6882 17.7239 10.892 18.5794 10.3405 19.5895C9.78907 20.5996 9.50006 21.732 9.5 22.8828V22.9922C9.5 24.375 10.6172 25.4922 12 25.4922C13.3828 25.4922 14.5 24.375 14.5 22.9922V22.8828C14.5 22.2422 14.8281 21.6484 15.3594 21.3047L18.6562 19.1875C21.5156 17.3438 23.25 14.1797 23.25 10.7734V10.4922C23.25 4.96875 18.7734 0.492188 13.25 0.492188H10.75C5.22656 0.5 0.75 4.97656 0.75 10.5C0.75 11.8828 1.86719 13 3.25 13C4.63281 13 5.75 11.8828 5.75 10.5ZM12 35.5C12.8288 35.5 13.6237 35.1708 14.2097 34.5847C14.7958 33.9987 15.125 33.2038 15.125 32.375C15.125 31.5462 14.7958 30.7513 14.2097 30.1653C13.6237 29.5792 12.8288 29.25 12 29.25C11.1712 29.25 10.3763 29.5792 9.79029 30.1653C9.20424 30.7513 8.875 31.5462 8.875 32.375C8.875 33.2038 9.20424 33.9987 9.79029 34.5847C10.3763 35.1708 11.1712 35.5 12 35.5Z" fill="#011847"></path>
                  </svg>
                 <div class="">
                    FAQ
                    <p class="font-medium text-sm text-[#ACA3A3]">Questions about Configuration and Use</p>
                 </div>
            </div>
          </div>
          <div class="py-20 px-4 sm:px-6 lg:px-14">
            <div
              class="max-w-[832px] min-h-[525px] 2xl:max-w-[1000px] py-6 px-6 rounded-[30px] w-full mx-auto flex flex-col gap-5 bg-white"
            >
              <h1 class=" text-[20px] font-medium">
                Configuration and Use
              </h1>
             
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
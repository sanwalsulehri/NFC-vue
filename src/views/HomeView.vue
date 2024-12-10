<template lang="">
   <div
      class="min-h-screen w-full lg:pt-6 "
      style="
        background-image: linear-gradient(to right, #0097fe 0%, #14358a 15%);
      "
    >

   

  
<ChatButton /> 

 


<BottomBar />


     <SideBar />


     <div class="lg:pl-[330px]">
        <div class="bg-[#F6F8FA]  pb-24 lg:rounded-tl-[60px] min-h-screen overflow-hidden h-full  w-full">
            <div class="min-h-[104px] lg:flex hidden shadow-[0px_4px_4px_0px_#00000033] px-4 sm:px-6 lg:px-14  items-center justify-between gap-2">
                <div class="flex text-[20px] font-medium items-center gap-6">
                    <svg
                  width="38"
                  height="38"
                  viewBox="0 0 38 38"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M31.0005 26.375L19.0005 33.2646L7.00048 26.375L10.5296 24.8729L17.963 29.1396C18.2838 29.325 18.6421 29.4167 19.0005 29.4167C19.3588 29.4167 19.7151 29.325 20.038 29.1396L27.4713 24.8708L31.0005 26.375ZM17.963 20.8063C18.2838 20.9917 18.6421 21.0833 19.0005 21.0833C19.3588 21.0833 19.7151 20.9917 20.038 20.8063L27.4713 16.5375L31.0005 18.0417L19.0005 24.9313L7.00048 18.0417L10.5296 16.5375L17.963 20.8063ZM19.0005 4.59801L31.0005 9.70843L19.0005 16.598L7.00048 9.70843L19.0005 4.59801ZM37.7465 17.6417C37.6986 16.8521 37.209 16.1584 36.4819 15.8479L31.9986 13.9396L36.7048 11.2375C37.3903 10.8459 37.7923 10.0979 37.7465 9.30837C37.6986 8.52087 37.209 7.82503 36.4819 7.51462L19.8153 0.416699C19.2944 0.193783 18.7048 0.193783 18.184 0.416699L1.51734 7.51462C0.790259 7.82503 0.300675 8.52087 0.254842 9.30837C0.206925 10.0979 0.611092 10.8459 1.29651 11.2375L6.00068 13.9396L1.51734 15.8479C0.790259 16.1584 0.300675 16.8521 0.254842 17.6417C0.206925 18.4313 0.611092 19.1792 1.29651 19.5709L6.00068 22.2729L1.51734 24.1813C0.790259 24.4917 0.300675 25.1854 0.254842 25.975C0.206925 26.7646 0.611092 27.5125 1.29651 27.9042L17.9632 37.4729C18.284 37.6584 18.6423 37.75 19.0007 37.75C19.359 37.75 19.7153 37.6584 20.0382 37.4729L36.7048 27.9042C37.3903 27.5125 37.7923 26.7646 37.7465 25.975C37.6986 25.1875 37.209 24.4917 36.484 24.1813L32.0007 22.2709L36.7048 19.5709C37.3903 19.1792 37.7923 18.4313 37.7465 17.6417Z"
                    fill="#0B2D6E"
                  />
                </svg>
                        My Products                    
                </div>
                <router-link to="/myproducts2" class="flex text-white text-[20px] font-medium items-center gap-3 border border-[#2A59AF] bg-[#3174F1] rounded-[10px] py-1 px-4 hover:bg-opacity-80">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15 7H9V1C9 0.734784 8.89464 0.48043 8.70711 0.292893C8.51957 0.105357 8.26522 0 8 0C7.73478 0 7.48043 0.105357 7.29289 0.292893C7.10536 0.48043 7 0.734784 7 1V7H1C0.734784 7 0.48043 7.10536 0.292893 7.29289C0.105357 7.48043 0 7.73478 0 8C0 8.26522 0.105357 8.51957 0.292893 8.70711C0.48043 8.89464 0.734784 9 1 9H7V15C7 15.2652 7.10536 15.5196 7.29289 15.7071C7.48043 15.8946 7.73478 16 8 16C8.26522 16 8.51957 15.8946 8.70711 15.7071C8.89464 15.5196 9 15.2652 9 15V9H15C15.2652 9 15.5196 8.89464 15.7071 8.70711C15.8946 8.51957 16 8.26522 16 8C16 7.73478 15.8946 7.48043 15.7071 7.29289C15.5196 7.10536 15.2652 7 15 7Z" fill="white"/>
                        </svg>
                        New
                      </router-link>
            </div>
            <div class="py-20 px-4 sm:px-6 lg:px-14">
                <div class="max-w-[598px] w-full mx-auto flex flex-col gap-5">
                    <div class="rounded-[20px] flex-wrap flex items-center justify-between gap-3 py-6 px-8 shadow-[0px_2px_2px_0px_#0000001A] bg-white ">
                        <h1 class="text-[#06070F] text-[20px] font-medium ">Hello Arthur!</h1>
                        <router-link to='/accountsetting' class="flex font-[400] hover:bg-gray-100 text-[#575757] text-[15px] items-center gap-3 py-1 px-4 border-[0.5px] border-[#9E9E9E] rounded-[10px] ">
                            <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.049 0.207468C8.29405 0.0714009 8.56971 0 8.85 0C9.13029 0 9.40596 0.0714009 9.651 0.207468L16.851 4.20747C17.375 4.49847 17.7 5.05047 17.7 5.65047V13.5905C17.7 14.1905 17.375 14.7425 16.851 15.0335L9.651 19.0335C9.40596 19.1695 9.13029 19.2409 8.85 19.2409C8.56971 19.2409 8.29405 19.1695 8.049 19.0335L0.849 15.0335C0.591624 14.8906 0.37717 14.6814 0.227884 14.4276C0.0785983 14.1739 -8.3401e-05 13.8849 6.63389e-08 13.5905V5.65047C6.63389e-08 5.05047 0.325 4.49847 0.849 4.20747L8.049 0.207468ZM8.923 1.51947C8.90068 1.50703 8.87555 1.50051 8.85 1.50051C8.82445 1.50051 8.79932 1.50703 8.777 1.51947L1.577 5.51947C1.55381 5.53239 1.53446 5.55123 1.52094 5.57407C1.50741 5.5969 1.50018 5.62292 1.5 5.64947V13.5915C1.5 13.6455 1.53 13.6955 1.577 13.7215L8.777 17.7215C8.79932 17.7339 8.82445 17.7404 8.85 17.7404C8.87555 17.7404 8.90068 17.7339 8.923 17.7215L16.123 13.7215C16.1462 13.7086 16.1655 13.6897 16.1791 13.6669C16.1926 13.644 16.1998 13.618 16.2 13.5915V5.65047C16.2 5.62375 16.1929 5.59753 16.1793 5.5745C16.1658 5.55147 16.1463 5.53247 16.123 5.51947L8.923 1.51947Z" fill="#575757"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M4.09998 9.62036C4.09998 8.36058 4.60042 7.1524 5.49122 6.2616C6.38202 5.37081 7.5902 4.87036 8.84998 4.87036C10.1098 4.87036 11.3179 5.37081 12.2087 6.2616C13.0995 7.1524 13.6 8.36058 13.6 9.62036C13.6 10.8801 13.0995 12.0883 12.2087 12.9791C11.3179 13.8699 10.1098 14.3704 8.84998 14.3704C7.5902 14.3704 6.38202 13.8699 5.49122 12.9791C4.60042 12.0883 4.09998 10.8801 4.09998 9.62036ZM8.84998 6.37036C7.98802 6.37036 7.16137 6.71277 6.55188 7.32226C5.94239 7.93176 5.59998 8.75841 5.59998 9.62036C5.59998 10.4823 5.94239 11.309 6.55188 11.9185C7.16137 12.528 7.98802 12.8704 8.84998 12.8704C9.71193 12.8704 10.5386 12.528 11.1481 11.9185C11.7576 11.309 12.1 10.4823 12.1 9.62036C12.1 8.75841 11.7576 7.93176 11.1481 7.32226C10.5386 6.71277 9.71193 6.37036 8.84998 6.37036Z" fill="#575757"/>
                                </svg>
                                Account Settings                     
                              </router-link>
                    </div>

                    <div class="rounded-[20px] flex-wrap text-white flex items-center justify-between gap-3 py-6 px-8 shadow-[0px_2px_2px_0px_#0000001A] bg-[#012C7E] ">
                        <div class="flex items-center gap-5">
                            <svg width="40" height="34" viewBox="0 0 40 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M17.209 0L17.2085 20.8338H14.7502V25.0004H17.2085L17.2091 33.3334H22.1257L22.1252 25.0004H24.5835V20.8338H22.1252L22.1257 0H17.209ZM2.45829 0V8.33545H0V12.5H2.45829V33.3333H7.375V12.5H9.83329V8.33545H7.375V0H2.45829ZM31.9561 0.00039041V12.5004H29.4978L29.4993 16.6667H31.9576V33.3333H36.8767V16.6667H39.335L39.3335 12.5004H36.8752L36.8767 0L31.9561 0.00039041Z" fill="white"/>
                                </svg>                                
                                <div class="">
                                <h1 class="sm:text-[20px] font-medium ">Configure my  product</h1>
                                <h5 class="text-[#C5C5C5] sm:text-[16px] text-sm">Collect more reviews</h5>
                                </div>
                        </div>
                        <button @click="showModal = true" class="flex text-white text-[20px] font-medium items-center gap-3 border border-[#2A59AF] bg-[#3174F1] rounded-[10px] py-1 px-4 hover:bg-opacity-80">
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15 7H9V1C9 0.734784 8.89464 0.48043 8.70711 0.292893C8.51957 0.105357 8.26522 0 8 0C7.73478 0 7.48043 0.105357 7.29289 0.292893C7.10536 0.48043 7 0.734784 7 1V7H1C0.734784 7 0.48043 7.10536 0.292893 7.29289C0.105357 7.48043 0 7.73478 0 8C0 8.26522 0.105357 8.51957 0.292893 8.70711C0.48043 8.89464 0.734784 9 1 9H7V15C7 15.2652 7.10536 15.5196 7.29289 15.7071C7.48043 15.8946 7.73478 16 8 16C8.26522 16 8.51957 15.8946 8.70711 15.7071C8.89464 15.5196 9 15.2652 9 15V9H15C15.2652 9 15.5196 8.89464 15.7071 8.70711C15.8946 8.51957 16 8.26522 16 8C16 7.73478 15.8946 7.48043 15.7071 7.29289C15.5196 7.10536 15.2652 7 15 7Z" fill="white"/>
    </svg>
    New
  </button>
                   
                    </div>
                </div>
            </div>
          </div> 
     </div>
    </div>

  <!-- Add Modal -->
  <div v-if="showModal" class="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
    <div class="relative flex max-w-[598px] items-center gap-5 rounded-[20px] bg-white p-6 mx-4">
      <div class="w-full">
        <button @click="showModal = false" class="absolute right-3 top-3 text-[#B6DDF3] hover:text-[#3174F1]">
          <svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.5037 0.803261C15.3617 2.94676 13.216 5.09064 11.0762 7.23451C8.93273 5.09176 6.78899 2.94801 4.64499 0.803261C2.16474 -1.67586 -1.67826 2.16901 0.80086 4.64814C2.94361 6.78976 5.08824 8.93476 7.22836 11.0756C5.08674 13.2184 2.94249 15.363 0.80086 17.5069C-1.67826 19.9853 2.16661 23.829 4.64499 21.3514C6.78749 19.2076 8.93123 17.0639 11.0762 14.9201C13.2197 17.064 15.3617 19.2068 17.5037 21.3514C19.9832 23.8294 23.8266 19.9853 21.3494 17.5073C19.2055 15.3634 17.062 13.2206 14.9181 11.076C17.0624 8.93251 19.2061 6.78876 21.3494 4.64476C23.8266 2.16639 19.9832 -1.67849 17.5037 0.800635" fill="currentColor" />
          </svg>
        </button>
        <h2 class="mb-4 text-2xl font-semibold text-[#006FBA] xl:text-[36px]">Configure my product</h2>
        <p class="py-5 font-[400] sm:text-[20px]">
          Enter your CODE<br />
          it can be found under <br />
          your QR code on your product.
        </p>
        <form @submit.prevent="handleContinue">
          <label for="code" class="mb-2 block">Code</label>
          <input type="text" id="code" placeholder="Example: XC2DSB" class="mb-4 md:w-[70%] l rounded-[5px] border border-[#9E9E9E] px-3 py-1.5 placeholder:text-[#9E9E9E]" />
          <div class="flex items-center justify-between"></div>
          <button type="submit" class="mt-6 w-fit rounded-[10px] border border-[#4683FF] bg-[#3174F1] px-4 py-1.5 text-sm font-semibold text-white hover:bg-opacity-80">Continue</button>
        </form>
      </div>
      <div class="flex h-fit w-full max-w-[105px] flex-col items-center justify-center rounded-[10px] border border-[#006FBA] p-2 text-center">
        <h6 class="mb-2 font-medium leading-tight">
          OR<br />
          <span class="font-bold"> SCAN QR </span>
        </h6>
        <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_291_1422)">
            <path d="M8.75 8.75H17.5V17.5H8.75V8.75Z" fill="black" />
            <path d="M26.25 0V26.25H0V0H26.25ZM21.875 4.375H4.375V21.875H21.875V4.375ZM17.5 52.5H8.75V61.25H17.5V52.5Z" fill="black" />
            <path d="M26.25 43.75V70H0V43.75H26.25ZM4.375 48.125V65.625H21.875V48.125H4.375ZM52.5 8.75H61.25V17.5H52.5V8.75Z" fill="black" />
            <path d="M43.75 0V26.25H70V0H43.75ZM65.625 4.375V21.875H48.125V4.375H65.625ZM35 4.375V0H39.375V8.75H35V17.5H30.625V4.375H35ZM35 26.25V17.5H39.375V26.25H35ZM26.25 35V30.625H30.625V26.25H35V35H39.375V30.625H61.25V35H43.75V39.375H30.625V35H26.25ZM26.25 35V39.375H8.75V35H4.375V39.375H0V30.625H13.125V35H26.25ZM70 39.375H65.625V30.625H70V39.375ZM65.625 39.375H61.25V48.125H70V43.75H65.625V39.375ZM48.125 39.375H56.875V43.75H52.5V48.125H48.125V39.375ZM56.875 52.5V48.125H52.5V52.5H48.125V56.875H39.375V61.25H52.5V52.5H56.875ZM56.875 52.5H70V56.875H61.25V61.25H56.875V52.5ZM39.375 48.125V52.5H43.75V43.75H30.625V48.125H39.375Z" fill="black" />
            <path d="M30.625 52.5H35V65.625H52.5V70H30.625V52.5ZM70 61.25V70H56.875V65.625H65.625V61.25H70Z" fill="black" />
          </g>
          <defs>
            <clipPath id="clip0_291_1422">
              <rect width="70" height="70" fill="white" />
            </clipPath>
          </defs>
        </svg>
        <p class="mt- text-[13px] font-medium">YOUR CODE</p>
      </div>
    </div>
  </div>

  <!-- Second Modal -->
  <div v-if="showSecondModal" class="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
    <div class="relative flex max-w-[598px] w-full items-center gap-5 rounded-[20px] bg-white p-6">
      <div class="w-full">
        <button @click="showSecondModal = false" class="absolute right-3 top-3 text-[#B6DDF3] hover:text-[#3174F1]">
          <svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.5037 0.803261C15.3617 2.94676 13.216 5.09064 11.0762 7.23451C8.93273 5.09176 6.78899 2.94801 4.64499 0.803261C2.16474 -1.67586 -1.67826 2.16901 0.80086 4.64814C2.94361 6.78976 5.08824 8.93476 7.22836 11.0756C5.08674 13.2184 2.94249 15.363 0.80086 17.5069C-1.67826 19.9853 2.16661 23.829 4.64499 21.3514C6.78749 19.2076 8.93123 17.0639 11.0762 14.9201C13.2197 17.064 15.3617 19.2068 17.5037 21.3514C19.9832 23.8294 23.8266 19.9853 21.3494 17.5073C19.2055 15.3634 17.062 13.2206 14.9181 11.076C17.0624 8.93251 19.2061 6.78876 21.3494 4.64476C23.8266 2.16639 19.9832 -1.67849 17.5037 0.800635" fill="currentColor" />
          </svg>
        </button>
        <h2 class="mb-4 flex items-center justify-center gap-2 text-2xl text-[24px] font-semibold">
          <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.03131 15.6231H10.4688C10.8251 15.6232 11.1681 15.7586 11.4284 16.0018C11.6888 16.2451 11.8471 16.5781 11.8714 16.9335C11.8956 17.289 11.7841 17.6404 11.5592 17.9168C11.3344 18.1932 11.013 18.3739 10.6601 18.4225L10.4688 18.4356H2.03131C1.67502 18.4355 1.33205 18.3002 1.0717 18.0569C0.811355 17.8137 0.653046 17.4807 0.628761 17.1252C0.604476 16.7698 0.716026 16.4183 0.94087 16.1419C1.16572 15.8656 1.48709 15.6848 1.84006 15.6363L2.03131 15.6231ZM4.78756 4.78562C5.0259 4.54775 5.34168 4.40329 5.67751 4.37852C6.01333 4.35374 6.34689 4.4503 6.61756 4.65062L6.77506 4.7875L13.3376 11.35C13.5869 11.6013 13.7322 11.9373 13.7447 12.291C13.7571 12.6447 13.6358 12.9901 13.4048 13.2583C13.1738 13.5264 12.8501 13.6976 12.4985 13.7377C12.1468 13.7778 11.793 13.6837 11.5076 13.4744L11.3501 13.3375L4.78756 6.775C4.52421 6.51133 4.3763 6.15391 4.3763 5.78125C4.3763 5.40859 4.52421 5.0493 4.78756 4.78562ZM17.0313 0.625C17.3711 0.625014 17.6994 0.74808 17.9556 0.971438C18.2117 1.1948 18.3782 1.50334 18.4244 1.84L18.4376 2.03125V10.4688C18.4375 10.825 18.3021 11.168 18.0589 11.4284C17.8156 11.6887 17.4826 11.847 17.1272 11.8713C16.7717 11.8956 16.4203 11.784 16.1439 11.5592C15.8675 11.3343 15.6867 11.013 15.6382 10.66L15.6251 10.4688V2.03125C15.6251 1.65829 15.7732 1.3006 16.0369 1.03688C16.3007 0.773158 16.6583 0.625 17.0313 0.625Z" fill="#011847" />
          </svg>
      
          New Configuration
        </h2>
        <form class="mx-auto w-1/2 text-center">
          <p class="text-center font-[400] sm:text-[20px]">Enter the name and the address of the establishment in Google</p>
          <input type="text" id="code" placeholder="Le Café Parisien" class="my-2 w-full rounded-[5px] border border-[#9E9E9E] px-3 py-1 placeholder:text-[#9E9E9E]" />
          <h6 class="text-sm font-medium">Can’t find my business. <span class="text-[#006FBA] underline">Click here</span></h6>
          <label for="code" class="mb-2 mt-6 block text-left">Name of the plate (optional)</label>
          <input type="text" id="code" placeholder="Example: XC2DSB" class="l mb-4 w-full rounded-[5px] border border-[#9E9E9E] px-3 py-1.5 placeholder:text-[#9E9E9E]" />
        </form>
      </div>
    </div>
  </div>

</template>
<script setup>
import SideBar from '../components/SideBar.vue'
import ChatButton from '../components/ChatButton.vue'
import BottomBar from '../components/BottomBar.vue'
import { ref } from 'vue'

const showModal = ref(false)
const showSecondModal = ref(false)

const handleContinue = () => {
  showModal.value = false
  showSecondModal.value = true
}
</script>
<style lang="">
    
</style>
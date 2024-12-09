<template lang="">
     <div class="relative flex max-w-[598px] items-center gap-5 rounded-[20px] bg-white p-6 ">
        <div class="w-full">
          <button class="absolute right-3 top-3 text-[#B6DDF3] hover:text-[#3174F1]">
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
          <form>
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

      

      <!-- 2 -->
      <div class="relative flex max-w-[598px] items-center gap-5 rounded-[20px] bg-white p-6">
        <div class="w-full">
          <button class="absolute right-3 top-3 text-[#B6DDF3] hover:text-[#3174F1]">
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
</template>
<script>
export default {
    
}
</script>
<style lang="">
    
</style>
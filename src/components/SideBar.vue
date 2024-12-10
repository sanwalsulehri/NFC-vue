<template lang="">
     <div class="text-white cursor-pointer lg:hidden flex py-10 px-4">
        <svg width="43" height="20" viewBox="0 0 43 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="43" height="4" rx="2" fill="#F6F8FA"/>
            <rect y="8" width="43" height="4" rx="2" fill="#F6F8FA"/>
            <rect y="16" width="43" height="4" rx="2" fill="#F6F8FA"/>
            </svg>
            
    </div>
   <div
        class="pt-36 hidden lg:flex flex-col gap-2 pl-7 fixed left-0 top-0 overflow-auto h-full w-[330px]"
      >
        <router-link 
        to="/"
          class="flex hover:bg-gradient-to-r text-[20px] font-medium cursor-pointer text-white rounded-l-[20px] p-1 from-[#FFFFFF4D] to-[#17449C4D] items-center gap-5"
      :class="{ 'bg-gradient-to-r': $route.path === '/' }"
        >
          <div
            class="border-2 border-[#ACA3A3] size-[64px] bg-white rounded-[20px] flex items-center justify-center"
          >
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
                fill="#3174F1"
              />
            </svg>
          </div>
          My products
        </router-link>

        <router-link 
        to="/discover"
          class="flex hover:bg-gradient-to-r text-[20px] font-medium cursor-pointer text-white rounded-l-[20px] p-1 from-[#FFFFFF4D] to-[#17449C4D] items-center gap-5"
      :class="{ 'bg-gradient-to-r': $route.path === '/discover' }"
        >
          <div
            class="border-2 border-[#ACA3A3] size-[64px] bg-white rounded-[20px] flex items-center justify-center"
          >
            <svg
              width="38"
              height="26"
              viewBox="0 0 38 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M37.7338 2.50601C37.7297 2.35601 37.6859 2.21434 37.6463 2.07059C37.6151 1.94976 37.6005 1.82684 37.5484 1.71642C37.5005 1.60809 37.4193 1.52059 37.3484 1.42059C37.2609 1.29351 37.1818 1.16642 37.0693 1.06226C37.0505 1.04351 37.0422 1.01851 37.0213 1.00184C36.9463 0.937256 36.8547 0.914339 36.7734 0.862256C36.6484 0.781006 36.5255 0.697673 36.3838 0.643506C36.2443 0.593506 36.1068 0.581006 35.963 0.560173C35.863 0.545589 35.7734 0.499756 35.6672 0.499756H25.2505C24.0984 0.499756 23.1672 1.43309 23.1672 2.58309C23.1672 3.73309 24.0984 4.66642 25.2505 4.66642H31.138L22.7297 14.4748L13.8213 9.13101C12.9401 8.59767 11.8068 8.79351 11.1484 9.58309L0.731763 22.0831C-0.00365326 22.9664 0.115097 24.281 0.99843 25.0164C1.3901 25.3414 1.86093 25.4998 2.33176 25.4998C2.92968 25.4998 3.52135 25.2456 3.93385 24.7498L13.2088 13.6206L22.0943 18.9539C22.9672 19.4768 24.088 19.2935 24.7484 18.5227L33.5838 8.21434V12.9998C33.5838 14.1498 34.5151 15.0831 35.6672 15.0831C36.8193 15.0831 37.7505 14.1498 37.7505 12.9998V2.58309C37.7505 2.55601 37.7359 2.53309 37.7338 2.50601Z"
                fill="#3174F1"
              />
            </svg>
          </div>
          Discover XPRO
        </router-link>

        <router-link 
        to="/faq"
          class="flex hover:bg-gradient-to-r text-[20px] font-medium cursor-pointer text-white rounded-l-[20px] p-1 from-[#FFFFFF4D] to-[#17449C4D] items-center gap-5"
      :class="{ 'bg-gradient-to-r': $route.path === '/faq' }"
        >
          <div
            class="border-2 border-[#ACA3A3] size-[64px] bg-white rounded-[20px] flex items-center justify-center"
          >
            <svg
              width="24"
              height="36"
              viewBox="0 0 24 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.75 10.5C5.75 7.74219 7.99219 5.5 10.75 5.5H13.25C16.0078 5.5 18.25 7.74219 18.25 10.5V10.7813C18.25 12.4844 17.3828 14.0703 15.9531 14.9844L12.6562 17.1016C11.6882 17.7239 10.892 18.5794 10.3405 19.5895C9.78907 20.5996 9.50006 21.732 9.5 22.8828V22.9922C9.5 24.375 10.6172 25.4922 12 25.4922C13.3828 25.4922 14.5 24.375 14.5 22.9922V22.8828C14.5 22.2422 14.8281 21.6484 15.3594 21.3047L18.6562 19.1875C21.5156 17.3438 23.25 14.1797 23.25 10.7734V10.4922C23.25 4.96875 18.7734 0.492188 13.25 0.492188H10.75C5.22656 0.5 0.75 4.97656 0.75 10.5C0.75 11.8828 1.86719 13 3.25 13C4.63281 13 5.75 11.8828 5.75 10.5ZM12 35.5C12.8288 35.5 13.6237 35.1708 14.2097 34.5847C14.7958 33.9987 15.125 33.2038 15.125 32.375C15.125 31.5462 14.7958 30.7513 14.2097 30.1653C13.6237 29.5792 12.8288 29.25 12 29.25C11.1712 29.25 10.3763 29.5792 9.79029 30.1653C9.20424 30.7513 8.875 31.5462 8.875 32.375C8.875 33.2038 9.20424 33.9987 9.79029 34.5847C10.3763 35.1708 11.1712 35.5 12 35.5Z"
                fill="#3174F1"
              />
            </svg>
          </div>
          FAQ
        </router-link> 

        <router-link 
        to="/accountSetting"
           class="mt-32 flex hover:bg-gradient-to-r text-[20px] font-medium cursor-pointer text-white rounded-l-[20px] p-1 from-[#FFFFFF4D] to-[#17449C4D] items-center gap-5"
      :class="{ 'bg-gradient-to-r': $route.path === '/accountSetting' }"
        >
          <div
            class="border-2 border-[#ACA3A3] size-[64px] bg-white rounded-[20px] flex items-center justify-center"
          >
            <svg
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.5 0C14.1576 0 15.7473 0.65848 16.9194 1.83058C18.0915 3.00268 18.75 4.5924 18.75 6.25C18.75 7.9076 18.0915 9.49732 16.9194 10.6694C15.7473 11.8415 14.1576 12.5 12.5 12.5C10.8424 12.5 9.25268 11.8415 8.08058 10.6694C6.90848 9.49732 6.25 7.9076 6.25 6.25C6.25 4.5924 6.90848 3.00268 8.08058 1.83058C9.25268 0.65848 10.8424 0 12.5 0ZM12.5 15.625C19.4062 15.625 25 18.4219 25 21.875V25H0V21.875C0 18.4219 5.59375 15.625 12.5 15.625Z"
                fill="#3174F1"
              />
            </svg>
          </div>
          My profile
        </router-link >

      
      </div>
</template>
<script>

</script>
<style>
.router-link-active {
  background: linear-gradient(to right, rgba(255, 255, 255, 0.3), rgba(23, 68, 156, 0.3));
}

/* Exception for the language selector since it has different styling */
.router-link-active[to="/english"] {
  background: white;
}
</style>
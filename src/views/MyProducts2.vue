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
                <button class="flex text-white text-[20px] font-medium items-center gap-3 border border-[#2A59AF] bg-[#3174F1] rounded-[10px] py-1 px-4 hover:bg-opacity-80">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15 7H9V1C9 0.734784 8.89464 0.48043 8.70711 0.292893C8.51957 0.105357 8.26522 0 8 0C7.73478 0 7.48043 0.105357 7.29289 0.292893C7.10536 0.48043 7 0.734784 7 1V7H1C0.734784 7 0.48043 7.10536 0.292893 7.29289C0.105357 7.48043 0 7.73478 0 8C0 8.26522 0.105357 8.51957 0.292893 8.70711C0.48043 8.89464 0.734784 9 1 9H7V15C7 15.2652 7.10536 15.5196 7.29289 15.7071C7.48043 15.8946 7.73478 16 8 16C8.26522 16 8.51957 15.8946 8.70711 15.7071C8.89464 15.5196 9 15.2652 9 15V9H15C15.2652 9 15.5196 8.89464 15.7071 8.70711C15.8946 8.51957 16 8.26522 16 8C16 7.73478 15.8946 7.48043 15.7071 7.29289C15.5196 7.10536 15.2652 7 15 7Z" fill="white"/>
                        </svg>
                        New
                </button>
            </div>
            <div class="py-20 px-4 sm:px-6 lg:px-14">
                <div class="max-w-[598px] w-full mx-auto flex flex-col gap-5">
                    <div class="rounded-[20px] flex-wrap flex items-center justify-between gap-3 py-6 px-8 shadow-[0px_2px_2px_0px_#0000001A] bg-white ">
                        <h1 class="text-[#06070F] text-[20px] font-medium ">Hello Arthur!</h1>
                        <button class="flex font-[400] hover:bg-gray-100 text-[#575757] text-[15px] items-center gap-3 py-1 px-4 border-[0.5px] border-[#9E9E9E] rounded-[10px] ">
                            <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.049 0.207468C8.29405 0.0714009 8.56971 0 8.85 0C9.13029 0 9.40596 0.0714009 9.651 0.207468L16.851 4.20747C17.375 4.49847 17.7 5.05047 17.7 5.65047V13.5905C17.7 14.1905 17.375 14.7425 16.851 15.0335L9.651 19.0335C9.40596 19.1695 9.13029 19.2409 8.85 19.2409C8.56971 19.2409 8.29405 19.1695 8.049 19.0335L0.849 15.0335C0.591624 14.8906 0.37717 14.6814 0.227884 14.4276C0.0785983 14.1739 -8.3401e-05 13.8849 6.63389e-08 13.5905V5.65047C6.63389e-08 5.05047 0.325 4.49847 0.849 4.20747L8.049 0.207468ZM8.923 1.51947C8.90068 1.50703 8.87555 1.50051 8.85 1.50051C8.82445 1.50051 8.79932 1.50703 8.777 1.51947L1.577 5.51947C1.55381 5.53239 1.53446 5.55123 1.52094 5.57407C1.50741 5.5969 1.50018 5.62292 1.5 5.64947V13.5915C1.5 13.6455 1.53 13.6955 1.577 13.7215L8.777 17.7215C8.79932 17.7339 8.82445 17.7404 8.85 17.7404C8.87555 17.7404 8.90068 17.7339 8.923 17.7215L16.123 13.7215C16.1462 13.7086 16.1655 13.6897 16.1791 13.6669C16.1926 13.644 16.1998 13.618 16.2 13.5915V5.65047C16.2 5.62375 16.1929 5.59753 16.1793 5.5745C16.1658 5.55147 16.1463 5.53247 16.123 5.51947L8.923 1.51947Z" fill="#575757"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M4.09998 9.62036C4.09998 8.36058 4.60042 7.1524 5.49122 6.2616C6.38202 5.37081 7.5902 4.87036 8.84998 4.87036C10.1098 4.87036 11.3179 5.37081 12.2087 6.2616C13.0995 7.1524 13.6 8.36058 13.6 9.62036C13.6 10.8801 13.0995 12.0883 12.2087 12.9791C11.3179 13.8699 10.1098 14.3704 8.84998 14.3704C7.5902 14.3704 6.38202 13.8699 5.49122 12.9791C4.60042 12.0883 4.09998 10.8801 4.09998 9.62036ZM8.84998 6.37036C7.98802 6.37036 7.16137 6.71277 6.55188 7.32226C5.94239 7.93176 5.59998 8.75841 5.59998 9.62036C5.59998 10.4823 5.94239 11.309 6.55188 11.9185C7.16137 12.528 7.98802 12.8704 8.84998 12.8704C9.71193 12.8704 10.5386 12.528 11.1481 11.9185C11.7576 11.309 12.1 10.4823 12.1 9.62036C12.1 8.75841 11.7576 7.93176 11.1481 7.32226C10.5386 6.71277 9.71193 6.37036 8.84998 6.37036Z" fill="#575757"/>
                                </svg>
                                Account Settings                     
                        </button>
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
                        <button class="flex text-white text-[20px] font-medium items-center gap-3 border border-[#2A59AF] bg-[#3174F1] rounded-[10px] py-1 px-4 hover:bg-opacity-80">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15 7H9V1C9 0.734784 8.89464 0.48043 8.70711 0.292893C8.51957 0.105357 8.26522 0 8 0C7.73478 0 7.48043 0.105357 7.29289 0.292893C7.10536 0.48043 7 0.734784 7 1V7H1C0.734784 7 0.48043 7.10536 0.292893 7.29289C0.105357 7.48043 0 7.73478 0 8C0 8.26522 0.105357 8.51957 0.292893 8.70711C0.48043 8.89464 0.734784 9 1 9H7V15C7 15.2652 7.10536 15.5196 7.29289 15.7071C7.48043 15.8946 7.73478 16 8 16C8.26522 16 8.51957 15.8946 8.70711 15.7071C8.89464 15.5196 9 15.2652 9 15V9H15C15.2652 9 15.5196 8.89464 15.7071 8.70711C15.8946 8.51957 16 8.26522 16 8C16 7.73478 15.8946 7.48043 15.7071 7.29289C15.5196 7.10536 15.2652 7 15 7Z" fill="white"/>
                                </svg>
                                New
                        </button>
                    </div>

                    <div class="flex w-full flex-wrap items-center justify-between gap-3 rounded-[20px] bg-white px-8 py-4 shadow-[0px_2px_2px_0px_#0000001A]">
                        <div class="flex items-center">
                          <div class=" rounded-lg  mr-4">
                            <img src="https://s3-alpha-sig.figma.com/img/5e4e/a89b/e654e8ebf5b63c74a6d6e2eb76aa7721?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HGj9i1IWp2581ukDHXLAcOB0svFpftzWS3GEj9ujSaeGGQa8LtV-NnuudUP6MXyuNnoWT35kasK8eKwkGKB81uLgOVltEXUCH3XomyP8fr1An6S5VXuEl-l07uJuxDDHIhDT91qK-48KHwMMRcw8epHpd9cOJUlOuz3ATa2GtZs0OcBj3EAH0p0FWDqvxhIM7YxvGq5nwtnApClGHcnFEK311tLNmuLt6FcoPMyYonO2ZowsLQmPxfv0QZB~cs80IBWpLyWSspz5KUdDgqtwTabkqW4LB2NzmKifcGB6Tv61BlTLrP5yuS2qzt1oHX9uJnJyHyLuI5CY79-8AiGtag__" alt="Card Icon" class="size-[100px]">
                          </div>
                          <div>
                            <h3 class="text-[20px] text-[#06070F] font-semibold">Le Café Parisien Plate 1</h3>
                            <p class="text-[20px]  text-[#1C1F35]  font-medium">Number of uses: 0</p>
                            <p class="text-[20px] text-[#1C1F35] font-medium">Code: XXXXX</p>
                          </div>
                        </div>
                        <div class="flex sm:flex-col fle items-center flex-row space-x-3   sm:space-y-3">
                          <button class="text-[#A69C9C] hover:text-black">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 ml-3 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2v-5M16 3.5a2.121 2.121 0 113 3L11.5 15H8v-3.5L16 3.5z" />
                            </svg>
                          </button>
                          <button class="text-[#A69C9C] hover:text-black">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4h6v6H4zM4 14h6v6H4zM14 4h6v6h-6zM14 14h6v6h-6zM10 10h4v4h-4z" />
                            </svg>
                          </button>
                          <button class="text-[#A69C9C] hover:text-black">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7H5m5 4v6m4-6v6M9 7v12m6-12v12M10 4h4m-2-2h2a2 2 0 012 2h4a2 2 0 012 2v2H4V6a2 2 0 012-2h4a2 2 0 012-2z" />
                            </svg>
                          </button>
                        </div>
                      </div>

                      <div class="flex w-full flex-wrap items-center justify-between gap-3 rounded-[20px] bg-white px-8 py-4 shadow-[0px_2px_2px_0px_#0000001A]">
                        <div class="flex items-center">
                          <div class=" rounded-lg  mr-4">
                            <img src="https://s3-alpha-sig.figma.com/img/33b4/3e05/9f27076a18afdcda230072b7eee0e88a?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HdHjo7hf7vOP66hrnUY8uZahUK~ZtNO~R90J3ePi3-tv-9axLInLn3sBD0BCWkXO9TNeSsPuVz2prXn2qZq3PdK3AS47x-bWXZZw8zQPehl9iaunSa2qGhcFmAsl71L4V6xB-V-1msRgaPp~Qli7HpcQ3Z-e0QLvEEWnGXiNIDKieINKLdBwzjH1lZJZgdvHpkxjyHpcjc09MguQzR68BN-qqkpYSnYxx6CMqZ6REK24iIoU9cZh6LEPyPa-zEZ0IXzyYMy6gOoNRb857nC2DtZXWoKu6sW3tiked7tMmHvC7lgCTyhIOs7iCGAADCe-XgfjJ3wSVsO5wt5rk4pEhg__" alt="Card Icon" class="size-[100px]">
                          </div>
                          <div>
                            <h3 class="text-[20px] text-[#06070F] font-semibold">Le Café Parisien Table Stickers 1</h3>
                            <p class="text-[20px]  text-[#1C1F35]  font-medium">Number of uses: 0</p>
                            <p class="text-[20px] text-[#1C1F35] font-medium">Code: XXXXX</p>
                          </div>
                        </div>
                        <div class="flex sm:flex-col fle items-center flex-row space-x-3   sm:space-y-3">
                          <button class="text-[#A69C9C] hover:text-black">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 ml-3 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2v-5M16 3.5a2.121 2.121 0 113 3L11.5 15H8v-3.5L16 3.5z" />
                            </svg>
                          </button>
                          <button class="text-[#A69C9C] hover:text-black">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4h6v6H4zM4 14h6v6H4zM14 4h6v6h-6zM14 14h6v6h-6zM10 10h4v4h-4z" />
                            </svg>
                          </button>
                          <button class="text-[#A69C9C] hover:text-black">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7H5m5 4v6m4-6v6M9 7v12m6-12v12M10 4h4m-2-2h2a2 2 0 012 2h4a2 2 0 012 2v2H4V6a2 2 0 012-2h4a2 2 0 012-2z" />
                            </svg>
                          </button>
                        </div>
                      </div>
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
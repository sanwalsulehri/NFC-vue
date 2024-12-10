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
                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.5 0C14.1576 0 15.7473 0.65848 16.9194 1.83058C18.0915 3.00268 18.75 4.5924 18.75 6.25C18.75 7.9076 18.0915 9.49732 16.9194 10.6694C15.7473 11.8415 14.1576 12.5 12.5 12.5C10.8424 12.5 9.25268 11.8415 8.08058 10.6694C6.90848 9.49732 6.25 7.9076 6.25 6.25C6.25 4.5924 6.90848 3.00268 8.08058 1.83058C9.25268 0.65848 10.8424 0 12.5 0ZM12.5 15.625C19.4062 15.625 25 18.4219 25 21.875V25H0V21.875C0 18.4219 5.59375 15.625 12.5 15.625Z" fill="#0B2D6E"></path>
                  </svg>
                 <div class="">
                    Account Settings
                    <p class="font-medium text-sm text-[#ACA3A3]">Having trouble? Contact support through the live chat.</p>
                 </div>
            </div>
          </div>
          <div class="py-20 px-4 sm:px-6 lg:px-14">
            <div
              class="max-w-[598px] shadow-[0px_2px_2px_0px_#0000001A] rounded-[30px] w-full mx-auto flex flex-col gap-5 bg-white"
            >
            <div class="">
                <div class="flex  items-center justify-center ">
              
              <div class="w-full  rounded-[15px] bg-white p-4 pt-3 shadow-lg">
                
                <h2 class="text-xl font-semibold text-gray-800">Account details</h2>
                <p class="mb-6 text-sm text-gray-500">Update your Account information.</p>
          
               
                <form action="#" method="POST" class="space-y-4  mt-10">
                  
                  <div class="grid sm:grid-cols-2 gap-2 sm:gap-5">
                    <div>
                      <label for="first-name" class="block text-sm font-medium text-gray-700">First Name</label>
                      <input type="text" id="first-name" name="first-name" placeholder="John" class="mt-1 block py-1 px-3 w-full rounded-[5px] border border-gray-300 text-sm shadow-sm focus:border-blue-500 focus:ring-blue-500" />
                    </div>
                    <div>
                      <label for="last-name" class="block text-sm font-medium text-gray-700">Last Name</label>
                      <input type="text" id="last-name" name="last-name" placeholder="Doe" class="mt-1 block w-full rounded-[5px] py-1 px-3  border border-gray-300 text-sm shadow-sm focus:border-blue-500 focus:ring-blue-500" />
                    </div>
                  </div>
          
                  
                  <div class="grid sm:grid-cols-2   gap-2 sm:gap-5">
                    <div>
                      <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
                      <input type="email" id="email" name="email" placeholder="johndoe@gmail.com" class="mt-1 block w-full py-1 px-3 rounded-[5px] placeholder:underline underline-offset-2  border border-gray-300 text-sm shadow-sm focus:border-blue-500 focus:ring-blue-500" />
                    </div>
                    <div>
                      <label for="phone-number" class="block text-sm font-medium text-gray-700">Phone Number</label>
                      <input type="text" id="phone-number" name="phone-number" placeholder="+1(888) 888 - 888" class="mt-1 py-1 px-3 block w-full rounded-[5px]  border border-gray-300 text-sm shadow-sm focus:border-blue-500 focus:ring-blue-500" />
                    </div>
                  </div>
          
                  
                  <div>
                    <a href="#" class="text-sm text-[#006FBA] underline">Reset Password</a>
                  </div>
          
                  
                  <div class="flex justify-center sm:justify-end">
                    <button type="submit" class="rounded-[10px] bg-[#4683FF] px-10 py-1 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">Save</button>
                  </div>
                </form>
              </div>
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
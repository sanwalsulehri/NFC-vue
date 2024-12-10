<template lang="">
    <div class="min-h-screen overflow-auto relative overflow-hidden flex items-center justify-center bg-[#2421C3] w-full">
       <div>
        <div class="absolute left-0 blur-[39px] mix-blend-hard-light -translate-y-1/3	 z-[4] top-0">
            <img src="../assets/leftTop.png" alt="" class="">
        </div>
        <div class="absolute z-[99] 	 left-1/2 h-full w-full blur-[502.28px] top-1/2 -translate-x-1/2 -translate-y-1/2">
            <img src="../assets/centerCircle.png" class="rounded-full h-full w-full" alt="">
        </div>
        <div class="absolute right-0  mix-blend-hard-light	 z-[4] top-0 ">
            <img src="../assets/topRight.png" alt="" class="">
        </div>
        <div class="absolute right-0 blur-[39px] mix-blend-hard-light	 z-[4] bottom-0 ">
            <img src="../assets/topBottom.png" alt="" class="">
        </div>
       </div>
       <form class="pt-12 pb-28 my-16 px-9 rounded-[20px] w-full max-w-[596px] bg-[#F8F8F8] relative z-[999]">
        <h1 class="uppercase text-[#8F8F8F] font-medium text-[64px] text-center">Logo</h1>
        <h3 class="text-[20px] font-medium text-[#8F8F8F] text-center mt-2">Welcome back!</h3>
        <div class="mt-16 flex flex-col gap-3">
           
            <div class="">
                <label for="Email" class="font-[300] block">Email</label>
                <input type="text" placeholder="johndoe@gmail.com" class="bg-transparent placeholder:text-[#B1A9A9] outline-none w-full mt-1 px-3 py-1 border-[0.5px] border-[#9E9E9E] rounded-[5px]" id="Email">
            </div>
            <div class="">
                <label for="Password" class="font-[300] block">Password</label>
                <div class="relative">
                    <input type="text" placeholder="..........." class="bg-transparent cursor-pointer placeholder:text-[#B1A9A9] outline-none w-full mt-1 px-3 py-1 border-[0.5px] border-[#9E9E9E] rounded-[5px]" id="Password">
                    <div class="absolute top-1/2 -translate-y-1/4 right-3">
                        <svg width="19" height="13" viewBox="0 0 19 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.16667 3.75C8.50363 3.75 7.86774 4.01339 7.3989 4.48223C6.93006 4.95107 6.66667 5.58696 6.66667 6.25C6.66667 6.91304 6.93006 7.54893 7.3989 8.01777C7.86774 8.48661 8.50363 8.75 9.16667 8.75C9.82971 8.75 10.4656 8.48661 10.9344 8.01777C11.4033 7.54893 11.6667 6.91304 11.6667 6.25C11.6667 5.58696 11.4033 4.95107 10.9344 4.48223C10.4656 4.01339 9.82971 3.75 9.16667 3.75ZM9.16667 10.4167C8.0616 10.4167 7.00179 9.97768 6.22039 9.19628C5.43899 8.41488 5 7.35507 5 6.25C5 5.14493 5.43899 4.08512 6.22039 3.30372C7.00179 2.52232 8.0616 2.08333 9.16667 2.08333C10.2717 2.08333 11.3315 2.52232 12.1129 3.30372C12.8943 4.08512 13.3333 5.14493 13.3333 6.25C13.3333 7.35507 12.8943 8.41488 12.1129 9.19628C11.3315 9.97768 10.2717 10.4167 9.16667 10.4167ZM9.16667 0C5 0 1.44167 2.59167 0 6.25C1.44167 9.90833 5 12.5 9.16667 12.5C13.3333 12.5 16.8917 9.90833 18.3333 6.25C16.8917 2.59167 13.3333 0 9.16667 0Z" fill="#7A7A7A"/>
                            </svg>
                            
                    </div>
                </div>
            </div>
            <div class="flex items-center justify-between gap-2 flex-wrap">
        <a href="#" class="text-[#006FBA] border-b border-[#006FBA] font-[400] ">Reset your password?</a>

        </div>
        </div>
        <button class="bg-gradient-to-t from-[#0097FE] to-[#14358A] mt-5 pb-1 flex items-center justify-center h-[35px] px-3 text-white rounded-[5px] w-full font-medium text-[20px]">Login</button>
        <h3 class="text-[#6A6868] text-[20px] my-3 font-[400] text-center">OR</h3>
        <button class="border-[0.5px] border-[#9E9E9E] gap-3 flex items-center mb-4 justify-center h-[35px] px-3  rounded-[5px] w-full font-medium text-[20px]">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_291_2312)">
                <path d="M5.57374 0.52637C3.97509 1.08096 2.59642 2.13358 1.64023 3.52962C0.684041 4.92567 0.200732 6.59155 0.261296 8.28258C0.32186 9.9736 0.923104 11.6006 1.97671 12.9247C3.03032 14.2488 4.48077 15.2001 6.11499 15.6389C7.4399 15.9807 8.828 15.9958 10.16 15.6826C11.3666 15.4116 12.4822 14.8318 13.3975 14.0001C14.3501 13.1081 15.0415 11.9732 15.3975 10.7176C15.7844 9.35221 15.8532 7.91629 15.5987 6.52012H8.15874V9.60637H12.4675C12.3814 10.0986 12.1968 10.5684 11.9249 10.9877C11.653 11.4069 11.2993 11.767 10.885 12.0464C10.3588 12.3944 9.76574 12.6286 9.14374 12.7339C8.51992 12.8499 7.88006 12.8499 7.25624 12.7339C6.62398 12.6031 6.02587 12.3422 5.49999 11.9676C4.65518 11.3696 4.02084 10.52 3.68749 9.54012C3.34851 8.54186 3.34851 7.45963 3.68749 6.46137C3.92478 5.76164 4.31703 5.12454 4.83499 4.59762C5.42773 3.98355 6.17816 3.54462 7.00394 3.32896C7.82972 3.11331 8.69894 3.12928 9.51624 3.37512C10.1547 3.57111 10.7386 3.91354 11.2212 4.37512C11.7071 3.89179 12.1921 3.4072 12.6762 2.92137C12.9262 2.66012 13.1987 2.41137 13.445 2.14387C12.7082 1.45822 11.8433 0.924691 10.9 0.57387C9.18212 -0.049893 7.30246 -0.066656 5.57374 0.52637Z" fill="white"/>
                <path d="M5.57372 0.526245C7.3023 -0.067184 9.18196 -0.0508623 10.9 0.572495C11.8435 0.925699 12.708 1.46179 13.4437 2.14999C13.1937 2.41749 12.93 2.66749 12.675 2.92749C12.19 3.41166 11.7054 3.89416 11.2212 4.37499C10.7385 3.91342 10.1547 3.57098 9.51622 3.37499C8.69919 3.1283 7.82999 3.1114 7.00399 3.32617C6.178 3.54094 5.42711 3.97907 4.83372 4.59249C4.31576 5.11941 3.9235 5.75652 3.68622 6.45624L1.09497 4.44999C2.02248 2.6107 3.62841 1.20377 5.57372 0.526245Z" fill="#E33629"/>
                <path d="M0.40756 6.43745C0.546836 5.74719 0.778064 5.07873 1.09506 4.44995L3.68631 6.4612C3.34733 7.45946 3.34733 8.54169 3.68631 9.53995C2.82298 10.2066 1.95923 10.8766 1.09506 11.55C0.301498 9.97035 0.0594757 8.17058 0.40756 6.43745Z" fill="#F8BD00"/>
                <path d="M8.15876 6.5188H15.5988C15.8533 7.91496 15.7844 9.35088 15.3975 10.7163C15.0416 11.9719 14.3501 13.1067 13.3975 13.9988C12.5613 13.3463 11.7213 12.6988 10.885 12.0463C11.2996 11.7666 11.6535 11.4062 11.9254 10.9865C12.1973 10.5668 12.3817 10.0965 12.4675 9.6038H8.15876C8.15751 8.5763 8.15876 7.54755 8.15876 6.5188Z" fill="#587DBD"/>
                <path d="M1.09375 11.55C1.95792 10.8834 2.82167 10.2134 3.685 9.54004C4.01901 10.5203 4.65426 11.3699 5.5 11.9675C6.02751 12.3404 6.62691 12.5992 7.26 12.7275C7.88382 12.8435 8.52368 12.8435 9.1475 12.7275C9.76949 12.6223 10.3626 12.3881 10.8888 12.04C11.725 12.6925 12.565 13.34 13.4012 13.9925C12.4861 14.8247 11.3705 15.4049 10.1637 15.6763C8.83176 15.9894 7.44365 15.9744 6.11875 15.6325C5.07088 15.3528 4.09209 14.8595 3.24375 14.1838C2.34583 13.4709 1.61244 12.5725 1.09375 11.55Z" fill="#319F43"/>
                </g>
                <defs>
                <clipPath id="clip0_291_2312">
                <rect width="16" height="16" fill="white"/>
                </clipPath>
                </defs>
                </svg>
                Login with Google
        </button>
        <div class="flex items-center justify-between gap-2 flex-wrap">
        <a href="#" class="text-[#006FBA] border-b border-[#006FBA] font-[400] ">Forgot your password?</a>
        <router-link to="/signup" class="text-[#006FBA] border-b border-[#006FBA] font-[400] ">Click here to sign up</router-link>

        </div>
       </form>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="">
    
</style>
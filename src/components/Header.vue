<template>
  <header class="bg-gray-800">
      <div class="hidden md:flex justify-between md:px-4 md:py-4">
        <div class="md:py-2">
          <a href="#home" class="md:hover:bg-gray-500 md:px-4 md:py-2 md:rounded-full text-white">HOME</a>
          <a href="#aboutus" class="md:hover:bg-gray-500 md:px-4 md:py-2 md:rounded-full text-white">ABOUT US</a>
          <a href="#contactus" class="md:hover:bg-gray-500 md:px-4 md:py-2 md:rounded-full text-white">CONTACT US</a>
          <a href="#services" class="md:hover:bg-gray-500 md:px-4 md:py-2 md:rounded-full text-white">SERVICES</a>
        </div>
        
        <div>
          <div class="md:px-4 md:py-2 md:border md:rounded-full">
            <a href="#en" class="text-white">EN</a>
            <span class="text-white"> \ </span>
            <a href="#ar" class="text-white">AR</a>
          </div>
        </div>
      </div>
      <!-- focus:text-gray-500 -->
      <div class="md:hidden">
        <button @click="toggle" class="block px-4 py-4 focus:outline-none text-white">
          <svg v-if="!isOpen" class="fill-current h-8 w-8" id="Layer_1" enable-background="new 0 0 512 512" height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg"><path d="m464.883 64.267h-417.766c-25.98 0-47.117 21.136-47.117 47.149 0 25.98 21.137 47.117 47.117 47.117h417.766c25.98 0 47.117-21.137 47.117-47.117 0-26.013-21.137-47.149-47.117-47.149z" /><path d="m464.883 208.867h-417.766c-25.98 0-47.117 21.136-47.117 47.149 0 25.98 21.137 47.117 47.117 47.117h417.766c25.98 0 47.117-21.137 47.117-47.117 0-26.013-21.137-47.149-47.117-47.149z" /><path d="m464.883 353.467h-417.766c-25.98 0-47.117 21.137-47.117 47.149 0 25.98 21.137 47.117 47.117 47.117h417.766c25.98 0 47.117-21.137 47.117-47.117 0-26.012-21.137-47.149-47.117-47.149z" /></svg>
          <svg v-else class="fill-current h-8 w-8" height="365.696pt" viewBox="0 0 365.696 365.696" width="365.696pt" xmlns="http://www.w3.org/2000/svg"><path d="m243.1875 182.859375 113.132812-113.132813c12.5-12.5 12.5-32.765624 0-45.246093l-15.082031-15.082031c-12.503906-12.503907-32.769531-12.503907-45.25 0l-113.128906 113.128906-113.132813-113.152344c-12.5-12.5-32.765624-12.5-45.246093 0l-15.105469 15.082031c-12.5 12.503907-12.5 32.769531 0 45.25l113.152344 113.152344-113.128906 113.128906c-12.503907 12.503907-12.503907 32.769531 0 45.25l15.082031 15.082031c12.5 12.5 32.765625 12.5 45.246093 0l113.132813-113.132812 113.128906 113.132812c12.503907 12.5 32.769531 12.5 45.25 0l15.082031-15.082031c12.5-12.503906 12.5-32.769531 0-45.25zm0 0"/></svg>
        </button>
        <div :class="{'hidden' : !isOpen, 'block' : isOpen}">
          <div class="px-4">
            <a href="#home" class="block py-2 rounded-full text-white hover:text-gray-500">HOME</a>
            <a href="#aboutus" class="block py-2 rounded-full text-white hover:text-gray-500">ABOUT US</a>
            <a href="#contactus" class="block py-2 rounded-full text-white hover:text-gray-500">CONTACT US</a>
            <a href="#services" class="block py-2 rounded-full text-white hover:text-gray-500">SERVICES</a>
          </div>
          <div class="px-4 border-t max-w-full">
            <a href="#en" class="block py-2 text-white hover:text-gray-500">EN</a>
            <a href="#ar" class="block py-2 text-white hover:text-gray-500">AR</a>
          </div>
        </div>
      </div>
    </header>
</template>

<script>
export default {
  name: 'Header',
  props: {},
  data(){
      return{
        isOpen: false,
      }
    },
    methods:{
      toggle(){
        this.isOpen = !this.isOpen
      }
    }
}
</script>
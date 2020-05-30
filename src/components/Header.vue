<template>
  <header class="bg-gray-800 md:px-4 md:py-4">
    <nav class="hidden md:flex justify-between">
      <div class="md:flex">
        <a href="#home" class="md:hover:bg-gray-500 md:px-4 md:py-2 md:rounded-full text-white">HOME</a>
        <a href="#aboutus" class="md:hover:bg-gray-500 md:px-4 md:py-2 md:rounded-full text-white">ABOUT US</a>
        <a href="#contactus" class="md:hover:bg-gray-500 md:px-4 md:py-2 md:rounded-full text-white">CONTACT US</a>
        <div @mouseover="isHovering = true" @mouseout="isHovering = false" class="md:relative md:block md:py-2">
          <button>
            <a href="#services" :class="{'' : !isHovering, 'md:bg-gray-500' : isHovering}"
              class="md:pl-4 md:pr-16 md:py-3 md:rounded-lg text-white">SERVICES</a>
          </button>
          <div :class="{'hidden' : !isHovering, 'block' : isHovering}"
            class="md:w-9/5 md:absolute md:right-0  md:rounded-b-lg md:text-sm md:bg-gray-500">
            <a href="#" class="md:block px-4 md:py-1 md:mt-4 text-white md:hover:bg-gray-800">
              1-photographers
            </a>
            <a href="#" class="md:block px-4 md:py-1 text-white md:hover:bg-gray-800">2-wedding dress</a>
            <a href="#" class="md:block px-4 md:py-1 text-white md:hover:bg-gray-800">3-wedding cars</a>
            <a href="#" class="md:block px-4 md:py-1 md:mb-4 text-white md:hover:bg-gray-800">4-make up artist</a>
          </div>
        </div>
      </div>

      <div>
        <div class="md:px-4 md:py-2 md:border md:rounded-full">
          <a href="#en" class="text-white">EN</a>
          <span class="text-white"> \ </span>
          <a href="#ar" class="text-white">AR</a>
        </div>
      </div>
    </nav>
    <!-- focus:text-gray-500 -->
    <nav>
      <div class="md:hidden">
        <button @click="toggle" class="block px-4 py-4 focus:outline-none text-white">
          <svg v-if="!isOpen" class="fill-current h-8 w-8" id="Layer_1" enable-background="new 0 0 512 512" height="512"
            viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg">
            <path
              d="m464.883 64.267h-417.766c-25.98 0-47.117 21.136-47.117 47.149 0 25.98 21.137 47.117 47.117 47.117h417.766c25.98 0 47.117-21.137 47.117-47.117 0-26.013-21.137-47.149-47.117-47.149z" />
            <path
              d="m464.883 208.867h-417.766c-25.98 0-47.117 21.136-47.117 47.149 0 25.98 21.137 47.117 47.117 47.117h417.766c25.98 0 47.117-21.137 47.117-47.117 0-26.013-21.137-47.149-47.117-47.149z" />
            <path
              d="m464.883 353.467h-417.766c-25.98 0-47.117 21.137-47.117 47.149 0 25.98 21.137 47.117 47.117 47.117h417.766c25.98 0 47.117-21.137 47.117-47.117 0-26.012-21.137-47.149-47.117-47.149z" />
          </svg>
          <svg v-else class="fill-current h-8 w-8" height="365.696pt" viewBox="0 0 365.696 365.696" width="365.696pt"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="m243.1875 182.859375 113.132812-113.132813c12.5-12.5 12.5-32.765624 0-45.246093l-15.082031-15.082031c-12.503906-12.503907-32.769531-12.503907-45.25 0l-113.128906 113.128906-113.132813-113.152344c-12.5-12.5-32.765624-12.5-45.246093 0l-15.105469 15.082031c-12.5 12.503907-12.5 32.769531 0 45.25l113.152344 113.152344-113.128906 113.128906c-12.503907 12.503907-12.503907 32.769531 0 45.25l15.082031 15.082031c12.5 12.5 32.765625 12.5 45.246093 0l113.132813-113.132812 113.128906 113.132812c12.503907 12.5 32.769531 12.5 45.25 0l15.082031-15.082031c12.5-12.503906 12.5-32.769531 0-45.25zm0 0" />
          </svg>
        </button>
        <div :class="{'hidden' : !isOpen, 'block' : isOpen}">
          <div class="px-4">
            <a href="#home" class="block py-2 rounded-full text-white hover:text-gray-500">HOME</a>
            <a href="#aboutus" class="block py-2 rounded-full text-white hover:text-gray-500">ABOUT US</a>
            <a href="#contactus" class="block py-2 rounded-full text-white hover:text-gray-500">CONTACT US</a>
            <button @click="drop" :class="{'text-white' : !isDropDown, 'text-gray-500' : isDropDown}" class="flex focus:outline-none">
              <a href="#services" :class="{'text-white' : !isDropDown, 'text-gray-500' : isDropDown}" class="block py-2 rounded-full">SERVICES</a>
              <!-- Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
              <svg v-if="!isDropDown" class="fill-current h-4 w-4 mt-3 ml-2" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 491.996 491.996"
                style="enable-background:new 0 0 491.996 491.996;" xml:space="preserve">  
              <path d="M484.132,124.986l-16.116-16.228c-5.072-5.068-11.82-7.86-19.032-7.86c-7.208,0-13.964,2.792-19.036,7.86l-183.84,183.848L62.056,108.554c-5.064-5.068-11.82-7.856-19.028-7.856s-13.968,2.788-19.036,7.856l-16.12,16.128c-10.496,10.488-10.496,27.572,0,38.06l219.136,219.924c5.064,5.064,11.812,8.632,19.084,8.632h0.084c7.212,0,13.96-3.572,19.024-8.632l218.932-219.328c5.072-5.064,7.856-12.016,7.864-19.224C491.996,136.902,489.204,130.046,484.132,124.986z" />
              </svg>
              <svg v-else class="fill-current h-4 w-4 mt-3 ml-2" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 491.996 491.996"
                  style="enable-background:new 0 0 491.996 491.996;" xml:space="preserve">
                <path d="M484.136,328.473L264.988,109.329c-5.064-5.064-11.816-7.844-19.172-7.844c-7.208,0-13.964,2.78-19.02,7.844L7.852,328.265C2.788,333.333,0,340.089,0,347.297c0,7.208,2.784,13.968,7.852,19.032l16.124,16.124c5.064,5.064,11.824,7.86,19.032,7.86s13.964-2.796,19.032-7.86l183.852-183.852l184.056,184.064c5.064,5.06,11.82,7.852,19.032,7.852c7.208,0,13.96-2.792,19.028-7.852l16.128-16.132C494.624,356.041,494.624,338.965,484.136,328.473z"/>
              </svg>
            </button>
            <div :class="{'hidden' : !isDropDown, '' : isDropDown}">
              <a href="#" class="block px-4 pb-2 rounded-full text-white hover:text-gray-500">1-photographers</a>
              <a href="#" class="block px-4 py-2 rounded-full text-white hover:text-gray-500">2-wedding dress</a>
              <a href="#" class="block px-4 py-2 rounded-full text-white hover:text-gray-500">3-wedding cars</a>
              <a href="#" class="block px-4 py-2 rounded-full text-white hover:text-gray-500">4-make up artist</a>
            </div>
          </div>
          <div class="px-4 border-t max-w-full">
            <a href="#en" class="block py-2 text-white hover:text-gray-500">EN</a>
            <a href="#ar" class="block py-2 text-white hover:text-gray-500">AR</a>
          </div>
        </div>
      </div>
    </nav>

  </header>
</template>

<script>
  export default {
    name: 'Header',
    props: {},
    data() {
      return {
        isOpen: false,
        isHovering: false,
        isDropDown: false,
      }
    },
    methods: {
      toggle() {
        this.isOpen = !this.isOpen
      },
      drop() {
        this.isDropDown = !this.isDropDown
      },
    }
  }
</script>
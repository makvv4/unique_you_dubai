<template>
  <header class="absolute inset-x-0 top-0 z-50">
    <nav>
      <div
        class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4"
      >
        <a href="#" class="flex items-center">
          <span
            class="self-center text-2xl font-semibold whitespace-nowrap dark:text-myPrimary"
            >UNIQUE</span
          >
        </a>
        <div
          class="link text-gray-700 cursor-pointer hover:underline hover:text-black-950"
        >
          <a href="/unique_pricing.pdf" target="_blank">Pricing</a>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header',
}
</script>

<style scoped></style>

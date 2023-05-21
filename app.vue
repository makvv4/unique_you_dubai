<template>
  <div class="bg-white">
    <Header />
    <HeroSection />

    <div
      class="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8 isolate"
    >
      <div>
        <h2 class="text-3xl font-bold tracking-tight text-myPrimary sm:text-4xl">
          Welcome to our salon
        </h2>
        <p class="mt-4 text-gray-700">
            Do you have a passion for beauty and a dream of creating a successful business in this area?
            We invite you to become a part of the recognizable brand Unique You Beauty Salon!
            We believe that everyone deserves luxury and quality service, but not everyone can afford it.
            That is why we have created a salon where you can get VIP service at affordable prices.
            We will help you open your own beauty salon based on our successful brand and share with you our knowledge and experience in this field.
            Contact us via our corporate email to learn more about our franchise program
            <a class="text-mySecondary" href="mailto:unique.you.cooperation@gmail.com">unique.you.cooperation@gmail.com</a>
        </p>
      </div>
      <div class="grid grid-cols-2 grid-rows-1 gap-4 sm:gap-6 lg:gap-8">
        <video autoplay loop muted playsinline class="rounded-lg bg-gray-100">
            <source src="~/assets/videos/unique_video1.mp4" type="video/mp4">
        </video>
        <video autoplay loop muted playsinline class="rounded-lg bg-gray-100">
            <source src="~/assets/videos/unique_video2.mp4" type="video/mp4">
        </video>
      </div>
      <div
        class="absolute inset-x-0 -top-100 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-100"
        aria-hidden="true"
      >
        <div
          class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style="
            clip-path: polygon(
              74.1% 44.1%,
              100% 61.6%,
              97.5% 26.9%,
              85.5% 0.1%,
              80.7% 2%,
              72.5% 32.5%,
              60.2% 62.4%,
              52.4% 68.1%,
              47.5% 58.3%,
              45.2% 34.5%,
              27.5% 76.7%,
              0.1% 64.9%,
              17.9% 100%,
              27.6% 76.8%,
              76.1% 97.7%,
              74.1% 44.1%
            );
          "
        />
      </div>
    </div>

    <Footer />
  </div>
</template>

<script setup>
import HeroSection from "~/components/HeroSection.vue";
import Footer from "~/components/Footer.vue";

useHead({
  title: 'UNIQUE',
  meta: [
    {
      name: 'facebook-domain-verification',
      content: 'jl11mty3hxrk99sbnray4d3r9g6kyu',
    },
  ],
})
</script>

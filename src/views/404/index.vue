<template>
  <div class="relative">
    <div
      class="xl:px-32 absolute md:px-12 px-8 pt-6 md:pt-6 xl:pt-12 w-full"
    ></div>
    <div class="h-screen bg-gray-70 flex flex-col justify-center my-auto">
      <div class="w-full px-4 flex flex-col justify-center">
        <div class="mx-auto max-w-md">
          <section class="w-full flex my-auto flex-wrap md:mt-0 mt-12">
            <div class="w-full bg-white shadow-login rounded-3xl">
              <div class="w-full mt-6 flex justify-center"></div>
              <div class="w-full px-4 sm:px-10 pt-6 pb-20">
                <h1
                  class="text-3xl text-center w-full font-medium mb-4 text-text-50"
                >
                  Page not Found
                </h1>

                <h4
                  class="text-gray-10 text-center w-4/5 mb-7 mx-auto font-light"
                >
                  Oops! We can’t seem to find the page you are searching for.
                </h4>

                <p class="text-lg text-gray-10 text-center font-semibold">
                  Error 404
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FourOhFour',
}
</script>

<style scoped></style>

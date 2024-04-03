<template>
  <section class="rounded-md bg-black/70 p-2">
    <div
      class="flex items-center justify-center bg-white px-4 py-10 sm:px-6 sm:py-16 lg:px-8"
    >
      <div class="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
        <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl">
          Sign up
        </h2>
        <p class="mt-2 text-base text-gray-600">
          Already have an account?
          <router-link
            :to="'/login'"
            class="font-medium text-black transition-all duration-200 hover:underline"
            >Log In</router-link
          >
        </p>
        <form
          action="#"
          method="POST"
          class="mt-8"
        >
          <div class="space-y-5">
            <base-input
              :lebal="'Enter Email'"
              :inputPlaceholder="'Email'"
              :type="'email'"
            ></base-input>
            <base-input
              :lebal="'Enter Password'"
              :inputPlaceholder="'Password'"
              :type="'password'"
            ></base-input>
            <base-input
              :lebal="'Confirm Password'"
              :inputPlaceholder="'Confirm Password'"
              :type="'password'"
            ></base-input>
            <base-button :title="'Submit'"></base-button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style></style>

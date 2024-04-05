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
        <auth-form></auth-form>
      </div>
    </div>
  </section>
</template>

<script>
import authForm from "../components/authForm.vue";
export default {
  components: {
    authForm,
  },
};
</script>

<style></style>

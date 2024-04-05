<template>
  <section class="rounded-md bg-black/70 p-2 w-2/4 m-auto">
    <div
      class="flex items-center justify-center bg-white px-4 py-10 sm:px-6 sm:py-16 lg:px-8"
    >
      <div class="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
        <h2 class="text-2xl font-bold leading-tight text-black">
          Sign in to your account
        </h2>
        <p class="mt-2 text-sm text-gray-600">
          Don&#x27;t have an account?
          <router-link
            :to="'/register'"
            class="font-medium text-black transition-all duration-200 hover:underline"
            >Create a free account</router-link
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
  methods: {
    submitForm() {},
  },
  // created() {
  //   console.log(this.$route.path);
  // },
};
</script>

<style></style>

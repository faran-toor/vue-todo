<template>
  <form
    @submit.prevent="submit"
    method="POST"
    class="mt-8"
  >
    <div class="space-y-5">
      <div>
        <label
          for=""
          class="text-base font-medium text-gray-900"
        >
          Enter Email
        </label>
        <div class="mt-2">
          <input
            type="email"
            class="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
            placeholder="Email"
            v-model="formData.email"
            required
          />
        </div>
      </div>
      <div>
        <label
          for=""
          class="text-base font-medium text-gray-900"
        >
          Enter Password
        </label>
        <div class="mt-2">
          <input
            type="password"
            class="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
            placeholder="Password"
            v-model="formData.password"
            required
          />
        </div>
      </div>
      <div v-if="login !== 'Login'">
        <label
          for=""
          class="text-base font-medium text-gray-900"
        >
          Confirm Password
        </label>
        <div class="mt-2">
          <input
            type="password"
            class="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
            placeholder="Confirm Password"
            v-model="formData.password_confirmation"
            required
          />
        </div>
      </div>
      <base-button
        @click="submit"
        :title="login"
      ></base-button>

      <!-- Display validation errors -->
      <div
        v-if="errors.length"
        class="text-red-500"
      >
        <ul>
          <li
            v-for="error in errors"
            :key="error"
          >
            {{ error }}
          </li>
        </ul>
      </div>
    </div>
  </form>
</template>

<script>
import axios from "axios";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";
export default {
  data() {
    return {
      login: "",
      formData: {
        email: "",
        password: "",
        password_confirmation: "",
      },
      errors: [],
    };
  },
  created() {
    const checkPathLogin = this.$route.path;
    if (checkPathLogin === "/login") {
      this.login = "Login";
    } else {
      this.login = "Sign Up";
    }
  },
  methods: {
    submit() {
      this.errors = [];

      if (
        this.login !== "Login" &&
        this.formData.password !== this.formData.password_confirmation
      ) {
        this.errors.push("Password and confirm password do not match");
        return;
      }

      let formDataAppend = new FormData();

      if (this.login === "Login") {
        formDataAppend.append("email", this.formData.email);
        formDataAppend.append("password", this.formData.password);
        axios
          .post("http://3.232.244.22/api/login", formDataAppend)
          .then((response) => {
            localStorage.setItem("token", response.data.user.token);
            toast.success("Logged In success", {
              autoClose: 1000,
            });
            setTimeout(() => {
              this.$router.push("/");
            }, 2000);
          })
          .catch(() => {
            toast.error("Please try again!", {
              autoClose: 1000,
            });
          });
      } else {
        formDataAppend.append("email", this.formData.email);
        formDataAppend.append("password", this.formData.password);
        formDataAppend.append(
          "password_confirmation",
          this.formData.password_confirmation
        );
        axios
          .post("http://3.232.244.22/api/register", formDataAppend, {
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
          })
          .then((response) => {
            toast.success(response.data.message, {
              autoClose: 1000,
            });
            setTimeout(() => {
              this.$router.push("/login");
            }, 2000);
          })
          .catch((error) => {
            toast.error(error.response.data.error[0], {
              autoClose: 1000,
            });
          });
      }
    },
  },
};
</script>

<style></style>

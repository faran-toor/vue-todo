<template>
  <form
    action="#"
    method="POST"
    class="mt-8"
  >
    <div class="space-y-5">
      <base-input
        :lebal="'Title Todo'"
        :inputPlaceholder="'Enter a title'"
        :type="'text'"
      ></base-input>
      <base-input
        :lebal="'Description Todo'"
        :inputPlaceholder="'Enter a Description'"
        :type="'description'"
      ></base-input>
      <base-button :title="'Submit'"></base-button>
    </div>
  </form>
</template>

<script>
export default {};
</script>

<style></style>

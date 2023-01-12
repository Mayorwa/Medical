<template>
  <div>
    <input
      class="field__checkbox"
      type="checkbox"
      :id="id"
      name="lesson"
      autocomplete="off"
      v-bind="$attrs"
      v-model="isChecked"
      required
    />
    <label :for="id"><span></span></label>
  </div>
</template>
<script>
export default {
  name: 'CheckboxInput',
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      isChecked: false,
    }
  },
}
</script>

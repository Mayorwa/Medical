<template>
  <input
    class="field__input"
    :type="type"
    v-bind="$attrs"
    v-model="value"
    :placeholder="placeholder"
    :readonly="readonly"
  />
</template>
<script>
export default {
  name: 'TextInput',
  props: {
    type: {
      type: String,
      default: 'text',
      validator: value =>
        ['text', 'email', 'password', 'url', 'number', 'date'].includes(value),
    },
    /**
     * input placeholder
     */
    placeholder: String,
    /**
     * ClassNames for input
     */
    inputClasses: {
      type: String,
      default: '',
    },
    readonly: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      value: '',
    }
  },
}
</script>

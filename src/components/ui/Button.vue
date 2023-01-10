<template>
  <button
    :name="name"
    class="button"
    :class="[classes]"
    :aria-label="ariaLabel"
    :aria-labelledby="ariaLabelledBy"
    :disabled="disabled || loading || inactive"
  >
    <span class="w-full flex justify-center" v-if="loading">
      <half-circle-spinner
        :animation-duration="1000"
        :size="loaderSize"
        :color="loaderColor"
      />
    </span>

    <slot v-else></slot>
  </button>
</template>

<script>
import { HalfCircleSpinner } from 'epic-spinners'
export default {
  name: 'ButtonUi',
  props: {
    variant: {
      type: String,
      default: 'primary',
      validator: value =>
        [
          'primary',
          'danger',
          'cyan',
          'gray',
          'light-transparent',
          'secondary',
          'success',
          'transparent',
          'inline',
          'outline',
          'outline-light',
          'outline-primary',
          'outline-danger',
          'outline-grey',
        ].includes(value),
    },
    size: {
      type: String,
      default: 'md',
      validator: value => ['sm', 'md', 'lg'].includes(value),
    },
    ariaLabel: {
      type: String,
      default: '',
    },
    ariaLabelledBy: {
      type: String,
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    inactive: {
      type: Boolean,
      default: false,
    },
    withIcon: {
      type: Boolean,
      default: false,
    },
    btnClass: {
      type: String,
      default: '',
    },
    loading: {
      type: Boolean,
      default: false,
    },
    /**
     * button Name
     */
    name: String,
  },
  components: { HalfCircleSpinner },
  computed: {
    classes() {
      // const style = this.handleSize()
      const size = this.size ? `btn-${this.size}` : ''
      const variant = this.variant ? `button--${this.variant}` : ''
      const inactive = this.inactive ? 'btn-inactive' : ''
      const disabled = this.disabled ? 'btn-disabled' : ''
      const loading = this.loading ? 'btn-loading' : ''

      return `${size} ${variant} ${inactive} ${disabled} ${loading} ${this.btnClass}`
    },
    loaderSize() {
      switch (this.size) {
        case 'default':
          return 15
        case 'large':
          return 20
        case 'small':
          return 15
        case 'medium':
          return 15
        case 'xsmall':
          return 12
        default:
          return 15
      }
    },
    loaderColor() {
      switch (this.variant) {
        case 'primary':
          return '#ffffff'
        default:
          return 'var(--text-20)'
      }
    },
  },
}
</script>

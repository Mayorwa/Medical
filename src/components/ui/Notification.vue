<template>
  <transition name="slide-fade">
    <div v-if="show" class="notification md:w-96 w-full md:mt-24 md:mr-12 px-4">
      <feedback
        :showIcon="showIcon"
        v-on:close-feedback="$emit('close-notification')"
        :type="type"
      >
        <p class="text-xs text-left w-full px-4 my-auto normal-case">
          {{ message }}
        </p>
      </feedback>
    </div>
  </transition>
</template>

<script>
import Feedback from './Feedback'
export default {
  name: 'NotificationPopup',
  components: {
    Feedback,
  },
  props: {
    type: {
      type: String,
      default: 'success',
      validator: value => ['success', 'info', 'error'].indexOf(value) !== -1,
    },
    showIcon: {
      type: Boolean,
      default: false,
    },
    cancelButton: {
      type: Boolean,
      default: true,
    },
    show: {
      type: Boolean,
      default: false,
    },
    message: {
      type: String,
    },
  },
}
</script>
<style lang="scss" scoped>
.notification {
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1000000;
}
.slide-fade-enter-active {
  transition: all 0.3s ease;
  transition-delay: 0;
}
.slide-fade-leave-active {
  transition: all 0.4s ease;
  transition-delay: 0.1s;
}
.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateX(30px);
  opacity: 0;
}
</style>

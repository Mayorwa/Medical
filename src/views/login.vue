<template>
  <div class="login">
    <div class="login__row">
      <div class="login__col login-side">
        <img
          src="@/assets/img/ava-header.png"
          class="login-side__logo"
          alt=""
        />
      </div>
      <div class="login__col login__signin-img"></div>
      <div class="login__col login-form">
        <div class="login__form-div">
          <div class="login__form">
            <a class="login__logo"
              ><img src="@/assets/img/ava-header.png" alt=""
            /></a>
            <div class="login__stage h5">Sign in to your account</div>
            <p class="login__form-desc">input your details</p>
            <div class="login__field">
              <div class="field__label">email address</div>
              <div class="field__wrap">
                <input
                  class="field__input"
                  type="email"
                  v-model="email"
                  placeholder="e.g dave@gmail.com"
                />
              </div>
            </div>
            <div class="login__field">
              <div class="field__label">password</div>
              <div class="field__wrap">
                <input
                  class="field__input"
                  type="password"
                  v-model="password"
                  placeholder="e.g **********"
                />
              </div>
            </div>
            <div class="login__links text-right"></div>
            <Button
              :loading="loading"
              :inactive="!allFilled"
              :variant="'primary'"
              :size="'md'"
              type="submit"
              btnClass="w-full"
              name="requestDemo"
              @click="handleLogin"
            >
              <span class="my-2">Sign in</span></Button
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Button from '@/components/ui/Button'
export default {
  name: 'Login',
  components: { Button },
  data() {
    return {
      loading: false,
      error: '',
      email: '',
      password: '',
    }
  },
  methods: {
    handleErrors(value) {
      if (value) {
        const { data } = value.response
        const { errors, message, error_code } = data
        if (error_code === 'not_verified') {
          this.emailIsUnverified = true
        }
        if (!errors) {
          this.error = message
        } else {
          const newErrors = Object.values(errors)
          this.error = newErrors[0].message
        }
      }
    },
    handleLogin() {
      this.loading = true
      this.error = ''
      this.$store
        .dispatch('handleLogin', {
          userName: this.email,
          password: this.password,
        })
        .then(() => {
          this.loading = false
          this.$router.push('/overview')
        })
        .catch(error => {
          this.handleErrors(error)
          this.loading = false
        })
    },
    removeError() {
      this.error = ''
    },
  },
  computed: {
    validate() {
      return (
        this.email.length &&
        this.email.match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
      )
    },
    allFilled() {
      return this.password !== '' && this.validate
    },
  },
}
</script>
<style lang="scss">
::-webkit-scrollbar {
  width: 8px;
  background-color: #f5f5f5;
}
::-webkit-scrollbar-track {
  background-color: #f5f5f5;
}
::-webkit-scrollbar-thumb {
  background-color: rgba(128, 129, 145, 0.3);
}
</style>

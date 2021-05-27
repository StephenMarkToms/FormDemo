<template>
  <div>
    <div
      ref="formWrapper"
      class="
        max-w-2xl
        bg-primary-50
        shadow-lg
        rounded-full rounded-lg
        border border-primary-50
        px-4
        pt-2
        pb-2
        text-white
        cursor-pointer
        transition-colors
        duration-500
      "
      @click="openForm()"
    >
      <div ref="buttonLabel" class="w-full text-center px-5">CONTACT US</div>
      <div ref="form" class="hidden flex h-full p-5">
        <div ref="formContents">
          <FormulateForm
            class="
              grid
              md:grid-cols-2
              gap-4
              max-w-3xl
              text-black
              mx-auto
              my-auto
            "
            @submit="submitForm"
          >
            <div class="w-full md:col-span-2">
              <div class="font-bold text-2xl">Sign up for email updates</div>
              <div>*Indicates Required Field</div>
            </div>
            <FormulateInput
              v-model="formData.firstName"
              type="text"
              label="FIRST NAME*"
              required
            />
            <FormulateInput
              v-model="formData.lastName"
              type="text"
              label="LAST NAME*"
              required
            />
            <FormulateInput
              v-model="formData.email"
              type="email"
              label="EMAIL ADDRESS*"
              required
            />
            <FormulateInput
              v-model="formData.organization"
              type="text"
              label="ORGANIZATION"
            />
            <FormulateInput
              v-model="formData.residentStatus"
              class="md:col-span-2"
              type="select"
              label="EU RESIDENT*"
              placeholder="SELECT ONE"
              :options="[
                { label: 'Yes', value: 'Yes' },
                { label: 'No', value: 'No' },
              ]"
              required
            />
            <FormulateInput
              v-model="formData.advances"
              type="checkbox"
              label="ADVANCES"
            />
            <FormulateInput
              v-model="formData.alerts"
              type="checkbox"
              label="ALERTS"
            />
            <FormulateInput
              v-model="formData.checkbox"
              type="checkbox"
              label="OTHER COMMUNICATIONS"
            />
            <div class="md:col-span-2 space-x-4 flex">
              <FormulateInput
                input-class="bg-primary-50 shadow-lg rounded-full border border-primary-50 px-4 pt-2 pb-2 text-white w-40 text-center focus:outline-none"
                type="submit"
                label="SUBMIT"
              />
              <FormulateInput
                input-class="bg-white shadow-lg rounded-full border px-4 pt-2 pb-2 w-40 text-center focus:outline-none"
                type="button"
                label="RESET"
                @click="formData = {}"
              />
            </div>
          </FormulateForm>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // object to house all form data
      formData: {},
      formState: 'closed',
    }
  },
  methods: {
    submitForm() {
      this.$refs.formWrapper.classList.toggle('bg-primary-50')
      this.$refs.formWrapper.classList.toggle('bg-gray-200')
      this.$gsap.to(this.$refs.formContents, {
        opacity: 0,
        duration: 0.5,
        ease: 'power3.inOut',
        onComplete: () => {
          this.$gsap.to(this.$refs.formContents, {
            duration: 0.5,
            opacity: 0,
            width: 0,
            height: 0,
            ease: 'power3.inOut',
            transformOrigin: 'right',
            onComplete: () => {
              this.$refs.form.classList.toggle('hidden')
              this.$refs.buttonLabel.innerHTML = 'Thank you!'
              this.$refs.formWrapper.classList.toggle('rounded-full')
              this.$gsap.to(this.$refs.buttonLabel, {
                opacity: 1,
                duration: 0.25,
              })
            },
          })
        },
      })
    },
    openForm() {
      switch (this.formState) {
        case 'closed':
          this.$refs.formWrapper.classList.toggle('rounded-full')
          this.$refs.formWrapper.classList.toggle('bg-primary-50')
          this.$refs.formWrapper.classList.toggle('bg-gray-200')
          this.$refs.form.classList.toggle('hidden')

          this.$gsap.set([this.$refs.formContents, this.$refs.buttonLabel], {
            opacity: 0,
          })

          this.$gsap.from(this.$refs.form, {
            duration: 0.5,
            opacity: 0,
            width: 0,
            height: 0,
            ease: 'power3.inOut',
            transformOrigin: 'right',
            onComplete: () => {
              this.$gsap.to(this.$refs.formContents, {
                opacity: 1,
                duration: 0.5,
                ease: 'power3.inOut',
              })
            },
            clearProps: 'all',
          })

          this.formState = 'open'
      }
    },
  },
}
</script>

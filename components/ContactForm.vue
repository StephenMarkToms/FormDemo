<template>
  <FormulateForm
    class="grid md:grid-cols-2 gap-4 max-w-3xl"
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
      disabled
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
    <FormulateInput v-model="formData.alerts" type="checkbox" label="ALERTS" />
    <FormulateInput
      v-model="formData.checkbox"
      type="checkbox"
      label="OTHER COMMUNICATIONS"
    />
    <div class="md:col-span-2 space-x-4 flex">
      <FormulateInput
        input-class="bg-primary-50 shadow-lg rounded-full border border-primary-50 px-4 pt-2 pb-2 text-white w-40 text-center"
        type="submit"
        label="SUBMIT"
      />
      <FormulateInput
        input-class="bg-white shadow-lg rounded-full border px-4 pt-2 pb-2 w-40 text-center"
        type="button"
        label="RESET"
      />
    </div>
  </FormulateForm>
</template>
<script>
export default {
  data() {
    return {
      // object to house all form data
      formData: {},
    }
  },
  methods: {
    submitForm() {
      console.log('sup')
    },
  },
}
</script>

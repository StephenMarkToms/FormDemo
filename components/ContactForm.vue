<template>
  <FormulateForm class="grid grid-cols-2 gap-4 max-w-2xl" @submit="submitForm">
    <div class="w-full col-span-2">
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
      required
    />
    <FormulateInput
      v-model="formData.residentStatus"
      class="col-span-2"
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

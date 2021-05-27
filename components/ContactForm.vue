<template>
  <div>
    <FormulateInput type="text" label="FIRST NAME*" required />
    <FormulateInput type="text" label="LAST NAME*" required />
    <FormulateInput type="email" label="EMAIL ADDRESS*" required />
    <FormulateInput type="text" label="ORGANIZATION" required />
    <FormulateInput
      type="select"
      label="EU RESIDENT*"
      placeholder="SELECT ONE"
      :options="[
        { label: 'Yes', value: 'Yes' },
        { label: 'No', value: 'No' },
      ]"
      required
    />
    <FormulateInput type="checkbox" label="ADVANCES" />
    <FormulateInput type="checkbox" label="ALERTS" />
    <FormulateInput type="checkbox" label="OTHER COMMUNICATIONS" />
  </div>
</template>

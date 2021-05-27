<template>
  <div class="grid grid-cols-2 gap-4 max-w-2xl">
    <div class="w-full col-span-2">
      <div class="font-bold text-2xl">Sign up for email updates</div>
      <div>*Indicates Required Field</div>
    </div>
    <FormulateInput type="text" label="FIRST NAME*" required />
    <FormulateInput type="text" label="LAST NAME*" required />
    <FormulateInput type="email" label="EMAIL ADDRESS*" required />
    <FormulateInput type="text" label="ORGANIZATION" required />
    <FormulateInput
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
    <FormulateInput type="checkbox" label="ADVANCES" />
    <FormulateInput type="checkbox" label="ALERTS" />
    <FormulateInput type="checkbox" label="OTHER COMMUNICATIONS" />
  </div>
</template>

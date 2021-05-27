import Vue from 'vue'
import VueFormulate from '@braid/vue-formulate'

export default function ({ $axios }) {
  Vue.use(VueFormulate, {
    classes: {
      help(context) {
        switch (context.classification) {
          default:
            return 'text-danger-500 text-sm mt-1'
        }
      },
      outer(context) {
        switch (context.classification) {
          case 'box':
            return ''
          default:
            return ''
        }
      },
      element(context) {
        switch (context.classification) {
          case 'box':
            return 'inline'
          default:
            return ''
        }
      },
      wrapper(context) {
        switch (context.classification) {
          case 'box':
            return 'flex space-x-4 items-end'
          default:
            return ''
        }
      },
      label(context) {
        switch (context.classification) {
          default:
            return 'text-sm text-gray-900 font-medium'
        }
      },
      input(context) {
        switch (context.attrs) {
          case 'disabled':
            return 'border-2 border-red-50 shadow'
        }
        switch (context.classification) {
          case 'textarea':
            return ''
          case 'box':
            return 'border-2 border-success-50 shadow form-checkbox text-primary-50 h-6 w-6 focus:outline-none focus:ring-2 focus:ring-primary-50'
          case 'text':
            return 'border-2 border-success-50 shadow w-full focus:outline-none focus:ring-2 focus:ring-success-50 focus:border-success-50'
          case 'select':
            return 'border-2 border-success-50 shadow w-full focus:outline-none focus:ring-2 focus:ring-success-50 focus:border-success-50'
          case 'button':
            return 'shadow-lg rounded-full border px-4 pt-2 pb-2 focus:outline-none outline-none border-transparent focus:outline-none'
          default:
            return ''
        }
      },
      button: '',
      errors: '',
      error: 'mt-2 text-sm text-red-600',
    },
  })
}

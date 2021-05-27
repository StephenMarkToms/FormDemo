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
            return 'flex'
          default:
            return ''
        }
      },
      label(context) {
        switch (context.classification) {
          case 'box':
            return ''
          default:
            return ''
        }
      },
      input(context) {
        switch (context.classification) {
          case 'button':
            return ''
          case 'textarea':
            return ''
          case 'box':
            return 'border-2 border-success-50 shadow'
          case 'text':
            return 'border-2 border-success-50 shadow'
          case 'select':
            return 'border-2 border-success-50 shadow'
          default:
            return ''
        }
      },
      button: 'bg-red-500',
      errors: '',
      error: 'mt-2 text-sm text-red-600',
      grouping: 'mb-2',
      groupRepeatable: 'relative',
      groupRepeatableRemove:
        'absolute border-danger-500 duration-150 ease-in-out flex font-black font-medium justify-center mr-1 mt-7 my-auto px-3 py-0.5 right-0 rounded-full text-danger-500 text-sm text-white top-0 transition',
    },
  })
}

import Input from './Input.vue'
import { mount } from '@vue/test-utils'

describe('password', () => {
  it('show password input', () => {
    const wrapper = mount({
      data: () => {
        return {
          value: 'test'
        }
      },
      components: { Input },
      template: `<Input v-model="value" type="password" />`
    })

    // expect(wrapper.find('.el-input__inner').attributes('type')).toEqual('text')
  })
})

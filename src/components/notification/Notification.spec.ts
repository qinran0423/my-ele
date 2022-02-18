import { mount } from '@vue/test-utils'
import Notification from './Notification.vue'


describe('Notification', () => {
  it('渲染标题title', () => {
    const title = 'this is a title'
    const wrapper = mount(Notification, {
      props: {
        title
      }
    })

    expect(wrapper.get('.el-notification__title').text()).toContain(title)
  })

  it('信息message渲染', () => {
    const message = 'this is a message'
    const wrapper = mount(Notification, {
      props: {
        message
      }
    })

    expect(wrapper.get('.el-notification__message').text()).toContain(message)
  })
})
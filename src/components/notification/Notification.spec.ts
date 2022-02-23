import { mount, shallowMount } from '@vue/test-utils'
import Notification from './Notification.vue'


describe('Notification', () => {


  it('有类名为.el-notification的div', () => {
    const wrapper = mount(Notification)
    expect(wrapper.classes()).toContain('el-notification')
  })

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
  it('showClose - 控制显示按钮', async () => {
    const wrapper = mount(Notification)
    expect(wrapper.find('.el-notifiaction__closeBtn').exists()).toBe(true)

    await wrapper.setProps({
      showClose: false
    })
    console.log(wrapper.props());

    expect(wrapper.find('.el-notifiaction__closeBtn').exists()).toBe(false)
  })
})
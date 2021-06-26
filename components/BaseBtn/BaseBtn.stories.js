import BaseBtn from './BaseBtn.vue';

export default {
  title: 'Atoms/BaseBtn',
  component: BaseBtn,
  argTypes: {
    btnClick: { action: 'clicked' },
    size: {
      control: {
        type: 'inline-radio',
        options: ['sm', 'md', 'lg']
      }
    },
    btnType: {
      control: {
        type: 'inline-radio',
        options: ['fill', 'outlined']
      }
    }
  }
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { BaseBtn },
  template: '<base-btn v-bind="$props" @btn-click="btnClick">Button</base-btn>'
});

export const Default = Template.bind({});
Default.args = { size: 'sm', btnType: 'outlined' };

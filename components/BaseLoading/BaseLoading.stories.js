import BaseLoading from './BaseLoading.vue';

export default {
  title: 'Atoms/BaseLoading',
  component: BaseLoading,
  parameters: {
    backgrounds: {
      default: 'light'
    }
  },
  argTypes: {
    loadType: {
      control: {
        type: 'inline-radio',
        options: ['round', 'bar', 'spinner', 'plate']
      }
    }
  }
};

const Template = (args, { argTypes }) => ({
  components: { BaseLoading },
  props: Object.keys(argTypes),
  template: '<base-loading v-bind="$props" />'
});

export const Default = Template.bind({});
Default.args = {
  loadType: 'round'
};

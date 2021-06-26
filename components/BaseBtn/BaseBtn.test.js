import { mount } from '@vue/test-utils';
import BaseBtn from './BaseBtn.vue';

describe('BaseBtn', () => {
  const dummyButtonText = 'ダミーボタンテキスト';
  const baseBtn = propsData =>
    mount(BaseBtn, {
      props: {
        ...propsData
      },
      slots: {
        default: dummyButtonText
      }
    });

  it('slotがDOMに反映されているか', () => {
    const btnTag = baseBtn();
    expect(btnTag.text()).toBe(dummyButtonText);
    // スナップショット
    expect(btnTag.find('button').html()).toMatchSnapshot();
  });

  it('buttonサイズ:sm', () => {
    const btnTag = baseBtn({ size: 'sm' });
    // スナップショット
    expect(btnTag.html()).toMatchSnapshot();
  });

  it('sbuttonサイズ:lg', () => {
    const btnTag = baseBtn({ size: 'lg' });
    // スナップショット
    expect(btnTag.html()).toMatchSnapshot();
  });

  it('btnClickを実行した時、`btn-click`のイベントが発生するか', () => {
    const btnTag = baseBtn({ size: 'lg' });
    btnTag.vm.btnClick();
    expect(btnTag.emitted('btn-click')).toBeTruthy();
  });
});

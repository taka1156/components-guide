<template>
  <div>
    <button
      type="button"
      class="base-btn--extend"
      :class="`base-btn--${size} base-btn--${btnType}`"
      @click="btnClick"
    >
      <!-- @slot ボタンラベル -->
      <slot />
    </button>
  </div>
</template>

<script>
export default {
  name: 'BaseBtn',
  props: {
    size: {
      type: String,
      default: 'md',
      validator: value => {
        return ['sm', 'md', 'lg'].indexOf(value) !== -1;
      }
    },
    btnType: {
      type: String,
      default: 'fill',
      validator: value => {
        return ['fill', 'outlined'].indexOf(value) !== -1;
      }
    }
  },
  methods: {
    btnClick() {
      /**
       * ボタンクリックイベント
       * @event btnClick
       * @type {event}
       */
      this.$emit('btn-click');
    }
  }
};
</script>

<style scoped>
/* css reset */
button {
  padding: 10px;
  margin: 0;
  line-height: 50%;
  cursor: pointer;
  border-radius: 5px;
}

/* css reset */

.base-btn--fill {
  color: white;
  background-color: green;
  border: none;
}

.base-btn--fill:hover {
  opacity: 0.85;
}

.base-btn--outlined {
  color: green;
  background-color: white;
  border: 1px solid green;
}

.base-btn--outlined:hover {
  color: white;
  background-color: green;
  border: none;
}

.base-btn--sm {
  width: 100px;
  height: 30px;
  font-size: 15px;
}

.base-btn--md {
  width: 150px;
  height: 40px;
  font-size: 20px;
}

.base-btn--lg {
  width: 200px;
  height: 50px;
  font-size: 25px;
}
</style>

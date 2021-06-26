<template>
  <div class="base-loadging" :class="`base-loading--${loadType}`" />
</template>

<script>
export default {
  name: 'BaseText',
  props: {
    loadType: {
      type: String,
      default: 'round',
      validator: value => {
        return ['round', 'bar', 'spinner', 'plate'].indexOf(value) !== -1;
      }
    }
  }
};
</script>

<style scoped>
.base-loadging {
  margin: 0 auto;
}

.base-loading--round {
  width: 50px;
  height: 50px;
  background-color: gray;
  border-radius: 100%;
  animation: round-expand 2s infinite;
}

@keyframes round-expand {
  from {
    transform: scale(0);
  }

  to {
    opacity: 0;
    transform: scale(1);
  }
}

.base-loading--bar,
.base-loading--bar::before,
.base-loading--bar::after {
  width: 1em;
  height: 4em;
  background: gray;
  animation: load-bar 1s infinite ease-in-out;
}

.base-loading--bar {
  position: relative;
  margin: 88px auto;
  font-size: 11px;
  color: gray;
  text-indent: -9999em;
  transform: translateZ(0);
  animation-delay: -0.16s;
}

.base-loading--bar::before,
.base-loading--bar::after {
  position: absolute;
  top: 0;
  content: '';
}

.base-loading--bar::before {
  left: -1.5em;
  -webkit-animation-delay: -0.32s;
  animation-delay: -0.32s;
}

.base-loading--bar::after {
  left: 1.5em;
}

@keyframes load-bar {
  0%,
  80%,
  100% {
    height: 4em;
    box-shadow: 0 0;
  }

  40% {
    height: 5em;
    box-shadow: 0 -2em;
  }
}

.base-loading--spinner {
  width: 50px;
  height: 50px;
  border: 0.25em solid #ccc;
  border-top-color: #333;
  border-radius: 50%;
  animation: spinner 2s infinite linear;
}

@keyframes spinner {
  to {
    transform: rotate(360deg);
  }
}

.base-loading--plate {
  width: 50px;
  height: 50px;
  background-color: gray;
  animation: plate-rotation 2s infinite linear;
}

@keyframes plate-rotation {
  0% {
    transform: rotateX(0deg);
  }

  25% {
    transform: rotateX(180deg);
  }

  50% {
    transform: rotateY(0deg);
  }

  100% {
    transform: rotateY(180deg);
  }
}
</style>

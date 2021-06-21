<template>
  <div class="content">
    <iframe
      src="https://www.jsdaima.com/js/demo/3839.html"
      style="width: 100%; height: 600px; margin-top: 10px;z-index:-1;"
    ></iframe>
    <div class="button">
      <van-button type="default" @click="handleFlowerStep">上一步</van-button>
      <van-button type="default" @click="handleFlower">下一步</van-button>
    </div>
  </div> </template
>>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    handleFlower() {
      this.$router.push({ name: "miss" });
    },
    handleFlowerStep() {
      this.$router.push({ name: "flower" });
    }
  }
};
</script>
<style scoped>
img {
  height: 37rem;
  width: 100%;
}
.content {
  display: flex;
  justify-content: center;
  flex-direction: column;
}
.button {
  position: absolute;
  bottom: 3px;
  left: 50%;
  transform: translate(-50%);
}
.container {
  z-index: 1;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  -webkit-animation: jump 1s ease-in-out alternate infinite;
  animation: jump 1s ease-in-out alternate infinite;
}
@-webkit-keyframes jump {
  from {
    transform: scaleY(1) translateY(-10vmin);
  }
  to {
    transform: scaleY(0.9) translateY(10vmin);
  }
}
@keyframes jump {
  from {
    transform: scaleY(1) translateY(-10vmin);
  }
  to {
    transform: scaleY(0.9) translateY(10vmin);
  }
}

/*\
|*| Card
\*/
.card {
  position: relative;
  background: #f5f5f5;
  width: 50vmin;
  height: 70vmin;
  border-radius: 25vmin 25vmin 3vmin 3vmin;
  border-bottom: 0.5vmin solid #777;
  box-shadow: rgba(0, 0, 0, 0.3) 0 0.4vmin 0.4vmin,
    rgba(0, 0, 0, 0.25) 0 0.8vmin 0.8vmin, rgba(0, 0, 0, 0.2) 0 1.6vmin 1.6vmin;
  cursor: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgBAMAAACBVGfHAAAAGFBMVEUAAAD////MzMwAAACZZjP/zJlVVVW7u7vA84tnAAAAAXRSTlMAQObYZgAAAKBJREFUKM990DEKAjEQheHAnuARsn0G7eOOYC/ZAywyB7Cx9/6NmTS+RDBdfr6ZYkJQLYHfIq84lAvwjBxuwAomqm+AyZabQeGwYiCLAEAqFLKXB830YkzEw0wSk008OOG9ZjoOGTDsTWaITM5NQJkcAA9d6+4hfkndbSZ2zMQDdN6SfgLN3PsZKIgIstH5pb1a+f7+H8Op/hdLJ4GJj3wAtEwihNsbCogAAAAASUVORK5CYII="),
    default;
  transform: rotateX(0deg) rotateY(20deg) scale(1);
  transform-style: preserve-3d;
  transition: 1.5s ease-in-out;
  transition-property: transform;
}
.card::after,
.card::before {
  content: "";
  position: absolute;
  top: -2vmin;
  left: 8vmin;
  width: 12vmin;
  height: 7vmin;
  border-radius: 6vmin 6vmin 0 0;
  background: #f5f5f5;
  box-shadow: 0 -0.3vmin 0.2vmin rgba(0, 0, 0, 0.1);
}
.card::after {
  transform: rotate(-10deg);
}
.card::before {
  left: calc(50vmin - 12vmin - 8vmin);
  transform: rotate(10deg);
}
.card_back {
  box-shadow: none;
  transform: translateZ(-0.1vmin);
}

#card {
  height: 0;
  width: 0;
  position: absolute;
  opacity: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  left: 100%;
}
#card:checked + .card {
  transform: rotateX(360deg) rotateY(-20deg) scale(0.8);
}

/*\
|*| Eears' Shadow
\*/
.ear-shadow {
  z-index: 1;
  position: absolute;
  top: -1vmin;
  left: 11vmin;
  width: 8vmin;
  height: 8vmin;
  border-radius: 50%;
  border-top: 0.5vmin solid rgba(180, 0, 0, 0.25);
  transform: rotate(-25deg);
}
.ear-shadow_right {
  transform: rotate(25deg);
  left: calc(50vmin - 8vmin - 11vmin);
}

/*\
|*| Eyes
\*/
.eyes {
  z-index: 1;
  position: absolute;
}
.eyes::after,
.eyes::before {
  content: "";
  position: absolute;
  top: 15vmin;
  left: 10vmin;
  width: 10vmin;
  height: 10vmin;
  border-radius: 50%;
  border-top: 1vmin solid #111;
}
.eyes::before {
  left: calc(50vmin - 10vmin - 10vmin);
}

/*\
|*| Nose
\*/
.nose {
  z-index: 1;
  position: absolute;
  top: 23vmin;
  left: 23.5vmin;
  width: 3vmin;
  height: 2vmin;
  border-radius: 50%;
  background: #d98695;
  box-shadow: inset 0.5vmin 0.3vmin 0.7vmin rgba(255, 255, 255, 0.8);
}

/*\
|*| Mouth
\*/
.mouth {
  z-index: 1;
  position: absolute;
}
.mouth::after,
.mouth::before {
  content: "";
  position: absolute;
  top: 21.7vmin;
  left: 20.05vmin;
  width: 5vmin;
  height: 5vmin;
  border-radius: 50%;
  border-bottom: 0.7vmin solid #111;
}
.mouth::before {
  left: calc(50vmin - 5vmin - 20.05vmin);
}

/*\
|*| Mustache
\*/
.mustache {
  z-index: 1;
  position: absolute;
  top: 24vmin;
  left: 9vmin;
  width: 10vmin;
  height: 2vmin;
  border-radius: 50%;
  border-top: 0.35vmin solid #111;
  transform: rotate(-10deg);
}
.mustache::after,
.mustache::before {
  content: "";
  position: absolute;
  top: 1vmin;
  left: 3vmin;
  width: 7vmin;
  height: 2vmin;
  border-radius: 50%;
  border-top: 0.35vmin solid #111;
  transform: rotate(-24deg);
}
.mustache::before {
  top: -1.7vmin;
  left: 2vmin;
  width: 8vmin;
  transform: rotate(19deg);
}
.mustache_right {
  left: calc(50vmin - 10vmin - 9vmin);
  transform: rotate(10deg) scale(-1, 1);
}

/*\
|*| Paws
\*/
.paw {
  z-index: 1;
  position: absolute;
  top: 37vmin;
  left: 1vmin;
  width: 12vmin;
  height: 12vmin;
  border-radius: 50%;
  border-right: 0.6vmin solid #111;
  box-shadow: inset -1vmin 1vmin 0 #c8c8c8;
  transform: rotate(45deg);
}
.paw_right {
  left: calc(50vmin - 12vmin - 1vmin);
  transform: rotate(-45deg) scale(-1, 1);
}

/*\
|*| Plate
\*/
.plate {
  position: absolute;
  top: 37vmin;
  left: 13vmin;
  width: 24.5vmin;
  height: 12vmin;
  border-radius: 1vmin;
  background-image: linear-gradient(315deg, #d99058 0%, #f8de7e 74%);
  color: rgba(162, 71, 0, 0.5);
  text-shadow: 0.25vmin 0.25vmin 0 #ffe897;
  font-size: 4.5vmin;
  overflow: hidden;
  text-align: center;
  display: flex;
  align-items: center;
  transform: rotate(7deg);
  box-shadow: 0 0.9vmin 0 #6d4c36, rgba(0, 0, 0, 0.15) 0 1.1vmin 0.2vmin,
    rgba(0, 0, 0, 0.15) 0 1.3vmin 0.4vmin, rgba(0, 0, 0, 0.15) 0 1.7vmin 0.8vmin,
    rgba(0, 0, 0, 0.15) 0 2.5vmin 1.6vmin, rgba(0, 0, 0, 0.15) 0 4.1vmin 3.2vmin;
}

/*\
|*| Flakes of 2020
\*/
.flakes {
  position: relative;
  color: rgba(255, 255, 255, 0.5);
  font-size: 3vmin;
  font-family: ProximaNova, -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
}

.flake {
  position: fixed;
  top: -10%;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-animation-name: flakes-fall, flakes-shake-rotate;
  animation-name: flakes-fall, flakes-shake-rotate;
  -webkit-animation-duration: 10s, 3s;
  animation-duration: 10s, 3s;
  -webkit-animation-timing-function: linear, ease-in-out;
  animation-timing-function: linear, ease-in-out;
  -webkit-animation-iteration-count: infinite, infinite;
  animation-iteration-count: infinite, infinite;
  -webkit-animation-play-state: running, running;
  animation-play-state: running, running;
}
@-webkit-keyframes flakes-fall {
  0% {
    top: -10%;
  }
  100% {
    top: 100%;
  }
}
@keyframes flakes-fall {
  0% {
    top: -10%;
  }
  100% {
    top: 100%;
  }
}
@-webkit-keyframes flakes-shake-rotate {
  0% {
    transform: translateX(0px) rotate(0deg);
  }
  50% {
    transform: translateX(8vmin) rotate(180deg);
  }
  100% {
    transform: translateX(0px) rotate(360deg);
  }
}
@keyframes flakes-shake-rotate {
  0% {
    transform: translateX(0px) rotate(0deg);
  }
  50% {
    transform: translateX(8vmin) rotate(180deg);
  }
  100% {
    transform: translateX(0px) rotate(360deg);
  }
}
.flake:nth-of-type(0) {
  left: 1%;
  -webkit-animation-delay: 0s, 0s;
  animation-delay: 0s, 0s;
}
.flake:nth-of-type(1) {
  left: 10%;
  -webkit-animation-delay: 1s, 1s;
  animation-delay: 1s, 1s;
}
.flake:nth-of-type(2) {
  left: 20%;
  -webkit-animation-delay: 6s, 0.5s;
  animation-delay: 6s, 0.5s;
}
.flake:nth-of-type(3) {
  left: 30%;
  -webkit-animation-delay: 4s, 2s;
  animation-delay: 4s, 2s;
}
.flake:nth-of-type(4) {
  left: 40%;
  -webkit-animation-delay: 2s, 2s;
  animation-delay: 2s, 2s;
}
.flake:nth-of-type(5) {
  left: 50%;
  -webkit-animation-delay: 8s, 3s;
  animation-delay: 8s, 3s;
}
.flake:nth-of-type(6) {
  left: 60%;
  -webkit-animation-delay: 6s, 2s;
  animation-delay: 6s, 2s;
}
.flake:nth-of-type(7) {
  left: 70%;
  -webkit-animation-delay: 2.5s, 1s;
  animation-delay: 2.5s, 1s;
}
.flake:nth-of-type(8) {
  left: 80%;
  -webkit-animation-delay: 1s, 0s;
  animation-delay: 1s, 0s;
}
.flake:nth-of-type(9) {
  left: 90%;
  -webkit-animation-delay: 3s, 1.5s;
  animation-delay: 3s, 1.5s;
}
</style>

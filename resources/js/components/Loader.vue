<template>
    <div class="flex mt-5 relative justify-center">
        <p>Loading</p>
       <div class="loader">
         <div></div><div></div>
         <div></div><div></div>
         <div></div><div></div>
         <div></div><div></div>
         <div></div><div></div>
         <div></div><div></div>
       </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
    @keyframes loader {
        0% { opacity: 1 }
        100% { opacity: 0 }
    }
    .loader div {
        top: -7px;
        left: 130px;
        right: 0;
        margin: auto;
        position: absolute;
        -webkit-animation: loader-e79ec684 linear 1s infinite;
        animation: loader-e79ec684 linear 1s infinite;
        background: #1d0e0b;
        width: 5px;
        height: 8px;
        border-radius: 6px;
        transform-origin: 6px 20px
    }
    .loader div:nth-child(1) {
         transform: rotate(0deg);
         animation-delay: -0.9166666666666666s;
         background: #1d0e0b;
     }
    .loader div:nth-child(2) {
          transform: rotate(30deg);
          animation-delay: -0.8333333333333334s;
          background: #1d0e0b;
      }
    .loader div:nth-child(3) {
           transform: rotate(60deg);
           animation-delay: -0.75s;
           background: #1d0e0b;
       }
    .loader div:nth-child(4) {
            transform: rotate(90deg);
            animation-delay: -0.6666666666666666s;
            background: #1d0e0b;
        }
    .loader div:nth-child(5) {
             transform: rotate(120deg);
             animation-delay: -0.5833333333333334s;
             background: #1d0e0b;
         }
    .loader div:nth-child(6) {
              transform: rotate(150deg);
              animation-delay: -0.5s;
              background: #1d0e0b;
          }
    .loader div:nth-child(7) {
               transform: rotate(180deg);
               animation-delay: -0.4166666666666667s;
               background: #1d0e0b;
           }
    .loader div:nth-child(8) {
                transform: rotate(210deg);
                animation-delay: -0.3333333333333333s;
                background: #1d0e0b;
            }
    .loader div:nth-child(9) {
                 transform: rotate(240deg);
                 animation-delay: -0.25s;
                 background: #1d0e0b;
             }
    .loader div:nth-child(10) {
                  transform: rotate(270deg);
                  animation-delay: -0.16666666666666666s;
                  background: #1d0e0b;
              }
    .loader div:nth-child(11) {
                   transform: rotate(300deg);
                   animation-delay: -0.08333333333333333s;
                   background: #1d0e0b;
               }
    .loader div:nth-child(12) {
                    transform: rotate(330deg);
                    animation-delay: 0s;
                    background: #1d0e0b;
                }
    .loader div { box-sizing: content-box; }
</style>

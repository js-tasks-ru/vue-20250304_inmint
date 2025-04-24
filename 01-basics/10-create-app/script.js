import { defineComponent, createApp } from 'vue'

//компонент с выводом локольного времени в локальном формате
const timeComponent = defineComponent({
    name: 'timeLocal',
    setup(){

        const userLocal = navigator.language;

        function formatLocal(){
            const options = {
                year: "numeric",
                month: "long",
                day: "numeric",
              };
            return new Date().toLocaleDateString(userLocal, options)
        }
        return {formatLocal, userLocal};
    },

    template: `Сегодня {{formatLocal()}}`
    
});


//основной компонент
// eslint-disable-next-line vue/one-component-per-file
const App = defineComponent({
    name: 'myFirstApp',

    components: {
      timeComponent
    },

    template: `<timeComponent />`
  });


const app = createApp(App);
//const vm = app.mount('#app');
window.vm = app.mount('#app');
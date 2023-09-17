import { createApp } from 'vue'
import { provideFluentDesignSystem, fluentCard, fluentButton } from '@fluentui/web-components'
import App from './App.vue'

provideFluentDesignSystem().register(fluentCard(), fluentButton());
createApp(App).mount('#app')
console.log('finished');
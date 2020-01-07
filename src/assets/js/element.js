import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import { Loading, Progress, Button, } from 'element-ui';


export default {
    install(Vue) {
        Vue.use(Loading)
        Vue.use(Progress)
        Vue.use(Button)
        // Vue.component('d-header', Header);
    }
}
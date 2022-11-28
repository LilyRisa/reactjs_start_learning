import Home from '~/Views/Home';
import Category from '~/Views/Category';
import Story from '~/Views/Story';

export const web = [
    { path : '/', component : Home},
    { path : '/:url-c:id', component : Category},
    { path : '/truyen/:url-c:id', component : Story},
];

import Home from '~/Views/Home';
import Category from '~/Views/Category';

export const web = [
    { path : '/', component : Home},
    { path : '/:url-c:id', component : Category},
];

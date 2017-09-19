
import './lib/no-js';

// If you want to enable and choose which modules to include, and uncomment the line below
// import './lib/foundation-explicit-pieces';
// import $ from 'jquery';


// Menu
let buttonMenu = document.getElementById('toggle_menu'),
    navigation = document.getElementById('js_menu');

buttonMenu.onclick = () => {
  navigation.classList.toggle('is-active');
};

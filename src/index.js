//import {ProductBundles} from "./modules/ProductBundles";
import './styles/main.scss';
import loadSVGs from './modules/svg-replace';
import hideZeroDiscount from './modules/hideZeroDiscount';
import populateModal from './modules/populateModal';
import speakToSpecialistsShowHide from './modules/speakToSpecialistsShowHide';
import 'popper.js';
import 'bootstrap';



var isProd = false; 

document.addEventListener('DOMContentLoaded', () => {
  loadSVGs();
  hideZeroDiscount();
  populateModal(isProd);
  speakToSpecialistsShowHide(isProd);
});

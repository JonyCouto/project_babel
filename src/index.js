import './sass/style.scss';
import {arrowFunc} from './js/testWithBabel';

arrowFunc(15, 5, '/'); // 3 
arrowFunc(8, 2, '-'); // 6
arrowFunc(2, 4, '+'); // 6
arrowFunc(2, 1, '*'); // 2
arrowFunc(2, 3, '^'); // 8
arrowFunc(3, 3, '%'); // 0
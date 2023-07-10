import ScrollSuave from "./modules/scroll-suave.js";
import ScrollAnima from "./modules/scroll-anima.js";
import Perguntas from "./modules/nav-perguntas.js";
import NavegacaoTab from "./modules/nav-tabs.js";
import Modal from "./modules/modal.js";
import Tooltip from "./modules/tooltip.js";
import MenuMobile from "./modules/menu-mobile.js";
import fetchAnimais from "./modules/fetch-animais.js";
import fetchBitcoin from "./modules/fetch-bitcoin.js";
import DropDownMenu from "./modules/dropdown-menu.js";
import Funcionamento from "./modules/funcionamento.js";
import SlideNav from "./modules/slide.js";

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollSuave.init();

const perguntas = new Perguntas('[data-anime="perguntas"] dt');
perguntas.init();

const navegacaoTab = new NavegacaoTab(
  '[data-tab="menu"] li',
  '[data-tab="content"] section'
);
navegacaoTab.init();

const modal = new Modal(
  '[data-modal="abrir"]',
  '[data-modal="fechar"]',
  '[data-modal="container"]'
);
modal.init();

const tooltip = new Tooltip("[data-tooltip]");
tooltip.init();

const scrollAnima = new ScrollAnima('[data-anime="scroll"]');
scrollAnima.init();

const dropDownMenu = new DropDownMenu("[data-dropdown");
dropDownMenu.init();

const menuMobile = new MenuMobile('[data-menu="button"]', '[data-menu="list"]');
menuMobile.init();

const funcionamento = new Funcionamento("[data-semana]", "aberto");
funcionamento.init();

fetchAnimais("./animaisApi.json", ".numeros-grid");
fetchBitcoin("https://blockchain.info/ticker", ".btc-preco");

const slide = new SlideNav(".slide", ".slide-wrapper");
slide.init();
slide.addControl(".custom-control");

import { NegociacaoController } from "./controllers/index";

const controller = new NegociacaoController();

document
  .querySelector(".form")
  .addEventListener("submit", controller.adiciona.bind(controller));

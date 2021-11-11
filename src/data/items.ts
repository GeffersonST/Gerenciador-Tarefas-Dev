import { Item } from "../types/Item";
/// Alguns itens para Apresentação como exemplos
export const items: Item[] = [
  {
    date: new Date(2021, 9, 6),
    category: "food",
    title: "Restaurante",
    value: 35.52,
    desc: "Pizzaria",
  },
  {
    date: new Date(2021, 9, 15),
    category: "food",
    title: "Mercado",
    value: 29,
    desc: "Compras de Alimentos",
  },
  {
    date: new Date(2021, 9, 16),
    category: "rent",
    title: "Aluguel",
    value: 75,
    desc: "Valor do Aluguel",
  },
  {
    date: new Date(2021, 10, 11),
    category: "food",
    title: "Fazer desafio React da Voalle",
    value: 90,
    desc: "Fazer um Gerenciador de Tarefas em React",
  },
];

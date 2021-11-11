import * as C from "./styles";
import { Item } from "../../types/Item";
import { formatDate } from "../../helpers/dateFilter";
import { categories } from "../../data/categories";

import ProgressBar from "@ramonak/react-progress-bar";
/// Não consegui inserir a lógica de Excluir e Editar, fiz uma ampla pesquisa.
type Props = {
  item: Item;
};
/// Aqui estará a os itens das tarefas
export const TableItem = ({ item }: Props) => {
  return (
    <C.TableLine>
      <C.TableColumn>{formatDate(item.date)}</C.TableColumn>
      <C.TableColumn>
        <C.Category color={categories[item.category].color}>
          {categories[item.category].title}
        </C.Category>
      </C.TableColumn>
      <C.TableColumn>
        {item.title} {""}
        <ProgressBar completed={item.value} />
      </C.TableColumn>

      <C.TableColumn>
        <C.Value color={categories[item.category].expense ? "red" : "green"}>
          {item.desc} <br />
          <button>Excluir</button>
          <button>Editar</button>
        </C.Value>
      </C.TableColumn>
    </C.TableLine>
  );
};

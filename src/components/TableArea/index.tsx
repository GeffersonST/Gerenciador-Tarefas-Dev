import * as C from "./styles";
import { Item } from "../../types/Item";
import { TableItem } from "../TableItem";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";

///Criação da Tabela de Tarefas
type Props = {
  list: Item[];
};
/// Inseri algumas Legendas, como a de Editar e Excluir
export const TableArea = ({ list }: Props) => {
  return (
    <C.Table>
      <thead>
        <tr>
          <C.TableHeadColumn width={100}>Prazo</C.TableHeadColumn>
          <C.TableHeadColumn width={130}>Prioridade</C.TableHeadColumn>
          <C.TableHeadColumn>Título</C.TableHeadColumn>
          <C.TableHeadColumn width={150}>Descrição</C.TableHeadColumn>
          <C.TableHeadColumn width={50}>
            Editar
            <TiEdit className="edit-icon" />
          </C.TableHeadColumn>
          <C.TableHeadColumn width={50}>
            Excluir
            <RiCloseCircleLine className="delete-icon" />
          </C.TableHeadColumn>
        </tr>
      </thead>
      <tbody>
        {list.map((item, index) => (
          <TableItem key={index} item={item} />
        ))}
      </tbody>
    </C.Table>
  );
};

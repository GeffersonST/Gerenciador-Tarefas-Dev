import { useState } from "react";
import * as C from "./styles";
import { Item } from "../../types/Item";

import { categories } from "../../data/categories";
// Preparando a Area para inserir os dados de Prazo, Titulo, Prioridade, Descrição e Percentual
type Props = {
  onAdd: (item: Item) => void;
};

export const InputArea = ({ onAdd }: Props) => {
  const [dateField, setDateField] = useState("");
  const [categoryField, setCategoryField] = useState("");
  const [titleField, setTitleField] = useState("");
  const [valueField, setValueField] = useState(0);
  const [descriptionField, setDescriptionField] = useState("");

  let categoryKeys: string[] = Object.keys(categories);
  /// Inserindo Alerts para possíveis erros
  const handleAddEvent = () => {
    let errors: string[] = [];

    if (isNaN(new Date(dateField).getTime())) {
      errors.push("Data inválida!");
    }
    if (!categoryKeys.includes(categoryField)) {
      errors.push("Categoria inválida!");
    }
    if (titleField === "") {
      errors.push("Título vazio!");
    }

    if (errors.length > 0) {
      alert(errors.join("\n"));
    } else {
      onAdd({
        date: new Date(dateField),
        category: categoryField,
        title: titleField,
        value: valueField,
        desc: descriptionField,
      });

      clearFields();
    }
  };
  /// Valores padrão para default dos Inputs
  const clearFields = () => {
    setDateField("");
    setCategoryField("");
    setTitleField("");
    setValueField(0);
    setDescriptionField("");
  };
  /// Fazendo aparecer na tela
  return (
    <C.Container>
      <C.InputLabel>
        <C.InputTitle>Prazo</C.InputTitle>
        <C.Input
          type="date"
          value={dateField}
          onChange={(e) => setDateField(e.target.value)}
        />
      </C.InputLabel>
      <C.InputLabel>
        <C.InputTitle>Prioridade</C.InputTitle>
        <C.Select
          value={categoryField}
          onChange={(e) => setCategoryField(e.target.value)}
        >
          <>
            <option></option>
            {categoryKeys.map((key, index) => (
              <option key={index} value={key}>
                {categories[key].title}
              </option>
            ))}
          </>
        </C.Select>
      </C.InputLabel>
      <C.InputLabel>
        <C.InputTitle>Título</C.InputTitle>
        <C.Input
          type="text"
          value={titleField}
          onChange={(e) => setTitleField(e.target.value)}
        />
      </C.InputLabel>
      <C.InputLabel>
        <C.InputTitle>Descrição</C.InputTitle>
        <C.Input
          type="text"
          value={descriptionField}
          onChange={(e) => setDescriptionField(e.target.value)}
        />
        <C.InputTitle>Percentual de Progresso</C.InputTitle>

        <C.Input
          type="number"
          value={valueField}
          onChange={(e) => setValueField(parseFloat(e.target.value))}
        />
      </C.InputLabel>

      <C.InputLabel>
        <C.InputTitle>&nbsp;</C.InputTitle>
        <C.Button onClick={handleAddEvent}>Adicionar</C.Button>
      </C.InputLabel>
    </C.Container>
  );
};

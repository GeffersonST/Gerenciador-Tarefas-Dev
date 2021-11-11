import styled from "styled-components";
/// Todos os estilos foram criados a partir de Styled Components. Acredito que ReactJS e ele combinam em sua dinâmica de trabalho.
export const Container = styled.div`
  background-color: #fff;

  border-radius: 10px;
  padding: 20px;
  margin-top: -40px;
  display: flex;
  align-items: center;
`;

export const MonthArea = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

export const MonthArrow = styled.div`
  width: 40px;

  text-align: center;
  font-size: 25px;
  cursor: pointer;
`;

export const MonthTitle = styled.div`
  background-color: #fff;
  flex: 1;
  text-align: center;
`;

export const ResumeArea = styled.div`
  flex: 2;
  display: flex;
`;

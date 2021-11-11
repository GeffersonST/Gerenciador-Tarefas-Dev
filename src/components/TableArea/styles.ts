import styled from "styled-components";
/// Coloquei um Gradient para estilização
export const Table = styled.table`
  width: 100%;
  flex: 1;
  background: linear-gradient(#f869d5 0%, #5650de 100%);
  padding: 20px;

  border-radius: 10px;
  margin-top: 20px;
`;

export const TableHeadColumn = styled.th<{ width?: number }>`
  width: ${(props) => (props.width ? `${props.width}px` : "auto")};

  padding: 10px 0;
  text-align: left;
`;

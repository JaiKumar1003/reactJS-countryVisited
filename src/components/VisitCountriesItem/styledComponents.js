import styled from 'styled-components'

export const CountryItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  border: 1px solid #94a3b833;
  padding: 10px;
  padding-left: 36px;
  padding-right: 36px;
  list-style-type: none;
`

export const CountryName = styled.p`
  color: #f1f5f9;
  font-family: 'Roboto';
  font-size: 16px;
`

export const VisitBtn = styled.button`
  background-color: #3b82f6;
  border: none;
  border-radius: 4px;
  height: 36px;
  width: 80px;
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  outline: none;
`

export const VisitedText = styled.p`
  color: #94a3b8;
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 500;
  margin-right: 16px;
`

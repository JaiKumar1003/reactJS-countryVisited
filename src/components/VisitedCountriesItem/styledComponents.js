import styled from 'styled-components'

export const CountryItem = styled.li`
  background-color: #33415533;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30%;
  margin-bottom: 16px;
  margin-right: 16px;
  list-style-type: none;
`

export const CountryImg = styled.img`
  width: 100%;
`

export const CountryNameRemoveCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  width: 100%;
`

export const CountryName = styled.p`
  color: #f1f5f9;
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 400;
`

export const RemoveBtn = styled.button`
  background-color: transparent;
  border: 1px solid #f8fafc;
  height: 34px;
  width: 80px;
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  outline: none;
`

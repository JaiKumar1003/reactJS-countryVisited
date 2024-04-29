import styled from 'styled-components'

export const VisitCountriesContainer = styled.div`
  background-color: #161624;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  width: 100%;
  padding-top: 32px;
  padding-bottom: 32px;
`

export const VisitCountriesCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
`

export const VisitCountriesHeading = styled.h1`
  color: #f8fafc;
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: 400;
  align-self: flex-start;
`

export const VisitCountriesList = styled.ul`
  background-color: #33415533;
  border: 1px solid #94a3b833;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  height: 75vh;
  width: 100%;
  overflow-y: scroll;
  padding: 0px;
`

export const VisitedCountriesHeading = styled.h1`
  color: #f8fafc;
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: 400;
  align-self: flex-start;
`

export const VisitedCountriesList = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  width: 100%;
  padding: 0px;
`

export const NoVisitedCard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  min-height: 75vh;
  width: 100%;
`

export const NoVisitedText = styled.p`
  color: #f8fafc;
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: 400;
  align-self: center;
`

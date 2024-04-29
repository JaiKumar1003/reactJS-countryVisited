import {
  CountryItem,
  CountryName,
  VisitBtn,
  VisitedText,
} from './styledComponents'

const VisitCountriesItem = props => {
  const {eachCountry, onClickVisitBtn} = props
  const {id, name, isVisited} = eachCountry
  const onClickBtn = () => {
    onClickVisitBtn(id)
  }

  return (
    <CountryItem>
      <CountryName>{name}</CountryName>
      {isVisited ? (
        <VisitedText>Visited</VisitedText>
      ) : (
        <VisitBtn isVisited={isVisited} onClick={onClickBtn} type="button">
          Visit
        </VisitBtn>
      )}
    </CountryItem>
  )
}

export default VisitCountriesItem

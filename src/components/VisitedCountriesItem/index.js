import {
  CountryItem,
  CountryImg,
  CountryNameRemoveCard,
  CountryName,
  RemoveBtn,
} from './styledComponents'

const VisitedCountriesItem = props => {
  const {eachCountry, onClickRemoveBtn} = props
  const {imageUrl, id, name} = eachCountry
  const onClickBtn = () => {
    onClickRemoveBtn(id)
  }

  return (
    <CountryItem>
      <CountryImg src={imageUrl} alt="thumbnail" />
      <CountryNameRemoveCard>
        <CountryName>{name}</CountryName>
        <RemoveBtn onClick={onClickBtn} type="button">
          Remove
        </RemoveBtn>
      </CountryNameRemoveCard>
    </CountryItem>
  )
}

export default VisitedCountriesItem

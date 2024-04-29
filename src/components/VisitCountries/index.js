import {Component} from 'react'

import VisitCountriesItem from '../VisitCountriesItem'

import VisitedCountriesItem from '../VisitedCountriesItem'

import {
  VisitCountriesContainer,
  VisitCountriesCard,
  VisitCountriesHeading,
  VisitCountriesList,
  VisitedCountriesHeading,
  NoVisitedCard,
  NoVisitedText,
  VisitedCountriesList,
} from './styledComponents'

class VisitCountries extends Component {
  state = {visitedList: [], visitList: []}

  componentDidMount() {
    const {initialCountriesList} = this.props

    const updatedList = initialCountriesList.filter(
      eachItem => eachItem.isVisited === true,
    )

    this.setState({visitList: initialCountriesList, visitedList: updatedList})
  }

  onClickRemoveBtn = countryId => {
    const {visitList, visitedList} = this.state
    const removedList = visitedList.filter(
      eachItem => eachItem.id !== countryId,
    )
    const updatedList = visitList.map(eachItem => {
      if (eachItem.id === countryId) {
        return {...eachItem, isVisited: false}
      }
      return eachItem
    })

    this.setState({visitList: updatedList, visitedList: removedList})
  }

  onClickVisitBtn = countryId => {
    const {visitList} = this.state

    const updatedList = visitList.map(eachItem => {
      if (eachItem.id === countryId) {
        return {...eachItem, isVisited: true}
      }

      return eachItem
    })

    const findCountry = visitList.find(eachItem => eachItem.id === countryId)

    this.setState(prevState => ({
      visitList: updatedList,
      visitedList: [...prevState.visitedList, findCountry],
    }))
  }

  render() {
    const {visitedList, visitList} = this.state
    return (
      <VisitCountriesContainer>
        <VisitCountriesCard>
          <VisitCountriesHeading>Countries</VisitCountriesHeading>
          <VisitCountriesList>
            {visitList.map(eachItem => (
              <VisitCountriesItem
                eachCountry={eachItem}
                key={eachItem.id}
                onClickVisitBtn={this.onClickVisitBtn}
              />
            ))}
          </VisitCountriesList>
          <VisitedCountriesHeading>Visited Countries</VisitedCountriesHeading>
          {visitedList.length === 0 ? (
            <NoVisitedCard>
              <NoVisitedText>No Countries Visited Yet!</NoVisitedText>
            </NoVisitedCard>
          ) : (
            <VisitedCountriesList>
              {visitedList.map(eachItem => (
                <VisitedCountriesItem
                  eachCountry={eachItem}
                  key={eachItem.id}
                  onClickRemoveBtn={this.onClickRemoveBtn}
                />
              ))}
            </VisitedCountriesList>
          )}
        </VisitCountriesCard>
      </VisitCountriesContainer>
    )
  }
}

export default VisitCountries

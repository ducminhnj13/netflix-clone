import React from 'react'
import Main from '../components/Main'
import Row from '../components/Row'
import requests from '../Requests'

export default function Home() {
  return (
    <>
      <Main />
      <Row rowID='1' title='UpComing' fetchURL={requests.requestsUpcoming} />
      <Row rowID='2' title='Popular' fetchURL={requests.requestsPopular} />
      <Row rowID='3' title='Trending' fetchURL={requests.requestsTrending} />
      <Row rowID='4' title='TopRated' fetchURL={requests.requestsTopRated} />
      <Row rowID='5' title='Horror' fetchURL={requests.requestsHorror} />
    </>
  )
}

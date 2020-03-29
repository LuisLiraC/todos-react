import React, { useState, useEffect } from 'react'
import { Title } from './styles'
import { withContext } from '../../hoc/withContext'
import axios from 'axios'
import Redirect from '../../components/RedirectHome'

const Other = ({ isAuth }) => {
  const [data, setData] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let isSuscribed = true
    function fetchData() {
      try {        
        axios.get('http://api-lol.herokuapp.com/api/champions/lulu')
          .then(({ data: champion }) => {
            if(isSuscribed) {
              setData(champion)
              setLoading(false)
            }
          })
      } catch (error) {
        console.log(error.message)
      }
    }
    fetchData()
    return () => isSuscribed = false
  }, [])

  return (
    isAuth ? (      
      loading ? (
        <p>Loading...</p> 
      ) : (
        <>
          <Title>It's purple!</Title>
          <img src={data.champion_image} alt={data.name} />
        </>
      )
    ) : (
      <Redirect />
    )
  )
}

export default withContext(Other)
import React, { useEffect, useState } from "react"
import { navigate } from "gatsby"

const mockResults = [
  "Elaine",
  "Jaqueline",
  "Willia",
  "Barbra",
  "Rudolf",
  "Stan",
  "Ngoc",
  "Vicente",
  "Bernardina",
  "Katelyn",
  "Ryann",
  "Kimiko",
  "Torrie",
  "Patrick",
  "Lucio",
  "Billie",
  "Chara",
  "Kecia",
  "Tashia",
  "Penni",
]

export default function Home(props) {
  const { location } = props
  const [searchQuery, setSearchQuery] = useState(``)
  const [searchResults, setSearchResults] = useState([])

  const updateResults = query => {
    setSearchResults(mockResults.filter(result => result.includes(query)))
  }

  useEffect(() => {
    const newSearchQuery = new URLSearchParams(location.search).get(`q`) || ``
    setSearchQuery(newSearchQuery)
    if (newSearchQuery) {
      updateResults(newSearchQuery)
    }
  }, [location.search])

  const handleChange = event => {
    const value = event.target.value
    setSearchQuery(value)
    navigate(`?q=${value}`, { replace: true })
  }

  return (
    <div>
      <input type="text" value={searchQuery} onChange={handleChange} />
      <ul>
        {searchResults.map(result => (
          <li>{result}</li>
        ))}
      </ul>
    </div>
  )
}

import { useEffect, useState } from 'react'
import Card from  './Card'
import './App.css'

function App() {
  const [countries, displayCountryList] = useState([])
   useEffect( ()=> {
    
    fetch('https://restcountries.com/v3.1/all')
    .then((response) => response.json())
    .then(data => {
      //console.log(data)
      displayCountryList(data)
   })
   .catch((error)=> {
    console.log(error)
   })
  });
  
  return (
    <>
   
  <header />
  <main>
    <h1>COUNTRY LIST</h1>
    <section className="countries">
      {countries.map(country => {
        return <Card countryFlag={country.flags.png} countryName={country.name.common} />
      })}
    </section>
  </main>
  <footer></footer>
</>

)}   

export default App

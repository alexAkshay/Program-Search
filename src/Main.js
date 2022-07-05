import React, { useContext} from 'react'
import Show from './Components/Show';
import Person from './Components/Person'
import ThemesContext from './Themes'
import './App.css'

export default function Main(props) {
  const {
     method,
    searchTerm
  } = props;

  const theme = useContext(ThemesContext)
    return (
      <div className="container" style={theme}>
        <h1 className='method'> Search by {method} </h1>
{
  method === "shows" ? <Show searchTerm={searchTerm}/> : <Person searchTerm={searchTerm}/>
}


</div>
    
    );
}

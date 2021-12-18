import React, {Component} from 'react'

const TableHeader = () => {
    return (
      <thead>
        <tr>
          <th>Name</th>
          <th>Job</th>
        </tr>
      </thead>
    )
  }

  const TableBody = (props) => {
    const rows = props.characterData.map((row, index) => {
      return (
        <tr key = {index}>
          <td>{row.name}</td>
          <td>{row.index}</td>
          <td> <button onClick={()=> props.removeCharacter(index)}>Delete</button></td>
        </tr>
      )
    })

    return <tbody>{rows}</tbody>
  }

  const Table = (props) => {

        const {characterData, removeCharacter} = props //2 no this here, why?

      return (
        <table>
          <TableHeader />
          <TableBody characterData ={characterData} removeCharacter = {removeCharacter} />
        </table>
      )
  }
  
  
  export default Table

  //2 https://stackoverflow.com/questions/38060523/what-is-the-difference-between-using-this-props-and-props-in-react-js
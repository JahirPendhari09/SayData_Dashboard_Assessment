function Recent_Info({id,name,type,duration,date_of_created,last_update,action}) {
    return (
      <th style={{ width:"100%",display:"flex",fontSize:"12px",}}>
        <td > <input type="checkbox"/> </td>
        <td >{name}</td>
        <td >{type}</td>
        <td >{duration}</td>
        <td >{date_of_created}</td>
        <td >{last_update}</td>
        <td >{action}</td>
      </th>
    );
  }
  
  export {Recent_Info};
  
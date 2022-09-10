import { FC, useState, useRef, FormEvent } from "react";
import { User, values} from "./api";
import './UserList.css';

interface Props {
  users?: User[];
  selectedIds?: string[];
  onSelect?: (ids: string[]) => void
}
console.log(values);



const UserList: FC<Props> = ({ users = [], selectedIds = [], onSelect}) => {
  const [checked, setChecked] = useState<string[]>([]);
 
  // Add/Remove checked item from list
const handleCheck = (event:FormEvent) => {
  var updatedList: string[] = [...checked];
  if ((event.target as HTMLInputElement).checked) {
    updatedList = [...checked, (event.target as HTMLInputElement).value];
  } else {
    updatedList.splice(checked.indexOf((event.target as HTMLInputElement).value), 1);
  }
  setChecked(updatedList);
};

  return (
    <div>
      <div className="UserList">
      {/* TODO: render list of users with checkboxes */}
      {values.map((item, index) => (
         <div key={index}>
          <input type="checkbox" onChange={handleCheck} value={item.firstName} /> <span>{item.firstName}</span> <span>{item.lastName}</span>
          
          
         </div>
      ))}


    </div>

<div style={{display: 'flex'}}> <span style={{marginRight: '10px'}}> 	

&#128075; Well, hello</span>
{
    checked.length>0 && checked.map((item, index) => (
<span style={{marginRight: '10px'}} key={index}>{item} {index == checked.length-1 ? "!" : ","}</span>
     
    ))
   }
</div>
    </div>
    
  );
};

export default UserList;

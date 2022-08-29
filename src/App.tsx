import {useEffect, useState} from 'react';
import { useDispatch, useStore } from './Context/DataContext';
import './App.css';
import Button from './components/Button/Button';
import axios from 'axios';
import Users from './components/Users/Users';

export interface IUser{
  id: number,
  name: string,
  username: string,
}

function App() {

  const [users, setUsers] = useState<IUser[]>([]);

  const { count } = useStore()
  const dispatch = useDispatch()

  useEffect(() =>{
    const getUsers = async ()=> {
      const {data} = await axios.get<IUser[]>("https://jsonplaceholder.typicode.com/users")
      setUsers(data)
    }
    getUsers()
  },[])

  return (
    <div className="App">

      <p data-testid="counter">{count}</p>

      <Button
        action={() => dispatch({ type: "INCREASE" })}
        label="Increment"
        testId={1}
      />

      <Button
        action={() => dispatch({ type: "DECREASE" })}
        label="Decrement"
        testId={2}
      />

      <Button
        action={() => dispatch({ type: "RESET" })}
        label="Reset"
        testId={3}
      />

      <Users users={users}/>

    </div>
  );
}

export default App;

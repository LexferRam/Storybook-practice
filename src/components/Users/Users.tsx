import { IUser } from '../../App'

interface IUsersProps{
    users?: IUser[];
}

const Users = ({users}: IUsersProps) => {
  return (
    <div>
        {users?.map((user: IUser) =>(
            <p key={user.id}>{user.name}</p>
        ))}
    </div>
  )
}

export default Users
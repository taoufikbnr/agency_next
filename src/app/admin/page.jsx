import { getPosts, getUsers } from '../lib/data'


const AdminPage = async() => {
  const users = await getUsers();
  console.log(users);
  return (
    <div>AdminPage</div>
  )
}

export default AdminPage
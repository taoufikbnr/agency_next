import { createPost } from "../lib/actions"


const ServerAction = () => {

  return (
    <form action={createPost}>
        <input type="text"  name="title" />
        <input type="text" name="desc" />
        <input type="text" name="slug" />
        <input type="text" name="userId" />
        <button>test</button>
    </form>
  )
}

export default ServerAction
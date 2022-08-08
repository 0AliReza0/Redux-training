import {useSelector} from 'react-redux';
import { selectUserById } from './usersSlice';
import { selectPostByUser } from '../posts/postsSlice';
import { Link, useParams } from 'react-router-dom';

function UserPage() {
    const {userId}=useParams();
    const user=useSelector(state=>selectUserById(state,+userId))

    const postsForUser=useSelector(state=>selectPostByUser(state,+userId))

    const postTitles= postsForUser.map((post,index)=>(
        <li key={index}>
            <Link to={`/post/${post.id}`}>{post.title}</Link>
        </li>
    ))

  return (
    <section>
        <h2>{user?.name}</h2>

        <ol>{postTitles}</ol>
    </section>
  )
}

export default UserPage
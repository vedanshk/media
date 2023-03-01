import React from 'react'
import { useFetchAlbumsQuery } from '../store'
function AlbumsList({user}) {
   const{ data , error , isLoading } = useFetchAlbumsQuery(user);
   console.log(data);
  return (
    <div>{user.name}</div>
  )
}

export default AlbumsList
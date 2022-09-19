import React from "react";
import useSWR from "swr";
import axios from "axios";

const fetcher = (...args) => axios.get(...args).then((res) => res.data);

function useUser(id) {
  const { data, error } = useSWR(`/api/user/${id}`, fetcher);

  return {
    user: data,
    isLoading: !error && !data,
    isError: error,
  };
}

export default function Page() {
  return (
    <div>
      <Profile id={123} />
      <Avatar id={123} />
    </div>
  );
}

function Profile({ id }) {
  const { user, isLoading, isError } = useUser(id);

  if (isError) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;
  return (
    <>
      <div>hello {user.name}!</div>
      <Avatar id={123} />
    </>
  );
}

export function Avatar({ id }) {
  const { user, isLoading, isError } = useUser(id);
  if (isError) return <div>failed to load (Avartar)</div>;
  if (isLoading) return <div>loading...(Avartar)</div>;

  return <div>hello {user.name}! (Avartar)</div>;
}

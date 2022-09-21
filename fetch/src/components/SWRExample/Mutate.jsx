import axios from "axios";
import React from "react";
import useSWR, { SWRConfig, useSWRConfig } from "swr";

export const Mutate = () => {
  return (
    <SWRConfig>
      <Page />
      <Profile />
    </SWRConfig>
  );
};

const fetcher = (url) => axios.get(url).then((res) => res.data);

const Page = () => {
  const { data } = useSWR("/api/user/123", fetcher);
  const { mutate } = useSWRConfig();

  if (!data) {
    return <div>loading...</div>;
  }

  return (
    <div>
      <h1>My name is {data.name}.</h1>
      <button
        onClick={async () => {
          const newName = data.name.toUpperCase();
          const user = { ...data, name: newName };
          // 모킹 데이터를 즉시 업데이트 하지만 갱신은 비활성화
          mutate("/api/user/123", user, false);
          // 모킹 데이터가 올바른지 확인하기 위해 갱신
          mutate("/api/user/123");
        }}
      >
        Uppercase my name!
      </button>
    </div>
  );
};

const Profile = () => {
  const { data, mutate } = useSWR("/api/user/124", fetcher);

  if (!data) {
    return <div>loading...</div>;
  }

  return (
    <div>
      <h1>My name is {data.name}.</h1>
      <button
        onClick={async () => {
          const newName = data.name.toUpperCase();
          const user = { ...data, name: newName };
          // 모킹 데이터를 즉시 업데이트 하지만 갱신은 비활성화
          mutate(user, false);
          // 모킹 데이터가 올바른지 확인하기 위해 갱신
          mutate();
        }}
      >
        Uppercase my name!
      </button>
    </div>
  );
};

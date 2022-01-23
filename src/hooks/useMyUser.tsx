import useSWR, { SWRConfig } from "swr";
const fetcher = args => fetch(args).then((res: any) => res.json());

// useAirportという関数をつくる
const useMyUserInfo = () => {
  // useSWR(アクセス先,関数,オプション)
  const { data, error } = useSWR("/api/myuser", fetcher);
  console.log(data);

  return {
    MyUserInfoData: data,
    isLoading: !error && !data,
    isError: error,
  };
};

export default useMyUserInfo;
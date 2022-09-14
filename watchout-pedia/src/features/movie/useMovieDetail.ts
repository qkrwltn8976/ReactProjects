import { AxiosError, AxiosResponse } from "axios";
import { useQuery } from "react-query";
import { detailApi } from "../../apis/movieApi";
import { ListResponse, Movie, MovieDetail } from "../../types";

const useMovieDetail = (query: string) => {
  const queryFn = () => detailApi(query);

  return useQuery<AxiosResponse<MovieDetail>, AxiosError>(
    ["movieDetail", query],
    queryFn,
    { enabled: Boolean(query) }
  );
};

export default useMovieDetail;

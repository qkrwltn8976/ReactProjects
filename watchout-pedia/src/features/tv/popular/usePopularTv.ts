import { AxiosError, AxiosResponse } from "axios";
import { useQuery } from "react-query";
import { popularApi } from "../../../apis/tvApi";
import { ListResponse, TVDetail } from "../../../types";

const useTopRateTv = () => {
  return useQuery<AxiosResponse<ListResponse<TVDetail>>, AxiosError>(
    "popularTv",
    popularApi
  );
};

export default useTopRateTv;

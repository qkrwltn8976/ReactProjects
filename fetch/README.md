## Data Fetching Library

### 1. SWR

- 데이터를 가져오기를 위한 React Hook
- 캐시로부터 데이터를 반환한 후, fetch 요청을 하고, 최종적으로 최신화된 데이터를 가져옴
- Lightweight Realtime Suspense Pagination...
- stale-while-revalidate(HTTP 캐시 전략 중 하나)
- 의도적으로 cache된 data를 return하고 fetch(revalidate)한 후 data를 update
- 키가 같다면 요청이 자동으로 중복 제거, 캐시, 공유됨
- 사용자 포커스나 네트워크 재연결 시 갱신됨

#### SWR 기능

- 빠르고 가볍고 재사용 가능한 데이터 가져오기
- 내장된 캐시 및 요청 중복 제거
- 실시간 경험

#### SWR 특징

- SWR
  - Stale-While-Revalidate
- 키
  - 중복 제거/캐시/공유
- Revalidate
  - 다양한 옵션(포커스 / 네트워 / interval)
- 전역 설정
  - SWRConfig / Persistant cache
- 뮤테이션
  - 데이터를 업데이트
- 페이지네이션
  - useSWRInfinite
- 프리패칭
  - <head> / mutate / 데이터 프리필
- 성능
  - 중복제거 / dedupingInterval / 비교

#### Cache

- Cache Provider
- mutate
- cache
- Persistent Cache

#### Mutation

- useSWRConfig로부터 꺼낼 수 있고
- 현재 데이터 기반으로 Mutate도 가능
- useSWR에서 직접 꺼내면 key 필요하지 않음

### 2. React Query

- fetching or updating data
- 기존 상태 관리 라이브러리들은 fetching을 중요하게 생각하지 않음
- client state와 server state는 다름
- 다양한 고려 필요(Caching, multi request, update, out date, pagination)
- Server State
  - 기존 상태 관리 라이브러리에서 고려 X
- 개념
  - Query / Mutate / Query Invalidate
- Devtools
  - 자체 도구 존재
- Examples
  - 다양하게 참고 가능

#### Query Keys

- string / Array of many strings and nested objects
- Array로 인식 / 객체 내부의 순서 무관 / Array의 순서는 유의미

#### Query Functions

- returns a promise (resolve the data | throw an error)
- Query Keys이 params로 넘어옴
- useQuery에 params 대신 객체로 넘길 수도 있음
- useQuery({queryKey, queryFn, config})

#### Parallel Queries

- 기본이 병렬 수행
- Suspense 사용하면제대로 동작안함 (대신 useQueries 사용)
- Dynamic Parallel Queries
  - useQueries([{queryKey, queryFn}])

## 모킹(Mocking)이란?

- Mock(모의 데이터)을 만들어서 활용하는 방식
- 통상적으로 data fetch를 해야하는 경우 통신을 통해 응답을 내려주는 서버가 있어야 함
- 서버가 없는 경우 api 요청으로 내려올 데이터를 프론트에서 모킹하거나 서버의 역할을 해주는 무언가가 필요

#### MSW

- Interception on the network level
- Service Worker API
- REST API & GraphQL support

#### MSW 정리

- Mocking
  - 모의 데이터 활용
- Browser
  - Service worker 활용
- REST API/GraphQL
  - 모두 모킹이 가능
- mock
  - handler/browser만 있어도 동작
- public
  - npx msx init <PUBLIC_PATH>
- 기타 커스텀
  - query/patching/error

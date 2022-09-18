## Data Fetching Library

### 1. SWR

- 데이터를 가져오기를 위한 React Hook
- 캐시로부터 데이터를 반환한 후, fetch 요청을 하고, 최종적으로 최신화된 데이터를 가져옴

#### SWR 기능

- 빠르고 가볍고 재사용 가능한 데이터 가져오기
- 내장된 캐시 및 요청 중복 제거
- 실시간 경험

### 2. React Query

- fetching or updating data
- 기존 상태 관리 라이브러리들은 fetching을 중요하게 생각하지 않음
- client state와 server state는 다름
- 다양한 고려 필요(Caching, multi request, update, out date, pagination)

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

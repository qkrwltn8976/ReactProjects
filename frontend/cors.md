## CORS

### Origin이란

- URL에서 프로토콜, 도메인, 포트 번호를 합친 부분

### SOP(Same Origin Policy) 동일 출처 정책

- 다른 Origin으로 요청을 보낼 수 없도록 금지하는 브라우저의 기본적인 보안 정책
- 동일한 Origin으로만 요청 보낼 수 있게 하는 것
  ** 서로 다른 Origin끼리 데이터를 주고받아야 하는 경우 존재하여 SOP에 몇 가지 예외 사항을 두어 다른 Origin으로 요청 보낼 수 있게 허용**

#### SOP의 필요성

- CSRF 공격 방지
  - 악의적인 웹 사이트에서 링크가 포함된 메일을 보내는 경우 사용자가 해당 링크 클릭 시 해커가 심어둔 코드가 실행되어 API 요청 보내게 됨
  - 인증정보가 브라우저 단에 있는 경우 서버는 인증된 요청이라 생각하여 개인 정보 응답을 줌

### CORS(Cross Origin Resource Sharing) 교차 출처 자원 공유

- 다른 Origin으로 요청을 보내기 위해 지켜야 하는 정책
- SOP에 의해 막히게 될 요청을 풀어주는 정책
- SOP에 몇 가지 예외 사항을 두어 다른 Origin으로 요청 보낼 수 있게 허용
- 브라우저가 자신이 보낸 요청 및 서버로부터 받은 응답의 데이터가 CORS 정책을 지키는지 검사하여 안전한 요청을 보냈는지 확인

#### CORS 동작원리

- 브라우저는 다른 Origin으로 요청 보낼 때 Origin 헤더에 자신의 Origin 설정
- 서버로부터 응답 받으면 응답의 Access-Control-Allow-Origin 헤더에 설정된 Origin 목록에 요청의 Origin 헤더값이 포함되어 있는지 검사
- 서버에서 응답의 Access-Control-Allow-Origin 헤더에 허용되는 Origin 혹은 와일드카드(\*)를 설정하면 됨

#### CORS 종류

1. Simple Request

- 조건
  - HTTP Method가 GET, POST, HEAD 중 하나
  - Content-Type이 application/x-www-form-urlencoded, multipart/form-data, text/plain 중 하나
  - Headers가 Accept, Accept-language, Content-Language, Content-Type 중 하나

2. Preflight Request
   - CORS Simple Request의 조건을 충족하지 못할 경우 실제 요청 전에 사전 허락을 받는 사전 점검 요청 진행
   - 서버 요청 전 preflight라는 HTTP 요청을 먼저 전송하고 요청이 가능함을 확인받고 나면 본 요청 전송
3. Credentialed Request

- 인증 정보 포함한 요청
- 인증된 요청을 사용하는 방법
- 기본적으로 교차 출처에 대한 요청에는 HTTP나 쿠키 등의 인증에 사용되는 요청 헤더 자동으로 전송되지 않음
- 인증 관련 헤더 설정
  - 클라이언트에서 "credentials: include" 설정
  - 서버에서 "Access-Control-Allow-Credentials: true" 설정을 해야 함

#### CORS 해결 방법

1. Access-Control-Allow-Origin 설정
2. Reverse Proxy 설정

## Date Library

### 1. Moment

- 2011년부터 개발되어 date 라이브러리의 선두였으나 새로운 자바스크립트의 흐름에 맞지 않아 더 이상 업데이트 안함을 선언

#### Moment의 특징

- timezone
  - moment/timezone
- format / 비교
  - 원하는 스타일로 표기 가능
- 오래됨
  - Mutable / Tree shaking X

#### Moment의 단점

- tree shaking 알고리즘이 제대로 작동하지 않음
- mutable한 구조
- 다른 라이브러리들을 추천
  - luxon / dayjs / date-fns / js-Joda

### 2. Dayjs

#### Dayjs 특징

- timezone
  - plugin/timezone
  - plugin/utc
- format / 비교
  - 원하는 스타일로 표기 가능
- 가벼움
  - Tree shaking X

#### Dayjs 장점

- 2kb의 작은 사이즈, 가볍다
- 간결함
- Immutable
- i18n
- 문서 정갈
- 간단한 기능들을 적용할때 좋음

### 3. date-fns

#### date-fns 특징

- timezone
  - date-fns-tz
- format / 비교
  - 원하는 스타일로 표기 가능
- 포괄적임
  - Immutable / Tree shaking까지
- 함수별 import
  - 가능
  - ex) addWeeks

#### date-fns 장점

- Most comprehensive (가장 포괄적인)
- Modular support tree-shaking
- Immutable & Pure & FP(Functional Programming) & i18n

# client

## 협업방법

```bash

git pull origin develop
git checkout -b feature/<개발하고자하는기능>

# 작업이 끝나면 ...

git add .
git commit -m 'feature : <메세지>'
git push origin feature/<개발하고자하는기능>

# PR 생성 후 리뷰 요청하기! (develop 으로!!)
# 끝

# 새로운 작업 시작

git checkout develop

```

## 분업

### 태민

- 회원가입 및 로그인 상태관리
- 예약 및 리뷰 조회
- 예약시간 랜덤생성 알고리즘
- 프로젝트 구조설계 및 레이아웃


### 원영

- 공용 컴포넌트 개발
- 메인페이지
- 프로필 페이지 CRUD
- 예약 목록
- 리뷰 CRUD

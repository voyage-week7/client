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

- 회원가입, 로그인, 로그아웃 (JWT)
- 캘린더, 시간 select
- 지도기능 (kakao map)
- 공유링크

### 원영

- 가게조회 (필터링, 정렬 , 페이지네이션)
- 예약기능 (CRD)
- 리뷰기능 - 사진 업로드
- 마이페이지
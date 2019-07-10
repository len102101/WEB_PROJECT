# GSM 지식인 in 페이지

>GSM 학생들을 위한 지식인 페이지


1. 제작 동기
- 학생들이 코딩을 하면서 생기는 많은 질문들을 선후배, 사제지간에 불편함을 최소화 하여 편하게 물어볼 수 있고
답변자는 내공시스탬을 통해 추후 생기부등 메리트를 얻을 수 있게하기 위해 제작하게 되었다.

2. 세부 기능
- GSM학생이라면 누구나 질문이 가능하다.
- GSM학생이라면 누구나 답변이 가능하다.
- 자신이 질문작성자라면 가장 도움이된 질문을 채택할 수 있다.
- 자신의 답변이 채택 되었다면 내공을 얻게된다.
- 내공을 통한 랭킹시스탬으로 가장 많은 채택을 얻은 답변자를 알 수 있다.

3. 적용 방법
- frontend에서 node_modules를 설치합니다
```
WEB_PROJECT>cd frontend
WEB_PROJECT\frontend>npm install // npm i
```
- backend에서 node_modules를 설치합니다
```
WEB_PROJECT>cd backend
WEB_PROJECT\backend>npm install // npm i
```
- express를 실행합니다.
```
WEB_PROJECT\backend>npm start 
//http://localhost:3000
```

4. 동작 설명
- 본 페이지는 Vue.js와 Node.js를 이용해서 개발 되었습니다.
- Vue.js와 Node.js의 라우터 연결은 다음과 같습니다.
```
//frontend/config/index.js
...
build: {
    index: path.resolve(__dirname, '../../backend/public/index.html'),  

    assetsRoot: path.resolve(__dirname, '../../backend/public'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
}
...
```
```
//backend/routes/index.js
...
router.get('/', function (req, res, next) {
  res.sendFile(path.join(__dirname, '../public', 'index.html'))
});
...
```
- frontend에서 변경 사항이 있을경우 Build작업이 필요합니다.이후 backend로 이동해 start해줍니다.
```
WEB_PROJECT>cd frontend
WEB_PROJECT\frontend>npm run build
```
# Blueprint

## Pages

- [ ] 기사 리스트 (/news/get/:nth)
- [ ] 기사 직접 보기 (/news/get/:nth/:title)
- [ ] 기사 작성하기 (/news/write)

## Organisms

### 기사 리스트

- [ ] 탑 바
- [ ] 기사 열

### 기사 직접 보기

- [ ] 탑 바

### 기사 작성하기

- [ ] 탑 바

## Molecules

### 탑 바

- [x] 셀렉터

### 기사 열

- [x] 기사

### 기사 작성

- [x] 에디터
- [x] 랜더러

## Atoms

- [x] 작성 버튼
- [x] 기사 프리뷰 이미지
- [x] 기사 제목 인풋
- [x] 텍스트 인풋 박스


redux state


{
 editor: {
   title: string;
   content: string;
 },
 opendArticle: {
   title: string;
   content: string;
 }
}

actions

loadArticle(title, content)

writeTitle(title)
writeContent(content)
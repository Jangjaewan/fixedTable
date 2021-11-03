# Fixed Table
자주 사용되는 상단 & 열 고정 테이블

## 상단 고정
css로만 구현된 상단 고정 테이블로 스크롤되는 영역의 <code>overflow</code>값을 <code>scroll</code>로 설정해야 한다.

## 열 고정
css로만 구현된 첫번 째 열 고정 테이블

## 상단 & 열 고정
jQuery를 활용한 상단 또는 열 고정 테이블   
jQuery-ui를 사용하면 <code>thead</code>의 각 항목 오른쪽 라인에 마우스 오버시 나타나는 핸들을 통해 항목의 너비를 조정할 수 있다.

**Plugin Options**
	- **minWidth** : 테이블의 최소 너비 지정 (Default : null)
	- **scrollY** : 테이블의 Max Height 지정 (Default : null)
	- **fixedCell** : 가로 스크롤 시 고정할 column 수 설정 (Default : null)   
```
	//예시) 최소 너비 1200px, 최대 높이 500px, 1번, 2번 째 열 고정 테이블 설정   
	$(".ui-scroll-table").fixedTable({minWidth : 1200, scrollY : 500, fixedCell : 2})
```

**Plugin Method**                
	- 테이블 리사이즈 : <code>$(Selector).tableResize()</code>
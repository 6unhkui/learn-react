<img src="https://user-images.githubusercontent.com/41765537/57375247-e5462e80-71d7-11e9-9195-5d093e0f5f0c.png" width="400"></img><br/>

# React
: 페이스북에서 만든 오픈 소스 javascript 라이브러리로 MVC(Model View Controller) 패턴에서 오직 View만 관여한다.
- vue.js나 Angular.js와 같은 프레임워크가 아닌 UI 라이브러리로 템플릿 엔진이 아니다.

#### 페이스북에서 리액트를 만든 이유 : 

> "우리는 지속해서 데이터가 변화하는 대규모 애플리케이션을 구축하기 위해 React를 만들었습니다." <br/>
(We built React to solve one problem: building large applications with data that changes over time.)

출처 : https://github.com/mikrofusion/react/blob/38818189a518fe307681915995177f748e2115ba/docs/docs/01-why-react.md)

### @React 특징
1. Vitual DOM 지원 (관련 영상: https://youtu.be/BYbgopx44vo)
2. 기존 프레임워크는 Controller, Model 등으로 코드를 분리시키지만, 리액트는 코드를 Component 단 하나만 사용한다.
    - Component : 함수를 이용해서 UI를 재사용할 수 있는 독립적인 단위로 쪼갠 것
3. 뛰어난 가비지 컬렉션, 메모리 관리, 성능 
4. 서버 & 클라이언트 렌더링 둘 다 지원<br/>
보통 자바스크립트 프레임워크나 라이브러리를 이용해 UI를 렌더링 하면 클라이언트만 렌더링함<br/>
    - 서버 사이드 렌더링이 필요한 이유
    1) 만약 페이지가 로드 되고 AJAX 처리를 통해 데이터를 가져오게 했을 경우, 아무 데이터를 보이지 않다가 자바스크립트 처리가 끝난 후 우리가 원하는 UI가 나온다. 즉, 초기 구동 딜레이가 어느정도 있다. 유저에게 쾌적함을 주려면 초기 렌더링을 서버 렌더링으로 하게 하면 된다.
    2) 검색엔진 최적화
    * 리액트는 서버 렌더링을 지원해주는 반면 타 라이브러리,프레임워크는 써드 파티 라이브러리를 이용해 구현해야 한다.
5. UI를 간편하게 수정. UI를 컴포넌트화 하여 효율적으로 재사용
6. 다른 프레임워크나 라이브러리와 혼용 가능

### @React 단점
1. 리액트는 view만 관여하기 때문에 데이터 모델링,ajax,라우팅 등등의 기능이 없다.  하지만 다른 라이브러리를 사용해서 구현하면 된다.
2. IE8 이하 지원하지 않는다. IE8을 꼭 지원해야 한다면 React v0.14 이하를 사용한다.

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


### JSX
xml같은 문법을 네이티브 자바스크립트로 변환 시켜준다.<br/>
babel이 jsx loader를 사용하여 jsx형태 코드를 변환<br/>

<pre><code>ReactDOM.render(<App />, document.getElementById('root'));</code></pre>
ReactDOM은 실제 페이지에 JSX형태 코드를 렌더링 할때 사용한다. <br/>
첫번째 인자는 우리가 렌더링할 JSX 형태 코드 / 두번째 인자는 이 컴포넌트를 렌더링할 Element 


1. Nested Element
모든 JSX 코드는 Container element 안에 포함시켜줘야 한다.

2. Javascript Expression
JSX안에서 자바스크립트를 표현할때는 {}로 Wrapping한다.

3. inline style 
JSX안에서 Style을 설정할때는 String  형식을 사용하지 않고 Key가 camelCase인 객체를 사용한다.

4. 주석
JSX안에서 주석을 작성할때는 {/* ... */}  형식으로 작성
주석 역시도 Container Element 안에 작성한다.

<br/><br/><br/>
### Props 와 State
#### props 
: 컴포넌트 내부의 immutable data
1. jsx 내부에 {this.props.propsName}<br/>
2. 컴포넌트를 사용할때 < > 괄호안에 propsName = "value"<br/>
3. this.props.children 은 기본적으로 갖고있는 props로서 <Cpnt>이 사이에 있는 값이 들어간다</Cpnt><br/>

##### props 기본값 설정 
Component.defaultPorps={...}

##### props Type 검증
: 특정 props값이 특정 type이 아니거나 필수 props인데 입력하지 않았을때 개발자 console에서 경고를 띄우게 할 수 있다.<br/>
컴포넌트가 제대로 사용되기 위해서 + 유지보수를 위해서 사용함<br/>
Component.propType = {...}<br/><br/>


#### state 
: 유동적인 데이터를 보여줄때 사용<br/>
JSX 내부에서 {this.state.stateName}<br/>
1. 초기값 설정 필수
state = { .. }
2. 값을 수정할때는 this.setState({ ... }) 
state는 컴포넌트 내부에 있고 컴포넌트 내부에서 바뀔 수 있다.<br/>
값이 바뀔때마다 컴포넌트는 rerendering이 되고 꼭 setState()를 사용해야 한다.<br/>
setState 함수를 사용하지 않을 경우 리렌더링되지 않는다.<br/>

##### props와 state 차이
: props는 부모 컴포넌트가 자식 컴포넌트에게 넘겨주는 값 (읽기 전용)<br/>
  state는 자기 자신이 들고 있는 값, 변경 할 수 있다 (변경 가능)<br/><br/><br/>

 
* map()
: 데이터 배열을 리액트에서 렌더링 할땐 자바스크립트의 내장함수인 map()을 사용한다.<br/>
map() 메소드는 파라미터로 전달된 함수를 통하여 배열내의 각 요소를 처리하여 그 결과로 새로운 배열을 생성한다.<br/>
arr.map(callback, [thisArg])<br/>
callback 새로운 배열의 요소를 생성하는 함수로서 다음 세가지 인수를 가진다.<br/>
1. currentValue 현재 처리되고 있는 요소
2. index 현재 처리되고 있는 요소의 index값
3. array 메소드가 불려진 배열
thisArg(선택항목) callback 함수 내부에서 사용할 this값을 설정

<br/><br/> 
* webpack 
: 브라우저 위에서 import를 할 수 있게 해주고 자바스크립트 파일들을 하나로 합쳐준다.<br/>
빌드툴. 코드 압축 최적화, scss -> css로 변환시켜줌 <br/><br/>

 
* webpack-dev-server
별도의 서버를 구축하지 않고도 static 파일을 다루는 웹서버를 열 수 있으며<br/>
raact-hot-loader를 통해 스크립트의 바뀐 부부만 리로드 될 수 있게 한다.  <br/><br/>

* hot-loader : 개발서버 실행중에 특정 리액트 컴포넌트가 변경되면 해당 컴포넌트만 업데이트.<br/>
기본적으로 개발서버가 리액트를 호환하지 않으므로<br/>

**#위 학습 내용은 Minjun Kim님의 [React.js] youtube 강의로 공부하였습니다. :)**

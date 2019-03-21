# Redux
<img src="https://user-images.githubusercontent.com/41765537/54652703-0f923e80-4afb-11e9-86aa-099d7783c104.png" width="350"></img><br/>
**: Flux 아키텍쳐를 구현한 라이브러리로, JavaScript 애플리케이션의 state management. SPA에서 state를 관리할때 유용하게 사용된다.** <br/>

### Flux?
- 디자인 패턴중 하나로 단방향 데이터 흐름을 구현하였다. 
* Flux로의 카툰 안내서 : https://bestalign.github.io/2015/10/06/cartoon-guide-to-flux/
- Flux - Redux 차이:<br/>
Flux가 여러 store를 갖는 반면, Redux는 단일 store를 가진다. <br/>
Redux는 dispatcher가 없다. 대신 어떤 작업을 해야하는지에 대해서는 store가 넘겨받았고, 그 작업을 실질적으로 수행하는건 Reducer(변화를 일으키는 함수)이다.<br/>


### @Redux를 사용해야 하는 이유
<img src="https://user-images.githubusercontent.com/41765537/54659797-bc2de980-4b16-11e9-96bb-68f8bbc8dc0c.jpg" width="600"></img><br/>
Redux를 사용하지 않을 경우, A 컴포넌트에서 B 컴포넌트의 값을 변경하거나 컴포넌트간의 state값을 공유해야할 때 props를 이용해 하위 컴포넌트로 데이터를 넘겨주는 방식을 사용하였다. <br/>
이런 식의 여러 컴포넌트를 거쳐 props를 전달하는 방식은 비효율적이고, 애플리케이션의 규모가 커지게 되면 코드의 복잡성을 유발하게 된다. 중간 다리 역할을 하는 컴포넌트에게는 불필요한 props가 전달되고, 최상위 루트 컴포넌트에는 상태 관리 로직이 너무 많아지는 이슈가 생긴다. <br/>
컴포넌트의 state를 global shared state로 저장하여 단순하게 처리하는 것이 Redux이다.<br/>

### @Redux의 구조
- Store : 애플리케이션의 상태를 객체화하여 담고있다. 앱의 모든 상태는 store안에 객체 트리로 저장된다. 스토어엔 접근자(getter)만 있고, 설정자(setter)는 없어 state값을 직접 바꿀 수 없다.
  - Store에 저장된 상태값을 변경 할 수 있는 방법은 action을 Reducer로 dispatch하는 것 뿐이다.
- Action : 상태 변화를 일으킬 때 참조하는 객체로, 무엇이 일어날지 서술되어 있다.
  - 모든 Action 객체에는 type값이 필수로 있어야 한다. type은 액션의 이름과도 같고 대문자로 네이밍을 지정한다.
- Dispatch : 액션을 스토어에 전달하는 과정
- Reducer : 상태트리를 어떻게 변경할지 지정 즉 상태를 변화시키는 로직이 있는 함수
- Subscribe : store값이 필요한 컴포넌트는 store를 구독

#### @Redux의 3가지 원칙
**1. Single Source of Truth**
- 애플리케이션의 state를 사용하기 위해 단 하나의 store를 사용한다.

**2. State is Read-Only**
- 리덕스의 상태,State 값은 읽기 전용이다.
- 즉 state를 절대 직접 변경하면 안된다.
- state값을 update 위해서는 action이 dispatch 되어야 하고, Reducer에서 언제나 새 상태의 객체를 만들어 넣어주어야 한다.

**3. Changes are made with Pure Functions**
- Reducer는 action 객체를 처리하는 함수이다.
  - action은 무엇이 일어날지 서술한 객체일뿐 변화를 일으키지 못한다. 
  - action이 상태트리를 어떻게 변경할지는 Reducer에서 정의한다.
  - Reducer는 (이전)state와 action을 parameter로 받고, 받은 state 값을 복사한다. 복사한 새로운 state값을 update하고 그 값을 반환한다. (이때 주의해야 할 것은 state값은 불변성을 유지해줘야 한다. 이전 state값이 아니라 <b>복사한</b> 새로운 state값에 update 하는 것) <br/>
- Reducer의 조건
  - 순수 함수로 작성되어야 한다.
  - 즉 비동기적 처리를 하면 안된다. 네트워크 및 데이터 베이스로 접근x 인수로 받은 값을 변경x
  - 같은 인수로 실행된 함수는 언제나 같은 값을 반환해야 한다. 그러므로 순수하지 않은 API 사용이 불가하다.(Date.now(), Math.random() x)<br/>
  
### @Redux 설치
<pre><code>$ yarn add redux react-redux</code></pre> * react-redux는 리액트에서 redux를 더욱 간편하게 사용하도록 도와주는 라이브러리<br/><br/>
  
### @폴더 구조
- **actions** : Action 타입 & Action 생성자
- **components** : 프리젠테이셔널 컴포넌트 저장 <br/>
  - 프리젠테이셔널 컴포넌트 : 오직 뷰만 담당하고 DOM 엘리먼트와 스타일이 있다. 리덕스 스토어에 직접 접근하지 않고, 오직 props로만 데이터를 가져올 수 있음. 대부분 state가 없음(있더라도 ui와 관련된 state) 때문에 주로 함수형 컴포넌트(stateless 컴포넌트)이고 최적화를 위한 라이프 사이클 메소드를 필요로 할때 클래스형 컴포넌트로 작성한다.
- **containers** : 컨테이너 컨포넌트 저장 <br/>
  - 컨테이너 컴포넌트 : 프레젠테이셔널 컴포넌트와 컨테이너 컴포넌트들의 관리를 담당한다. DOM 엘리먼트와 스타일을 직접적으로 사용하지 않고 컴포넌트를 감싸는 용도로 사용됨. 스토어와 연결되어 리덕스에 직접 접근 할 수 있는 컴포넌트이다. 스토어에 있는 상태를 props로 받아옴
- **reducers** : 리듀서 파일 저장
- **lib** : 일부 컴포넌트에서 함께 사용되는 파일 저장

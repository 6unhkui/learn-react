# REDUX
<img src="https://user-images.githubusercontent.com/41765537/54652703-0f923e80-4afb-11e9-86aa-099d7783c104.png" width="350"></img><br/>
**: Flux 아키텍쳐를 구현한 라이브러리로, javascript 애플리케이션의 state management. SPA에서 유용하게 사용된다.** <br/>

### Flux?
- 디자인 패턴중 하나로 단방향 데이터 흐름을 구현하였다. 
* Flux로의 카툰 안내서 : https://bestalign.github.io/2015/10/06/cartoon-guide-to-flux/
- Flux - Reucer 차이:<br/>
Flux가 여러 store를 갖는 반면, Redux는 단일 store를 가진다. <br/>
Redux는 dispatcher가 없다. 대신 어떤 작업을 해야하는지에 대해서는 store가 넘겨받았고, 그 작업을 실질적으로 수행하는건 Reducer(변화를 일으키는 함수)이다.<br/>


### Redux를 사용해야 하는 이유
컴포넌트는 local state, 앱은 global state를 가지고 있다. 컴포넌트의 state를 global shared state로 저장하여 사용하기 위해 필요하다.

### Redux의 구조
- Store : 애플리케이션의 상태를 객체화하여 담고있다. 앱의 모든 상태는 store안에 객체 트리로 저장된다. 스토어엔 접근자(getter)만 있다. 설정자(setter)는 없어 직접 바꿀 수 없다.
  - Store에 저장된 상태값을 변경 할 수 있는 유일한 방법은 action을 Reducer로 dispatch하는 것 뿐이다.
- Action : 상태 변화를 일으킬 때, 참조하는 객체로 무엇이 일어날지 서술되어 있다.
  - 모든 Action 객체에는 type값이 필수로 있어야 한다. type은 액션의 이름과도 같고 대문자로 네이밍을 지정한다.
- Dispatch : 액션을 스토어에 전달하는 과정
- Reducer : 상태트리를 어떻게 변경할지 지정 즉 상태를 변화시키는 로직이 있는 함수

#### Redux의 3가지 원칙
**1. Single Source of Truth**
- 애플리케이션의 state를 사용하기 위해 단 하나의 store를 사용한다.

**2. State is Read-Only**
- 애플리케이션의 state를 직접 변경하면 안된다.
- 변경하기 위해서는 action이 dispatch 되어야 한다.

**3. Changes are made with Pure Functions**
- Reducer는 action 객체를 처리하는 함수이다.
  - action은 무엇이 일어날지 서술한 객체일뿐 변화를 일으키지 못한다. 
  - action이 상태트리를 어떻게 변경할지는 Reducer에서 정의한다.
  - Reducer는 (이전)state와 action을 parameter로 받고, 받은 state 값을 복사한다. 복사한 새로운 state값을 update하고 그 값을 반환한다. (이때 주의해야 할 것은 state값은 immutable 해야한다. 이전 state이 아니라 <b>복사한</b> 새로운 state값에 update 하는 것) <br/>
- Reducer의 조건
  - 순수 함수로 작성되어야 한다.
  - 즉 비동기적 처리를 하면 안된다. 네트워크 및 데이터 베이스로 접근x 인수로 받은 값을 변경x
  - 같은 인수로 실행된 함수는 언제나 같은 값을 반환해야 한다. 그러므로 순수하지 않은 API 사용이 불가하다.(Date.now(), Math.random() x)
  
  

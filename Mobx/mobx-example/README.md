## Mobx를 사용하여 슈퍼마켓 구현하기
### @ src 내부 디렉토리 구조
- components : 컴포넌트 저장 <br/>
- stores : MobX observable, action, computed 정의.
  * store간에 관계를 형성할땐 root store를 만들어 다른 스토어들을 불러오고 <br/>
    constructor에서 각 스토어를 불러온 다음에, this.스토어명 = new 새로운스토어(this)로 입력해준다.<br/>
    각각의 store에 this로 root store를 넣어주었으니 이를 받아주는 생성자를 각 store에 추가해준다.
    <pre><code>constructor(root) {
      this.root = root;
    }
    </code></pre>
    
    그리고 Provider에 root store를 props로 전달해준다.
    
    ex) A 스토어에서 B 스토어의 값에 접근할 경우
    A스토어 내에서 this.root.B스토어명.원하는 observable 값<br/><br/>
    
### @ MobX 의 리액트 컴포넌트 최적화
1. 리스트를 렌더링 할 땐, 컴포넌트에 리스트 관련 데이터만 props 로 넣자
2. 세부참조 (dereference)는 최대한 늦게하자
3. 함수는 미리 바인딩하고, 파라미터는 내부에서 넣어주기

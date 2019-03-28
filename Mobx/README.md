# Mobx
: 상태 관리 라이브러리로 Redux가 함수형 아이디어를 적용했다면 Mobx는 반응형 아이디어를 적용하였다. <br/>
Mobx는 반응형 프로그래밍 패러다임의 옵저버 패턴을 적용하여, <br/>
오직 상태(데이터)만 관찰하고 상태가 변경되었을때 반응한다. <br/>
Mobx는 상태를 Observable하게 관리하기 위해 사용하는 상태 관리 라이브러리이다. <br/><br/>

### @ Mobx의 주요 개념
**1) @Observable State <br/>**
: 관찰 대상이 되는 상태 <br/>
주로 상태 객체를 넘기거나, 클래스 내부에서 데코레이터로 사용된다. <br/>
데코레이터 문법을 사용하여 @observable을 프로퍼티에 선언함으로서 observable한 값으로 만들 수 있다. <br/>
<pre><code>@observable number = 1;</code></pre>

**2) @Coumputed Value**
: 연산된 값으로 일종의 수식이다. <br/>
observable값이 파생되는, 특별히 계산된 결과가 필요한 경우에 사용한다.<br/>
주로 성능 최적화에 사용되며, 연산에 기반되는 observable 값이 변경되면 <br/>
그 값이 파생되어 Computed 값도 변경되고 이렇게 변경되는 값 역시 참조할 수 있다. <br/>

**3) @Action**<br/>
: observable값의 변화를 일으키는 함수<br/>
Action 역시도 성능 최적화에 사용되며, Redux와 달리 객체상태로 만들지 않는다. <br/>

**4) Reaction**<br/>
: Coumputed Value와 비슷하지만 Coumputed Value가 특정 값을 연산할때만 처리되는 반면<br/>
Reaction은 값이 바뀔때마다 할일을 정한다. observable 값의 내부의 값이 바뀔때마다 호출 할 수 있다.<br/>

### @ Mobx Data Flow
<img src="https://user-images.githubusercontent.com/41765537/55053029-396cd780-509e-11e9-8ad0-ae538c55ec03.png" width="800"></img><br/>

### @ Mobx 설치
<pre><code>$ yarn add mobx mobx-react</code></pre>

### @ Decorator와 함께 사용하기
decorator를 사용하기 위해서는 babel 설정을 추가해줘야 한다.
- decorator 모듈 패키지 설치 
<pre><code>$ yarn add @babel/plugin-proposal-decorators</code></pre>

- create-react-app의 기본 환경에서는 babel 설정을 커스터마이징 할 수 없으므로 추가적인 작업이 필요함
1) yarn eject으로 웹팩 설정을 외부로 꺼낸 후에 변경하는 방법
<pre><code>$ yarn eject</code></pre>

<pre><code><b>package.json</b>에서 수정

  "babel": {
    "presets": [
      "react-app"
    ],
    "plugins": [
        ["@babel/plugin-proposal-decorators", { "legacy": true}],
        ["@babel/plugin-proposal-class-properties", { "loose": true}]
    ]
  }
</code></pre>


*Experimental support for decorators is a feature that is subject to change in a future release 에러가 뜰 경우?*<br/>
In VSCode, Go to File => Preferences => Settings (or Control+comma) and it will open the User Settings file.<br/>
Add "javascript.implicitProjectConfig.experimentalDecorators": true 변경<br/>

2) 이미 최적화된 create-react-app을 그대로 사용하는 방법 (react-app-rewired) <br/>
react-app-rewired를 사용하여 리액트 스크립트의 웹팩 설정에 새로운 바벨 설정을 주입하기
<pre><code>$ yarn add react-app-rewired</code></pre>

프로젝트 루트 디렉토리에
<pre><code><b>config-overrides.js</b>

const { injectBabelPlugin } = require('react-app-rewired');

module.exports = function override(config) {
  config = injectBabelPlugin(['@babel/plugin-proposal-decorators', {
    "legacy": true
  }], config);

  return config;
}
</code></pre>
참고) [주노준호님 - Create-react-app Mobx, Router 환경 구성](https://junojunho.com/front-end/create-react-app-with-mobx/)

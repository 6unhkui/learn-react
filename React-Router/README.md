# React-Router
## SPA (Single Page Application)
: 단일 페이지 어플리케이션. <br/>
  전통적인 페이지는 여러 페이지로 구성되어 유저가 요청할때마다 서버에서 리소스와 데이터를 전달받아 <br/>
  해석한 후 렌더링한다. 웹에서 제공하는 데이터량이 많아지면서 속도 문제가 야기되고, <br/>
  이를 해결하기 위해 캐싱과 압축 서비스(css,js 리소스 등을 cdn 형태로)를 제공하지만 <br/>
  사용자의 인터렉션이 많은 모던 웹 애플리케이션에서는 서버에서의 렌더링이 곧 서버 자원을 렌더링 하는데 <br/>
  사용한다는 의미기 때문에 불필요한 트래픽 낭비를 낳게된다. <br/>
  예를 들어 메뉴바, footer와 같이 애플리케이션 내 공통적으로 사용되는 모듈도 페이지 이동 마다 <br/>
  서버에서 코드를 생성하고, 클라이언트에서 코드를 렌더링한다. <br/><br/>
  SPA에서는 뷰 렌더링을 유저 웹 브라우저에서 담당하고, 애플리케이션을 우선 웹 브라우저에 로드시킨 후 <br/>
  필요한 데이터만 전달받아 보여주기 때문에 전체적인 트래픽을 감소할 수 있다. <br/><br/>
  
## Router
: 

#### React-Router 설치
<pre><code>$ yarn add react-router-dom</code></pre>

#### NOTH_PATH 설정 - 파일 import시 절대 경로로 불러오도록
<pre><code><b>package.json에서 script 설정 부분</b>

"start": "NODE_PATH=src react-scripts start",
"build": "NODE_PATH=src react-scripts build",</code></pre>

- Windows의 경우
<pre><code>$ yarn add cross-env</code></pre>
<pre><code><b>package.json에서 script 설정 부분</b>

"start": "<b>cross-env</b> NODE_PATH=src react-scripts start",
"build": "<b>cross-env</b> NODE_PATH=src react-scripts build",</code></pre>

#### BrowserRouter 적용 - HTML5의 history API를 사용하여 페이지의 리로드 없이 주소를 교체할 수 있도록
<pre><code><b>src/Root.js //최상위 루트 컴포넌트</b>

(...)
import {BrowserRouter as Router} from 'react-router-dom';
import App from './App';

const Root = () => {
   return (
      <'Router>
          <'App/>
      <'/Router>
  );
};
</code></pre>

#### 라우트 설정
<pre><code><b>src/App.js</b>

(...)
const App = () => {
   return (
      <'div>
         <'Route exact path="/" component={Home}/> //exact는 주소가 path와 정확히 일치할때만 보이도록 설정하는 것
         <'Route path="/about" component={About}/>
      <'/div>
  );
};
</code></pre>

#### 라우트 파라미터
라우트의 경로로 특정 값을 넣는 방법 : 1)parmas 사용 2)Query String 사용 


#### 자세한 실습 내용은 [velopert님 블로그](https://velopert.com/3417) 참고
참고) https://poiemaweb.com/js-spa / https://linked2ev.github.io/devlog/2018/08/01/WEB-1.-What-is-SPA/ /

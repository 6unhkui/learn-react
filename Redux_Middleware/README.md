# Redux Middleware
dispatch() 메소드 실행 전후에 원하는 작업을 할 수 있게 하는 도구. 액션과 리듀서 사이의 중간자리라고 볼 수 있다.

### @Logger Middleware (로그 기록)
**1-1. 미들웨어 생성**
<pre><code><b>loggerMiddleware.js</b>

const loggerMiddleware = store => next => action => { 
    console.log('현재 상태', store.getState());
    console.log('액션', action);
    
    const result = next(action); 
    //next : store.dispatch와 비슷한 역할을 한다. 차이점은 next(action)을 했을때,
      그 다음 처리할 미들웨어로 액션을 넘겨주고, 추가로 처리할 미들웨어가 없다면 바로 리듀서에 넘겨준다.
      store.dispatch는 다음 미들웨어에 넘기는 것이 아니라 액션을 처음부터 디스패치한다.
    
    console.log('다음 상태', store.getState());
    console.log('\n');
    return result;
}

export default loggerMiddleware;
</code></pre>


**1-2. 미들웨어 적용**
<pre><code><b>store.js</b>

import { createStore, applyMiddleware } from 'redux';
import modules from './modules';
import loggerMiddleware from './lib/loggerMiddleware';

const store = createStore(modules, applyMiddleware(loggerMiddleware));

export default store;
</code></pre>

----
**2. redux-logger 라이브러리 사용하기**
<pre><code>$ yarn add redux-logger //redux-logger 설치</code></pre>
<pre><code><b>store.js</b>

import { createStore, applyMiddleware } from 'redux';
import modules from './modules';
import {createLogger} from 'redux-logger';

const logger = createLogger();
const store = createStore(modules, applyMiddleware(logger));

export default store;
</code></pre>

but, 주로 로그 기록시, logger middleware보단 개발자도구인 Redux DevTools를 많이 사용함 <br/><br/>

## 비동기 작업을 처리하는 Middleware
### @redux-thunk
**thunk란?** 특정 작업을 나중에 할 수 있도록 미루려고 함수 형태로 감싼것을 의미함 <br/>
**redux-thunk :** 객체가 아닌 함수도 디스패치 할 수 있게 하여, 일반 액션 객체로는 할 수 없는 작업들을 가능하도록 함. <br/>이때 생성되는 함수는 액션 생성 함수가 아니라 <b>thunk 생성 함수</b>라고 한다. <br/>thunk 생성 함수에서는 dispatch와 getState를 파라미터로 가지는 새로운 함수를 만들어서 반환해야 한다.<br/>
thunk 생성 함수 내부에서는 네트워크 요청을 해도 되며, 또 다른 종류의 액션들을 여러번 디스패치 할 수도 있다.

**1. redux-thunk 설치 및 적용**
<pre><code>$ yarn add redux-thunk</code></pre>

# Redux Middleware
dispatch() 메소드 실행 전후에 원하는 작업을 할 수 있게 하는 도구. 액션과 리듀서 사이의 중간자리라고 볼 수 있다.

### Logger Middleware (로그 기록)
**미들웨어 생성**
<pre><code>
<b>loggerMiddleware.js</b>

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


**미들웨어 적용**
<pre><code>
<b>store.js</b>

import { createStore, applyMiddleware } from 'redux';
import modules from './modules';
import loggerMiddleware from './lib/loggerMiddleware';

const store = createStore(modules, applyMiddleware(loggerMiddleware));

export default store;
</code></pre>

----
**redux-logger 라이브러리 사용하기**
<pre><code>$ yarn add redux-logger //redux-logger 설치</code></pre>
<pre><code>
<b>store.js</b>

import { createStore, applyMiddleware } from 'redux';
import modules from './modules';
import {createLogger} from 'redux-logger';

const logger = createLogger();
const store = createStore(modules, applyMiddleware(logger));

export default store;
</code></pre>

but, 주로 로그 기록시, logger middleware보단 개발자도구인 Redux DevTools를 많이 사용함

## 비동기 작업을 처리하는 Middleware
### redux-thunk


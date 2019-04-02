# ETC
## CRA v2 프로젝트 내 IE 지원
<pre><code>$ yarn add react-app-polyfill</code></pre>
<pre><code><b>src/index.js</b>// This must be the first line

import 'react-app-polyfill/ie9';
import 'react-app-polyfill/ie11';
</code></pre>

## Mobx가 IE에서 작동되지 않는 이슈 발생하였을 때
기존 설치된 Mobx@5.x를 remove하고 Mobx 버전을 4.x로 다운그레이드 시킨다.
<pre><code>$ yarn add mobx@4.9.4</code></pre>
1. npx create-react-app client && cd client

- npm install -g express express-generator 서버설정
  express server --view=ejs 프로젝트 디렉토리 , ejs 뷰엔징 생성
  cd server && npm install 해당 디렉토리로 이동 npm 모듈 설치

2. npm install cors nodemon http-proxy-middleware axios
3. npm install react-router-dom sass gsap @studio-freight/lenis
4. npm install prettier --save-dev

- npm install eslint --save-dev
- npm install eslint-config-prettier --save-dev

npm install --save-dev eslint-import-resolver-typescript
Typescript 프로젝트에서 모듈 및 파일경로를 해석하는 역할
npm install --save-dev eslint-plugin-import
import문 관련된 규칙 ( import 순서 등 )
npm install --save-dev eslint-plugin-jsx-a11y
웹 접근성 규칙 검사
npm install --save-dev eslint-plugin-react
JSX 및 React 컴포넌트 관련 규칙
npm install --save-dev eslint-plugin-react-hooks
React Hooks 사용 관련 규칙
npm install --save-dev @typescript-eslint/parser@5.62.0
Typescript AST와 ESLint AST 구조가 달라서 호환을 위해 사용하는 Plugin
npm install --save-edv @typescript-eslint/eslint-plugin@5.62.0
Typescript 관련 규칙
npm i -D @stylistic/eslint-plugin
이 플러그인을 사용하면 더 이상 TypeScript를 위해 주로 JavaScript를 비활성화할 필요가 없습니다. 규칙은 두 언어 모두에 적용됩니다.

.eslintc.json 적성 .eslintignore 작성
npm install bcrypt
npm install concurrently
npm install body-parser

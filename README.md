# 트리플 과제전형

트리플 홈페이지 애니메이션 구현 과제

## 프로젝트 실행

`yarn install && yarn start`

### 디렉토리 구조
```
src/
└── components/
      └── AnimateSection
            ├── AnimateSection.ts
            ├── styles.ts
            ├── utils.ts
            └── index.ts
App.tsx
...
```
단일 섹션을 구현하기 위해 components 디렉토리에 AnimateSection 컴포넌트를 생성하고 사용한 유틸함수 및 스타일 코드 모두 단일 폴더 내부에 배치하였습니다.

### 주요 사용 기술 및 코드
- 영역별 등장 애니메이션
```ts
const slideUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0%);
  }
`

const animationStyles = css`
  animation-name: ${slideUp};
  animation-duration: 0.7s;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards;
`
...(중략)

export const AwardsContainer = styled.div<{ animate: boolean }>`
  ...(생략)

  ${(props) => props.animate && animationStyles}
  animation-delay: 0.2s;
`
```
styled-components의 keyframes를 사용하여 slideUp 애니메이션을 구현하고 세부 스펙을 animationStyles에 함께 정의하여 섹션 안에있는 개별 컨테이너의 animate prop이 true가 될 경우 동작하도록 코드를 작성하였습니다. 애니메이션 사이 간격은 animation-delay 속성을 활용하여 각각 0s, 0.1s, 0.2s로 차이를 두었습니다.

- 숫자가 올라가는 애니메이션

<img width="752" alt="스크린샷 2022-06-28 오후 10 55 39" src="https://user-images.githubusercontent.com/61869246/176196812-ba35e08a-2640-40c5-920d-cd6e028bbdb1.png">
숫자 증가 속도가 느려지는 효과를 구현하기 위해 아래 링크의 easeOutExpo 함수를 활용하였습니다.   

(https://spicyyoghurt.com/tools/easing-functions).  


```ts
function easeOutExpo(t: number, b: number, c: number, d: number) {
  return t === d ? b + c : c * (-Math.pow(2, (-10 * t) / d) + 1) + b
}

export const numIncrease = (
  ref: React.RefObject<HTMLSpanElement>,
  from: number,
  to: number,
  duration: number,
) => {
  const start = new Date().getTime()

  const timer = setInterval(() => {
    const time = new Date().getTime() - start
    const num = Math.ceil(easeOutExpo(time, from, to - from, duration))
    if (ref.current) ref.current.innerText = String(num)
    if (time >= duration) clearInterval(timer)
  }, duration / to)

  if (ref.current) ref.current.innerText = String(from)
}
```
`numIncrease`함수는 DOM 제어를 위한 ref object, 애니메이션 시작, 종료, 지속시간(from, to, duration) 을 parameter로 받아 숫자 증가 애니메이션을 구현합니다. setInterval 내부의 콜백함수가 주기적으로 실행되며 지속시간에 도달할 경우 clearInterval을 통해 interval을 해제 합니다. 

import React, { useEffect, useRef } from 'react'
import * as S from './styles'
import GoogleBadge from '../../images/play-store2x.png'
import AppleBadge from '../../images/badge-apple4x.png'

export default function AnimateSection() {
  const ref1 = useRef<HTMLHeadingElement>(null)
  const ref2 = useRef<HTMLHeadingElement>(null)
  const ref3 = useRef<HTMLHeadingElement>(null)

  function easeOutExpo(t: number, b: number, c: number, d: number) {
    return t === d ? b + c : c * (-Math.pow(2, (-10 * t) / d) + 1) + b
  }

  const numIncrease = (
    ref: React.RefObject<HTMLHeadingElement>,
    targetNum: number,
  ) => {
    const from = 0
    const to = targetNum
    const duration = 2000

    const start = new Date().getTime()

    const timer = setInterval(() => {
      const time = new Date().getTime() - start
      const num = Math.ceil(easeOutExpo(time, from, to - from, duration))
      console.log(num)
      if (ref.current) ref.current.innerText = String(num)
      if (time >= duration) clearInterval(timer)
    }, duration / to)

    if (ref.current) ref.current.innerText = String(from)
  }

  useEffect(() => {
    // const $h1 = h1Ref.current as HTMLHeadingElement
    numIncrease(ref1, 350)
    numIncrease(ref2, 21)
    numIncrease(ref3, 650)
  })

  return (
    <S.SectionContainer>
      <S.ContentLogo>2019년 12월 기준</S.ContentLogo>
      <S.MetricsContainer>
        <S.MetricItem>
          <strong>
            <span ref={ref1}>{0}</span>만 명
          </strong>
          의 여행자
        </S.MetricItem>
        <S.MetricItem>
          <strong>
            <span ref={ref2}>{0}</span>만 개
          </strong>
          의 여행 리뷰
        </S.MetricItem>
        <S.MetricItem>
          <strong>
            <span ref={ref3}>{0}</span>만 개
          </strong>
          의 여행 일정
        </S.MetricItem>
      </S.MetricsContainer>
      <S.AwardsContainer>
        <S.AwardItem style={{ backgroundImage: `url(${GoogleBadge})` }}>
          2018 구글 플레이스토어
          <br />
          올해의 앱 최우수상 수상
        </S.AwardItem>
        <S.AwardItem style={{ backgroundImage: `url(${AppleBadge})` }}>
          2018 애플 앱스토어
          <br />
          오늘의 여행앱 선정
        </S.AwardItem>
      </S.AwardsContainer>
    </S.SectionContainer>
  )
}

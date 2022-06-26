import React, { useEffect, useRef, useState } from 'react'
import * as S from './styles'

import { numIncrease } from './utils'

import GoogleBadge from '../../images/play-store2x.png'
import AppleBadge from '../../images/badge-apple4x.png'

const FROM = 0
const TO = 2000

export default function AnimateSection() {
  const [animate, setAnimate] = useState(false)

  const spanRef1 = useRef<HTMLSpanElement>(null)
  const spanRef2 = useRef<HTMLSpanElement>(null)
  const spanRef3 = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    setAnimate(true)
    numIncrease(spanRef1, FROM, 700, TO)
    numIncrease(spanRef2, FROM, 100, TO)
    numIncrease(spanRef3, FROM, 470, TO)
  }, [])

  return (
    <S.SectionContainer>
      <S.ContentLogo animate={animate}>2021년 12월 기준</S.ContentLogo>
      <S.MetricsContainer animate={animate}>
        <S.MetricItem>
          <strong>
            <span ref={spanRef1}>{0}</span>만 명
          </strong>
          의 여행자
        </S.MetricItem>
        <S.MetricItem>
          <strong>
            <span ref={spanRef2}>{0}</span>만 개
          </strong>
          의 여행 리뷰
        </S.MetricItem>
        <S.MetricItem>
          <strong>
            <span ref={spanRef3}>{0}</span>만 개
          </strong>
          의 여행 일정
        </S.MetricItem>
      </S.MetricsContainer>
      <S.AwardsContainer animate={animate}>
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

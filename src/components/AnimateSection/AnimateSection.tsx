import React, { useEffect, useRef } from 'react'
import * as S from './styles'

import { numIncrease } from './utils'

import GoogleBadge from '../../images/play-store2x.png'
import AppleBadge from '../../images/badge-apple4x.png'

export default function AnimateSection() {
  const ref1 = useRef<HTMLHeadingElement>(null)
  const ref2 = useRef<HTMLHeadingElement>(null)
  const ref3 = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    numIncrease(ref1, 0, 350, 2000)
    numIncrease(ref2, 0, 21, 2000)
    numIncrease(ref3, 0, 650, 2000)
  }, [])

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

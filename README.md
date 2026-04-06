# 🐾 DoDay — 랜딩페이지

> **"작은 습관이 내일의 나를 만든다"**
> DoDay 앱 홍보용 인터랙티브 랜딩페이지입니다.

<br />

## ✨ 미리보기

![DoDay 랜딩페이지](https://via.placeholder.com/800x400/F5F0E8/C49A6C?text=DoDay+Landing+Page)

<br />

## 🎯 프로젝트 소개

**DoDay 랜딩페이지**는 루틴 관리 앱 **DoDay**를 홍보하기 위한 SPA(Single Page Application)입니다.

쿼카 마스코트와 따뜻한 베이지/브라운 컬러를 활용한 아기자기한 디자인으로,
앱의 주요 기능을 인터랙티브하게 소개합니다.

<br />

## 🐨 주요 기능

| 기능 | 설명 |
|------|------|
| 쿼카 인터랙션 | 마우스 따라 움직이고, 클릭하면 통통 튀어요 |
| 스크롤 애니메이션 | 스크롤 내릴 때마다 섹션이 부드럽게 등장해요 |
| 스트릭 데모 | 이번 주 루틴 달성 현황을 시각적으로 보여줘요 |
| 약관 모달 | 이용약관, 개인정보처리방침 등을 모달로 확인해요 |
| 반응형 레이아웃 | 모바일/태블릿/데스크톱 모두 지원해요 |

<br />

## 🛠️ 기술 스택

| 기술 | 버전 | 용도 |
|------|------|------|
| React | 18.x | UI 프레임워크 |
| Framer Motion | 최신 | 애니메이션 |
| JavaScript (ES6+) | - | 메인 언어 |

<br />

## 📁 프로젝트 구조

```
src/
├── components/
│   ├── Navbar.jsx       # 상단 네비게이션
│   ├── Hero.jsx         # 히어로 섹션 (쿼카 인터랙션)
│   ├── Features.jsx     # 기능 소개 섹션
│   ├── StreakDemo.jsx    # 스트릭 데모 섹션
│   ├── Download.jsx     # 다운로드 섹션
│   └── Footer.jsx       # 푸터 + 약관 모달
├── assets/
│   └── quokka.png       # 쿼카 마스코트 이미지
├── App.jsx
├── index.js
└── index.css
```

<br />

## 🚀 로컬 실행 방법

```bash
# 레포 클론
git clone https://github.com/{username}/doday-landing.git
cd doday-landing

# 의존성 설치
npm install

# 개발 서버 실행
npm start
```

브라우저에서 `http://localhost:3000` 접속하면 확인할 수 있어요!

<br />

## 🎨 디자인 컨셉

| 항목 | 내용 |
|------|------|
| 컬러 | 베이지 (#F5F0E8), 브라운 (#3D2B1F), 카멜 (#C49A6C) |
| 마스코트 | 쿼카 — 따뜻하고 귀여운 이미지 |
| 무드 | 아기자기하고 따뜻한 느낌 |
| 애니메이션 | Framer Motion 기반 부드러운 인터랙션 |

<br />

## 📱 섹션 구성

```
🏠 Navbar      — DoDay 로고 + 메뉴
🐾 Hero        — 쿼카 마스코트 + 메인 카피 + CTA 버튼
✨ Features    — 루틴 설정 / 데일리 체크 / 성취도 리포트
📊 StreakDemo  — 이번 주 달성 현황 데모
📲 Download   — 앱 다운로드 CTA
📋 Footer     — 서비스 링크 + 약관 모달
```

<br />

## 🔗 관련 레포지토리

| 레포 | 설명 |
|------|------|
| [doday-backend](https://github.com/{username}/doday) | Spring 백엔드 서버 |
| [doday-app](https://github.com/{username}/doday-app) | Flutter 앱 (예정) |

<br />

---

<div align="center">
  <sub>Built with ☕ and 🐾 | DoDay Landing Page</sub>
</div>
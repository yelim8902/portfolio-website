# 🌟 이예림 포트폴리오 웹사이트

> 기술과 금융을 연결하는 빌더(Builder)의 포트폴리오

[![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen)](https://yelim8902.github.io/portfolio-website/)
[![GitHub](https://img.shields.io/badge/GitHub-Repository-blue)](https://github.com/yelim8902/portfolio-website)

## 🎯 프로젝트 소개

소프트웨어와 금융공학을 전공하는 학생의 개인 포트폴리오 웹사이트입니다. 
현대적이고 인터랙티브한 디자인으로 기술적 역량과 금융 전문성을 효과적으로 표현합니다.

## ✨ 주요 특징

### 🎨 현대적 디자인
- **글래스모피즘** 디자인 적용
- **SoCar 스타일** 깔끔하고 세련된 UI/UX
- **반응형 디자인**으로 모든 디바이스 지원

### 🎭 인터랙티브 기능
- **프로필 카드 전환**: 클릭 시 기술/금융 카드 전환
- **부드러운 애니메이션**: 겹쳐졌다가 분리되는 분할 애니메이션
- **호버 효과** 및 다양한 시각적 피드백

### 🎬 고급 애니메이션
- 페이지 로드 시 **분할 애니메이션**
- **타이핑 애니메이션**으로 타이틀 표시
- **스크롤 기반** 요소 등장 효과
- **패럴랙스 효과** 적용

## 🛠️ 기술 스택

### Frontend
- **HTML5** - 시맨틱 마크업
- **CSS3** - Flexbox, Grid, 애니메이션
- **JavaScript (ES6+)** - 인터랙티브 기능

### 디자인 & 스타일링
- **글래스모피즘** 디자인 패턴
- **그라데이션** 및 **그림자** 효과
- **커스텀 애니메이션** (CSS + JavaScript)

### 배포 & 호스팅
- **GitHub Pages** - 정적 웹사이트 호스팅
- **Git** - 버전 관리

## 📁 프로젝트 구조

```
portfolio-website/
├── index.html              # 메인 HTML 파일
├── styles.css              # 스타일시트
├── script.js               # JavaScript 기능
├── README.md               # 프로젝트 문서
├── 이예림_취업용_증명사진.jpeg # 프로필 사진
├── 나_흑백.jpeg            # 스케치 프로필
└── [프로젝트 이미지들]      # 프로젝트 관련 이미지
```

## 🎨 디자인 하이라이트

### 프로필 카드 시스템
- **두 개의 겹친 카드**: 기술(Developer) & 금융(Analyst)
- **클릭 전환 기능**: 어떤 카드를 클릭해도 숨겨진 카드가 나타남
- **테마별 색상**: 파란색(기술) & 녹색(금융)

### 애니메이션 효과
- **분할 애니메이션**: 하나에서 둘로 분리되는 시각적 메타포
- **스케일 효과**: 부드러운 크기 변화
- **z-index 전환**: 자연스러운 레이어 변경

## 🚀 실행 방법

### 로컬 실행
1. 저장소 클론
```bash
git clone https://github.com/yelim8902/portfolio-website.git
```

2. 디렉토리 이동
```bash
cd portfolio-website
```

3. 로컬 서버 실행 (선택사항)
```bash
# Python 3
python -m http.server 8000

# Node.js (http-server 패키지 필요)
npx http-server

# VS Code Live Server 확장 사용
```

4. 브라우저에서 접속
```
http://localhost:8000
```

### 온라인 데모
🌐 **Live Demo**: [https://yelim8902.github.io/portfolio-website/](https://yelim8902.github.io/portfolio-website/)

## 📱 반응형 지원

- **데스크톱**: 1200px 이상
- **태블릿**: 768px - 1199px  
- **모바일**: 767px 이하

모든 디바이스에서 최적화된 사용자 경험을 제공합니다.

## 🎯 주요 섹션

1. **Hero** - 프로필 카드 & 소개
2. **About** - 교육 배경 & 블로그 링크
3. **Projects** - 주요 프로젝트 4개 소개
4. **Skills** - 기술 스택 분류별 정리
5. **Activities** - 타임라인 형태의 활동 내역
6. **Awards** - 수상 경력
7. **Contact** - 연락처 정보 & 폼

## 🔧 커스터마이징

### 색상 변경
```css
:root {
  --primary-color: #3498db;    /* 기술 테마 색상 */
  --secondary-color: #2ecc71;  /* 금융 테마 색상 */
  --text-color: #2c3e50;       /* 메인 텍스트 */
}
```

### 애니메이션 속도 조정
```css
.profile-card {
  transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
```

## 📈 성능 최적화

- **이미지 최적화**: 적절한 크기 및 포맷
- **CSS 애니메이션**: GPU 가속 활용
- **지연 로딩**: 스크롤 기반 콘텐츠 로딩
- **압축**: 최소화된 CSS/JS

## 🤝 기여 방법

1. 이 저장소를 Fork 합니다
2. 새로운 브랜치를 생성합니다 (`git checkout -b feature/amazing-feature`)
3. 변경사항을 커밋합니다 (`git commit -m 'Add some amazing feature'`)
4. 브랜치에 Push 합니다 (`git push origin feature/amazing-feature`)
5. Pull Request를 생성합니다

## 📄 라이선스

이 프로젝트는 개인 포트폴리오 용도로 제작되었습니다.

## 📞 연락처

- **이메일**: yelim2849@gmail.com
- **GitHub**: [@yelim8902](https://github.com/yelim8902)
- **포트폴리오**: [https://yelim8902.github.io/portfolio-website/](https://yelim8902.github.io/portfolio-website/)

---

<div align="center">

**⭐ 이 프로젝트가 도움이 되셨다면 별표를 눌러주세요! ⭐**

</div>

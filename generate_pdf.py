import pdfkit
import requests
from pathlib import Path

def generate_portfolio_pdf():
    """포트폴리오 웹사이트를 PDF로 변환"""
    
    url = "https://yelim8902.github.io/portfolio-website/"
    output_path = "이예림_포트폴리오.pdf"
    
    # PDF 생성 옵션
    options = {
        'page-size': 'A4',
        'margin-top': '0.75in',
        'margin-right': '0.75in',
        'margin-bottom': '0.75in',
        'margin-left': '0.75in',
        'encoding': "UTF-8",
        'no-outline': None,
        'enable-local-file-access': None,
        'print-media-type': None,
        'disable-smart-shrinking': None,
        'zoom': 0.8,
        'javascript-delay': 3000,  # 3초 대기 (애니메이션 로드)
        'load-error-handling': 'ignore',
        'load-media-error-handling': 'ignore'
    }
    
    try:
        print("웹사이트를 PDF로 변환 중...")
        pdfkit.from_url(url, output_path, options=options)
        print(f"✅ PDF 생성 완료: {output_path}")
        return True
    except Exception as e:
        print(f"❌ PDF 생성 실패: {e}")
        print("\n해결 방법:")
        print("1. wkhtmltopdf 설치: brew install wkhtmltopdf (Mac)")
        print("2. 또는 브라우저에서 Ctrl+P → PDF로 저장 사용")
        return False

if __name__ == "__main__":
    generate_portfolio_pdf()

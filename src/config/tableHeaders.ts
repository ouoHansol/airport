// 테이블 헤더 설정 파일
// 페이지별로 다른 헤더를 중앙에서 관리

export const TABLE_HEADERS = {
  // 점검 관련 헤더
  INSPECTION: [
    'No',
    '점검그룹번호',
    '항목번호', 
    '주기',
    '점검코드',
    '점검항목',
    '점검방법',
    '시행여부'
  ],
  
  // 사용자 관리 헤더
  USER: [
    'No',
    '사용자ID',
    '사용자명',
    '부서',
    '역할',
    '상태',
    '최종로그인'
  ],
  
  // 장비 관리 헤더
  EQUIPMENT: [
    'No',
    '장비ID',
    '장비명',
    '위치',
    '상태',
    '최종점검',
    '다음점검'
  ],
  
  // 공지사항 헤더
  NOTICE: [
    'No',
    '제목',
    '작성자',
    '작성일',
    '조회수',
    '상태'
  ],
  
  // 로그 헤더
  LOG: [
    'No',
    '시간',
    '사용자',
    '액션',
    '상세내용',
    'IP주소'
  ]
}

// 기본 헤더 (점검 관련)
export const DEFAULT_HEADERS = TABLE_HEADERS.INSPECTION

// 헤더 타입 정의
export type HeaderType = keyof typeof TABLE_HEADERS

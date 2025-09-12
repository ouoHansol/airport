// 테이블 헤더 설정 파일

export const TABLE_HEADERS = {
  // 표준점검항목 관련 헤더
  DEFAULT_INSPECTION: [
    '',
    'No',
    '표준명',
    '시설종류', 
    '재·개정상태',
    '등록일',
    '개정',
    '개정이력',
    'Option'
  ],
}

// 기본 헤더 (점검 관련)
export const DEFAULT_HEADERS = TABLE_HEADERS.DEFAULT_INSPECTION

// 헤더 타입 정의
export type HeaderType = keyof typeof TABLE_HEADERS

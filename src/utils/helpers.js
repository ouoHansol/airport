// 공통 유틸리티 함수들

/**
 * 날짜를 포맷팅하는 함수
 * @param {Date} date - 포맷팅할 날짜
 * @param {string} format - 날짜 형식 (기본값: 'YYYY-MM-DD')
 * @returns {string} 포맷팅된 날짜 문자열
 */
export function formatDate(date, format = 'YYYY-MM-DD') {
  if (!date) return '';
  
  const d = new Date(date);
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  
  return format
    .replace('YYYY', year)
    .replace('MM', month)
    .replace('DD', day);
}

/**
 * 문자열을 대문자로 변환하는 함수
 * @param {string} str - 변환할 문자열
 * @returns {string} 대문자로 변환된 문자열
 */
export function toUpperCase(str) {
  return str ? str.toUpperCase() : '';
}

/**
 * 로컬 스토리지에 데이터를 저장하는 함수
 * @param {string} key - 저장할 키
 * @param {any} value - 저장할 값
 */
export function setLocalStorage(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error('로컬 스토리지 저장 실패:', error);
  }
}

/**
 * 로컬 스토리지에서 데이터를 가져오는 함수
 * @param {string} key - 가져올 키
 * @param {any} defaultValue - 기본값
 * @returns {any} 저장된 값 또는 기본값
 */
export function getLocalStorage(key, defaultValue = null) {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : defaultValue;
  } catch (error) {
    console.error('로컬 스토리지 읽기 실패:', error);
    return defaultValue;
  }
}

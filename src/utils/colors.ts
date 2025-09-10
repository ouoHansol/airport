// 공통 색상 상수 정의
export const COLORS = {
  primary: '#17a2b8',
  secondary: '#6c757d', 
  tertiary: '#adb5bd',
  success: '#28a745',
  danger: '#dc3545',
  warning: '#ffc107',
  info: '#17a2b8',
  light: '#f8f9fa',
  dark: '#343a40'
} as const;

// 각 COLORS 키에 맞는 텍스트 색상 매핑
export const TEXT_COLORS: Record<keyof typeof COLORS, string> = {
  primary: '#fff',
  secondary: '#fff',
  tertiary: '#000',
  success: '#fff',
  danger: '#fff',
  warning: '#000',
  info: '#fff',
  light: '#000',
  dark: '#fff'
};

// COLORS의 키를 받아서 해당하는 TEXT_COLORS 반환 함수
export function getTextColor(color: keyof typeof COLORS): string {
  return TEXT_COLORS[color] || '#000';
}

// 버튼 색상 타입 정의
export type ButtonColor = keyof typeof COLORS;

export const getCSSVariables = () => {
  return Object.entries(COLORS)
    .map(([key, value]) => `--color-${key}: ${value};`)
    .join('\n');
};

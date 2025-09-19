interface MenuItem {
  name: string;
  path: string;
  subMenu?: MenuItem[];
}

// 메뉴관리
export const allMenus = {
  inspection: [
    { name: "점검표준", path: "/standard" },
    { name: "평상점검", path: "/routine" },
    { name: "성능점검", path: "/performance" },
    { name: "성능확인점검", path: "/performance-verify" },
  ],
  
  validation: [
    { 
      name: "비행검사", 
      path: "/flight", 
      subMenu: [
        { name: "계획관리", path: "/plan"},
        { name: "비행검사관리", path: "/result"},
        { name: "비행검사 데이터이력", path: "/history"},
        { name: "질의게시판", path: "/qna"},
      ]
    },
    { 
      name: "관리검사", 
      path: "/manage", 
      subMenu: [
        { name: "계획관리", path: "/manage" },
        { name: "관리검사 관리", path: "/manage" },
        { name: "지적사항 관리", path: "/manage" },
      ]
    },
    { 
      name: "무선국검사", 
      path: "/radio-station", 
      subMenu: [
        { name: "항목관리", path: "/radio-station" },
        { name: "계획관리", path: "/radio-station" },
        { name: "무선국검사 관리", path: "/radio-station" },
        { name: "무선국허가증 관리", path: "/radio-station" },
      ]
    },
  ],
  
  // 새로운 메뉴 섹션 추가 예시
  equipment: [
    { name: "장비목록", path: "/list" },
    { name: "장비관리", path: "/manage" },
  ],
  
  education: [
    { name: "교육과정", path: "/course" },
    { name: "자격관리", path: "/certification" },
  ]
} as const;

// 편의를 위한 개별 export (기존 코드 호환성)
export const inspectionMenus = allMenus.inspection;
export const ValidationMenus = allMenus.validation;

// 경로에 따라 메뉴를 가져오는 헬퍼 함수
export const getMenusByPath = (path: string): MenuItem[] => {
  const pathSegments = path.split('/').filter(segment => segment);
  const firstSegment = pathSegments[0];
  
  const selectedMenus = allMenus[firstSegment as keyof typeof allMenus] || allMenus.validation;
  
  // 타입 캐스팅으로 간단하게 해결
  return selectedMenus as unknown as MenuItem[];
};
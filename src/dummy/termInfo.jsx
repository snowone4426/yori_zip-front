const publicUrl = process.env.PUBLIC_URL

export const categoryList = {
  종류: [
    '밥',
    '반찬',
    '국물',
    '면',
    '디저트',
    '분식',
    '셀러드',
    '음료',
    '주류',
    '기타',
  ],
  재료: [
    '쇠고기',
    '돼지고기',
    '닭고기',
    '채소',
    '해물',
    '계란',
    '유제품',
    '기타',
  ],
  방법: ['구이', '찜', '국물', '볶음', '조림', '튀김', '비빔', '기타'],
  도구: ['에어프라이어', '가스레인지', '전자레인지', '냄비', '오븐', '기타'],
}

export const categoryArr = [
  [
    '종류',
    '밥',
    '반찬',
    '국물',
    '면',
    '디저트',
    '분식',
    '셀러드',
    '음료',
    '주류',
    '기타',
  ],
  [
    '재료',
    '쇠고기',
    '돼지고기',
    '닭고기',
    '채소',
    '해물',
    '계란',
    '유제품',
    '기타',
  ],
  ['방법', '구이', '찜', '국물', '볶음', '조림', '튀김', '비빔', '기타'],
  ['도구', '에어프라이어', '가스레인지', '전자레인지', '냄비', '오븐', '기타'],
]

export const dummyScore = 3

export const dummyMyinfo = {
  userId: 1,
  gender: '',
  type: 'cust',
}

export const dummyRecipeDetail = {
  data: {
    recipeId: 0,
    title: '당근 케이크',
    subtitle: '촉촉하고 진짜 맛있는',
    description:
      '전주비빔밥은 전주 식도락의 품격이다. 쌀밥에 나물과 소고기, 황포묵 등 오방색의 재료를 담아 우리 전통과 문화와 정서까지 조화롭게 비벼 먹는 일품요리라고 할 수 있다. 전주비빔밥의 유래는 궁중음식에서 시작해 서민 음식으로 정착되었다는 설이 유력하다. 비빔밥이 처음 등장한 문헌은 1800년대 말엽 간행된 시의전서라는 조리서다. 비빔밥은 골동반(骨同飯), 혹은 화반(花飯)이라고도 불렸는데, 골동반은 어지럽게 섞는다는 의미를, 화반은 꽃밥이라는 의미가 있다.',
    thumbnail: `${publicUrl}/assets/고기구이.jpg`,
    level: '중급',
    time: '70분',
    starScore: '4.0',
    created_at: new Date('2022-09-01'),
    userId: 0,
    nickname: '레시피 올리는 사람',
    profile: `${publicUrl}/assets/고기구이.jpg`,
  },
  isBookMark: false,
  ingredient: {
    '기본 재료': [
      { name: '밥', quantity: '2 공기' },
      { name: '당근', quantity: '1/10 개' },
      { name: '양파', quantity: '1/4 개' },
      { name: '애호박', quantity: '1/2 개' },
      { name: '참기름', quantity: '약간' },
      { name: '소금', quantity: '약간' },
    ],
    양념장: [
      { name: '밥', quantity: '2 공기' },
      { name: '당근', quantity: '1/10 개' },
      { name: '양파', quantity: '1/4 개' },
      { name: '애호박', quantity: '1/2 개' },
      { name: '참기름', quantity: '약간' },
      { name: '소금', quantity: '약간' },
    ],
  },
  recipe_detail: [
    {
      photo: `${publicUrl}/assets/고기구이.jpg`,
      description:
        '데친 도라지, 고사리, 느타리버섯을 각각 분량의 밑간 재료에 밑간한 뒤 각각 볶아주세요. *Tip. 고추장 양념에 밥을 비벼 먹기 때문에 모든 나물의 간은 심심하게 맞춰주세요.',
    },
    {
      photo: `${publicUrl}/assets/고기구이.jpg`,
      description:
        '달군 팬에 카놀라유를 두르고 양파, 애호박을 소금과 참기름을 넣어 중불에서 볶아주세요. 당근은 소금으로 간하여 살짝 볶아줍니다. *Tip. 애호박은 반달 썰기 하시고 당근, 양파는 채썰어 주세요.',
    },
    {
      photo: `${publicUrl}/assets/고기구이.jpg`,
      description:
        '달군 팬에 카놀라유를 두른 뒤 파기름 재료를 넣고 약불에서 2분간 뒤적이며 볶아주세요.',
    },
    {
      photo: `${publicUrl}/assets/고기구이.jpg`,
      description:
        '그릇에 밥과 나물, 달걀프라이, 깨끗이 씻은 식용꽃 순으로 담아주세요.',
    },
  ],
  reple: [
    {
      repleId: 0,
      profile: `${publicUrl}/assets/고기구이.jpg`,
      nickname: '댓글다는사람',
      context:
        '매 번 이렇게 레시피 얻어서 하는데 최소한 내가 한 건 올려 드려야 우리의 식탁에 예의인듯 싶어 댓글이라도 올리려 노력합니다. 아이들이 어느 식당을 비교할 수없는 최고의 맛이라고 해 더 좋습니다',
      created_at: new Date(),
    },
    {
      repleId: 1,
      profile: `${publicUrl}/assets/고기구이.jpg`,
      nickname: '댓글다는사람',
      context:
        '매 번 이렇게 레시피 얻어서 하는데 최소한 내가 한 건 올려 드려야 우리의 식탁에 예의인듯 싶어 댓글이라도 올리려 노력합니다. 아이들이 어느 식당을 비교할 수없는 최고의 맛이라고 해 더 좋습니다',
      created_at: new Date(),
    },
    {
      repleId: 2,
      profile: `${publicUrl}/assets/고기구이.jpg`,
      nickname: '댓글다는사람',
      context:
        '매 번 이렇게 레시피 얻어서 하는데 최소한 내가 한 건 올려 드려야 우리의 식탁에 예의인듯 싶어 댓글이라도 올리려 노력합니다. 아이들이 어느 식당을 비교할 수없는 최고의 맛이라고 해 더 좋습니다',
      created_at: new Date(),
    },
    {
      repleId: 3,
      profile: `${publicUrl}/assets/고기구이.jpg`,
      nickname: '댓글다는사람',
      context:
        '매 번 이렇게 레시피 얻어서 하는데 최소한 내가 한 건 올려 드려야 우리의 식탁에 예의인듯 싶어 댓글이라도 올리려 노력합니다. 아이들이 어느 식당을 비교할 수없는 최고의 맛이라고 해 더 좋습니다',
      created_at: new Date(),
    },
    {
      repleId: 4,
      profile: `${publicUrl}/assets/고기구이.jpg`,
      nickname: '댓글다는사람',
      context:
        '매 번 이렇게 레시피 얻어서 하는데 최소한 내가 한 건 올려 드려야 우리의 식탁에 예의인듯 싶어 댓글이라도 올리려 노력합니다. 아이들이 어느 식당을 비교할 수없는 최고의 맛이라고 해 더 좋습니다',
      created_at: new Date(),
    },
  ],
}

export const dummyMainArr = [
  {
    recipeId: 0,
    title: '당근 케이크',
    subTitle: '촉촉하고 진짜 맛있는',
    thumbnail: `${publicUrl}/assets/고기구이.jpg`,
    level: '중급',
    time: '70분',
    starScore: '4.0',
    state: '',
    created_at: new Date('2022-09-01'),
  },
  {
    recipeId: 1,
    title: '당근 케이크',
    subTitle: '촉촉하고 진짜 맛있는',
    thumbnail: `${publicUrl}/assets/고기구이.jpg`,
    level: '중급',
    time: '70분',
    starScore: '4.0',
    state: 'hot',
    created_at: new Date('2022-09-01'),
  },
  {
    recipeId: 2,
    title: '당근 케이크',
    subTitle: '촉촉하고 진짜 맛있는',
    thumbnail: `${publicUrl}/assets/고기구이.jpg`,
    level: '중급',
    time: '70분',
    starScore: '4.0',
    state: '',
    created_at: new Date(),
  },
  {
    recipeId: 3,
    title: '당근 케이크',
    subTitle: '촉촉하고 진짜 맛있는',
    thumbnail: `${publicUrl}/assets/고기구이.jpg`,
    level: '중급',
    time: '70분',
    starScore: '4.0',
    state: 'hot',
    created_at: new Date(),
  },
  {
    recipeId: 4,
    title: '당근 케이크',
    subTitle: '촉촉하고 진짜 맛있는',
    thumbnail: `${publicUrl}/assets/고기구이.jpg`,
    level: '중급',
    time: '70분',
    starScore: '4.0',
    state: 'hot',
    created_at: new Date(),
  },
  {
    recipeId: 5,
    title: '당근 케이크',
    subTitle: '촉촉하고 진짜 맛있는',
    thumbnail: `${publicUrl}/assets/고기구이.jpg`,
    level: '중급',
    time: '70분',
    starScore: '4.0',
    state: 'hot',
    created_at: new Date(),
  },
  {
    recipeId: 6,
    title: '당근 케이크',
    subTitle: '촉촉하고 진짜 맛있는',
    thumbnail: `${publicUrl}/assets/고기구이.jpg`,
    level: '중급',
    time: '70분',
    starScore: '4.0',
    state: 'hot',
    created_at: new Date(),
  },
  {
    recipeId: 7,
    title: '당근 케이크',
    subTitle: '촉촉하고 진짜 맛있는',
    thumbnail: `${publicUrl}/assets/고기구이.jpg`,
    level: '중급',
    time: '70분',
    starScore: '4.0',
    state: 'hot',
    created_at: new Date(),
  },
]

export const dummyRecipeArr = [
  {
    recipeId: 0,
    title: '당근 케이크',
    subTitle: '촉촉하고 진짜 맛있는',
    thumbnail: `${publicUrl}/assets/고기구이.jpg`,
    level: '중급',
    time: '70분',
    starScore: '4.0',
    state: '',
    created_at: new Date('2022-09-01'),
  },
  {
    recipeId: 1,
    title: '당근 케이크',
    subTitle: '촉촉하고 진짜 맛있는',
    thumbnail: `${publicUrl}/assets/고기구이.jpg`,
    level: '중급',
    time: '70분',
    starScore: '4.0',
    state: 'hot',
    created_at: new Date('2022-09-01'),
  },
  {
    recipeId: 2,
    title: '당근 케이크',
    subTitle: '촉촉하고 진짜 맛있는',
    thumbnail: `${publicUrl}/assets/고기구이.jpg`,
    level: '중급',
    time: '70분',
    starScore: '4.0',
    state: '',
    created_at: new Date(),
  },
  {
    recipeId: 3,
    title: '당근 케이크',
    subTitle: '촉촉하고 진짜 맛있는',
    thumbnail: `${publicUrl}/assets/고기구이.jpg`,
    level: '중급',
    time: '70분',
    starScore: '4.0',
    state: 'hot',
    created_at: new Date(),
  },
  {
    recipeId: 4,
    title: '당근 케이크',
    subTitle: '촉촉하고 진짜 맛있는',
    thumbnail: `${publicUrl}/assets/고기구이.jpg`,
    level: '중급',
    time: '70분',
    starScore: '4.0',
    state: 'hot',
    created_at: new Date(),
  },
  {
    recipeId: 5,
    title: '당근 케이크',
    subTitle: '촉촉하고 진짜 맛있는',
    thumbnail: `${publicUrl}/assets/고기구이.jpg`,
    level: '중급',
    time: '70분',
    starScore: '4.0',
    state: 'hot',
    created_at: new Date(),
  },
  {
    recipeId: 6,
    title: '당근 케이크',
    subTitle: '촉촉하고 진짜 맛있는',
    thumbnail: `${publicUrl}/assets/고기구이.jpg`,
    level: '중급',
    time: '70분',
    starScore: '4.0',
    state: 'hot',
    created_at: new Date(),
  },
  {
    recipeId: 7,
    title: '당근 케이크',
    subTitle: '촉촉하고 진짜 맛있는',
    thumbnail: `${publicUrl}/assets/고기구이.jpg`,
    level: '중급',
    time: '70분',
    starScore: '4.0',
    state: 'hot',
    created_at: new Date(),
  },
  {
    recipeId: 8,
    title: '당근 케이크',
    subTitle: '촉촉하고 진짜 맛있는',
    thumbnail: `${publicUrl}/assets/고기구이.jpg`,
    level: '중급',
    time: '70분',
    starScore: '4.0',
    state: 'hot',
    created_at: new Date(),
  },
  {
    recipeId: 9,
    title: '당근 케이크',
    subTitle: '촉촉하고 진짜 맛있는',
    thumbnail: `${publicUrl}/assets/고기구이.jpg`,
    level: '중급',
    time: '70분',
    starScore: '4.0',
    state: 'hot',
    created_at: new Date(),
  },
  {
    recipeId: 10,
    title: '당근 케이크',
    subTitle: '촉촉하고 진짜 맛있는',
    thumbnail: `${publicUrl}/assets/고기구이.jpg`,
    level: '중급',
    time: '70분',
    starScore: '4.0',
    state: 'hot',
    created_at: new Date(),
  },
  {
    recipeId: 11,
    title: '당근 케이크',
    subTitle: '촉촉하고 진짜 맛있는',
    thumbnail: `${publicUrl}/assets/고기구이.jpg`,
    level: '중급',
    time: '70분',
    starScore: '4.0',
    state: 'hot',
    created_at: new Date(),
  },
  {
    recipeId: 12,
    title: '당근 케이크',
    subTitle: '촉촉하고 진짜 맛있는',
    thumbnail: `${publicUrl}/assets/고기구이.jpg`,
    level: '중급',
    time: '70분',
    starScore: '4.0',
    state: 'hot',
    created_at: new Date(),
  },
  {
    recipeId: 13,
    title: '당근 케이크',
    subTitle: '촉촉하고 진짜 맛있는',
    thumbnail: `${publicUrl}/assets/고기구이.jpg`,
    level: '중급',
    time: '70분',
    starScore: '4.0',
    state: 'hot',
    created_at: new Date(),
  },
  {
    recipeId: 14,
    title: '당근 케이크',
    subTitle: '촉촉하고 진짜 맛있는',
    thumbnail: `${publicUrl}/assets/고기구이.jpg`,
    level: '중급',
    time: '70분',
    starScore: '4.0',
    state: 'hot',
    created_at: new Date(),
  },
  {
    recipeId: 15,
    title: '당근 케이크',
    subTitle: '촉촉하고 진짜 맛있는',
    thumbnail: `${publicUrl}/assets/고기구이.jpg`,
    level: '중급',
    time: '70분',
    starScore: '4.0',
    state: 'hot',
    created_at: new Date(),
  },
  {
    recipeId: 16,
    title: '당근 케이크',
    subTitle: '촉촉하고 진짜 맛있는',
    thumbnail: `${publicUrl}/assets/고기구이.jpg`,
    level: '중급',
    time: '70분',
    starScore: '4.0',
    state: 'hot',
    created_at: new Date(),
  },
  {
    recipeId: 17,
    title: '당근 케이크',
    subTitle: '촉촉하고 진짜 맛있는',
    thumbnail: `${publicUrl}/assets/고기구이.jpg`,
    level: '중급',
    time: '70분',
    starScore: '4.0',
    state: 'hot',
    created_at: new Date(),
  },
  {
    recipeId: 18,
    title: '당근 케이크',
    subTitle: '촉촉하고 진짜 맛있는',
    thumbnail: `${publicUrl}/assets/고기구이.jpg`,
    level: '중급',
    time: '70분',
    starScore: '4.0',
    state: 'hot',
    created_at: new Date(),
  },
  {
    recipeId: 19,
    title: '당근 케이크',
    subTitle: '촉촉하고 진짜 맛있는',
    thumbnail: `${publicUrl}/assets/고기구이.jpg`,
    level: '중급',
    time: '70분',
    starScore: '4.0',
    state: 'hot',
    created_at: new Date(),
  },
  {
    recipeId: 20,
    title: '당근 케이크',
    subTitle: '촉촉하고 진짜 맛있는',
    thumbnail: `${publicUrl}/assets/고기구이.jpg`,
    level: '중급',
    time: '70분',
    starScore: '4.0',
    state: 'hot',
    created_at: new Date(),
  },
  {
    recipeId: 21,
    title: '당근 케이크',
    subTitle: '촉촉하고 진짜 맛있는',
    thumbnail: `${publicUrl}/assets/고기구이.jpg`,
    level: '중급',
    time: '70분',
    starScore: '4.0',
    state: 'hot',
    created_at: new Date(),
  },
]

export const termHTML = (
  <>
    <h2>제1장 총칙</h2>

    <h2>제1조 (목적)</h2>

    <p>
      본 약관은 엔에이치엔에듀㈜(이하 ’회사’라 함)가 제공하는 ‘아이엠스쿨’에
      관한 모든 제품 및 서비스(이하 ‘서비스’라 함)를 이용함에 있어 이용자의
      권리_의무 및 책임에 관한 사항을 규정함을 목적으로 합니다.『인터넷,
      정보통신망, 모바일 및 스마트 장치 등을 이용하는 전자상거래에 대해서도 그
      성질에 반하지 않는 한 이 약관을 준용합니다』
    </p>

    <h2>제2조 (용어의 정의)</h2>
    <ol start="1">
      <li>
        1. '서비스'라 함은 이용매체(PC, 이동통신단말장치)와 상관없이 '회원'이
        이용할 수 있는 모든 '아이엠스쿨'의 서비스를 의미합니다.
      </li>
      <li>
        2. ‘개별 서비스’라 함은 ‘서비스’를 구성하는 하위 서비스를 의미합니다.
      </li>
      <li>
        3. ’콘텐츠’란 문장, 음성, 음악, 이미지, 동영상, 기타정보 등을
        의미합니다.
      </li>
      <li>
        4. ‘사이트’란 '회사'가 콘텐츠, 상품 등 서비스를 '이용자'에게 제공하기
        위하여 컴퓨터 등 정보통신설비를 이용하여 설정한 가상의 영업장을
        의미합니다.
      </li>
      <li>
        5. ’회원’이라 함은 '사이트'에 회원등록 한 자로서, 계속적으로
        '사이트'에서 제공하는 모든 서비스를 이용할 수 있는 자를 말합니다.
      </li>
      <li>
        6. ‘비회원’이라 함은 회원에 가입하지 않고 회사가 제공하는 서비스를
        이용하는 자를 말합니다.
      </li>
      <li>
        7. '이용자'라 함은 '회원' 및 ‘비회원’을 포함한 '서비스'의 모든 이용자를
        의미합니다.
      </li>
      <li>
        8. '상품'이라 함은 '회사'가 '이용자'에게 판매를 대행하는 제3자의
        유형/무형 상품을 의미합니다.
      </li>
      <li>
        9. '개별 이용약관'이란 본 서비스에 관해 본 약관과는 별도로 '가이드라인',
        '정책' 등의 명칭으로 당사가 배포 또는 게시한 문서를 말합니다.
      </li>
      <li>
        10. '게시물'이라 함은 '회원'이 '서비스'를 이용함에 있어 '서비스'상에
        게시한 부호_문자_음성_음향_화상_동영상 등의 정보 형태의 글, 사진, 동영상
        및 각종 파일과 링크 등을 의미합니다.
      </li>
      <li>
        11. '로그인 정보'라 함은 '회원'이 '서비스'를 이용하기 위해 입력하는 SNS
        계정, 이메일, 비밀번호 등을 의미합니다.
      </li>
    </ol>

    <h2>제3조 (약관의 명시와 설명 및 개정)</h2>
    <ol start="1">
      <li>
        1. '회사'는 이 약관의 내용과 상호 및 대표자 성명, 영업소 소재지
        주소(소비자의 불만을 처리 할 수 있는 주소를 포함), 전화번호,
        모사전송번호, 전자우편주소, 사업자등록번호, 통신판매업신고번호,
        개인정보관리책임자 등을 '회원'이 쉽게 확인할 수 있도록 사이트에
        게시합니다.
      </li>
      <li>
        2. '회사'는 『약관의 규제에 관한 법률』, 『정보통신망 이용촉진 및
        정보보호 등에 관한 법률』 등 관련법을 위배하지 않는 범위에서 이 약관을
        개정할 수 있습니다.
      </li>
      <li>
        3. '회사'가 약관을 개정할 경우에는 적용일자 및 개정사유를 명시하여 현행
        약관과 함께 ‘사이트’에 그 적용일자 7일(다만, 회원에게 불리한 내용으로
        변경하는 경우에는 30일)이전부터 적용일자 전일까지 공지합니다.
      </li>
      <li>
        4. 제3항에 의해 변경된 약관은 법령에 특별한 규정 또는 기타 부득이한
        사유가 없는 한 그 적용일자 이전으로 소급하여 적용되지 아니합니다.
      </li>
      <li>
        5. 제3항에 따라 공지된 적용일자까지 '회원'이 명시적으로 계약해지의
        의사를 표명하지 않을 경우에는 개정된 약관에 동의하는 것으로 봅니다.
      </li>
      <li>
        6. '회사'는 제공하는 '서비스' 내의 개별 서비스에 대한 별도의 약관 및
        이용조건을 둘 수 있으며 개별 서비스에서 별도로 적용되는 약관에 대한
        동의는 '회원'이 개별 서비스를 최초로 이용할 경우 별도의 동의절차를
        거치게 됩니다. 이 경우 개별서비스에 대한 이용약관 등이 이 약관에
        우선합니다.
      </li>
      <li>
        7. '회원'이 개정약관의 적용에 동의하지 않는 경우 '회사'는 개정 약관의
        내용을 적용할 수 없으며, 이 경우 '회원'은 이용계약을 해지할 수 있습니다.
        다만, ‘회원’에게 기존 약관을 적용할 수 없는 특별한 사정이 있는 경우에
        '회사'는 이용계약을 해지할 수 있습니다.
      </li>
    </ol>

    <h2>제4조 (회원가입)</h2>
    <ol start="1">
      <li>
        1. '회사'가 정한 가입양식에 따라 회원정보를 기입한 후 이 약관에
        동의한다는 의사표시를 함으로써 회원가입이 가능합니다. '회사'는 이러한
        신청에 있어 전문기관의 휴대폰번호 인증 등을 요청할 수 있습니다.
      </li>
      <li>
        2. '회사'는 제1항과 같이 '회원'으로 가입할 것을 신청한 이용자 중 다음 각
        호에 해당하지 않는 한 '회원'으로 등록합니다. '회사'가 회원가입신청의
        승인을 거부하거나 유보하는 경우 원칙적으로 이를 신청한 이용자에게
        알립니다.
        <ol>
          <li>
            1) 가입신청자가 이 약관에 의하여 이전에 회원자격을 상실한 적이 있는
            경우, 단 '회사'의 회원 재가입 승낙을 얻은 경우에는 예외로 함.
          </li>
          <li>2) 실명이 아니거나 타인의 명의를 이용한 경우</li>
          <li>3) 등록내용에 허위, 기재누락, 오기가 있는 경우</li>
          <li>4) '회사'가 요구하는 내용을 기재하지 않은 경우</li>
          <li>
            5) 이용자의 귀책사유로 인하여 승인이 불가능하거나 기타 규정한 제반
            사항을 위반하여 신청하는 경우
          </li>
        </ol>
      </li>
      <li>
        3. 회원가입계약의 성립시기는 '회사'가 가입완료를 신청절차 상에서 표시한
        시점으로 합니다.
      </li>
      <li>4. ‘회원’의 권한은 회원가입계약을 한 자의 일신에 전속합니다.</li>
      <li>
        5. '회원'은 회원가입 시 등록한 사항에 변경이 있는 경우 상당한 기간
        이내에 '회사'에 회원정보 수정 등의 방법으로 변경사항을 알려야 합니다.
      </li>
      <li>
        6. ‘개별 서비스’를 이용하기 위하여 별도의 ‘개별 서비스’ 약관에
        동의하거나 서면 계약의 체결이 필요할 수 있으며, 추가 정보를 기재하는 등
        추가적인 이용절차가 필요할 수 있습니다.{' '}
      </li>
    </ol>

    <h2>제5조 (회원정보의 변경)</h2>
    <ol start="1">
      <li>
        1. '회원'은 개인정보관리화면을 통하여 언제든지 본인의 개인정보를
        열람하고 수정할 수 있습니다. 다만, 서비스 관리를 위한 실명 등의 정보는
        수정이 불가능합니다.
      </li>
      <li>
        2. '회원'은 회원가입신청 시 기재한 사항이 변경되었을 경우 온라인으로
        수정을 하거나 이메일 또는 기타 방법으로 '회사'에 대하여 그 변경사항을
        알려야 합니다.
      </li>
      <li>
        3. 제2항의 변경사항을 '회사'에 알리지 않아 발생한 불이익에 대하여
        '회사'는 책임지지 않습니다.
      </li>
    </ol>

    <h2>제6조(개인정보보호 의무)</h2>

    <p>
      '회사'는 '정보통신망법' 등 관계 법령이 정하는 바에 따라 '회원'의
      개인정보를 보호하기 위해 노력합니다. 개인정보의 보호 및 사용에 대해서는
      관련법 및 '회사'의 개인정보처리방침이 적용됩니다. 다만, '회사'의 공식
      사이트 이외의 링크된 사이트에서는 ‘회사’의 개인정보처리방침이 적용되지
      않습니다.
    </p>

    <h2>제7조(회원의 로그인 정보 관리에 대한 의무)</h2>
    <ol start="1">
      <li>
        1. '회원'의 '로그인 정보'에 관한 관리책임은 '회원'에게 있으며, 이를
        제3자가 이용하도록 하여서는 안됩니다.
      </li>
      <li>
        2. '회원'은 '로그인 정보'가 도용되거나 제3자가 사용하고 있음을 인지한
        경우에는 이를 즉시 '회사'에 통지하고 '회사'의 안내에 따라야 합니다.
      </li>
      <li>
        3. 제2항의 경우에 해당 '회원'이 '회사'에 그 사실을 통지하지 않거나,
        통지한 경우에도 '회사'의 안내에 따르지 않아 발생한 불이익에 대하여
        '회사'는 책임지지 않습니다.
      </li>
    </ol>

    <h2>제8조(회원에 대한 통지)</h2>
    <ol start="1">
      <li>
        1. '회사'는 '회원'에 대해, '회원'이 미리 약정하여 지정한 이메일이나 SMS
        등을 이용하여 통지할 수 있습니다.
      </li>
      <li>
        2. '회사'가 불특정다수 '회원'에 대한 통지를 할 경우 1주일 이상
        '사이트'의 '공지사항'에 게시함으로써 개별 통지에 갈음할 수 있습니다.
        다만, '회원' 본인의 서비스 이용에 관련하여 중대한 영향을 미치는 사항에
        대해서는 개별 통지합니다.
      </li>
      <li>
        3. '회원'이 SMS 또는 이메일 수신을 동의하지 않았더라도 서비스 이용이
        불가능한 중대한 사유가 발생할 경우, '회사'는 이를 고지하기 위한 목적으로
        '회원'에게 SMS 또는 이메일을 발송할 수 있습니다.
      </li>
    </ol>

    <h2>제9조(회사의 의무)</h2>
    <ol start="1">
      <li>
        1. '회사'는 법령과 이 약관이 금지하거나 공서양속에 반하는 행위를 하지
        않으며 이 약관이 정하는 바에 따라 지속적이고, 안정적인 서비스를
        제공하는데 최선을 다해야 합니다.
      </li>
      <li>
        2. '회사'는 '회원'이 안전하게 서비스를 이용할 수 있도록 '회원'의
        개인정보 보호를 위한 보안시스템을 갖추어야 하며, 개인정보처리방침을
        게시하고 준수합니다.
      </li>
      <li>
        3. '회사'는 ‘회원’이 동의하지 않은 영리목적의 광고성 이메일을 발송하지
        않습니다.
      </li>
      <li>
        4. '회사'는 ‘회원’이 제기한 의견이나 불만의 정당성이 객관적인 관점에서
        인정될 경우에는, 적절한 절차를 거쳐 처리하여야 합니다. 다만, 즉시처리가
        곤란한 경우 회원에게 그 사유와 처리일정을 통보하여야 합니다.
      </li>
    </ol>

    <h2>제10조(회원의 의무)</h2>
    <p>'회원'은 다음 행위를 하여서는 안됩니다.</p>
    <ol start="1">
      <li>
        1. '회원'은 관계법, 이 약관의 규정, 이용안내 및 '서비스'와 관련하여
        공지한 주의사항, '회사'가 통지하는 사항 등을 준수하여야 하며, 기타
        '회사'의 업무에 방해되는 행위를 하여서는 안됩니다.
      </li>
      <li>
        2. ‘회원’이 수집하여 ‘서비스’ 내에 게시한 정보에 대한 책임은 ‘회원’에게
        있으며, 그에 대한 법적 책임은 ‘회원’이 부담하여야 합니다.
      </li>
    </ol>

    <h2>제11조 (서비스의 제공 및 변경)</h2>
    <ol start="1">
      <li>
        1. 당사는 다음과 같은 서비스를 제공합니다.
        <ol>
          <li>1) 학교 소식 연동 서비스</li>
          <li>2) 전자상거래 서비스 (아이엠스쿨 스토어서비스)</li>
          <li>3) 교육정보 컨텐츠 제공 서비스</li>
          <li>4) 학원 중개 서비스</li>
          <li>5) 커뮤니티 서비스</li>
          <li>6) 교육시설 서비스</li>
        </ol>
      </li>
      <li>
        2. '회사'는 상당한 이유가 있는 경우에 운영상, 기술상의 필요에 따라
        제공하고 있는 '서비스'의 전부 또는 일부를 변경할 수 있습니다.
      </li>
      <li>
        3. '회사'가 제공하기로 '회원'과 계약을 체결한 서비스의 내용을 서비스의
        품질 또는 기술적 사양의 변경 등의 사유로 변경할 경우에는 그 사유를
        '회원'에게 이메일, SMS 등의 방법으로 통지합니다.
      </li>
      <li>
        4. 전항의 경우 '회사'는 이로 인하여 '회원'이 입은 인과관계가 입증된 실제
        손해를 배상합니다. 다만, '회사'가 고의 또는 과실이 없음을 입증하는
        경우에는 그러하지 아니합니다.
      </li>
      <li>
        5. '회사'는 서비스의 제공에 필요한 경우 정기점검을 실시할 수 있으며,
        정기점검시간은 서비스제공화면에 공지한 바에 따릅니다.
      </li>
    </ol>

    <h2>제12조 (서비스의 중단)</h2>
    <ol start="1">
      <li>
        1. '회사'는 컴퓨터 등 정보통신설비의 보수점검, 교체 및 고장, 통신두절
        또는 운영상 상당한 이유가 있는 경우 '서비스'의 제공을 일시적으로 중단할
        수 있습니다. 이 경우 '회사'는 제8조('회원'에 대한 통지)에 정한 방법으로
        '회원'에게 통지합니다. 다만, '회사'가 사전에 통지할 수 없는 부득이한
        사유가 있는 경우 사후에 통지할 수 있습니다.
      </li>
      <li>
        2. '회사'는 무료로 제공되는 서비스의 일부 또는 전부를 '회사'의 정책 및
        운영의 필요상 수정, 중단, 변경할 수 있으며, 이에 대하여 관련법에 특별한
        규정이 없는 한 '회원'에게 별도의 보상을 하지 않습니다.
      </li>
      <li>
        3. 사업종목의 전환, 사업의 포기, 업체간의 통합 등의 이유로 서비스를
        제공할 수 없게 되는 경우에 '회사'는 제8조에서 정한 방법으로 통지하며
        이로 인하여 '회원'이 입은 인과관계가 입증된 실제 손해를 배상합니다.
        다만, '회사'가 고의 또는 과실이 없음을 입증하는 경우에는 그러하지
        아니합니다.
      </li>
      <li>
        4. ‘회원’이 ‘개별 서비스’의 이용조건을 갖추지 못한 경우, ‘회사’는
        ‘회원’에게 제공하는 ‘개별 서비스’의 전부 또는 일부를 제공하지 않을 수
        있습니다.{' '}
      </li>
    </ol>

    <h2>제13조(정보의 제공 및 광고의 게재)</h2>
    <ol start="1">
      <li>
        1. '회사'는 '회원'이 서비스 이용 중 필요하다고 인정되는 다양한 정보를
        공지사항 또는 이메일이나, SMS, 전화 등의 방법으로 '회원'에게 제공할 수
        있습니다. 다만, '회원'은 관련법에 따른 거래관련정보 및 고객문의 등에
        대한 답변 등을 제외하고는 언제든지 이메일, SMS, 전화에 대해서 수신
        거절을 할 수 있습니다.
      </li>
      <li>
        2. 제1항의 정보를 이메일이나 SMS로 전송하려고 하는 경우 ‘회사’는
        '회원'의 사전 동의를 받아서 전송합니다. 다만, '회원'의 거래관련 정보 및
        고객문의 등에 대한 회신에 있어서는 제외됩니다.
      </li>
      <li>
        3. '회사'는 서비스의 운영과 관련하여 서비스 화면, 홈페이지, 이메일, SMS
        등에 광고를 게재할 수 있습니다. 그러나 광고가 게재된 이메일, SMS를
        수신한 '회원'은 수신거절의 의사표시를 할 수 있으며 '회사'는 수신거절을
        위한 방법을 '회원'에게 제공합니다.
      </li>
    </ol>

    <h2>제14조(회원 탈퇴 및 자격 상실 등)</h2>
    <ol start="1">
      <li>
        1. '회원'은 '회사'에 언제든지 탈퇴를 요청할 수 있으며, '회사'는 관련법
        등이 정하는 바에 따라 이를 즉시 처리합니다. 단, 회원탈퇴 시
        '회원'으로서의 모든 혜택이 소멸됩니다. 탈퇴로 인해 소멸된 혜택은 복구가
        불가능하며, '회사'는 이를 복구할 책임이 없습니다.
      </li>
      <li>
        2. '회원'이 탈퇴할 경우, 관련법 및 개인정보처리방침에 따라 '회사'가
        회원정보를 보유하는 경우를 제외하고는 해지 즉시 '회원'의 모든 정보는
        파기됩니다. 다만 회원이 게시한 '게시물'의 경우는 본 약관 제28조에
        따릅니다.
      </li>
      <li>
        3. 탈퇴로 인해 파기된 데이터에 대하여 '회사'는 차후 복구의 의무를 가지지
        않으므로 '회원'은 탈퇴 전 필요한 데이터를 백업해두어야 합니다.
      </li>
      <li>
        4. '회원'이 다음 각 호의 사유에 해당하는 경우, '회사'는 회원자격을 제한
        및 정지시킬 수 있습니다.
        <ol>
          <li>
            1) 가입신청 시에 허위 내용을 등록하거나 타인의 정보를 도용한 경우
          </li>
          <li>
            2) '사이트'를 이용하여 법령 또는 이 약관이 금지하거나 공서양속에
            반하는 행위를 하는 경우
          </li>
          <li>
            3) '사이트'를 이용하여 구입한 재화 등의 대금, 기타 '사이트' 이용에
            관련하여 회원이 부담하는 채무를 기일에 지급하지 않는 경우
          </li>
          <li>
            4) 다른사람의 '사이트' 이용을 방해하거나 그 정보를 도용하는 경우
          </li>
        </ol>
      </li>
      <li>
        5. '회원'이 '회사'의 업무에 방해되는 행위를 하였다 판단될 경우, 즉시
        회원자격이 상실되며 '회사'는 '회원'에게 별도의 손해배상 청구를 할 수
        있습니다.
      </li>
      <li>
        6. '회사'가 회원자격을 제한_정지 시킨 후 동일한 행위가 2회 이상
        반복되거나 30일 이내에 그 사유가 시정되지 아니하는 경우 회사는
        회원자격을 상실시킬 수 있습니다.
      </li>
      <li>
        7. '회사'가 회원자격을 상실시키는 경우에는 회원등록을 말소합니다. 이
        경우 '회원'에게 이를 통지하고, 회원등록 말소 전에 최소한 30일 이상의
        기간을 정하여 소명할 기회를 부여합니다.
      </li>
    </ol>

    <h2>제2장 아이엠스쿨 스토어서비스</h2>

    <h2>제15조 (구매신청)</h2>
    <ol start="1">
      <li>
        1. '이용자'는 '사이트'상에서 다음 또는 이와 유사한 방법에 의하여 구매를
        신청하며, '회사'는 '이용자'가 구매신청을 함에 있어서 다음의 내용을 알기
        쉽게 제공하기 위해 노력하여야 합니다.
        <ol>
          <li>1) '상품' 등의 검색 및 선택</li>
          <li>
            2) 받는 사람의 성명, 주소, 전화번호, 전자우편주소(또는 이동전화번호)
            등의 입력
          </li>
          <li>
            3) 약관내용, 배송료, 설치비 등의 비용부담과 관련한 내용에 대한 확인
          </li>
          <li>
            4) 이 약관에 동의하고 위 다호의 사항을 확인하거나 거부하는 표시(예.
            마우스 클릭)
          </li>
          <li>
            5) 상품 등의 구매신청 및 이에 관한 확인 또는 '회사'의 확인에 대한
            동의
          </li>
          <li>6) 결제방법의 선택</li>
        </ol>
      </li>
      <li>
        2. '회사'가 제3자에게 구매자 개인정보를 제공_위탁할 필요가 있는 경우
        관련 법령에 따라 실제 구매신청시 구매자의 동의를 받거나
        개인정보처리방침을 통하여 관련 사실을 알리도록 하겠으며, 회원가입 시
        미리 포괄적으로 동의를 받지 않습니다. 개인정보 제3자 제공에 대한 동의를
        받을 경우 '회사'는 제공되는 개인정보 항목, 제공받는 자, 제공받는 자의
        개인정보 이용목적 및 보유_이용기간 등을 구매자에게 알리고 동의를
        받습니다. 한편, 『정보통신망이용촉진 및 정보보호 등에 관한 법률』 제25조
        제1항에 의한 개인정보 취급위탁의 경우 ‘회사’는 개인정보 취급위탁을 받는
        자, 개인정보 취급위탁을 하는 업무의 내용을 구매자에게 개인정보처리방침을
        통하여 알리거나, 위 사항들을 고지한 이후 동의를 받습니다.
      </li>
    </ol>
    <h2>제16조 (결제)</h2>
    <ol start="1">
      <li>
        1. '회사'에서 구매한 '상품' 등에 대한 대금 결제방법은 다음 각 호의 방법
        중 가용한 방법으로 할 수 있습니다.
        <ol>
          <li>1) 직불카드, 신용카드 등의 각종 카드 결제</li>
          <li>2) 포인트 또는 적립금을 사용하여 결제</li>
          <li>3) 가상계좌 입금을 통한 결제</li>
          <li>
            4) '회사'가 계약을 맺었거나 '회사'가 인정한 상품권에 의한 결제
          </li>
          <li>5) 할인쿠폰을 통한 결제대금 차감</li>
          <li>6) 기타 전자적 지급방법에 의한 대금 지급 등</li>
        </ol>
      </li>
      <li>
        2. '회사'는 '이용자'의 지급방법에 대하여 '상품' 등의 대금에 어떠한
        명목의 수수료도 추가하여 징수할 수 없습니다.
      </li>
    </ol>
    <h2>제17조 (계약의 성립)</h2>
    <ol start="1">
      <li>
        1. '회사'는 제15조와 같은 구매신청에 대하여 다음 각 호에 해당하면
        승낙하지 않을 수 있습니다. 다만, 미성년자와 계약을 체결하는 경우에는
        법정대리인의 동의를 얻지 못하면 미성년자 본인 또는 법정대리인이 계약을
        취소할 수 있다는 내용을 고지하여야 합니다.
        <ol>
          <li>1) 신청내용에 허위, 기재누락, 오기가 있는 경우</li>
          <li>
            2) 미성년자가 담배, 주류 등 청소년보호법에서 금지하는 재화 등을
            구매하는 경우
          </li>
          <li>
            3) 기타 구매신청에 승낙하는 것이 회사의 기술상 현저히 지장이 있다고
            판단하는 경우
          </li>
          <li>
            4) 구매신청 고객이 제14조 4항에 따른 회원 자격이 제한, 정지 또는
            상실된 회원으로 확인되었을 경우
          </li>
          <li>
            5) 구매신청 고객이 재판매의 목적으로 상품 등을 중복 구매하는 등
            '사이트' 거래질서를 방해한 경우
          </li>
        </ol>
      </li>
      <li>
        2. '회사'의 승낙이 제18조 제1항의 수신확인통지형태로 '이용자'에게 도달한
        시점에 계약이 성립한 것으로 봅니다.
      </li>
    </ol>

    <h2>제18조 (수신확인통지_구매신청 변경 및 취소)</h2>
    <ol start="1">
      <li>
        1. '회사'는 '이용자'의 구매신청이 있는 경우 '이용자'에게 수신확인통지를
        합니다.
      </li>
      <li>
        2. 수신확인통지를 받은 '이용자'는 의사표시의 불일치 등이 있는 경우에는
        수신확인통지를 받은 후 즉시 구매신청 변경 및 취소를 요청할 수 있고,
        '회사'는 배송 전에 '이용자'의 요청이 있는 경우에는 지체없이 그 요청에
        따라 처리하여야 합니다. 다만, 이미 대금을 지불한 경우에는 제21조의
        청약철회 등에 관한 규정에 따릅니다.
      </li>
    </ol>

    <h2>제19조 (상품 등의 공급)</h2>
    <ol start="1">
      <li>
        1. '회사'는 '이용자'와 상품 등의 공급시기에 관하여 별도의 약정이 없는
        이상, '이용자'가 청약을 한 날로부터 7일 이내에 상품 등을 배송할 수
        있도록 주문제작, 포장 등 기타의 필요한 조치를 취합니다. 다만, '회사'가
        이미 상품 등의 대금의 전부 또는 일부를 받은 경우에는 대금의 전부 또는
        일부를 받은 날부터 3영업일 이내에 조치를 취합니다. 이때 '회사'는
        '이용자'가 상품 등의 공급절차 및 진행사항을 확인할 수 있도록 적절한
        조치를 합니다.
      </li>
      <li>
        2. '회사'는 '이용자'가 구매한 '상품' 등에 대해 배송수단, 수단별
        배송비용, 부담자, 수단별 배송예상기간 등을 명시합니다.
      </li>
    </ol>

    <h2>제20조 (환급)</h2>

    <p>
      '회사'는 '이용자'가 구매 신청한 '상품' 등이 품절 등의 사유로 인도 또는
      제공할 수 없을 때에는 그 사유를 '이용자'에게 통지하고, 사전에 '상품' 등의
      대금을 받은 경우에는 대금을 받을 날로부터 3영업일 이내에 환급하거나 환급에
      필요한 조치를 취합니다.
    </p>

    <h2>제21조 (청약철회 등)</h2>
    <ol start="1">
      <li>
        1. '회사'의 '상품' 등의 구매취소 및 환불규정은 『전자상거래 등에서의
        소비자보호에 관한 법률』 등 관련 법령을 준수합니다.
      </li>
      <li>
        2. '회사'와 '상품' 등의 구매에 관한 계약을 체결한 '이용자'는
        『전자상거래 등에서의 소비자보호에 관한 법률』 제12조 제2항에 따른
        계약내용에 관한 서면(구매확인의 이메일 또는 SMS 통지 등)을 받은 날(그
        서면을 받은 때보다 상품 등의 공급이 늦게 이루어진 경우에는 '상품' 등을
        공급받거나 '상품' 등의 공급이 시작된 날을 말합니다)부터 7일 이내에는
        청약을 철회할 수 있습니다. 다만, 청약철회에 관하여 『전자상거래 등에서의
        소비자보호에 관한 법률』에 달리 정함이 있는 경우에는 동법 규정에
        따릅니다.
      </li>
      <li>
        3. '이용자'는 '상품' 등을 배송 받는 경우 다음 각 호의 하나라도 해당되는
        경우에는 반품 및 교환을 할 수 없습니다.
        <ol>
          <li>
            1) '이용자'에게 책임있는 사유로 '상품' 등의 멸실 또는 훼손된
            경우(다만, 상품 등의 내용을 확인하기 위하여 포장 등을 훼손한 경우는
            제외함)
          </li>
          <li>
            2)'이용자'의 사용 또는 일부 소비에 의하여 '상품' 등의 가치가 현저히
            감소한 경우
          </li>
          <li>
            3) 시간의 경과에 의하여 재판매가 곤란할 정도로 '상품' 등의 가치가
            현저히 감소한 경우
          </li>
          <li>
            4) 같은 성능을 가진 '상품' 등으로 복제가 가능한 상황에서 그 원본인
            '상품' 등의 포장을 훼손한 경우
          </li>
          <li>
            5) 용역 또는 「문화산업진흥 기본법」 제2조제5호의 디지털콘텐츠의
            제공이 개시된 경우(다만, 가분적 용역 또는 가분적 디지털콘텐츠로
            구성된 계약의 경우에는 제공이 개시되지 아니한 부분에 대하여는
            그러하지 아니함)
          </li>
        </ol>
      </li>
      <li>
        4. 제3항 2호 내지 5호의 경우에 ‘회사’가 사전에 청약철회 등이 제한되는
        사실을 ‘이용자’에게 쉽게 알 수 있는 곳에 명기하거나 시용상품을 제공하는
        등의 조치를 하지 않았다면, ‘이용자’의 청약철회 등이 제한되지 않습니다.
      </li>
      <li>
        5. '이용자'는 제2항 및 제3항의 규정에도 불구하고 '상품' 등의 내용이
        표시_광고 내용과 다르거나 계약내용과 다르게 이행된 때에는 당해 '상품'
        등의 공급을 받은 날부터 3월 이내, 그 사실을 안 날 또는 알 수 있었던
        날부터 30일 이내에 청약철회 등을 할 수 있습니다.
      </li>
    </ol>

    <h2>제22조 (청약철회 등의 효과)</h2>
    <ol start="1">
      <li>
        1. '회사'는 '이용자'로부터 '상품' 등을 반환 받은 경우 3영업일 이내에
        이미 지급받은 상품 등의 대금을 환급합니다. 이 경우 '회사'가 '이용자'에게
        '상품' 등의 환급을 지연한 때에는 그 지연기간에 대하여 『전자상거래
        등에서의 소비자보호에 관한 법률 시행령』 제21조의2에서 정하는
        지연이자율을 곱하여 산정한 지연이자를 지급합니다.
      </li>
      <li>
        2. '회사'는 위 대금을 환급함에 있어서 '이용자'가 신용카드 또는 전자화폐
        등의 결제수단으로 상품 등의 대금을 지급한 때에는 지체없이 당해
        결제수단을 제공한 사업자로 하여금 상품 등의 대금의 청구를 정지 또는
        취소하도록 요청합니다.
      </li>
      <li>
        3. '회사'는 이미 '상품' 등이 일부 사용 또는 일부 소비된 경우에는 그로
        인해 '이용자'가 얻은 이익 또는 그 상품 등의 공급에 소요된 비용에
        상당하는 금액으로서 아래의 각 호에 해당하는 금액의 지급을 회원에게
        청구할 수 있습니다.
        <ol>
          <li>
            1) '상품' 등의 사용으로 인하여 소모성 부품의 재판매가 곤란하거나
            재판매가격이 현저히 하락하는 경우에는 당해 소모성 부품의 공급에
            소요된 비용
          </li>
          <li>
            2) 다수의 동일한 가분물로 구성된 '상품' 등의 경우에는 '회원'의 일부
            소비로 인하여 소비된 부분의 공급에 소요된 비용
          </li>
        </ol>
      </li>
      <li>
        4. 청약철회 등의 경우 공급받은 '상품' 등의 반환에 필요한 비용은
        '이용자'가 부담합니다. '회사'는 '이용자'에게 청약철회 등의 이유로 위약금
        또는 손해배상을 청구하지 않습니다. 다만, '상품' 등의 내용이 표시_광고
        내용과 다르거나 계약내용과 다르게 이행되어 청약철회 등을 하는 경우
        '상품' 등의 반환에 필요한 비용은 회사가 부담합니다.
      </li>
      <li>
        5. '이용자'의 단순변심에 의한 취소일 경우 환불처리에 발생하는 수수료와
        기타 제반 비용은 '이용자'가 부담합니다.
      </li>
      <li>
        6. 기타 이 약관 및 사이트의 이용안내에 규정되지 않은 취소 및 환불에
        사항에 대해서는 소비자분쟁해결기준에서 정한 바에 따릅니다.
      </li>
    </ol>

    <h2>제23조 (상품 등의 취소 및 환불의 특칙)</h2>

    <p>
      '상품'의 반품에 따른 환불은 반품하는 '상품'이 판매자에게 도착하고,
      반품사유 및 반품배송비 부담자가 확인된 이후에 이루어집니다.
    </p>

    <h2>제24조 (할인쿠폰)</h2>
    <ol start="1">
      <li>
        1. 할인쿠폰은 '회사'가 무상으로 발행하는 쿠폰으로, 발행대상, 발행경로,
        사용대상 등에 따라 구분될 수 있으며, 할인쿠폰의 세부구분,
        할인금액(할인율), 사용방법, 사용기한 및 제한에 대한 사항은 할인쿠폰 또는
        '서비스' 화면에 표시 됩니다. 할인쿠폰의 종류 및 내용과 발급여부에
        관하여는 '회사'의 '사이트'에 대한 정책에 따라 달라질 수 있습니다.
      </li>
      <li>
        2. 할인쿠폰은 현금으로 변환될 수 없으며, 할인쿠폰에 표시된 유효기간이
        만료되거나 이용계약이 종료되는 경우 소멸합니다.
      </li>
      <li>
        3. 할인쿠폰은 '회사'에서 별도로 명시한 경우를 제외하고는 타인에게 양도할
        수 없으며, 부정한 목적이나 용도로 사용할 수 없습니다.
      </li>
      <li>
        4. '이용자'가 부정한 방법으로 할인쿠폰 등을 획득한 사실이 확인될 경우
        '회사'는 '회원'의 할인쿠폰 등 회수, 계정 삭제 및 형사고발 등 기타 조치를
        취할 수 있습니다.
      </li>
    </ol>

    <h2>제25조 (적립금)</h2>
    <ol start="1">
      <li>
        1. '회사'는 '회원'의 구매활동, 이벤트 참여, 배송지연보상 등에 따라
        '회원'에게 일정한 '적립금'을 부여할 수 있습니다.
      </li>
      <li>
        2. '회원'은 '적립금'을 '사이트'에서 '상품' 등의 구매 시 결제 수단으로
        사용할 수 있으며, '회사'는 '적립금'의 적립기준, 사용방법, 사용기한 및
        제한에 대한 사항을 '서비스' 화면에 별도로 게시하거나 통지합니다.
        '적립금'의 사용조건에 관한 사항은 '회사'의 정책에 따라 달라질 수
        있습니다.
      </li>
      <li>
        3. '적립금'의 유효기간은 원칙적으로 전환/적립 후 6개월이며, 유효기간
        동안 사용하지 않을 경우 순차적으로 소멸됩니다. 다만, 마케팅 및 기타
        프로모션 등을 통하여 지급되거나 사전특약(사전 안내 포함)이 있는
        '적립금'의 유효기간은 각각 별도로 설정될 수 있습니다.
      </li>
      <li>
        4. '적립금'은 현금으로 환급될 수 없으며, '적립금'의 사용 기간이
        만료되거나 이용계약이 종료되면 소멸됩니다.
      </li>
      <li>
        5. '회원'은 '적립금'을 제3자에게 또는 다른 아이디로 양도할 수 없으며
        유상으로 거래하거나 현금으로 전환할 수 없습니다.
      </li>
      <li>
        6. '회사'는 '회원'이 '회사'가 승인하지 않은 방법 또는 허위 정보 제공
        등의 부정한 방법으로 '적립금'을 획득하거나 부정한 목적이나 용도로
        '적립금'을 사용하는 경우 '적립금'의 사용을 제한, '적립금'을 사용한
        구매신청을 취소하고 '회원' 자격을 정지할 수 있습니다.
      </li>
      <li>
        7. 회원탈퇴 시 전환/적립된 '적립금' 중 미사용한 '적립금'은 즉시
        소멸되며, 탈퇴 후 재가입하더라도 소멸된 '적립금'은 복구되지 아니합니다.
      </li>
    </ol>

    <h2>제3장 기타 사항</h2>

    <h2>제26조(책임제한 등)</h2>
    <ol start="1">
      <li>
        1. '회사'는 직접 생산하지 않은 콘텐츠(학교소식, 학원정보, 제휴업체에서
        생산한 콘텐츠) 내 정보에 대하여 정확성 및 신뢰도를 검증할 방법이
        없으므로 어떠한 책임도 지지 않습니다.
      </li>
      <li>
        2. '회사'는 천재지변 또는 이에 준하는 불가항력으로 인하여 '서비스'를
        제공할 수 없는 경우에는 '서비스'제공에 관한 책임이 면제됩니다.
      </li>
      <li>
        3. '회사' 또는 제조사의 사정으로 인하여 상품 등의 수량을 확보하지 못하여
        상품 등을 공급하지 못할 수 있으며, 이 경우 '회사'는 '이용자'에게
        상품공급이 어렵다는 점을 즉시 고지한 후 사전에 수납한 대금을 고지한
        시점으로부터 영업일 기준 3일 이내에 환불합니다.
      </li>
      <li>
        4. '회사'는 '이용자'의 귀책사유로 인한 '서비스' 이용의 장애에 대하여는
        책임을 지지 않습니다.
      </li>
      <li>
        5. '회사'는 '이용자'가 '서비스'를 이용하여 기대하는 수익을 상실한 것에
        대하여 책임을 지지 않으며, 그 밖의 '서비스'를 통하여 얻는 자료로 인한
        손해에 관하여 책임을 지지 않습니다.
      </li>
      <li>
        6. '회사'는 '이용자'가 '서비스'와 관련하여 게재한 정보, 자료, 사실의
        신뢰도, 정확성 등의 내용에 관하여는 책임을 지지 않습니다.
      </li>
      <li>
        7. '회사'는 '이용자'간 또는 '이용자'와 제3자 상호간에 '서비스'를 매개로
        하여 거래 등을 한 경우에는 책임이 면제됩니다.
      </li>
      <li>
        8. '회사'는 무료로 제공되는 '서비스' 이용과 관련하여 관련법에 특별한
        규정이 없는 한 책임을 지지 않습니다.
      </li>
      <li>
        9. '회사'와 피연결회사('회사'의 서비스 화면과 링크 등으로 연결된
        사이트를 운영하는 회사를 지칭함)는 독자적으로 운영되며, '회사'는
        피연결회사와 '회원'간에 이루어진 거래에 대해서는 책임을 지지 않습니다.
      </li>
    </ol>
    <p></p>

    <h2>제27조 (저작권의 귀속 및 이용제한)</h2>
    <ol start="1">
      <li>
        1. '회사'가 작성한 저작물에 대한 저작권 및 기타 지식재산권은 '회사'에
        귀속합니다.
      </li>
      <li>
        2. '회사'는 '서비스'와 관련하여 '회원'에게 '회사'가 정한 이용조건에 따라
        계정, 콘텐츠 등을 이용할 수 있는 이용권만을 부여하며, '회원'은
        '서비스'를 이용함으로써 얻는 정보 중 '회사'에게 지식재산권이 귀속된
        정보를 '회사'의 사전 승낙 없이 복제, 송신, 출판, 배포, 방송, 기타 방법에
        의하여 영리목적으로 이용하거나 제3자에게 이용하게 하여서는 안됩니다.
      </li>
    </ol>
    <p></p>

    <h2>제28조 (회원의 게시물)</h2>
    <ol start="1">
      <li>
        1. 회원이 서비스 내에 게시한 게시게시물(회원이 서비스를 통해 업로드 또는
        전송하는 부호, 문자, 음성, 음향, 그림, 사진, 동영상, 링크 등으로 구성된
        각종 콘텐츠 자체 또는 파일, 이하 ‘게시물’이라 합니다) 저작권은 게시한
        회원에게 귀속됩니다.
      </li>
      <li>
        2. 회원은 게시물에 대하여 회사에게 다음과 같은 권한을 이용기간과 지역에
        제한 없이 무상으로 부여합니다.
        <ol>
          <li>1) 게시물을 이용, 편집 형식의 변경 및 기타 변형하는 것 </li>
          <li>
            2) 게시물을 공표, 복제, 공연, 전송, 배포, 방송, 2차적 저작물 작성 등
            어떠한 형태로든 이용하는 것{' '}
          </li>
        </ol>
      </li>
      <li>
        3.전항은 회사가 서비스를 운영하는 동안 유효하며 회원탈퇴 후에도
        지속적으로 적용됩니다.
      </li>
      <li>
        4. 회사는 이용자가 게시하거나 등록하는 게시물이 다음 각 호에 해당한다고
        판단되는 경우 사전 통지 없이 삭제할 수 있고, 이에 대하여 회사는 어떠한
        책임을 지지 않습니다.
        <ol>
          <li>
            1) 다른 회원 또는 제 3자를 비방하거나 중상모략으로 명예를 손상시키는
            내용인 경우
          </li>
          <li>2) 공서양속에 위반되는 내용일 경우</li>
          <li>3) 범죄적 행위에 결부된다고 인정되는 경우</li>
          <li>
            4) 회사의 저작권, 제3자의 저작권 등 기타 권리를 침해하는 내용인 경우
          </li>
          <li>
            5) 이용자가 사이트 내 음란물을 게재하거나 음란사이트를 링크하는 경우
          </li>
          <li>
            6) 회사로부터 사전 승인을 받지 아니한 상업광고, 판촉내용을 게시하는
            경우
          </li>
          <li>7) 특정 상품 등과 관련 없는 내용인 경우</li>
          <li>
            8) 정당한 사유 없이 회사의 영업을 방해하는 내용을 기재하는 경우
          </li>
          <li>9) 기타 관련법령에 위반된다고 판단하는 경우</li>
        </ol>
      </li>
      <li>
        5. 회원 탈퇴 이후 회원이 작성하였던 게시물 및 댓글 등은 삭제되지 않으며,
        회원 탈퇴로 인하여 회원정보가 삭제되어 작성자 본인을 확인할 수 없으므로
        게시물 편집 및 삭제가 원칙적으로 불가합니다. 회원이 작성한 게시물의
        삭제를 원할 경우에는 회원 탈퇴 이전에 게시물을 모두 삭제하여야 합니다.{' '}
      </li>
      <li>
        6. 회원 탈퇴 전 삭제하지 않은 해당 게시물에 대한 관리 권한은 회사로
        이전됩니다. 단, 해당 게시물에 대한 저작권은 탈퇴한 회원에게 귀속됩니다.
      </li>
      <li>
        7. 회원 본인 id에 기록된 보관자료 (즐겨찾기 등)은 삭제되며 복구할 수
        없습니다.
      </li>
    </ol>

    <h2>제29조 (게시물의 관리)</h2>
    <ol start="1">
      <li>
        1. '이용자'의 게시물이 『정보통신망 이용촉진 및 정보보호 등에 관한
        법률』, 『개인정보보호법』, 『저작권법』 등 관련법령에 위반되는 내용을
        포함하는 경우, 권리자는 관련법령이 정한 절차에 따라 해당 게시물의
        게시중단 및 삭제 등을 요청할 수 있으며, '회사'는 관련법령에 따라 조치를
        취하여야 합니다.
      </li>
      <li>
        2. '회사'는 전항에 따른 권리자의 요청이 없는 경우라도 권리침해가 인정될
        만한 사유가 있거나 기타 회사 정책 및 관련법에 위반되는 경우에는 관련법에
        따라 해당 게시물에 대해 임시조치 등을 취할 수 있습니다.
      </li>
      <li>
        3. 이 조에 따른 세부절차는 『정보통신망 이용촉진 및 정보보호 등에 관한
        법률』, 『개인정보보호법』및 『저작권법』이 규정한 범위 내에서 '회사'가
        정한 정책에 따릅니다.
      </li>
    </ol>

    <h2>제30조(준거법 및 재판관할)</h2>
    <ol start="1">
      <li>
        1. '회사'와 '회원'간 제기된 소송은 대한민국법을 준거법으로 합니다.
      </li>
      <li>
        2. 본 약관 및 서비스 이용과 관련하여 '회사'와 '회원' 사이에 분쟁이
        발생하여 소송이 제기되는 경우에는 『민사소송법』에 따라 관할법원을
        정합니다.
      </li>
    </ol>
  </>
)

const OUR_PICKS = [
  {
    id: 1,
    img: 'https://images.unsplash.com/photo-1604532081136-b157aa1729e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
    link: '',
    text: '블프 위크 최대 65% 증정',
    title: 'Wedidas Korea',
  },
  {
    id: 2,
    img: 'https://images.unsplash.com/photo-1484021377774-82f0a0673843?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=988&q=80',
    link: '',
    text: '22 WINTER PART.1',
    title: 'Wecode plus',
  },
  {
    id: 3,
    img: 'https://images.unsplash.com/photo-1521402966881-852a3b2551fc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
    link: '',
    text: '쇼핑가이드 MD추천 겨울 아우터',
    title: 'Sports',
  },
  {
    id: 4,
    img: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
    link: '',
    text: '다이버 크루들의 러블리 아우터 일상',
    title: 'Wecode + Wework',
  },
  {
    id: 5,
    img: 'https://images.unsplash.com/photo-1603400521630-9f2de124b33b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
    link: '',
    text: '아울렛 기간한정 특가+최대 5만원 쿠폰',
    title: 'Wecode',
  },
  {
    id: 6,
    img: 'https://images.unsplash.com/photo-1612215327100-60fc5c4d7938?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80',
    link: '',
    text: 'New Arrivals 22 Fall - Winter',
    title: 'WEO WEO ISSEY MIYAKE',
  },
  {
    id: 7,
    img: 'https://images.unsplash.com/photo-1514583370419-22f8b79bef4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
    link: '',
    text: 'Better Together 하나보다 둘이 더 좋은 이벤트',
    title: 'Weanpole Accessory',
  },
  {
    id: 8,
    img: 'https://images.unsplash.com/photo-1644483878413-1bdfe8d1180c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
    link: '',
    text: 'Your Autumn Cardigun starts here',
    title: 'Weison Kitsune',
  },
  {
    id: 9,
    img: 'https://images.unsplash.com/photo-1529903056346-94341d9428e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1065&q=80',
    link: '',
    text: '신규입점 특가~70% 사은품 증정',
    title: 'millibam',
  },
  {
    id: 10,
    img: 'https://images.unsplash.com/photo-1607957599516-8215fd320455?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
    link: '',
    text: "Wonen's Winter Pants",
    title: 'Weanpole Golf',
  },
  {
    id: 11,
    img: 'https://images.unsplash.com/photo-1514632488-3d65989924b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
    link: '',
    text: '포근한 겨울을 위한 핸드메이드 코트',
    title: 'WEGATIO',
  },
  {
    id: 12,
    img: 'https://images.unsplash.com/photo-1598121535437-37bbc4748e1a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
    link: '',
    text: '닥터지, 지아자, 바이탈뷰티 등 뷰티 핫딜 최대 80%',
    title: 'Beauty',
  },
  {
    id: 13,
    img: 'https://images.unsplash.com/photo-1548272181-1a2542ad6879?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=988&q=80',
    link: '',
    text: '가장 사랑받는 신상으로 겨울 맞이하기',
    title: 'Rag & Bone',
  },
  {
    id: 14,
    img: 'https://images.unsplash.com/photo-1606855637183-ea2a00b6f15f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1100&q=80',
    link: '',
    text: '소프라움 단독 특가 77%+사은품 증정',
    title: 'SOFRAUM',
  },
  {
    id: 15,
    img: 'https://images.unsplash.com/photo-1601880348117-25c1127a95df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
    link: '',
    text: '내게 꼭 붙어있어야 할 추위 극복 #핫팩템',
    title: '7 seconds',
  },
  {
    id: 16,
    img: 'https://images.unsplash.com/photo-1516762689617-e1cffcef479d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1011&q=80',
    link: '',
    text: 'ALITA, NEW ARRIVALS',
    title: '10 CORSO COME',
  },
  {
    id: 17,
    img: 'https://images.unsplash.com/photo-1611567149282-baf74270f0b9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1030&q=80',
    link: '',
    text: '경량 패딩&조끼 더 가볍게, 따뜻하게',
    title: '7 seconds',
  },
  {
    id: 18,
    img: 'https://images.unsplash.com/photo-1609505848912-b7c3b8b4beda?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1065&q=80',
    link: '',
    text: '22AW OPENING UP TO 55%+10% OFF',
    title: 'TATRAS',
  },
  {
    id: 19,
    img: 'https://images.unsplash.com/photo-1570170615381-62c299188814?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
    link: '',
    text: '블랙프라이데이 단독~50%',
    title: 'MARITHE FRANCOIS GIRBAUD',
  },
  {
    id: 20,
    img: 'https://images.unsplash.com/photo-1553544260-f87e671974ee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1107&q=80',
    link: '',
    text: '베스트 리뷰 남기고, 사은품 받기!',
    title: 'Theory',
  },
];

export default OUR_PICKS;

const dummyImgUrl = 'http://placehold.jp/150x150.png';
const dummyUrl = 'http://placehold.jp';
const dummyCopyrightUrl = 'http://placehold.jp';

const dummyOutsideLink = { routeTo: dummyUrl };
const dummyRouteStr = { routeTo: '/' };
const dummyRouteObj = {
  routeTo: {
    name: 'sample-id',
    params: { id: 1 }
  }
};

const dummyImg = {
  imgUrl: dummyImgUrl,
  imgAlt: 'ダミーの画像'
};

const dummyLogo = 'ダミーロゴ';

export {
  dummyOutsideLink,
  dummyRouteStr,
  dummyRouteObj,
  dummyImg,
  dummyLogo,
  dummyCopyrightUrl
};

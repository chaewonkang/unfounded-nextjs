import Banner from '../../components/Banner';
import PageLayout from '../../components/PageLayout';
import { ThemeProvider } from 'styled-components';
import theme from '../../styles/theme';
import banner from '../../static/images/banner_1.png';
import { useRouter } from 'next/router';

const imagePathArr = [
  '../static/images/enuf_product.jpeg',
  '../static/images/soon_product.png',
  '../static/images/mask.png',
  '../static/images/paper.png',
  '../static/images/detergent.png',
  '../static/images/food.jpeg'
];

const bannerObj = {
  img: banner,
  title: 'Household Goods'
};

const itemObj = [
  {
    img: imagePathArr[2],
    title: '잡화류',
    titleEn: 'Etc',
    category: '마스크공장',
    description:
      '코로나 바이러스 및 황사방역용 KF94 인증 마스크 공장을 직접 운영합니다.',
    url: '/business/mask'
  },
  {
    img: imagePathArr[3],
    title: '잡화류',
    titleEn: 'Etc',
    category: '제지류',
    description:
      '한국 및 중국의 품질이 인증된 공장에서 품질 및 가격 경쟁력 있는 제품만을 생산합니다.',
    url: '/business/paper'
  },
  {
    img: imagePathArr[4],
    title: '잡화류',
    titleEn: 'Etc',
    category: '세제류',
    description:
      '일본시장에서 검증받은 공장에서 최고의 품질로 고객의 니즈에 맞추어 맞춤 생산이 가능합니다.',
    url: '/business/detergent'
  }
];

const Paper = () => {
  const router = useRouter();
  console.log(router);
  return (
    <ThemeProvider theme={theme}>
      <PageLayout>
        <Banner
          img={bannerObj.img}
          title={bannerObj.title}
          text={bannerObj.text}
        ></Banner>
        <div className="cosmetic_container">
          <div className="dist_title">
            <h1>잡화류</h1>
          </div>
          <div className="dist_container">
            {itemObj
              .filter(item => {
                if (item.title === '잡화류') return item;
              })
              .map(item => {
                return (
                  <div className="dist_box">
                    <div className="img_wrapper">
                      <img src={item.img}></img>
                    </div>
                    <div className="text_wrapper">
                      <span style={{ color: `${item.color}` }}>
                        {item.category}
                      </span>
                      <p>{item.description}</p>
                    </div>
                    <div className="detail_button">
                      <a href={item.url} target="_self">
                        <span>상세설명</span>
                      </a>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </PageLayout>
    </ThemeProvider>
  );
};

export default Paper;

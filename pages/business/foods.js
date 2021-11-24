import Banner from '../../components/Banner';
import PageLayout from '../../components/PageLayout';
import { ThemeProvider } from 'styled-components';
import theme from '../../styles/theme';
import banner from '../../static/images/banner_1.png';
import { useRouter } from 'next/router';

const imagePathArr = [
  '../static/images/foods/foods_1.png',
  '../static/images/foods/foods_2.png',
  '../static/images/foods/foods_3.png',
  '../static/images/foods/foods_4.png',
  '../static/images/foods/foods_5.png',
  '../static/images/foods/foods_6.png',
  '../static/images/foods/foods_7.png',
  '../static/images/foods/foods_8.png',
  '../static/images/foods/foods_9.png',
  '../static/images/foods/foods_10.png',
  '../static/images/foods/foods_11.png',
];

const bannerObj = {
  img: banner,
  title: 'Foods',
};

const itemObj = [
  {
    img: imagePathArr[0],
    productName: 'TREE WEAR SWEET CORN',
    flavor: '-',
    volume: '425g',
    spec:
      '열량 78.1kcal /단백질 2.80g / 지방 1.08g / 탄수화물 14.3g /식염상당량 0.5g',
    desc: '옥수수 한알한알 꽉 차서 실하고 맛있는 옥수수캔 입니다.',
  },
  {
    img: imagePathArr[1],
    productName: 'AR 김치겉절이 양념 소스',
    flavor: '김치 양념 맛 (액상소스)',
    volume: '310g*12 = 1 BOX',
    spec: 'CBM = 0/0061, 유통기한 24개월, 포장재질 PET',
    desc: '소매용으로 야채 버무림용도로 사용',
  },
];

const Foods = () => {
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
        <div className='cosmetic_container'>
          <div className='dist_title'>
            <h1>식품류</h1>
          </div>
          <div className='item_container'>
            {itemObj.map((item) => {
              return (
                <div className='item_box'>
                  <div className='img_wrapper'>
                    <img src={item.img}></img>
                  </div>
                  <div className='text_wrapper'>
                    <table>
                      <tr>
                        <th>제품명</th>
                        <td>
                          <span style={{ color: `${item.color}` }}>
                            {item.productName}
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <th>맛</th>
                        <td>
                          <span style={{ color: `${item.color}` }}>
                            {item.flavor}
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <th>용량</th>
                        <td>
                          <span style={{ color: `${item.color}` }}>
                            {item.volume}
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <th>영양성분표시</th>
                        <td>
                          <span style={{ color: `${item.color}` }}>
                            {item.spec}
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <th>특징</th>
                        <td>
                          <span style={{ color: `${item.color}` }}>
                            {item.desc}
                          </span>
                        </td>
                      </tr>
                    </table>
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

export default Foods;

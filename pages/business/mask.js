import Banner from '../../components/Banner';
import PageLayout from '../../components/PageLayout';
import { ThemeProvider } from 'styled-components';
import theme from '../../styles/theme';
import banner from '../../static/images/banner_1.png';
import { useRouter } from 'next/router';

const imagePathArr = [
  '../static/images/mask/mask_1.png',
  '../static/images/mask/mask_2.png',
];

const bannerObj = {
  img: banner,
  title: 'Mask',
};

const itemObj = [
  {
    img: imagePathArr[0],
    category: '황사 방역용 마스크',
    productName: 'TREE WEAR 고승도씨 KF-94 황사 방역용 마스크 (대형)',
    janCode: '-',
    volume:
      '마스크 본품 (1개) 대형 : 204mmX157mm, 4.8g (1입 8.6g) / 인박스 (50입) 대형 : 190mmX110mmX280mm, 513g / 아웃박스 (10팩입) 대형 :565mmX395mmX290mm, 5.5kg',
    desc: '황사, 미세먼지 등 입자성 유해물징 및 일상 생활에서 비말 감염을 예방',
  },
  {
    img: imagePathArr[1],
    category: '황사 방역용 마스크',
    productName: 'TREE WEAR 고승도씨 KF-94 황사 방역용 마스크 (소형)',
    janCode: '-',
    volume:
      '마스크 본품 (1개) 소형 : 175mmX139mm, 3.1g (1입 6.1g) 인박스 (50입) 소형 : 190mmX100mmX250mm, 388g / 아웃박스 (10팩입) 소형 :515mmX395mmX260mm, 4.1kg',
    desc: '황사, 미세먼지 등 입자성 유해물징 및 일상 생활에서 비말 감염을 예방',
  },
];

const Mask = () => {
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
            <h1>마스크</h1>
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
                        <th>구분</th>
                        <td>
                          <span style={{ color: `${item.color}` }}>
                            {item.category}
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <th>제품명</th>
                        <td>
                          <span style={{ color: `${item.color}` }}>
                            {item.productName}
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <th>JANCODE</th>
                        <td>
                          <span style={{ color: `${item.color}` }}>
                            {item.janCode}
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <th>규격/무게</th>
                        <td>
                          <span style={{ color: `${item.color}` }}>
                            {item.volume}
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

export default Mask;

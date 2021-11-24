import Banner from '../../components/Banner';
import PageLayout from '../../components/PageLayout';
import { ThemeProvider } from 'styled-components';
import theme from '../../styles/theme';
import banner from '../../static/images/banner_1.png';
import { useRouter } from 'next/router';

const imagePathArr = [
  '../static/images/detergent/detergent_1.png',
  '../static/images/detergent/detergent_2.png',
  '../static/images/detergent/detergent_3.png',
  '../static/images/detergent/detergent_4.png',
  '../static/images/detergent/detergent_5.png',
  '../static/images/detergent/detergent_6.png',
  '../static/images/detergent/detergent_7.png',
];

const bannerObj = {
  img: banner,
  title: 'Detergent',
};

const itemObj = [
  {
    img: imagePathArr[0],
    category: '의류용 표백제',
    productName: '산소계 표백제 아쿠토 블리치',
    janCode: '4582116370926',
    volume: '2,000 ml',
    desc:
      '색감 있는 옷도 안심되는 산소계 표백제 얼룩, 오염, 두런 때, 냄새도 간단표백 세제와 함께 사용 할 수 있습니다. 2,000ml 대용량 타입',
  },
  {
    img: imagePathArr[1],
    category: '유연제',
    productName: '의류용 유연제 비농축 대용량 타입 2000ml',
    janCode: '4582116370995',
    volume: '2000ml / 2,037g',
    desc:
      '대용량타입으로 경제적! 저렴한 가격으로 부담 없이 사용할 수 있는 유연제 입니다. 손잡이가 있는 파우치를 사용. 간 편하게 리필이 가능하며 이동도 가 능합니다. 입구는 캡으로 되어 있 어 본체(보틀)이 없어도 사용하실 수 있습니다.',
  },
];

const Detergent = () => {
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
            <h1>세제류</h1>
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
                        <th>용량</th>
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

export default Detergent;

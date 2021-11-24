import Banner from '../../components/Banner';
import PageLayout from '../../components/PageLayout';
import { ThemeProvider } from 'styled-components';
import theme from '../../styles/theme';
import banner from '../../static/images/banner_1.png';
import { useRouter } from 'next/router';

const imagePathArr = [
  '../static/images/paper/paper_1.png',
  '../static/images/paper/paper_2.png',
  '../static/images/paper/paper_3.png',
  '../static/images/paper/paper_4.png',
  '../static/images/paper/paper_5.png',
  '../static/images/paper/paper_6.png',
  '../static/images/paper/paper_7.png',
];

const bannerObj = {
  img: banner,
  title: 'Paper',
};

const itemObj = [
  {
    img: imagePathArr[0],
    category: '페이퍼타올',
    productName: 'TREE WEAR 빨아쓰는 페이퍼타올 60컷 2롤',
    janCode: '4582116371480',
    sku: '2롤 / pack, 12PCS/CTNS',
    size: '280mm*230mm*2ply',
  },
  {
    img: imagePathArr[1],
    category: '소프트팩티슈페이퍼',
    productName: 'TREE WEAR 소프트팩티슈 5P',
    janCode: '-',
    sku: '5P/Pack 18Pack/CTNS',
    size: '-',
  },
  {
    img: imagePathArr[2],
    category: '화장실 휴지',
    productName: 'TREE WEAR 고승도씨 3겹데코 30M',
    janCode: '-',
    sku: '30롤 / pack, 3pack/CTNS(비닐번들포장)',
    size: '96mm*30m*3ply',
  },
  {
    img: imagePathArr[3],
    category: 'Kitchen Paper',
    productName: '키친타올 50컷 4Roll',
    janCode: '4582116371398',
    sku: '4롤/ pack, 16PCS/CTNS',
    size: '226mm*220mm*2ply',
  },
  {
    img: imagePathArr[4],
    category: '페이퍼타올',
    productName: '스마트쵸이스 천연펄프 100% 롤페이퍼 50미터 (두겹)',
    janCode: '4582116371480',
    sku: '12Roll / pack 6pack / ctn',
    size: '15g ± 0.3g / m² 50m (2ply) 107mm±1mm',
  },
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
        <div className='cosmetic_container'>
          <div className='dist_title'>
            <h1>제지류</h1>
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
                        <th>입수</th>
                        <td>
                          <span style={{ color: `${item.color}` }}>
                            {item.sku}
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <th>사이즈</th>
                        <td>
                          <span style={{ color: `${item.color}` }}>
                            {item.size}
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

export default Paper;

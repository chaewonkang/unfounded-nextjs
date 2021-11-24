import PageLayout from '../../components/PageLayout';
import { ThemeProvider } from 'styled-components';
import theme from '../../styles/theme';
import { useRouter } from 'next/router';
import bgImage from '../../static/images/soonplus_bg.png';

const Company = () => {
  const router = useRouter();
  console.log(router);
  return (
    <ThemeProvider theme={theme}>
      <PageLayout>
        <div className='soon_container'>
          <img src={bgImage}></img>
          <div className='soon_text_wrapper'>
            <h1>30년, 피부를 위한 아모레퍼시픽 순정의 완성</h1>
            <p>
              1988년 출시된 아모레퍼시픽 'SOON (순정)' 당시 미국 연구 기관의
              까다로운 테스트를 통과했을 정도로 기술력을 인정받아 프랑스에서도
              수출되었던 SOON의 자산을 이어받은 아모레퍼시픽의 새로운 더마
              스킨케어 브랜드가 탄생합니다.
            </p>
            <a href='https://www.instagram.com/soonplusjapan/' target='_blank'>
              일본판매 공식 인스타그램
            </a>
          </div>
        </div>
      </PageLayout>
    </ThemeProvider>
  );
};

export default Company;

import { Link } from 'react-router-dom';

import { BoroughList } from '../../style/Borough';

const boroughList = [
  { GuName: '강남구', GuCode: '0008' },
  { GuName: '강동구', GuCode: '0010' },
  { GuName: '강북구', GuCode: '0021' },
  { GuName: '강서구', GuCode: '0001' },
  { GuName: '관악구', GuCode: '0005' },
  { GuName: '광진구', GuCode: '0024' },
  { GuName: '구로구', GuCode: '0025' },
  { GuName: '금천구', GuCode: '0006' },
  { GuName: '노원구', GuCode: '0022' },
  { GuName: '도봉구', GuCode: '0023' },
  { GuName: '동대문구', GuCode: '0018' },
  { GuName: '동작구', GuCode: '0004' },
  { GuName: '마포구', GuCode: '0011' },
  { GuName: '서대문구', GuCode: '0014' },
  { GuName: '서초구', GuCode: '0007' },
  { GuName: '성동구', GuCode: '0013' },
  { GuName: '성북구', GuCode: '0019' },
  { GuName: '송파구', GuCode: '0009' },
  { GuName: '양천구', GuCode: '0002' },
  { GuName: '영등포구', GuCode: '0003' },
  { GuName: '용산구', GuCode: '0012' },
  { GuName: '은평구', GuCode: '0016' },
  { GuName: '종로구', GuCode: '0017' },
  { GuName: '중구', GuCode: '0015' },
  { GuName: '중랑구', GuCode: '0020' },
];

function Borough() {
  return (
    <BoroughList>
      <p className='info'>자치구를 선택해주세요.</p>
      <ul className="borough">
        {boroughList.map(borough => {
          return (
            <li key={borough.GuCode} className="borough__item">
              <Link to={`${borough.GuCode}`} className="borough__link">
                <span className="borough__title">{borough.GuName}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </BoroughList>
  );
}

export default Borough;

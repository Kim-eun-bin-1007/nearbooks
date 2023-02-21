import { Link } from 'react-router-dom';

const boroughList = [
  { GuName: '강서구', GuCode: '0001' },
  { GuName: '양천구', GuCode: '0002' },
  { GuName: '영등포구', GuCode: '0003' },
  { GuName: '동작구', GuCode: '0004' },
  { GuName: '관악구', GuCode: '0005' },
  { GuName: '금천구', GuCode: '0006' },
  { GuName: '서초구', GuCode: '0007' },
  { GuName: '강남구', GuCode: '0008' },
  { GuName: '송파구', GuCode: '0009' },
  { GuName: '강동구', GuCode: '0010' },
  { GuName: '마포구', GuCode: '0011' },
  { GuName: '용산구', GuCode: '0012' },
  { GuName: '성동구', GuCode: '0013' },
  { GuName: '서대문구', GuCode: '0014' },
  { GuName: '중구', GuCode: '0015' },
  { GuName: '은평구', GuCode: '0016' },
  { GuName: '종로구', GuCode: '0017' },
  { GuName: '동대문구', GuCode: '0018' },
  { GuName: '성북구', GuCode: '0019' },
  { GuName: '중랑구', GuCode: '0020' },
  { GuName: '강북구', GuCode: '0021' },
  { GuName: '노원구', GuCode: '0022' },
  { GuName: '도봉구', GuCode: '0023' },
  { GuName: '광진구', GuCode: '0024' },
  { GuName: '구로구', GuCode: '0025' }
]

function Borough() {
  return (
    <>
      <p>자치구를 선택해주세요.</p>
      <ul className="">
        {boroughList.map(borough => {
          return <li key={borough.GuCode}>
            <Link to={`${borough.GuCode}`}>
              <span className="">{borough.GuName}</span>
            </Link>
          </li>
        })}
      </ul>
    </>
  );
}

export default Borough;

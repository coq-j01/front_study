import HomeButton from '../components/HomeButton'
import { getForecast } from '../utils/getForecast'

// localhost:3000/detail -> 라우팅이 편해짐
// /detail이 아닌 동적으로 설정하고 싶을 때
// 폴더명 detail -> [location]으로 변경
// localhost:3000/seoul
type Props = {
  params: {
    location: string
  }
  // params: Promise<{ location: string }>;
}

export default async function Detail({ params }: Props) {
  // client가 아닌 서버에서 할 때는 async - await 사용
  const { location } = await params

  const name = location === 'seoul' ? '서울' : location

  const json = await getForecast(location)
  console.log(json)

  return (
    <>
      <h1>{name}의 3일치 날씨 예보</h1>
      <ul>
        {json.forecast.forecastday.map((day) => (
          <li key={day.date}>
            {day.date} / {day.day.avgtemp_c}℃
            <br />
            <img
              src={`http:${day.day.condition.icon}`}
              alt={day.day.condition.text}
              style={{ width: '30px', height: '30px' }}
            />
            <span>{day.day.condition.text}</span>
          </li>
        ))}
      </ul>
      <br />
      <HomeButton></HomeButton>
    </>
  )
}

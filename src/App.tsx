import dayjs from "dayjs"
export const App = () => {

  return (
    <>
      <div className="bg-slate-500">
        {dayjs().startOf('month').add(1, 'day').set('year', 2018).format('YYYY-MM-DD HH:mm:ss')}      </div>   </>
  )
}


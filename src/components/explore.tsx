import { useI18n } from 'react-simple-i18n'
import cardBG from '../public/card-bg.png'
import apeImg from '../public/ape.png'
import { Link } from 'react-router-dom'

const Explore: React.FC<Record<string, never>> = () => {
  const { t } = useI18n()

  return (
    <div className="container mx-auto gap-4 p-4 2xl:max-w-6xl">
      <h1 className=" my-6 text-2xl font-bold md:text-3xl">
        {t('explore.title')}
      </h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-sm border border-solid border-slate-100">
          <div className="relative">
            <img
              className="h-32 w-full object-cover"
              src={cardBG}
              alt="card bg"
            />
            <div className="absolute left-1/2 top-24 -ml-8 h-16 w-16 rounded-sm bg-white">
              <img className="h-16 w-16" src={apeImg} alt="ape" />
            </div>
          </div>
          <h2 className="mt-8 text-center text-xl font-bold">
            Bored Ape Yacht Club
          </h2>
          <h3 className=" mt-2 text-center">
            <span>By </span>
            <span className="font-bold">YugaLabs</span>
          </h3>
          <div className="mt-2 p-3">
            <p className="line-clamp-2">
              The Bored Ape Yacht Club is a collection of 10,000 unique Bored
              Ape NFTs— unique digital collectibles living on the...
            </p>
          </div>
          <div className="grid grid-cols-3 gap-1 text-center">
            <div>
              <p className="text-lg font-bold">10.0K</p>
              <p>items</p>
            </div>
            <div>
              <p className="text-lg font-bold">6.5K</p>
              <p>owners</p>
            </div>
            <div>
              <p className="text-lg font-bold">656.3K</p>
              <p>total volume</p>
            </div>
          </div>
          <div className="my-7 flex justify-center">
            <Link to="/explore/1">
              <button
                type="button"
                className=" ml-2 inline-block w-32 rounded bg-green px-6 py-2.5 font-medium leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-emerald-600 hover:shadow-lg focus:bg-emerald-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-emerald-700 active:shadow-lg"
              >
                Detail
              </button>
            </Link>
          </div>
        </div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
      </div>
    </div>
  )
}

export default Explore

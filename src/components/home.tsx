import { useI18n } from 'react-simple-i18n'
import nftImage from '../public/nft-box.png'
import safeIcon from '../public/safe-icon.png'
import concernIcon from '../public/concern-icon.png'
import step1Image from '../public/step1.png'
import step2Image from '../public/step2.png'
import step3Image from '../public/step3.png'
import step4Image from '../public/step4.png'

const Home: React.FC<Record<string, never>> = () => {
  const { t } = useI18n()

  return (
    <div>
      <div className="bg-slate-50">
        <div className="container mx-auto grid gap-4 pb-32 md:grid-cols-2">
          <div className="mx-auto my-20 w-80 sm:w-[374px]">
            <h1 className="text-4xl font-black">{t('home.safemint')}</h1>
            <h2 className="text-lg font-semibold">{t('home.desc')}</h2>
            <ul className="bullets bullets-green mt-10 text-lg">
              <li>{t('home.desc1')}</li>
              <li>{t('home.desc2')}</li>
              <li>{t('home.desc3')}</li>
            </ul>
            <div className="mt-20">
              <button
                type="button"
                className="inline-block rounded border-2 border-gray-800 px-6 py-2 font-medium leading-tight text-gray-800 transition duration-150 ease-in-out hover:bg-black/5 focus:outline-none focus:ring-0"
              >
                {t('home.contact')}
              </button>
              <button
                type="button"
                className="bg-theme-green ml-2 inline-block rounded px-6 py-2.5 font-medium leading-tight shadow-md transition duration-150 ease-in-out hover:bg-emerald-600 hover:shadow-lg focus:bg-emerald-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-emerald-700 active:shadow-lg"
              >
                {t('home.api')}
              </button>
            </div>
          </div>
          <div className="flex items-center justify-center px-10">
            <img
              className="my-12 w-full max-w-[380px] md:max-w-[697px]"
              src={nftImage}
              alt="nft box"
            />
          </div>
        </div>
      </div>

      <div className="bg-[#1E1E1E] py-32 text-white">
        <div className="container mx-auto gap-4 p-4 2xl:max-w-6xl">
          <h2 className="text-2xl font-bold md:text-3xl">
            {t('home.advantages')}
          </h2>
          <h3 className="mb-16 mt-3">{t('home.adv-desc')}</h3>
          <div className="container grid gap-4 pb-32 md:grid-cols-2">
            <div>
              <h4 className="mb-12 flex items-center">
                <img
                  width={32}
                  className="mr-2"
                  src={safeIcon}
                  alt="safe icon"
                />
                <span>{t('home.audit')}</span>
              </h4>
              <h5 className="mb-4 text-lg font-semibold">
                {t('home.processing')}
              </h5>
              <ul className="bullets bullets-green bullets-line ml-10 mb-20">
                <li>{t('home.audit-processing1')}</li>
                <li>{t('home.audit-processing2')}</li>
                <li>{t('home.audit-processing3')}</li>
              </ul>
              <h5 className="mb-4 text-lg font-semibold">
                {t('home.pricing')}
              </h5>
              <ul className="bullets bullets-green ml-10">
                <li>{t('home.audit-pricing1')}</li>
              </ul>
              <h5 className="mb-4 mt-10 text-lg font-semibold">
                {t('home.solution')}
              </h5>
              <ul className="bullets bullets-green ml-10 mb-20">
                <li>{t('home.audit-solution1')}</li>
              </ul>
            </div>
            <div>
              <h4 className="mb-12 flex items-center">
                <img
                  width={32}
                  className="mr-2"
                  src={concernIcon}
                  alt="concern icon"
                />
                <span>{t('home.traditional')}</span>
              </h4>
              <h5 className="mb-4 text-lg font-semibold">
                {t('home.processing')}
              </h5>
              <ul className="bullets bullets-white bullets-line ml-10 mb-20">
                <li>{t('home.traditional-processing1')}</li>
                <li>{t('home.traditional-processing2')}</li>
                <li>{t('home.traditional-processing3')}</li>
                <li>{t('home.traditional-processing4')}</li>
              </ul>
              <h5 className="mb-4 text-lg font-semibold">
                {t('home.pricing')}
              </h5>
              <ul className="bullets bullets-white ml-10">
                <li>{t('home.traditional-pricing1')}</li>
              </ul>
              <h5 className="mb-4 mt-10 text-lg font-semibold">
                {t('home.solution')}
              </h5>
              <ul className="bullets bullets-white ml-10">
                <li>{t('home.traditional-solution1')}</li>
              </ul>
            </div>
          </div>
          <div className="flex justify-center">
            <button
              type="button"
              className="ml-2 inline-block rounded bg-green px-6 py-2.5 font-medium leading-tight text-black shadow-md transition duration-150 ease-in-out hover:bg-emerald-600 hover:shadow-lg focus:bg-emerald-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-emerald-700 active:shadow-lg"
            >
              {t('home.contact')}
            </button>
          </div>
        </div>
      </div>
      <div className="container mx-auto grid gap-4 p-4 pt-24 text-center md:grid-cols-3 md:pt-36 2xl:max-w-6xl">
        <div className="mb-24 flex flex-col items-center md:mb-36">
          <div className="text-3xl font-bold">6</div>
          <div className="text-lg">{t('home.stat1')}</div>
        </div>
        <div className="mb-24 flex flex-col items-center md:mb-36">
          <div className="text-3xl font-bold">100</div>
          <div className="text-lg">{t('home.stat2')}</div>
        </div>
        <div className="mb-24 flex flex-col items-center md:mb-36">
          <div className="text-3xl font-bold">N/A</div>
          <div className="text-lg">{t('home.stat3')}</div>
        </div>
      </div>
      <div className="bg-slate-50 py-24 px-4">
        <div className="container mx-auto 2xl:max-w-6xl">
          <h2 className="mb-3 text-2xl font-bold md:text-3xl">
            {t('home.how')}
          </h2>
          <p className="text-lg">{t('home.how-desc')}</p>
          <p className="mt-12 mb-20 text-center">{t('home.how-general')}</p>
          <div className="grid gap-4 pb-32 md:grid-cols-4">
            <div className="relative flex flex-col items-center justify-between">
              <img width={120} src={step1Image} alt="step1" />
              <p className="mt-10">{t('home.how-step1')}</p>
              <div className="absolute right-0 top-1/2 hidden translate-x-7 -translate-y-7 sm:block">
                <p className="hidden items-center justify-center rounded-full text-3xl font-bold text-gray-400 md:flex">
                  {'>'}
                </p>
              </div>
            </div>
            <div className="relative flex flex-col items-center justify-between">
              <img width={120} src={step2Image} alt="step2" />
              <p className="mt-10">{t('home.how-step2')}</p>
              <div className="absolute right-0 top-1/2 hidden translate-x-7 -translate-y-7 sm:block">
                <p className="hidden items-center justify-center rounded-full text-3xl font-bold text-gray-400 md:flex">
                  {'>'}
                </p>
              </div>
            </div>
            <div className="relative flex flex-col items-center justify-between">
              <img width={120} src={step3Image} alt="step3" />
              <p className="mt-10">{t('home.how-step3')}</p>
              <div className="absolute right-0 top-1/2 hidden translate-x-7 -translate-y-7 sm:block">
                <p className="hidden items-center justify-center rounded-full text-3xl font-bold text-gray-400 md:flex">
                  {'>'}
                </p>
              </div>
            </div>
            <div className="relative flex flex-col items-center justify-between">
              <img width={120} src={step4Image} alt="step4" />
              <p className="mt-10">{t('home.how-step4')}</p>
              <div className="absolute right-0 top-1/2 hidden translate-x-7 -translate-y-7 sm:block"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto py-24 px-4 2xl:max-w-6xl">
        <h2 className="mb-3 text-2xl font-bold md:text-3xl">
          {t('home.partners')}
        </h2>
      </div>
      <div className="bg-slate-50 py-24">
        <div className="container mx-auto p-4 2xl:max-w-6xl">
          <h2 className="mb-3 text-2xl font-bold md:text-3xl">
            {t('home.projects')}
          </h2>
        </div>
      </div>
    </div>
  )
}

export default Home

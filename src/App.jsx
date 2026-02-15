import { Suspense, lazy, useEffect, useState } from 'react'

const Lottie = lazy(() => import('lottie-react'))

const expertise = [
  {
    label: 'مهندسی محصول',
    detail:
      'از کشف نیاز تا انتشار نهایی، محصولاتی می سازیم که هم زیبا هستند هم مقیاس پذیر و قابل اتکا.',
    symbol: '</>',
  },
  {
    label: 'توسعه وب اپلیکیشن',
    detail:
      'وب اپ های سریع، امن و ریسپانسیو با معماری مدرن، API پایدار و تجربه کاربری حرفه ای ارائه می دهیم.',
    symbol: 'UI',
  },
  {
    label: 'راهکارهای نرم افزاری سفارشی',
    detail:
      'سامانه ها و ابزارهای اختصاصی متناسب با فرآیندهای کسب وکار شما طراحی و پیاده سازی می کنیم.',
    symbol: 'API',
  },
]

const projects = [
  {
    title: 'پلتفرم فروش ابری Nimbus',
    description:
      'یک سیستم سفارش گیری B2B که قیمت گذاری، انبار و ارسال را در چند بازار به صورت یکپارچه مدیریت می کند.',
    image:
      'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=80',
    tags: ['React', 'Node.js', 'Payments'],
  },
  {
    title: 'داشبورد منابع انسانی Orion',
    description:
      'داشبورد تحلیلی بلادرنگ برای مدیریت شیفت ها، بهینه سازی ظرفیت تیم و ارسال هشدارهای هوشمند.',
    image:
      'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80',
    tags: ['TypeScript', 'Analytics', 'Cloud'],
  },
  {
    title: 'پرتال سلامت Astra',
    description:
      'پرتال امن تعامل با بیمار برای نوبت دهی آنلاین، دسترسی به پرونده و اطلاع رسانی خودکار.',
    image:
      'https://images.unsplash.com/photo-1573166364524-d9dbfd8bb9e3?auto=format&fit=crop&w=1200&q=80',
    tags: ['Security', 'Healthcare', 'Web App'],
  },
]

const metrics = [
  { label: 'پروژه تحویل شده', value: '+120' },
  { label: 'رضایت مشتری', value: '98%' },
  { label: 'سال تجربه تیم', value: '+10' },
]

function App() {
  const [heroAnimation, setHeroAnimation] = useState(null)

  useEffect(() => {
    let isMounted = true

    fetch(encodeURI('/evergreen pc.json'))
      .then((response) => response.json())
      .then((data) => {
        if (isMounted) {
          setHeroAnimation(data)
        }
      })
      .catch(() => {})

    return () => {
      isMounted = false
    }
  }, [])

  return (
    <div className="relative overflow-hidden pb-12 text-[#13324c]" dir="rtl">
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-90">
        <div className="absolute left-[-12rem] top-[20rem] h-[26rem] w-[26rem] rounded-full bg-[#c7d2fe]/20 blur-3xl" />
        <div className="absolute right-[-8rem] top-[-3rem] h-[24rem] w-[24rem] rounded-full bg-[#a5b4fc]/18 blur-3xl" />
      </div>

      <header id="home" className="section-shell flex min-h-[100svh] flex-col pb-14 md:pb-16 md:pt-2">
        <nav className="flex items-center justify-between border-b border-[#d4ddf7] px-2 py-4 md:px-0">
          <a href="#home" className="font-display text-lg font-semibold text-[#12324c]">
            <span className="brand-latin">
              RAYA<span className="text-[#1da7d8]">.dev</span>
            </span>
          </a>
          <ul className="hidden items-center gap-7 text-sm text-[#5a7691] md:flex">
            <li>
              <a className="transition-colors hover:text-[#12324c]" href="#about">
                درباره ما
              </a>
            </li>
            <li>
              <a className="transition-colors hover:text-[#12324c]" href="#projects">
                پروژه ها
              </a>
            </li>
            <li>
              <a className="transition-colors hover:text-[#12324c]" href="#contact">
                تماس
              </a>
            </li>
          </ul>
        </nav>

        <div className="hero-orbit-stage flex-1 py-6 md:py-8">
          <div className="hero-orbit-wrap">
            <article className="hero-note hero-note-top hero-note-plain animate-fade-up rounded-2xl p-5 text-center md:p-6">
              <p className="mb-3 inline-flex rounded-full border border-[#b3c4f1]/60 bg-transparent px-3 py-1 text-xs font-semibold text-[#5b72a3]">
                استودیو طراحی و توسعه نرم افزار
              </p>
              <h1 className="font-display text-2xl font-semibold leading-tight text-[#12324c] md:text-3xl">
                <span className="text-[#4f46e5]">تجربه دیجیتال</span> حرفه ای برای{' '}
                <span className="text-[#6366f1]">رشد سریع</span> کسب وکار
              </h1>
              <p className="mx-auto mt-3 max-w-3xl text-sm leading-relaxed text-[#56718c] md:text-base">
                رایا محصولاتی طراحی می کند که هم از نظر تجربه کاربری چشمگیرند و هم از نظر فنی
                آماده مقیاس.
              </p>
            </article>

            <article className="hero-note hero-note-right hero-side-card hero-skill-card rounded-2xl p-5 text-center md:p-6">
              <h2 className="font-display text-lg font-semibold text-[#12324c] md:text-xl">تخصص های کلیدی</h2>
              <div className="mt-4 space-y-3">
                {expertise.map((item) => (
                  <div
                    key={item.label}
                    className="hero-skill-item rounded-xl px-3 py-2"
                  >
                    <span className="hero-skill-dot" aria-hidden="true" />
                    <span className="text-sm font-semibold text-[#244563]">{item.label}</span>
                  </div>
                ))}
              </div>
            </article>

            <article className="hero-note hero-note-left hero-side-card hero-kpi-card rounded-2xl p-5 text-center md:p-6">
              <p className="text-sm font-semibold text-[#456489]">شاخص های عملکرد تیم رایا</p>
              <div className="mt-4 grid gap-3">
                {metrics.map((item) => (
                  <div key={item.label} className="hero-kpi-item rounded-xl px-4 py-3 text-center">
                    <p className="font-display text-2xl font-semibold text-[#12324c]">{item.value}</p>
                    <p className="mt-1 text-xs text-[#5d7d99]">{item.label}</p>
                  </div>
                ))}
              </div>
            </article>

            <article className="hero-note hero-note-bottom hero-note-plain rounded-2xl p-5 text-center md:p-6">
              <p className="mx-auto max-w-3xl text-sm leading-relaxed text-[#56718c]">
                برای شروع پروژه، نیازمندی ها و اهداف محصولت را ارسال کن تا نقشه راه اجرایی را با
                هم تنظیم کنیم.
              </p>
              <div className="mt-4 flex flex-wrap justify-center gap-3">
                <a
                  href="#contact"
                  className="rounded-full bg-gradient-to-r from-[#6366f1] to-[#818cf8] px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_26px_rgba(99,102,241,0.25)] transition hover:translate-y-[-2px]"
                >
                  شروع همکاری
                </a>
                <a
                  href="#projects"
                  className="rounded-full border border-[#a9b7e6] bg-transparent px-6 py-3 text-sm font-semibold text-[#325271] transition hover:border-[#7f93d4] hover:text-[#12324c]"
                >
                  مشاهده نمونه کارها
                </a>
              </div>
            </article>

            <div className="hero-center-shell">
              <div className="hero-center-wrap hero-svg-wrap rounded-[2rem] p-4 md:p-6">
                {heroAnimation ? (
                  <Suspense
                    fallback={
                      <div className="flex h-[420px] items-center justify-center text-sm text-[#6b85a0]">
                        در حال آماده سازی انیمیشن...
                      </div>
                    }
                  >
                    <Lottie
                      animationData={heroAnimation}
                      loop
                      autoplay
                      className="mx-auto h-[420px] w-full max-w-[420px] drop-shadow-[0_0_22px_rgba(99,102,241,0.18)]"
                    />
                  </Suspense>
                ) : (
                  <div className="flex h-[420px] items-center justify-center text-sm text-[#6b85a0]">
                    در حال بارگذاری انیمیشن...
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="section-shell">
        <div className="h-px bg-gradient-to-r from-transparent via-[#c7d2fe]/85 to-transparent" />
      </div>

      <section id="about" className="section-shell py-12 md:py-16">
        <div className="mb-10 max-w-3xl animate-fade-up">
          <p className="text-sm tracking-[0.08em] text-[#5f7d99]">درباره رایا</p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-[#12324c] md:text-4xl">
            شریک فناوری برای ایده های بزرگ
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#5a7691]">
            ما با نگاه محصول محور، بین طراحی و مهندسی پلی محکم می زنیم تا نرم افزارهایی دقیق،
            پایدار و آماده توسعه بسازیم. تخصص ما توسعه نرم افزار، وب اپلیکیشن و راهکارهای سفارشی
            سازمانی است.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {expertise.map((item) => (
            <article key={item.label} className="glass-panel rounded-2xl p-6 transition hover:-translate-y-1">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#d9ebfa] text-sm font-bold text-[#1d5b86]">
                {item.symbol}
              </span>
              <h3 className="mt-5 font-display text-xl font-semibold text-[#12324c]">{item.label}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#5a7691]">{item.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="projects" className="section-shell py-12 md:py-16">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl animate-fade-up">
            <p className="text-sm tracking-[0.08em] text-[#5f7d99]">نمونه پروژه ها</p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-[#12324c] md:text-4xl">
              چند نمونه از محصولاتی که طراحی و توسعه می دهیم
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#5a7691]">
              این موارد نمونه هستند و می توانید بعدا با پروژه های واقعی شرکت جایگزینشان کنید.
            </p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="project-card glass-panel overflow-hidden rounded-3xl border border-[#a8c2d9]/50"
            >
              <div className="relative h-48 overflow-hidden">
                <img alt={project.title} className="h-full w-full object-cover" src={project.image} />
                <div className="absolute inset-0 bg-gradient-to-t from-[#d9e9f8]/75 via-[#d9e9f8]/5 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-semibold text-[#12324c]">{project.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#5a7691]">{project.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={`${project.title}-${tag}`}
                      className="rounded-full border border-[#9db9d4]/60 bg-[#ecf5fc] px-3 py-1 text-xs font-semibold text-[#365674]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="section-shell py-12 md:py-16">
        <div className="grid gap-7 lg:grid-cols-[0.85fr_1.15fr]">
          <article className="glass-panel rounded-3xl p-7 md:p-9">
            <p className="text-sm tracking-[0.08em] text-[#5f7d99]">تماس با ما</p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-[#12324c] md:text-4xl">
              برای شروع پروژه نرم افزاری خود با ما در ارتباط باشید
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#5a7691]">
              نیازها و اهداف محصولتان را بگویید تا مسیر فنی، زمان بندی اجرا و برآورد دقیق را با هم
              مشخص کنیم.
            </p>

            <div className="mt-7 space-y-5 text-sm text-[#365674]">
              <div>
                <p className="text-xs tracking-[0.06em] text-[#5f7d99]">آدرس</p>
                <p className="mt-1">تهران، خیابان گاندی جنوبی، کوچه ۲۱، پلاک ۱۴، واحد ۷</p>
              </div>
              <div>
                <p className="text-xs tracking-[0.06em] text-[#5f7d99]">تلفن</p>
                <p className="mt-1">
                  <a className="contact-ltr inline-block transition-colors hover:text-[#12324c]" href="tel:+982188001122">
                    +98 21 8800 1122
                  </a>
                </p>
                <p className="mt-1">
                  <a className="contact-ltr inline-block transition-colors hover:text-[#12324c]" href="tel:+989121234567">
                    +98 912 123 4567
                  </a>
                </p>
              </div>
              <div>
                <p className="text-xs tracking-[0.06em] text-[#5f7d99]">ایمیل</p>
                <p className="mt-1">
                  <a
                    className="contact-ltr inline-block transition-colors hover:text-[#12324c]"
                    href="mailto:hello@raya.dev"
                  >
                    hello@raya.dev
                  </a>
                </p>
              </div>
            </div>
          </article>

          <article className="glass-panel overflow-hidden rounded-3xl p-2 md:p-3">
            <div className="h-[320px] overflow-hidden rounded-2xl md:h-full md:min-h-[440px]">
              <iframe
                className="h-full w-full border-0"
                title="نقشه دفتر رایا"
                src="https://www.google.com/maps?q=Tehran,+Gandhi+Street&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </article>
        </div>
      </section>

      <footer className="section-shell pt-8 text-center text-sm text-[#6f8ca7]">
        استودیو نرم افزاری رایا | طراحی و توسعه محصولات دیجیتال مدرن
      </footer>
    </div>
  )
}

export default App

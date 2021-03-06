```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <!-- ===== BOX ICONS ===== -->
    <link
      href="https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css"
      rel="stylesheet"
    />
    <script
      defer="defer"
      src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.6.1/gsap.min.js"
    ></script>

    <title>slanBooks</title>
  </head>

  <body>
    <!-- ===== SCROLL TOP ===== -->
    <a href="#" class="scrolltop" id="scroll-top">
      <i class="bx bxs-chevron-up  scrolltop__icon"></i>
    </a>
    <!-- ===== HEADER ===== -->
    <header class="l-header" id="header">
      <nav class="nav bd-container">
        <a href="#" class="nav__logo">Clay Doe</a>

        <div class="nav__menu" id="nav-menu">
          <ul class="nav__list">
            <li class="nav__item">
              <a href="#home" class="nav__link">Home</a>
            </li>
            <li class="nav__item">
              <a href="#about" class="nav__link">About</a>
            </li>
            <li class="nav__item">
              <a href="#services" class="nav__link">Services</a>
            </li>
            <li class="nav__item">
              <a href="#portfolio" class="nav__link">Portfolio</a>
            </li>
            <li class="nav__item">
              <a href="#contact" class="nav__link">Contactme</a>
            </li>
          </ul>
        </div>

        <div class="nav__toggle" id="nav-toggle">
          <i class="bx bx-menu"></i>
        </div>
      </nav>
    </header>
    <main class="l-main">
      <!-- HOME -->
      <section class="home" id="home">
        <div class="home__container bd-container bd-grid">
          <div class="home__data">
            <span class="home__greeting">Hello, My name is</span>
            <h1>Clay Doe</h1>
            <span class="home__profession">Web developer</span>
            <a href="#contact" class="button button-light">Contact</a>
          </div>

          <div class="home__social">
            <a href="#" class="home__social-icon">
              <i class="bx bxl-facebook-square"></i>
            </a>
            <a href="#" class="home__social-icon">
              <i class="bx bxl-instagram"></i>
            </a>
            <a href="#" className="home__social-icon">
              <i className="bx bxl-twitter"></i>
            </a>
          </div>
          <div className="home__img">
            <img src="./5e7e55db004783a93784.jpg" alt="" />
          </div>
        </div>
      </section>
      <!-- ===== ABOUT ===== -->

      <section class="about section bd-container" id="about">
        <div class="section-subtitle">My History</div>
        <h2 class="section-title">About me</h2>
        <div class="about__container bd-grid">
          <div class="about__data bd-grid">
            <p class="about__description">
              <span>
                Hello, I am<br />
                freelance fronted developer, I am passionate about creating and
                developing web interfaces. With years of experience in web
                design and development.
              </span>
            </p>

            <div>
              <span class="about__number">05</span>
              <span class="about__achievement">Years off Experience</span>
            </div>

            <div>
              <span class="about__number">29+</span>
              <span class="about__achievement">Projects completes</span>
            </div>

            <div>
              <span class="about__number">07</span>
              <span class="about__achievement">Best work awards</span>
            </div>
          </div>

          <img src="./b7e511330fbac49f4620.jpg" alt="" class="about__img" />
        </div>
      </section>

      <!-- ===== QUALIFICATION ===== -->

      <section class="qualification section bd-container">
        <span class="section-subtitle">Experience and education</span>
        <h2 class="section-title">Qualification</h2>

        <div class="qualification__container bd-grid">
          <div class="qualification__content">
            <h2 class="qualification__title">
              <i class="bx bx-briefcase-alt qualification__title-icon"></i>
              Work Experience
            </h2>

            <div class="bd-grid">
              <div class="qualification__data">
                <h3 class="qualification__area">Senior Front end Developer</h3>

                <div class="qualification__box">
                  <span class="qualification__work">
                    <i class="bx bx-briefcase-alt qualification__icon"></i>
                    Adobe - New York
                  </span>

                  <span class="qualification__work">
                    <i class="bx bx-calendar-alt qualification__icon"></i>
                    Jan 2019 - Aug 2019
                  </span>
                </div>
              </div>

              <div class="qualification__data">
                <h3 class="qualification__area">Ui / UX Designer</h3>

                <div class="qualification__box">
                  <span class="qualification__work">
                    <i class="bx bx-briefcase-alt qualification__icon"></i>
                    Figma - Lima
                  </span>

                  <span class="qualification__work">
                    <i class="bx bx-calendar-alt qualification__icon"></i>
                    Oct 2019 - Dec 2019
                  </span>
                </div>
              </div>

              <div class="qualification__data">
                <h3 class="qualification__area">Web Designer</h3>

                <div class="qualification__box">
                  <span class="qualification__work">
                    <i class="bx bx-briefcase-alt qualification__icon"></i>
                    Apple Inc - New York
                  </span>

                  <span class="qualification__work">
                    <i class="bx bx-calendar-alt qualification__icon"></i>
                    Jan 2020 - May 2020
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div class="qualification__content">
            <h2 class="qualification__title">
              <i class="bx bx-book-bookmark qualification__title-icon"></i>
              Education
            </h2>
            <div class="bd-grid">
              <div class="qualification__data">
                <h3 class="qualification__area">Computer technician</h3>

                <div class="qualification__box">
                  <span class="qualification__work">
                    <i class="bx bx-book-alt qualification__icon"></i>
                    Lima - Computer institute
                  </span>

                  <span class="qualification__work">
                    <i class="bx bx-calendar-alt qualification__icon"></i>
                    Apr 2015 - Dec 2018
                  </span>
                </div>
              </div>

              <div class="qualification__data">
                <h3 class="qualification__area">Master in web developer</h3>

                <div class="qualification__box">
                  <span class="qualification__work">
                    <i class="bx bx-book-alt qualification__icon"></i>
                    Madrid - Design institute
                  </span>
                  <span class="qualification__work">
                    <i class="bx bx-calendar-alt qualification__icon"></i>
                    Jan 2019 - Aug 2020
                  </span>
                </div>
              </div>

              <div class="qualification__data">
                <h3 class="qualification__area">Web Designer</h3>

                <div class="qualification__box">
                  <span class="qualification__work">
                    <i class="bx bx-briefcase-alt qualification__icon"></i>
                    Apple Inc - New York
                  </span>

                  <span class="qualification__work">
                    <i class="bx bx-calendar-alt qualification__icon"></i>
                    Jan 2020 - May 2020
                  </span>

                  <span class="qualification__work">
                    <i class="bx bx-briefcase-alt qualification__icon"></i>
                    Adobe - New York
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ===== SERVICES ===== -->

      <section class="services section bd-container" id="services">
        <span class="section-subtitle"> What i offer </span>
        <h2 class="section-title">Services</h2>
        <div class="services__container bd-grid">
          <div class="services__data">
            <i class="bx bx-palette services__icon"></i>
            <h3 class="services__title">Ui/Ux Design</h3>
            <p class="services__description">
              Services that I offer and work, with years of experience in the
              work area.
            </p>
            <a href="#" class="button">Know more</a>
          </div>

          <div class="services__data">
            <i class="bx bx-laptop services__icon"></i>
            <h3 class="services__title">Web development</h3>
            <p class="services__description">
              Services that I offer and work, with years of experience in the
              work area.
            </p>
            <a href="#" class="button">Know more</a>
          </div>

          <div class="services__data">
            <i class="bx bx-pen services__icon"></i>
            <h3 class="services__title">Graphic Design</h3>
            <p class="services__description">
              Services that I offer and work, with years of experience in the
              work area.
            </p>
            <a href="#" class="button">Know more</a>
          </div>
        </div>
      </section>

      <!-- ===== PROJECT IN MIND ===== -->

      <section className="project section bd-container">
        <div className="project__container bd-grid">
          <div className="project__data">
            <i className="bx bx-chat project__icon"></i>
            <div>
              <h2 className="project__title">Project in mind</h2>
              <p className="project__description">
                Hire me to carry out the following projects
              </p>
            </div>
            <div><a href="#" className="button button-white">Hire me</a></div>
          </div>
        </div>
      </section>
      <!-- ===== PORTFOLIO ===== -->
      <section class="portfolio section bd-container" id="portfolio">
        <span class="section-subtitle">My recent works</span>
        <h2 class="section-title">Portfolio</h2>

        <div class="portfolio__nav">
          <span class="portfolio__item active-portfolio" data-filter="all"
            >All</span
          >
          <span class="portfolio__item" data-filter=".web">Web</span>
          <span class="portfolio__item" data-filter=".ux">Ui/Ux</span>
          <span class="portfolio__item" data-filter=".app">App</span>
        </div>

        <div class="portfolio__container bd-grid">
          <div class="portfolio__content mix web">
            <a href="#">
              <img
                src="./dd086ed02b7eca26f6fa.jpg"
                alt=""
                class="portfolio__img"
              />
            </a>

            <div class="portfolio__data">
              <span class="portfolio__subtitle">Web development</span>
              <a href="#">
                <h2 class="portfolio__title">
                  New portfolio of work done for a client.
                </h2>
              </a>
              <a href="#" class="button button-link">View Detail</a>
            </div>
          </div>

          <div class="portfolio__content mix web">
            <a href="#">
              <img
                src="./4bb3bc5b8048d128a681.jpg"
                alt=""
                class="portfolio__img"
              />
            </a>

            <div class="portfolio__data">
              <span class="portfolio__subtitle">Web development</span>
              <a href="#">
                <h2 class="portfolio__title">
                  New portfolio of work done for a client.
                </h2>
              </a>
              <a href="#" class="button button-link">View Detail</a>
            </div>
          </div>

          <div class="portfolio__content mix ux">
            <a href="#">
              <img
                src="./379d5c43ebaf38386f41.jpg"
                alt=""
                class="portfolio__img"
              />
            </a>

            <div class="portfolio__data">
              <span class="portfolio__subtitle">Ux design</span>
              <a href="#">
                <h2 class="portfolio__title">
                  New portfolio of work done for a client.
                </h2>
              </a>
              <a href="#" class="button button-link">View Detail</a>
            </div>
          </div>

          <div class="portfolio__content mix ux">
            <a href="#">
              <img
                src="./c1c454929bf91ab26296.jpg"
                alt=""
                class="portfolio__img"
              />
            </a>

            <div class="portfolio__data">
              <span class="portfolio__subtitle">Ux design</span>
              <a href="#">
                <h2 class="portfolio__title">
                  New portfolio of work done for a client.
                </h2>
              </a>
              <a href="#" class="button button-link">View Detail</a>
            </div>
          </div>

          <div class="portfolio__content mix app">
            <a href="#">
              <img
                src="./d255e3c0f648e0ea6987.jpg"
                alt=""
                class="portfolio__img"
              />
            </a>

            <div class="portfolio__data">
              <span class="portfolio__subtitle">Mobile app</span>
              <a href="#">
                <h2 class="portfolio__title">
                  New portfolio of work done for a client.
                </h2>
              </a>
              <a href="#" class="button button-link">View Detail</a>
            </div>
          </div>

          <div class="portfolio__content mix app">
            <a href="#">
              <img
                src="./20b46b856fc0839d094b.jpg"
                alt=""
                class="portfolio__img"
              />
            </a>

            <div class="portfolio__data">
              <span class="portfolio__subtitle">Mobile app</span>
              <a href="#">
                <h2 class="portfolio__title">
                  New portfolio of work done for a client.
                </h2>
              </a>
              <a href="#" class="button button-link">View Detail</a>
            </div>
          </div>
        </div>
      </section>

      <!-- ===== TESTIMONIAL ===== -->
      <section class="testimonial section bd-container">
        <span class="section-subtitle">My client saying</span>
        <h2 class="section-title">Testiomial</h2>

        <div class="testimonial__container swiper-container">
          <div class="swiper-wrapper">
            <div class="testimonial__content swiper-slide">
              <img
                src="./0288b544eafe886a458b.jpg"
                alt=""
                class="testimonial__img"
              />
              <h3 class="testimonial__title">Nik Holly</h3>
              <span class="testimonial__client">Client</span>
              <p class="testimonial__description">
                This company does a very good services, offers the best deals
                and does a good job, I recomend it.
              </p>
            </div>

            <div class="testimonial__content swiper-slide">
              <img
                src="./83c07c32fd41c855996a.jpg"
                alt=""
                class="testimonial__img"
              />
              <h3 class="testimonial__title">Sara Mill</h3>
              <span class="testimonial__client">Client</span>
              <p class="testimonial__description">
                This company does a very good services, offers the best deals
                and does a good job, I recomend it.
              </p>
            </div>

            <div class="testimonial__content swiper-slide">
              <img
                src="./d1263b67d2460e4420f8.jpg"
                alt=""
                class="testimonial__img"
              />
              <h3 class="testimonial__title">Clay Mitchell</h3>
              <span class="testimonial__client">Client</span>
              <p class="testimonial__description">
                This company does a very good services, offers the best deals
                and does a good job, I recomend it.
              </p>
            </div>
          </div>
          <div class="swiper-pagination">
            <div class="swiper-pagination-bullet-active">
              <div class="swiper-pagination-bullet"></div>
            </div>
          </div>
        </div>
      </section>
      <!-- CONTACTME -->
      <section class="contact section bd-container" id="contact">
        <span class="section-subtitle">For projects</span>
        <h2 class="section-title">Contact me</h2>

        <div class="contact__container bd-grid">
          <div class="contact__content bd-grid">
            <div class="contact__box">
              <i class="bx bx-home contact__icon"></i>
              <h3 class="contact__title">Location</h3>
              <span class="contact__description">#123 Lima - Peru</span>
            </div>

            <div class="contact__box">
              <i class="bx bx-phone contact__icon"></i>
              <h3 class="contact__title">Phone</h3>
              <span class="contact__description">999-888-777</span>
            </div>

            <div class="contact__box">
              <i class="bx bx-envelope contact__icon"></i>
              <h3 class="contact__title">E-mail</h3>
              <span class="contact__description">clayuser@email.com</span>
            </div>

            <div class="contact__box">
              <i class="bx bx-chat contact__icon"></i>
              <h3 class="contact__title">Chat</h3>
              <div>
                <a href="#" class="contact__social"
                  ><i class="bx bxl-whatsapp-square"></i
                ></a>
                <a href="#" class="contact__social"
                  ><i class="bx bxl-telegram"></i
                ></a>
                <a href="#" class="contact__social"
                  ><i class="bx bxl-messenger"></i
                ></a>
              </div>
            </div>
          </div>
          <form action="" class="contact__form">
            <div class="contact__inputs">
              <input type="text" placeholder="Name" class="contact__input" />
              <input type="email" placeholder="Email" class="contact__input" />
            </div>

            <div class="contact__inputs">
              <input type="text" placeholder="Project" class="contact__input" />
              <input
                type="number"
                placeholder="Number"
                class="contact__input"
              />
            </div>

            <textarea
              name=""
              id=""
              cols="0"
              rows="7"
              placeholder="Message"
              class="contact__input"
            ></textarea>

            <input
              type="submit"
              value="Send Message"
              class="button contact__button"
            />
          </form>
        </div>
      </section>

      <!-- ===== FOOTER ===== -->
      <footer class="footer footer__container">
        <div class="footer__description bd-container">
          <h1 class="footer__title">Clay Doe</h1>
          <p class="footer__description">
            I am Clay Doe and this is my personal websaite, consult me here.
          </p>

          <div class="footer__social">
            <a href="#" class="footer__link"><i class="bx bxl-linkedin"></i></a>
            <a href="#" class="footer__link"><i class="bx bxl-github"></i></a>
            <a href="#" class="footer__link"><i class="bx bxl-dribbble"></i></a>
          </div>
          <p class="footer__copy">&#169; 2020 Bedimcode. All right reserved</p>
        </div>
      </footer>

      <!-- ===== FOOTER ===== -->
    </main>
  </body>
</html>
```

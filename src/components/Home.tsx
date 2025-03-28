const Home = () => {
  return (
    <section className="w-full h-full bg-neutral-900 select-none">
      <div className="flex justify-center text-center pt-50 text-8xl text-neutral-300">
        <p>
          Design work
          <br />
          efficient way
        </p>
      </div>
      <div className="flex flex-row justify-between">
        <div>
          <img
            src="\Vlad Muslakov.png"
            alt="Logo"
            className="pl-21 w-70 h-50 rounded-2xl"
          />
          <div className="ml-22 mt-1 text-sm text-neutral-400">
            Vlad Muslavkov
          </div>
        </div>
        <div className="flex flex-col text-center pt-15 text-xl text-neutral-500">
          <p>
            Innovative design solutions for technology firms and <br />
            emerging businesses weary of the typical aesthetic <br />
            methodology. Arriving shortly.
          </p>
          <nav className="hidden md:flex items-center gap-2 lg:gap-10 md:gap-4 mt-8">
            <div className="hidden md:flex items-center justify-center lg:gap-10 md:gap-4 border-1 border-neutral-700 rounded-4xl p-4">
              <input
                type="text"
                placeholder="name@email.com"
                className="ml-3 text-neutral-300"
                style={{ border: "none", outline: "none" }}
              />
              <div className="hidden md:flex">
                <div className="items-center bg-lime-300 rounded-4xl pl-7 pr-7 pt-3 pb-3 text-sm text-black font-semibold">
                  Get notified
                </div>
              </div>
            </div>
          </nav>
        </div>
        <div>
          <img
            src="\Vlad Muslakov.png"
            alt="Logo"
            className="pr-21 w-70 h-50 rounded-2xl"
          />
          <div className="ml-2 mt-1 text-sm text-neutral-400">Aryan Shah</div>
        </div>
      </div>
      <div className="flex flex-row justify-around">
        <div className="mt-10">
          <img
            src="\Dashboard.png"
            alt="Logo"
            className="pl-21 w-70 h-50 rounded-2xl"
          />
        </div>
        <div className="mt-22">
          <div className="mb-1 text-sm text-neutral-400">Nur Praditya</div>
          <img
            src="\Nur Praditya.png"
            alt="Logo"
            className="w-70 h-50 rounded-2xl"
          />
        </div>
        <div className="mt-10">
          <div className="ml-20 mt-1 text-sm text-neutral-400">
            Thomas Cullen
          </div>
          <img
            src="\Thomas Cullen.png"
            alt="Logo"
            className="pl-21 w-70 h-50 rounded-2xl"
          />
        </div>
      </div>
      <div className="flex flex-col text-center pt-25 text-xl text-neutral-500">
        Already chosen by the leaders
      </div>
      <div className="flex flex-row justify-center mt-10 gap-10 opacity-80 grayscale">
        <img src="\headspace.png" alt="headspace" className="w-50 h-10 " />
        <img src="\shopify.png" alt="shopify" className="w-30 h-12 " />
        <img src="\volvo.png" alt="volvo" className="w-15 h-10" />
        <img src="\mobbin.png" alt="mobbin" className="w-50 h-10 " />
        <img src="\pinterest.svg" alt="pinterest" className="w-50 h-10 " />
        <img src="\duolingo.svg" alt="duolingo" className="w-50 h-12 " />
      </div>
      <div className="flex flex-col text-center pt-35 text-xl text-lime-300">
        INTRODUCING BOLT
      </div>
      <div className="flex flex-col text-center pt-3 text-4xl text-neutral-500 leading-none">
        <span>
          <span className="text-neutral-300">We know what’s going on.</span> You
          need
        </span>
        <p>
          top-notch design to stand out in the <br />
          tech world, but hiring in-house <br />
          designers can be expensive and time-consuming.
        </p>
        <span className="text-neutral-300">That’s where Atomic comes in.</span>
      </div>
      <div className="flex flex-row justify-center items-end pt-35 text-xl text-lime-300">
        <img src="\parar-circulado.png" alt="" className="w-6 h-6" />
        <div className="ml-2">What you'II get</div>
      </div>
      <div className="flex flex-col text-center pt-3 text-5xl text-neutral-300 leading-none">
        <p>
          We resolve problems associated with <br />
          creative procedures.
        </p>
      </div>
      <div className="flex flex-row justify-center mt-15 gap-8 ">
        <div className="w-100 h-110 bg-neutral-800 rounded-4xl border-1 border-neutral-700">
          <div className="flex justify-center">
            <div className="flex flex-col w-68 h-50 bg-neutral-900 opacity-99 rounded-3xl mt-10 border-1 border-neutral-700">
              <div className="ml-5 mt-3 text-lime-300 text-lg font-semibold">
                <div>Growth</div>
              </div>
              <div className="flex justify-center">
                <img
                  src="\grafico-combinado.svg"
                  alt=""
                  className="w-40 h-40"
                />
              </div>
            </div>
          </div>
          <div className="mt-10 ml-10 text-3xl text-neutral-300">
            Cost effective solution
          </div>
          <div className="flex">
            <span className="mt-3 ml-10 text-lg text-neutral-500 font-semibold">
              Get high-quality design work at a <br />
              fraction of the cost.
            </span>
          </div>
        </div>
        <div className="w-100 h-110 bg-neutral-800 rounded-4xl border-1 border-neutral-700">
          <div className="flex ml-10">
            <div className="flex w-75 h-22 bg-neutral-900 opacity-99 rounded-4xl mt-20 border-1 border-neutral-700">
              <div className="flex flex-row items-center">
                <div className="flex w-23 h-15 bg-black rounded-3xl justify-center items-center ml-4">
                  <img src="\relampago.png" alt="" className="w-9 h-7" />
                </div>
                <div className="flex flex-col ml-4">
                  <div className="flex flex-row text-xxs text-lime-300 items-center">
                    <div className="w-2 h-2 rounded-full bg-lime-300" />
                    <div className="pl-1">NEW</div>
                  </div>
                  <div className="text-xl text-neutral-300">Latest design</div>
                  <span className="text-neutral-500">Today, 11:50</span>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-28 ml-10 text-3xl text-neutral-300">
            Tailor–made design
          </div>
          <div className="flex">
            <span className="mt-3 ml-10 text-lg text-neutral-500 font-semibold">
              We've got the expertise to make your <br />
              vision a reality.
            </span>
          </div>
        </div>
        <div className="w-100 h-110 bg-neutral-800 rounded-4xl border-1 border-neutral-700">
          <div className="flex justify-center mt-10">
            <img src="\grafico-combinado.svg" alt="" className="w-80 h-50" />
          </div>
          <div className="flex flex-col">
            <div className="mt-10 ml-10 text-3xl text-neutral-300">
              Scalable as you grow
            </div>
            <span className="mt-3 ml-10 text-lg text-neutral-500 font-semibold">
              We’re ready to meet your evolving <br />
              needs.
            </span>
          </div>
        </div>
      </div>
      <div className="flex items-center flex-row justify-center mt-15 gap-8">
        <div className="flex flex-row items-center justify-around pl-10 w-153 h-50 bg-neutral-800 rounded-4xl border-1 border-neutral-700">
          <div className="flex flex-col text-2xl text-neutral-300 font-medium leading-none">
            <p className="leading-none">
              Workflow <br />
              integration
            </p>
            <span className="text-xl text-neutral-500 mt-4 font-semibold">
              Seamlessly connect all your <br />
              existing apps.
            </span>
          </div>
          <div className="grid grid-rows-2">
            <div className="flex flex-row gap-3">
              <div className="flex w-20 h-20 bg-neutral-900 opacity-99 rounded-full items-center justify-center border-t-1 border-l-1 border-t-neutral-700 border-l-neutral-700">
                <img src="\figma.png" alt="" className="w-10 h-10" />
              </div>
              <div className="flex w-20 h-20 bg-neutral-900 opacity-99 rounded-full items-center justify-center border-t-1 border-l-1 border-t-neutral-700 border-l-neutral-700">
                <img src="\Notion.png" alt="" className="w-10 h-10" />
              </div>
              <div className="flex w-20 h-20 bg-neutral-900 opacity-99 rounded-full items-center justify-center border-t-1 border-l-1 border-t-neutral-700 border-l-neutral-700">
                <img src="\Wikimedia.png" alt="" className="w-10 h-10" />
              </div>
            </div>
            <div className="flex flex-row mt-1 ml-12 gap-3 items-center">
              <div className="flex w-20 h-20 bg-neutral-900 opacity-99 rounded-full items-center justify-center border-t-1 border-l-1 border-t-neutral-700 border-l-neutral-700">
                <img
                  src="\x.png"
                  alt=""
                  className="w-10 h-10 rounded-full pt-1"
                />
              </div>
              <div className="flex w-20 h-20 bg-neutral-900 opacity-99 rounded-full items-center justify-center border-t-1 border-l-1 border-t-neutral-700 border-l-neutral-700">
                <img src="\burguer.png" alt="" className="w-10 h-10" />
              </div>
              <div className="flex w-20 h-20 bg-neutral-900 opacity-99 rounded-full items-center justify-center border-t-1 border-l-1 border-t-neutral-700 border-l-neutral-700">
                <img src="\discord.svg" alt="" className="w-15 h-15 " />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center justify-around pl-3 w-153 h-50 bg-neutral-800 rounded-4xl border-1 border-neutral-700">
          <div className="flex flex-col text-2xl text-neutral-300 font-medium leading-none">
            <p className="leading-none">
              Collaborate <br />
              real-time
            </p>
            <span className="text-xl text-neutral-500 mt-4 font-semibold">
              Seamlessly connect all <br />
              your existing apps.
            </span>
          </div>
          <div className="flex flex-row">
            <div className="rounded-full border-6 border-fuchsia-800 relative z-3">
              <img
                src="\mulher-vermelho.png"
                alt=""
                className="w-15 h-15 rounded-full border-4 border-neutral-800"
              />
            </div>
            <div className="rounded-full border-6 border-cyan-300 relative right-6 z-2">
              <img
                src="\homem-preto.png"
                alt=""
                className="w-15 h-15 rounded-full border-4 border-neutral-800"
              />
            </div>
            <div className="rounded-full border-6 border-lime-300 relative right-12 z-1">
              <img
                src="\mulher-branca.png"
                alt=""
                className="w-15 h-15 rounded-full border-4 border-neutral-800"
              />
            </div>
            <div className="rounded-full border-6 border-neutral-700 relative right-18">
              <div className="w-15 h-15 rounded-full bg-neutral-700 border-4 border-neutral-800" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-center mt-8 gap-6">
        <div className="flex items-center justify-center w-60 h-13 bg-neutral-800 rounded-xl border-1 border-neutral-700">
          <img src="\parar-circulado.png" alt="" className="w-6 h-6" />
          <div className="text-neutral-500 font-semibold ml-2">
            Design workshops
          </div>
        </div>
        <div className="flex items-center justify-center w-45 h-13 bg-neutral-800 rounded-xl border-1 border-neutral-700">
          <img src="\parar-circulado.png" alt="" className="w-6 h-6" />
          <div className="text-neutral-500 font-semibold ml-2">Workshops</div>
        </div>
        <div className="flex items-center justify-center w-50 h-13 bg-neutral-800 rounded-xl border-1 border-neutral-700">
          <img src="\parar-circulado.png" alt="" className="w-6 h-6" />
          <div className="text-neutral-500 font-semibold ml-2">
            Trend reports
          </div>
        </div>
        <div className="flex items-center justify-center w-45 h-13 bg-neutral-800 rounded-xl border-1 border-neutral-700">
          <img src="\parar-circulado.png" alt="" className="w-6 h-6" />
          <div className="text-neutral-500 font-semibold ml-2">
            Asset library
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-center mt-8 gap-8">
        <div className="flex items-center justify-center w-50 h-13 bg-neutral-800 rounded-xl border-1 border-neutral-700">
          <img src="\parar-circulado.png" alt="" className="w-6 h-6" />
          <div className="text-neutral-500 font-semibold ml-2">
            Rollover hours
          </div>
        </div>
        <div className="flex items-center justify-center w-50 h-13 bg-neutral-800 rounded-xl border-1 border-neutral-700">
          <img src="\parar-circulado.png" alt="" className="w-6 h-6" />
          <div className="text-neutral-500 font-semibold ml-2">
            Premium designers
          </div>
        </div>
        <div className="flex items-center justify-center w-65 h-13 bg-neutral-800 rounded-xl border-1 border-neutral-700">
          <img src="\parar-circulado.png" alt="" className="w-6 h-6" />
          <div className="text-neutral-500 font-semibold ml-2">
            Multilingual support
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-center items-end pt-50 text-xl text-lime-300">
        <img src="\parar-circulado.png" alt="" className="w-6 h-6" />
        <div className="ml-2">How it works</div>
      </div>
      <div className="flex flex-col text-center pt-5 text-5xl text-neutral-300">
        <p>
          Top–notch designs, <br />
          delivered at your doorstep.
        </p>
      </div>
      <div className="flex flex-row justify-center mt-15 gap-8">
        <div className="w-100 h-85 bg-neutral-800 rounded-3xl border-1 border-neutral-700">
          <div className="flex flex-col mt-10 ml-10">
            <div className="flex w-20 h-20 bg-neutral-900 opacity-99 rounded-full justify-center items-center border-t-2 border-l-2 border-t-neutral-700 border-l-neutral-700">
              <img src="\impressao-digital.png" alt="" className="w-10 h-10" />
            </div>
            <div className="text-2xl font-semibold text-neutral-300 mt-13">
              Tell us your vision
            </div>
            <span className="mt-3 text-neutral-500 text-md font-semibold">
              Choose a plan and share your design <br />
              project details with us: we’re here to <br />
              listen.
            </span>
          </div>
        </div>
        <div className="w-100 h-85 bg-neutral-800 rounded-3xl border-1 border-neutral-700">
          <div className="flex flex-col mt-10 ml-8">
            <div className="flex w-20 h-20 bg-neutral-900 opacity-99 rounded-full justify-center items-center border-t-2 border-l-2 border-t-neutral-700 border-l-neutral-700">
              <img src="\impressao-digital.png" alt="" className="w-10 h-10" />
            </div>
            <div className="text-2xl font-semibold text-neutral-300 mt-13">
              Receive the magic
            </div>
            <span className="mt-3 text-neutral-500 text-md font-semibold">
              Sit back and relax: our expert designers <br />
              will turn your vision into reality.
            </span>
          </div>
        </div>
        <div className="w-100 h-85 bg-neutral-800 rounded-3xl border-1 border-neutral-700">
          <div className="flex flex-col mt-10 ml-10">
            <div className="flex w-20 h-20 bg-neutral-900 opacity-99 rounded-full justify-center items-center border-t-2 border-l-2 border-t-neutral-700 border-l-neutral-700">
              <img src="\impressao-digital.png" alt="" className="w-10 h-10" />
            </div>
            <div className="text-2xl font-semibold text-neutral-300 mt-13">
              Get ongoing support
            </div>
            <span className="mt-3 text-neutral-500 text-md font-semibold">
              Your subscription ensures you have <br />
              continuous access to our design <br />
              team.
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-row mt-40 justify-center">
        <div className="flex flex-col justify-center text-left">
          <div className="flex flex-row items-end">
            <img src="\parar-circulado.png" alt="" className="w-6 h-6" />
            <div className="ml-2 text-lime-300 font-semibold text-xl">
              Customer story
            </div>
          </div>
          <div className="flex pt-15 text-3xl text-neutral-300">
            <p>
              Our growth no longer <br />
              necessitates the <br />
              recruitment and education <br />
              of additional design
              <br />
              professionals
            </p>
          </div>
          <div className="flex flex-row pt-10 text-neutral-300 font-semibold text-lg">
            <div>Read the story</div>
            <img src="\seta-direita.png" alt="" className="pl-2 w-10 h-8" />
          </div>
        </div>
        <div className="flex pl-15 ">
          <img src="\johnny.png" alt="" className="w-130 h-100 rounded-3xl" />
        </div>
      </div>
      <div className="flex flex-row mt-40 pb-20 gap-10 justify-center">
        <div className="flex flex-col items-center">
          <img src="\iom.png" alt="" className="flex w-40 h-15" />
          <p className="mt-5 text-center text-lg text-neutral-500">
            "Creative, innovative and strategic. We have <br />
            great achievements made together and looking <br />
            to more"
          </p>
          <img src="\estrelas.png" alt="" className="w-20 h-20" />
          <p className="text-neutral-500">Henry Arthur</p>
          <span className="text-lg text-neutral-300 font-semibold">
            Head of Engineering, Loom
          </span>
        </div>
        <div className="flex flex-col items-center">
          <img src="\intercom.svg" alt="" className="w-40 h-15" />
          <p className="mt-5 text-center text-lg text-neutral-500">
            "Incredible group of people and talented <br />
            professionals. Focused on the development of <br />
            flexible ideas"
          </p>
          <img src="\estrelas.png" alt="" className="w-20 h-20" />
          <p className="text-neutral-500">Jerome Bell</p>
          <span className="text-lg text-neutral-300 font-semibold">
            Product Analyst, Intercom
          </span>
        </div>
        <div className="flex flex-col items-center">
          <img src="\abstract.svg" alt="" className="w-40 h-15" />
          <p className="mt-5 text-center text-lg text-neutral-500">
            "A truly innovative approach to gameplay that <br />
            sets this agency apart from its peers within the <br />
            broader industry"
          </p>
          <img src="\estrelas.png" alt="" className="w-20 h-20" />
          <p className="text-neutral-500">Eleanor Pena</p>
          <span className="text-lg text-neutral-300 font-semibold">
            Head of Product Design, Abstract
          </span>
        </div>
      </div>
    </section>
  );
};

export default Home;

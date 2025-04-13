export const Gallery = () => {
  return (
    <div className="mt-10 mb-32 sm:mt-25">
      <div className="flex flex-col place-items-center justify-center">
        <h1 className="text-[18px] font-medium text-[#878787] md:text-[36px]">
          Gallery
        </h1>
        <p className="text-[30px] font-semibold md:text-[60px]">
          Unforgettable moment
        </p>
      </div>
      <div className="mt-10 grid h-screen w-screen grid-cols-2 grid-rows-4 justify-center gap-2 px-3 lg:grid-cols-4 lg:grid-rows-2 lg:px-30">
        <div className="col-span-2 row-span-2 flex items-end rounded-[10px] bg-[url(/assets/about/bali.png)] bg-cover bg-center bg-no-repeat object-fill">
          <p className="ml-5 w-full leading-[70px] font-semibold text-white lg:align-text-bottom lg:text-4xl">
            Bali
          </p>
        </div>
        <div className="col-span-2 grid items-end rounded-[10px] bg-[url(/assets/about/dubai.png)] bg-cover bg-center bg-no-repeat">
          <p className="ml-5 w-full align-text-bottom font-semibold text-white lg:text-4xl lg:leading-[70px]">
            Dubai
          </p>
        </div>
        <div className="flex items-end rounded-[10px] bg-[url(/assets/about/paris.png)] bg-cover bg-center bg-no-repeat">
          <p className="ml-5 w-full align-text-bottom font-semibold text-white lg:text-4xl lg:leading-[70px]">
            Paris
          </p>
        </div>
        <div className="flex items-end rounded-[10px] bg-[url(/assets/about/italy.png)] bg-no-repeat bg-cover">
          <p className="ml-5 w-full align-text-bottom font-semibold text-white lg:text-4xl lg:leading-[70px]">
            Italy
          </p>
        </div>
      </div>
    </div>
  );
};

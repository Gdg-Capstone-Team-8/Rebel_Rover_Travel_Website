export const Gallery = () => {
  return (
    <div className="mt-10 sm:mt-25">
      <div className="flex flex-col place-items-center justify-center">
        <h1 className="text-[18px] font-medium text-[#878787] md:text-[36px]">
          Gallery
        </h1>
        <p className="text-[30px] font-semibold md:text-[60px]">
          Unforgettable moment
        </p>
      </div>
      <div className="mt-10 justify-center w-screen h-screen grid px-3 grid-cols-2 grid-rows-4 lg:grid-cols-4 lg:grid-rows-2 gap-2 lg:px-30">
        <div className="flex object-fill bg-no-repeat size-full lg:bg-cover bg-center col-span-2 row-span-2 items-end rounded-[10px] bg-[url(@/assets/about/bali.png)]">
          <p className="ml-5 absolute align-text-bottom lg:text-4xl leading-[70px] font-semibold text-white">
            Bali
          </p>
        </div>
        <div className="grid col-span-2 size-full items-end rounded-[10px] bg-[url(@/assets/about/dubai.png)] lg:bg-cover bg-no-repeat">
            <p className="ml-5 align-text-bottom lg:text-4xl leading-[70px] font-semibold text-white">
              Dubai
            </p>
          </div>
          <div className="flex bg-no-repeat lg:bg-cover bg-center items-end rounded-[10px] bg-[url(@/assets/about/paris.png)]">
              <p className="ml-5 align-text-bottom lg:text-4xl leading-[70px] font-semibold text-white">
                Paris
              </p>
            </div>
            <div className="flex  bg-no-repeat lg:bg-cover items-end rounded-[10px] bg-[url(@/assets/about/italy.png)]">
              <p className="ml-5 align-text-bottom lg:text-4xl leading-[70px] font-semibold text-white">
                Italy
              </p>
            </div>
        </div>
      </div>
  );
};

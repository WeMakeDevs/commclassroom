import ArrowLink from '@/components/links/ArrowLink';
import ButtonLink from '@/components/links/ButtonLink';

const Header = () => {
  return (
    <header id='about'>
      <div className='layout flex flex-col items-center justify-start gap-20 py-20 pt-28 text-left md:text-center lg:flex-row lg:text-left'>
        <div>
          <h1 className='heading heading-md highlight text-left md:text-center lg:text-left'>
          Open source, collaboration for innovation
          </h1>
          <p className='h3 my-9'>
            The Power of Open Source: Unleashing the Collective Genius of Global
            Communities
          </p>
        </div>
        <div className='relative mt-0 max-w-lg  py-8 lg:mt-16 lg:py-16 lg:px-8 '>
          <img src='/assets/images/OpenSource/collab.svg' className='w-full' />
        </div>
      </div>
    </header>
  );
};
export default Header;

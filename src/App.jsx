import './App.css'
import daniel from './images/image-daniel.jpg'
import jonathan from './images/image-jonathan.jpg'
import jeanette from './images/image-jeanette.jpg'
import patrick from './images/image-patrick.jpg'
import kira from './images/image-kira.jpg'
import logo from './images/bg-pattern-quotation.svg'

function App() {


  return (
    <>
      {/* Body Container */}
      <div className='body-container bg-light-grayish-blue   '>
        {/* Grid Container */}
        <div className='grid px-6 gap-4 pb-7 md md:grid-cols-4 sm:grid-flow-row pt-7 grid-cols-1  '>
          {/* Card Container 1 */}
          <div className='px-6 z-20 item1 md:col-span-2 py-4 relative rounded-[8px] bg-moderate-violet '>
            <img className='absolute top-0 z-[-1] lg:right-20 right-6' src={logo} alt="" />
            {/* Info container */}
            <div className='flex items-center pb-3'>
              <img className=' rounded-full   h-9 border-purple-500 border-[2px]' src={daniel} alt="" />
              <div className='ml-2'>
                <h1 className='relative top-[2px] text-light-grayish-blue text-[14px]'>Daniel Clifford</h1>
                <span className='relative text-light-gray  text bottom-[2px] text-[12px]'>Verified Graduate</span>
              </div>
            </div>
            <p className='text-[20.5px] text-light-grayish-blue mb-3'>I received a job offer mid-course, and the subjects I learned were current, if not more so, in the company
              I joined. I honestly feel I got every penny’s worth.
            </p>
            <p className='text-daniel text-[12.5px] text-light-gray text-opacity-70'>“ I was an EMT for many years before I joined the bootcamp. I’ve been looking to make a transition and
              have heard some people who had an amazing experience here. I signed up for the free intro course and found
              it incredibly fun! I enrolled shortly thereafter. The next 12 weeks was the best - and most grueling - time
              of my life. Since completing the course, I’ve successfully switched careers, working as a Software Engineer
              at a VR startup. ”
            </p>
          </div>
          {/* Card container 2 */}
          <div className='px-6 z-20 item2  bg-very-dark-grayish-blue  py-4 relative rounded-[8px]'>
            {/* Info container */}
            <div className='flex items-center pb-3'>
              <img className='rounded-full   h-9 border-gray-500 border-[2px]' src={jonathan} alt="" />
              <div className='ml-2'>
                <h1 className='relative top-[2px] text-light-grayish-blue text-[14px]'>Jonathan Walters</h1>
                <span className='relative text-light-gray  text bottom-[2px] text-[12px]'>Verified Graduate</span>
              </div>
            </div>
            <p className='text-[20.5px] text-light-grayish-blue mb-3'> The team was very supportive and kept me motivated</p>
            <p className='text-jonathan text-[12.5px] text-light-gray text-opacity-70'> “ I started as a total newbie with virtually no coding
              skills. I now work as a mobile engineer for a big company.
              This was one of the best investments I’ve made in myself. ”
            </p>
          </div>
          {/* Card container 3 */}
          <div className='px-6 shadow-lg z-20 item3 bg-white  py-4 relative rounded-[8px] md:row-start-2'>
            {/* Info container */}
            <div className='flex items-center pb-3'>
              <img className='rounded-full   h-9 border-gray-500 border-[2px]' src={jeanette} alt="" />
              <div className='ml-2'>
                <h1 className='relative top-[2px] text-very-dark-grayish-blue text-[14px]'>Jeanette Harmon</h1>
                <span className='relative text-gray-400 text bottom-[2px] text-[12px]'>Verified Graduate</span>
              </div>
            </div>
            <p className='text-[20.5px] font-semibold text-very-dark-grayish-blue mb-3'> An overall wonderful and rewarding experience</p>
            <p className='text-jenne text-[12.5px] text-gray-400 '>“ Thank you for the wonderful experience! I now have a
              job I really enjoy, and make a good living while doing something
              I love. ”
            </p>
          </div>
          {/* Card container 4 */}
          <div className='px-6 item4 md:col-span-2 z-20 bg-very-dark-blackish-blue  py-4 relative rounded-[8px]'>
            {/* Info container */}
            <div className='flex items-center pb-3'>
              <img className='rounded-full   h-9 border-gray-500 border-[2px]' src={patrick} alt="" />
              <div className='ml-2'>
                <h1 className='relative top-[2px] text-light-grayish-blue text-[14px]'>Patrick Abrams</h1>
                <span className='relative text-light-gray  text bottom-[2px] text-[12px]'>Verified Graduate</span>
              </div>
            </div>
            <p className='text-[20.5px] text-light-grayish-blue mb-3'>Awesome teaching support from TAs who did the bootcamp themselves.
              Getting guidance from them and learning from their experiences was
              easy.
            </p>
            <p className='text-patrick text-[12.5px] text-light-gray '>“ The staff seem genuinely concerned about my progress which I
              find really refreshing. The program gave me the confidence necessary
              to be able to go out in the world and present myself as a capable junior
              developer. The standard is above the rest. You will get the personal
              attention you need from an incredible community of smart and amazing people. ”
            </p>
          </div>
          {/* Card container 5 */}
          <div  className='drop-shadow-2xl px-6 z-20 item5  bg-white  py-4 relative rounded-[8px] md:row-span-2 md:row-start-1 md:col-start-4'>
            {/* Info container */}
            <div className='flex items-center pb-3'>
              <img className='rounded-full   h-9 border-gray-500 border-[2px]' src={kira} alt="" />
              <div className='ml-2'>
                <h1 className='relative top-[2px] text-very-dark-blackish-blue text-[14px]'>Kira Whittle</h1>
                <span className='relative top-[2px]  text-gray-400 text-[14px]'>Verified Graduate</span>
              </div>
            </div>
            <p className='text-[20px] font-semibold text-very-dark-blackish-blue mb-3'>Such a life-changing experience. Highly recommended!</p>
            <p className='text-[12.5px] text-gray-400 text-kira '> “ Before joining the bootcamp, I’ve never written a line of
              code. I needed some structure from professionals who can help me
              learn programming step by step. I was encouraged to enroll by a
              former student of theirs who can only say wonderful things about
              the program. The entire curriculum and staff did not disappoint.
              They were very hands-on and I never had to wait long for assistance.
              The agile team project, in particular, was outstanding. It took my
              learning to the next level in a way that no tutorial could ever have.
              In fact, I’ve often referred to it during interviews as an example of
              my developent experience. It certainly helped me land a job as a full-stack
              developer after receiving multiple offers. 100% recommend! ”
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default App

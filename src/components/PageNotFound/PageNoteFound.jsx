import imgNotFound from '../../assets/img/not-found.jpg'

const PageNoteFound = () => {
  return (
    <>
        <div className='flex justify-center mt-10'>
            <img className='w-[30rem] h-[15rem]' src={imgNotFound} alt="Page not found" />    
        </div>
    </>
)
}

export default PageNoteFound
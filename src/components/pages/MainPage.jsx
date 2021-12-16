import React,{useEffect} from 'react'
import {useNavigate} from 'react-router-dom';
import SideBar from './static/SideBar';
import '../../assets/css/MainPage.css';
const MainPage = ({setIsOpen, setPubKey}) => {
    const navigate = useNavigate();
   
    
    useEffect(() => {
        console.log('test1')
        const timeOut = setTimeout(() => {
            console.log('test-mid')
            console.log(localStorage.getItem('walletAddress'))
          if(localStorage.getItem('walletAddress')){
            console.log('test2')
            window.solana.request({method:'connect'})
           }
        window.solana.on('connect', () => console.log('connected'))
        }, 1000);
        // return () => clearTimeout(timeOut)
      } ,[])
      
    return (
        <>
            
                    
                    <div className='flex flex-1 h-full  overflow-y-auto'>
                        <div className='flex-1 overflow-y-auto'>
                            <form action="" className='w-3/4  m-auto'>
                                <div className=''>
                                    <textarea className='border-2 px-5 focus:outline-none focus:ring-blue-400 focus:ring-1  w-full resize-none rounded-xl' name="" id="" cols="20" rows="5" placeholder='Add new post'></textarea>
                                </div>
                                <div>
                                    <div className='flex justify-between'>
                                        <p>Icons</p>
                                        <button className='bg-blue-500 py-2 px-7 rounded-lg text-white'>Post</button>
                                    </div>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat voluptas earum odio incidunt ratione corporis veniam dolorem consequatur aperiam dolor dicta veritatis quia, autem nobis distinctio quisquam doloremque corrupti voluptatum ab voluptates, adipisci repellat nam animi voluptatem? Magni id quidem architecto doloribus magnam laboriosam nobis! Suscipit ut non eveniet dignissimos fugiat quae dicta nihil dolorem sapiente veniam! Labore, odit, fugit neque non quaerat doloremque earum cumque explicabo consequatur quo inventore. Aut veniam inventore aliquam exercitationem architecto doloribus vero culpa nulla minima consectetur, voluptatum velit quibusdam eaque beatae totam facere impedit aperiam tempore. Quod totam harum maiores optio incidunt magni expedita laudantium at facilis, neque, rem numquam maxime quisquam repellendus temporibus voluptas, facere iusto inventore. Dignissimos facere, tempora cum sint aperiam impedit maxime explicabo, minima quaerat modi magni beatae eius enim, nulla tenetur omnis. Nobis, velit ad. Voluptas odio voluptatum eos ducimus natus laboriosam alias accusantium dolore quia quis, repudiandae libero facere. Quas tempora earum quo! Id iste omnis nihil dolorum in nisi temporibus et nulla odio animi! Sapiente quidem voluptates corporis, nisi distinctio, odio commodi ullam ipsa vitae numquam assumenda nostrum, autem esse natus doloremque delectus! Explicabo enim obcaecati cum perferendis quisquam, dolorem id dicta! Exercitationem ducimus ex libero aut voluptatibus maiores quod vitae voluptatum atque eius quasi, tenetur iusto repellat, incidunt praesentium dolorum, a amet. Velit qui voluptatum animi, a possimus, commodi quisquam rem autem, voluptatibus corrupti iure sint? Odit delectus, sit, quaerat distinctio fuga quia incidunt nobis nemo a consectetur repellat laboriosam numquam quis atque sunt dolores! Et, dicta optio impedit iure quae eveniet architecto velit fugiat aliquam vitae nemo laborum sunt suscipit id error assumenda, accusamus ea explicabo itaque quod debitis sit. Ratione sunt id magnam animi dolorem. Quidem quod adipisci neque alias explicabo. Maxime, cum! Facilis explicabo quam doloremque quo illo nemo, commodi vitae et doloribus, eaque aut excepturi a. Dignissimos maiores recusandae, nihil officia tempora atque, ex blanditiis aspernatur, sapiente corrupti earum quia ipsa. Accusamus veritatis voluptatum et corporis minus illum doloremque necessitatibus illo deserunt totam alias, qui odit aliquid nobis laborum impedit expedita suscipit minima animi cupiditate! Maiores dolorem rem illum repudiandae molestiae quas, fugit dignissimos optio sapiente ullam. Incidunt id nisi, eveniet tenetur similique animi iste ipsam facilis natus aperiam maxime beatae doloribus voluptates qui odit eos, modi blanditiis, est veritatis laborum quidem ducimus velit cupiditate dolorum. Maxime quod provident et alias quisquam aperiam minus expedita dolorem excepturi commodi, adipisci laudantium! Voluptates possimus eligendi delectus temporibus unde aut reiciendis accusamus quae excepturi illo harum similique ullam nisi quidem iure voluptate, dicta modi neque quo et? Dicta iusto error animi mollitia fuga molestiae, laboriosam molestias voluptatibus maxime id expedita eius obcaecati, et consectetur ut optio, quaerat aliquam repudiandae adipisci iste non? Incidunt impedit delectus voluptates explicabo pariatur obcaecati, sed eum aspernatur minima illo omnis numquam quo est excepturi laudantium dolorum officiis dolorem ipsum facilis ipsa iusto corrupti repudiandae? Rem, iusto pariatur distinctio ut quasi quis quaerat provident, iste ducimus blanditiis ex quidem quia totam, animi ullam ipsa ab! Magni eum illo a tenetur! Porro distinctio ad necessitatibus explicabo eum. Commodi itaque, quibusdam ullam officia aperiam fugiat, unde numquam quo cum, aspernatur repudiandae sed! Voluptatem porro quasi labore, impedit laborum beatae sapiente dolorum a! Enim quo incidunt quibusdam saepe sed sunt nemo ipsum, suscipit debitis dolor commodi ex laudantium eligendi perferendis autem quidem vero consectetur, placeat dicta numquam facilis, doloribus dolores distinctio. Enim minima consequatur iure qui magnam dicta eaque cumque rerum fugiat, distinctio aliquam vitae neque at alias doloribus non in quod dolorem! In provident laudantium, necessitatibus molestias labore maxime facilis quas incidunt, eaque, neque commodi non ab optio id delectus unde cupiditate. Voluptatem.
                                </div>
                            </form>
                        </div>
                        <div className='max-w-fit h-screen'>
                            <input type="text" className='bg-gray-200 p-2 px-10 rounded-full focus:outline-none  focus:bg-white focus:ring-1 focus:ring-blue-400 mt-3' placeholder='Search Zeb' />
                        </div>
                    </div>
                    
                
        </>
    )
}

export default MainPage

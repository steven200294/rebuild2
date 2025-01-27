
import  { useEffect } from "react";
import './App.css'
import AOS from "aos";
import "aos/dist/aos.css"; // Importation du fichier CSS pour AOS




function App() {
 
  useEffect(() => {
     
    AOS.init();

  }, []);  // Le tableau vide [] fait en sorte que l'animation ne se produise qu'une seule fois au montage  


  

  return (
    <div  className=' h-screen  w-[100%]'>
   

  <div className='w-full h-[80%] flex justify-center items-center max-lg:h-[100%]  max-sm:h-[60%]  max-lg-large:h-[70%]  '>  
  <div className='flex-col h-[60%] w-[60%]   text-center  space-y-8 max-lg:space-x-1 justify-center items-center   max-sm:w-[100%]  max-lg:w-[100%]  '>
  <h1   className='w-full  h-56 text-center  text-[10vw] justify-center items-center  max-lg:h-[60%] '>

REBUILD
  </h1>
  
  <p>  "Nous redonnons vie à votre site web en le réparant et en l'optimisant pour des performances maximales."    </p>

  <button className='w-[150px] h-[50px]  bg-black   text-white'>  prendre rdv</button>
  
  </div>


   </div>


 {/* premier section */}

<section  className='w-full  h-72 border border-black p-4   flex justify-center items-center max-lg-large:h-[18%]     space-x-36  max-sm:flex-col  max-sm:h-[80%]     max-sm:justify-center  max-sm:items-center   max-sm:space-y-1'>

<div className='flex-col  text-center  space-y-8  justify-center items-center    w-96  h-full relative  max-sm:right-0  max-sm:w-full max-sm:h-[120%]  '>
<p className='text-[5rem]'> 60 </p>
<strong> projets réalisés </strong>
<p> Réalisation de sites vitrines  et refonte </p>
</div>
<div className='flex-col  text-center  space-y-8  justify-center items-center      w-96  h-full relative  max-sm:right-[18%]  max-sm:w-full max-sm:h-[120%] '>
<p className='text-[5rem]'> 5 </p>
<strong> années d'expérience </strong>
<p> Des profils seniors à chaque pôle de l’agence </p>


</div>
<div className=' flex-col  text-center  space-y-8  justify-center items-center     w-96  h-full relative  max-sm:right-[18%]  max-sm:w-full  max-sm:h-[120%]'>
<p className='text-[5rem]'> 10 </p>
<strong> profils experts </strong>
<p> Pour vous accompagner à chaque étape </p>




</div>


</section>

 {/* deuxieme section  */}
<section  className='w-full  h-[120%]  bg-black space-y-10  flex-col justify-center items-center  max-sm:h-[200%]  max-lg:h-[200%]   '  >
<div className=' flex-col relative w-full h-[25%] max-sm:h-[15%] max-sm:space-y-4  flex justify-center items-center bg ' > 
  <h2 data-aos="zoom-in-up" className='w-[90%]  h-[25%] text-center  flex justify-center items-center  text-[2rem] text-white'> Découvrez l’ensemble de nos expertises  </h2>
  <p  className='w-[90%]  h-[25%] text-center   flex justify-center items-center  text-[0.8rem]  text-white '>  nous gérons vos projets de refonte, nous nous chargeons de la maintenance et de l’hébergement de vos sites et élaborons des stratégies SEO efficaces pour renforcer votre présence en ligne. </p>
  
  
   </div>

<div  className='w-full h-[30%]  flex justify-center items-center space-x-56  max-sm:flex-col  max-lg-large:flex-col max-sm:h-[30%]  max-sm:space-y-7  max-lg-large:space-y-7  bg   '>  

<div  data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine"  className=' flex justify-center items-center  rounded-lg   w-[30%] h-full max-sm:h-[50%]  max-sm:w-[95%] max-lg-large:h-[100%]  max-lg-large:w-[50%] bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 animate-gradient '    > 
  <div  className=' flex-col w-[99%] h-[98%] space-y-5 bg-black flex justify-center items-center  rounded-lg  '>
    <br></br> 
<div  className='w-[80px] h-[80px] relative top-[-10%] bg-slate-400'></div>
<strong className='text-white relative top-[-10%]  '>Création de site internet </strong>

<p  className='text-white  relative top-[-5%] w-[80%] text-center  max-sm:text-left  '>  En tant qu’agence spécialisée dans la création de site internet sur mesure, nous développons des solutions digitales adaptés à vos besoins.
</p>


  </div>
  
  
  
     </div>

     <div data-aos="fade-left" data-aos-offset="300" data-aos-easing="ease-in-sine" className=' flex justify-center items-center relative max-sm:right-[27%]   max-lg-large:right-[11%]   rounded-lg   w-[30%] h-full max-sm:h-[50%]  max-sm:w-[95%] max-lg-large:h-[100%]  max-lg-large:w-[50%] bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 animate-gradient '> 
  <div  className=' flex-col w-[99%] h-[98%] space-y-5 bg-black flex justify-center items-center  rounded-lg  '>
    <br></br> 
<div  className='w-[80px] h-[80px] relative top-[-10%] bg-slate-400'></div>
<strong className='text-white relative top-[-10%]  '> Maintenancede site internet   </strong>

<p  className='text-white  relative top-[-5%] w-[80%] text-center max-sm:text-left  '> La maintenance de site internet n’est pas seulement recommandée, elle est essentielle.

</p>


  </div>
  
  
  
     </div>
</div>

<div  className='w-full h-[30%]  flex justify-center items-center space-x-56  max-sm:flex-col  max-lg-large:flex-col   max-sm:space-y-7  max-lg-large:space-y-7 max-sm:h-[30%]  bg '>  
<div data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine" className=' flex justify-center items-center relative  rounded-lg   w-[30%] h-full max-sm:h-[50%]  max-sm:w-[95%] max-lg-large:h-[100%]  max-lg-large:w-[50%] bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 animate-gradient '> 
  <div  className=' flex-col w-[99%] h-[98%] space-y-5 bg-black flex justify-center items-center  rounded-lg  '>
    <br></br> 
<div  className='w-[80px] h-[80px] relative top-[-10%] bg-slate-400'></div>
<strong className='text-white relative top-[-10%]  '>   Refonte de site web  </strong>

<p  className='text-white  relative top-[-5%] w-[80%] text-center max-sm:text-left  '> Modernisez votre site web et exploitez son potentiel grâce à notre expertise en refonte de sites web.

</p>


  </div>
  
  
  
     </div>

     <div data-aos="fade-left" data-aos-offset="300" data-aos-easing="ease-in-sine" className=' flex justify-center items-center relative max-sm:right-[27%] rounded-lg  max-sm:h-[50%] w-[30%] h-full  max-lg-large:right-[11%]  max-sm:w-[95%] max-lg-large:h-[100%]  max-lg-large:w-[50%] bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 animate-gradient '> 
  <div  className=' flex-col w-[99%] h-[98%] space-y-5 bg-black flex justify-center items-center  rounded-lg  '>
    <br></br> 
<div  className='w-[80px] h-[80px] relative top-[-10%] bg-slate-400'></div>
<strong className='text-white relative top-[-10%]  '> Hébergement web </strong>

<p  className='text-white  relative top-[-5%] w-[80%] text-center max-sm:text-left  '> Nous offrons des solutions d’hébergement web spécifiques et robustes pour tous les types de sites.


</p>


  </div>
  
  
  
     </div>



</div>

</section>
 {/* troisieme section */}
<section   className='w-full h-[80%]     flex justify-center items-center       '> 

<div className='  w-[90%] h-[80%]  flex-col justify-center items-center  '>  
<div className='w-full h-[20%]   '>   
  
  <h3  className='text-[5rem]'>  Notre expertise en   développement web </h3>
  
  
 </div>
<div   className='w-[70%] h-[20%]   max-sm:w-full '> 
 <p>
  
 nous gérons vos projets de refonte, nous nous chargeons de la maintenance et de l’hébergement de vos sites et élaborons des stratégies SEO efficaces pour renforcer votre présence en ligne.
</p> 
  
  
</div>
<div   className='w-full  h-[50%] flex   space-x-10'>  
 <div  className='w-[30%] h-full border border-black p-4   rounded-xl'>  </div> 
 <div  className='w-[30%] h-full border border-black p-4   rounded-xl'>  </div> 
  <div  className='w-[30%] h-full border  border-black p-4   rounded-xl'>  </div> 
  
  
    </div>



</div>






</section>







    </div>
  )
}

export default App

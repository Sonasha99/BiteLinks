import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
 <main className= "bg-blue-100">
 <section className = "grid grid-cols-2 h-[50vh]">
 <div className = "bg-blue-100 flex flex-col gap-4 items-end justify-center  ">
<p className ="text-3xl font-bold text-centre">
  The Best URL Shortner in the Market
</p>

<p className = "px-36 text-center">
  We are the most straigtforward and easy to use in the whole tech world. Most of the URL shortner will track you and ask you to give your detail for login. But we understand your needs and your time we don't ask for login!
</p>

<div className = 'flex gap-3 justify-start'>
  <Link href = "/generate"><button  className='bg-blue-500 rounded-lg p-3 py-1 font-bold text-white'> Try Now</button></Link>
  <Link href = "/github"><button  className='bg-blue-500 rounded-lg p-3 py-1 font-bold text-white'> Github</button></Link>
 </div> 
</div>



<div className="flex justify start relative">
  <Image className = "mix-blend-darken" alt = "an Image of a vector" src = {"/vector.jpg"}  fill = {true}></Image>

</div>








 </section>


 </main>
  );
}

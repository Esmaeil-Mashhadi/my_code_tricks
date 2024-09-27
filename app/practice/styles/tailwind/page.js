import Link from 'next/link';
import styles from './tailwind.module.css'

function Page() {
  return (
    <div className='border-2 border-yellow-200 rounded-s relative'>
      <p className="text-2xl font-bold text-blue-200 p-4 font-primary ">practicing tailwind</p>
      <Link href="" className='font-semibold text-yellow-100 underline ml-12 absolute top-20 right-20'>
        this link goes nowhere
      </Link>

      <div className={styles.card}>
        <p className='m-20 font-bold text-purple-200 border-2 p-2 border-blue-200'>testing tailwind</p>
        <p className="text-primary p-4
         bg-cyan-800 rounded-s font-serif w-fit m-auto shadow-lg
          shadow-white hover:bg-cyan-300 duration-100 cursor-pointer">
          my own style
        </p>    

         <p className='p-20 text-yellow-500 font-primary sm:text-red-300'>
         custome font</p>
      </div>
    </div>
  );
}

export default Page; 
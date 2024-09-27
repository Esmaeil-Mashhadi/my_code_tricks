export const variantes = {
    hidden:{
        x:'-100vw',
        opacity:"0"
    },
    visible:{
        x:0,
        opacity:1,
        transition:{
            when:"beforeChildren", //parent have one animation , 
            duration:.2
            // staggerChildren:.4, // it says how long does each inner children show up the lower the faster // we have after children too
        },
        exit:{opacity:0 ,y:500} 

    },
    hover:{
        scale:1.5,
        originX:0,
        transition:{
            type:"spring",
             stiffness:400,
            // mass:.8, //moving speed the lower the faster its like weigh of elemen heaver or light
            // damping:1, // how long it continue the motion ther lower the longer
        }
    }
}

export const childVariants = {
    hidden: {
      x: '-100vw',
      opacity: '0'
    },
    visible: {
      x: 0,
      opacity: 1
    },
    hover: {
      scale: 1.5,
      originX : 0,
    //   x:[20 , 0 , 20 , 0],
   
    transition:{repeat:Infinity , repeatType:"loop" , duration:1, }
    }
  };

export const backDrop ={
 visible:{
  opacity:1,
  scale:1
 },

 hidden:{
  opacity:0,
  scale:0
 },
 exit:{
  opacity:0,
  scale:0
 }
}


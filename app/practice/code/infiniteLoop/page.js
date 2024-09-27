
const InfinteLoop = () => {

    const observer = new IntersectionObserver((entries)=>{
        entries.forEach((entry)=>{
            if(entry.isIntersecting && entry.intersectionRatio > 0){
                performAction();
                observer.observe(entry.target, {rootMargin : "0px"})
            }
        })
    })

    function performAction(){
        
    }

    return (
        <div>
        </div>
    );
};

export default InfinteLoop;
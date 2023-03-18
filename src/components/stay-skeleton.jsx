import { useEffect } from "react";

export  function StaySkeleton({ firstSkeletonRef, onMount }) {
  useEffect(() => {
    if (onMount) {
        onMount()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
}, [firstSkeletonRef])
return (
    <article className='stay-preview skeleton' ref={firstSkeletonRef}>
        <div className='img-carousel'>
            <div className='stay-img skeleton-img'></div>
        </div>
        <div className='details'>
            <div className='row'>
                <p className='placeholder address'></p>
                <div className='placeholder stars'></div>
            </div>

            <p className='placeholder type'></p>
            <p className='placeholder available'></p>
            <p className='placeholder price'></p>
        </div>
    </article>
)
}

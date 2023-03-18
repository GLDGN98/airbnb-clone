import { useCallback, useEffect, useRef, useState } from "react";
import {StaySkeleton} from './stay-skeleton'
import {StayPreview} from './stay-preview'

export const StayList = ({ stays, loadStays }) => {

  const firstSkeletonRef = useRef(null)
  let isFirstSkelton = true

  function onMount() {
      const observer = new IntersectionObserver(
          ([entry]) => {
              if (entry.isIntersecting) {
                  loadStays()
                  observer.unobserve(entry.target)
              }
          },
          { threshold: 0.3 } // Trigger when element is 50% visible
      )

      if (firstSkeletonRef.current) {
          observer.observe(firstSkeletonRef.current)
      }

      return () => {
          if (firstSkeletonRef.current) {
              observer.unobserve(firstSkeletonRef.current)
          }
      }
  }


  return (
    <div className='stay-list'>
    {stays.map((stay) => {
        if (stay.type === 'skeleton') {
            if (isFirstSkelton) {
                isFirstSkelton = false
                return <StaySkeleton key={stay._id} firstSkeletonRef={firstSkeletonRef} onMount={onMount} />
            } else {
                return <StaySkeleton key={stay._id} />
            }
        } else {
            return <StayPreview stay={stay} key={stay._id} />
        }
    })}
</div>
)
};


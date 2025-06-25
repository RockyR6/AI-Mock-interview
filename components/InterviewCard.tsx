import React from 'react'
import dayjs from 'dayjs'
import Image from 'next/image';
import { getRandomInterviewCover } from '@/lib/utils';
import { Button } from './ui/button';
import Link from 'next/link';
import DisplayTechIcons from './DisplayTechIcons';


const InterviewCard = ({
  interviewId,
  userId,
  role,
  type,
  techstack,
  createdAt,
}: InterviewCardProps) => {
    const Feedback = null as Feedback | null
    const normalizedType = /mix/gi.test(type) ? 'Mixed' : type;
    const formattedDate = dayjs(Feedback?.createdAt || createdAt || Date.now()).format('MMM D, YYYY')



  return (
    <div className='card-border w-[360px] max-sm:w-full min-h-96'>
      <div className='card-interview'>
        <div>
            <div className='absolute top-0 right-0 w-fit px-4 py-2 rounded-bl-lg bg-light-600'>
                <p>{normalizedType}</p>
            </div>
            <Image src={getRandomInterviewCover()} alt='cover image' width={90} height={90} className='rounded-full object-fit size-[90px]'/>

            <h3 className='mt-5 capitalize'>{role} Interview</h3>
            <div className='flex flex-row gap-5 mt-3'>
                <div className='flex flex-row gap-2'>
                   <Image
                src="/calendar.svg"
                width={22}
                height={22}
                alt="calendar"
              />
              <p>{formattedDate}</p>
                </div>
                <div className='flex flex-row gap-2 items-center'>
                    <Image src="/star.svg" alt='star' width={22} height={22}/>
                    <p>{Feedback?.totalScore || '---'}/100</p>
                </div>
            </div>
            <p className='line-clamp-2 mt-5'>{Feedback?.finalAssessment || 'To improve your skills, pick the interview.'}</p>
        </div>
        <div className='flex flex-row justify-between'>
           <DisplayTechIcons techStack={techstack}/>
            <Button asChild>
                <Link href={Feedback
                    ? `/interview/${interviewId}/feedback`
                    : `/interview/${interviewId}`
                }>
                    {Feedback ? 'Check Feedback' : 'View Interview'}
                </Link>
            </Button>
        </div>
      </div>
    </div>
  )
}

export default InterviewCard
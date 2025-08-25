import { Button } from '@/components/ui/button'
import { useDemoStore } from '@/store/demo'

export default function Home() {
  const { demo, increment } = useDemoStore()
  return (
    <div>
      <img src='images/demo.jpg' alt='' className='w-12' />
      <div>{demo.count}</div>
      <Button onClick={increment} className='text-red-500'>
        Click me
      </Button>
    </div>
  )
}

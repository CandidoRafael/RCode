import { Toaster } from 'react-hot-toast'

export default function ToastWrapper() {
  return (
    <Toaster 
        position='bottom-right'
        toastOptions={{
            duration: 3000,
            style: {
                padding: 12,
                fontSize: 14
            }
        }}
    />
  )
}

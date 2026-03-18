'use client'
import { useEstimateModal } from './EstimateModal'

export default function EstimateButton({ className = 'btn-gold', children = 'Free Estimate' }: { className?: string; children?: React.ReactNode }) {
  const { open } = useEstimateModal()
  // Always make button full width on mobile
  return (
    <button
      onClick={open}
      className={`w-full sm:w-auto inline-flex justify-center items-center text-center ${className}`}
    >
      {children}
    </button>
  )
}

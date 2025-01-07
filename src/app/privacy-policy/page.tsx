// app/privacy-policy/page.tsx
import dynamic from 'next/dynamic'

const PrivacyPolicy = dynamic(() => import('../components/PrivacyPolicy'), {
  ssr: false
})

export default function PrivacyPolicyPage() {
  return <PrivacyPolicy />
}
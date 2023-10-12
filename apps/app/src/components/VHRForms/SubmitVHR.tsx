import { Url } from 'next/dist/shared/lib/router/router'
import Link from 'next/link'

export interface vhrSubmission {
  orgName: string
  walletAddress: string
  hours: number
  link: Url
}

const MyVhrList = () => {
  const vhrTestSubmissions: Array<vhrSubmission> = [
    {
      orgName: 'Gebs house',
      walletAddress: '69696969',
      hours: 1,
      link: '/'
    },
    {
      orgName: 'Tommys house',
      walletAddress: '10000000000xD',
      hours: 500,
      link: '/dashboard'
    }
  ]
  return (
    <>
      {vhrTestSubmissions.map((submission) => (
        <div key={submission.walletAddress}>
          Organization Name: {submission.orgName} <br />
          Hours: {submission.hours}
          <br />
          Link: <Link href={submission.link.toString()}></Link>
          <br />
          Wallet Address: {submission.walletAddress}
          <br />
          <br />
        </div>
      ))}
    </>
  )
}

export default MyVhrList

import Link from 'next/link'

interface testNames {
  something1: string
  something: string
}

const people: testNames = {
  something1: 'Gabe',
  something: 'Ryan'
}

const Opportunity = () => {
  return (
    <>
      <Link href="http://localhost:3000/p/volunteer/nerdslayer0.test">
        Go to Profile
      </Link>
      <Vhc something1={people.something1} something={people.something} />
    </>
  )
}

export const Vhc = (testNames: testNames) => {
  return (
    <>
      {testNames.something1}

      {testNames.something}
    </>
  )
}

export default Opportunity

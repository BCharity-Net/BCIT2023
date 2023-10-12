import { useForm } from 'react-hook-form'

import { useCreatePost } from '@/lib/lens-protocol'

export interface vhrSubmission {
  orgName: string
  walletAddress: string
  hours: number
  link: URL
}

const VHRForms = () => {
  const { createPost } = useCreatePost()

  const form = useForm<vhrSubmission>()

  const {
    handleSubmit,
    reset,
    register,
    formState: { errors }
  } = form

  const onSubmit = async (data: vhrSubmission) => {
    // Code for submitting?

    try {
      //   await createPost({ profileId: publisher.id, metadata })
    } catch (e: any) {
      //   setErrorMessage(e.message)
      //   setError(true)
    }
  }

  return (
    <div>
      <h1>The VHR FORM</h1>
      <form onSubmit={handleSubmit((data) => onSubmit(data))}>
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="orgname"
        >
          Organization Name
        </label>
        <input
          type="text"
          name="orgname"
          id="orgname"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Enter Organization Name"
        />
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="walletaddress"
        >
          Wallet Address
        </label>
        <input
          type="text"
          name="walletaddress"
          id="walletaddress"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Enter Wallet Address"
        />
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="hours"
        >
          Hours
        </label>
        <input
          type="text"
          name="hours"
          id="hours"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Enter Hours"
        />
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="link"
        >
          Link
        </label>
        <input type="text" name="link" id="link" placeholder="Enter Link" />
        <button type="submit">Submit VHR</button>
      </form>
    </div>
  )
}

export default VHRForms

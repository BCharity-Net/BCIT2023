import { ProfileFragment as Profile } from '@lens-protocol/client'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'

import { checkAuth, useCreatePost } from '@/lib/lens-protocol'
// import { Input } from '@/components/UI/Input'

export interface vhrSubmission {
  orgName: string
  walletAddress: string
  hours: number
  link: URL
}

export interface IPublishVHRProps {
  /**
   * Lens profile fragment of the publisher of the post
   */
  publisher: Profile | null
}

const VHRForms: React.FC<IPublishVHRProps> = ({ publisher }) => {
  const { t: e } = useTranslation('common', { keyPrefix: 'errors' })

  const { createPost } = useCreatePost()

  const [isPending, setIsPending] = useState<boolean>(false)
  const [error, setError] = useState<boolean>(false)
  const [errorMessage, setErrorMessage] = useState<string>('')

  const form = useForm<vhrSubmission>()

  const {
    handleSubmit,
    reset,
    register,
    formState: { errors }
  } = form

  const onSubmit = async (data: vhrSubmission) => {
    // Code for submitting?
    if (!publisher) {
      setErrorMessage(e('profile-null'))
      setError(true)
      setIsPending(false)
      return
    }

    // const metadata: PublicationMetadataV2Input =
    //   buildMetadata<GoalMetadataRecord>(
    //     publisher,
    //     [PostTags.OrgPublish.VHRGoal],
    //     {
    //       ...data,
    //       version: MetadataVersion.GoalMetadataVersion['1.0.0'],
    //       type: PostTags.OrgPublish.Goal
    //     }
    //   )

    try {
      await checkAuth(publisher.ownedBy)
      // await createPost({ profileId: publisher.id, metadata })
    } catch (e: any) {
      setErrorMessage(e.message)
      setError(true)
    }
  }

  return (
    <form
      className="px-8 pt-6 pb-8 mb-4"
      onSubmit={() => handleSubmit((data) => onSubmit(data))}
    >
      <label
        className="block text-white text-sm font-bold mb-2"
        htmlFor="orgname"
      >
        Organization Name
      </label>
      <input
        type="text"
        name="orgname"
        id="orgname"
        className="shadow appearance-none border rounded w-full py-2 px-3 mb-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        placeholder="Enter Organization Name"
      />
      <label
        className="block text-white text-sm font-bold mb-2"
        htmlFor="walletaddress"
      >
        Wallet Address
      </label>
      <input
        type="text"
        name="walletaddress"
        id="walletaddress"
        className="shadow appearance-none border rounded w-full py-2 px-3 mb-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        placeholder="Enter Wallet Address"
      />
      <label
        className="block text-white text-sm font-bold mb-2"
        htmlFor="hours"
      >
        Hours
      </label>
      <input
        type="text"
        name="hours"
        id="hours"
        className="shadow appearance-none border rounded w-full py-2 px-3 mb-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        placeholder="Enter Hours"
      />
      <label className="block text-white text-sm font-bold mb-2" htmlFor="link">
        Link
      </label>
      <input
        type="text"
        name="link"
        id="link"
        className="shadow appearance-none border rounded w-full py-2 px-3 mb-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        placeholder="Enter Link"
      />
      <button
        className="flex items-center justify-between bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="submit"
      >
        Submit VHR
      </button>
    </form>
  )
}

export default VHRForms

import { useContext } from 'react'

import { ProfileContext } from './profile-context'

export const useProfile = () => useContext(ProfileContext)

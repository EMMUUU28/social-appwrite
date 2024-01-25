import { INewUser } from '@/types'
import {
    useQuery,
    useMutation,
    useQueryClient,
    QueryClient,
    QueryClientProvider,
  } from '@tanstack/react-query'
import { createUserAccount, signinAccount } from '../appwrite/api'



export const createUserAccountMutation = () => {

    return (
        useMutation(
            {
                mutationFn: (user:INewUser) => createUserAccount(user)
            }
        )
    )

}

export const useSigninAccount = () => {

    return (
        useMutation(
            {
                mutationFn: (user:{ email: string , password: string}) => signinAccount(user)
            }
        )
    )

}
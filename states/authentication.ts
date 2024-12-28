import { apiSlice } from "@/states/apiSlice";


export const authenticationSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        loginUser: builder.mutation({
            query: (data) => ({
                url: "/credentials-login",
                method: "POST",
                body: data,
                credentials: "include"
            }),
            async onQueryStarted(args, { dispatch, queryFulfilled }){
                try {
                    const { data: userData } = await queryFulfilled;

                    dispatch(
                        authenticationSlice.util.updateQueryData("getProfile", undefined, (draft)=> {
                            console.log(draft)
                            draft.success = userData?.success;
                            draft.responseObject = userData.responseObject;
                            draft.message = userData.message;
                            draft.status = userData.status;

                            return draft;
                        })
                    )
                } catch (error) {
                    console.log(error);
                }
            }
        }),
        signupUser: builder.mutation({
            query: (data) => ({
                url: "/register",
                method: "POST", 
                body: data,
                credentials: "include"
            })
        }),
        logoutUser: builder.mutation({
            query: () => ({
                url: "/logout",
                method: "DELETE",
                credentials: "include"
            })
        }),
        getProfile: builder.query({
            query: ()=>({
                url:"/users/profile",
                credentials: "include",
            })
        }),
        forgotPassword: builder.mutation({
            query:(data)=>({
              url:'/forgot-password',
              method:'POST',
              credentials:'include',
              body: data,  
            })
        }),
        resetPassword: builder.mutation({
            query:({ data, reset_code})=>({
              url:`/reset-password/${ reset_code}`,
              method:'POST',
              credentials:'include',
              body: data,  
            })
        })
    })
})

export const {
    useLoginUserMutation,
    useSignupUserMutation,
    useGetProfileQuery,
    useLogoutUserMutation,
    useForgotPasswordMutation,
    useResetPasswordMutation
} = authenticationSlice
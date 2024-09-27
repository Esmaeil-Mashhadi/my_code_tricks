'use client'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"

function layout({children}) {
    const client = new QueryClient()
    // we can also give some deafult options 
    /**
     * const client = new Queryclinet({defaultOption : {queries : {
     *  refrechOnWindowFocus:false , and etc ...
     * }}})
     */

    // if we want to send post request by useMutation again to fetch new data 

    /**
     * const {mutate , isLoading , error , data} = useMutation(function , {
     * onSuccess : ()=> querClient.invalidateQueries("name of query we get data") // it says invalidate it to fetch 
     * it again
     * })
     * 
     * 
     */
 return (
    <QueryClientProvider client={client}>
    <ReactQueryDevtools initialIsOpen={true} />
    {children}
    </QueryClientProvider>
  )
}

export default layout
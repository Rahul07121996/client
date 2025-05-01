import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import agent from './api/agent';
export const useActivites =() =>{

    const queryClient  = useQueryClient(); 
    const {data:activities,isPending} = useQuery({
        queryKey:['activities'],
        queryFn:async ()=> {
          const response = await agent.get("/Activities");
          return response.data;
        }
      });

      const updateActivity = useMutation({
         mutationFn:async (activity) =>{
             await agent.put('/Activities', activity)
         },
         onSuccess:async()=>{
            await queryClient.invalidateQueries({
                queryKey:['activities']
            })
         }
      })

      return{
        activities,
        isPending,
        updateActivity
      }
}
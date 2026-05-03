import { useMutation ,useQueryClient} from "@tanstack/react-query";
import { createEditCabin } from "../../services/ApiCabins";
import toast from "react-hot-toast";
export function useCreateCabin() {
   const queryClient = useQueryClient();

  // CREATE CABIN
  const { mutate: createCabin, isPending: isCreating } = useMutation({
    mutationFn: (data) => createEditCabin(data),
    onSuccess: () => {
      toast.success("New cabin successfully created");
      queryClient.invalidateQueries({ queryKey: ["cabins"] });
      
    },
    onError: (err) => toast.error(err.message),
  });
  return{ isCreating , createCabin }
}

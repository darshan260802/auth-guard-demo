import { createActionGroup, props } from "@ngrx/store";
import { User } from "./user.reducer";


export const userActions = createActionGroup({
    source:'User',
    events:{
        'Update User': props<Partial<User>>(),
        'Remove User': props<any>()
    }
})
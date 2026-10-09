import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
        "name":"userData",
        initialState:{
              vehiclecomplaints:[],
              signData:[],
              isLoggedin:false,
             objId:'',
             policeStationId:''

        },
        reducers:{ 
            vehiclecomplaints(state,action){
              state.vehiclecomplaints.push(action.payload);
            },
            objId(state,action){
              state.objId = action.payload;
            },
            policeStationId(state,action){
                state.policeStationId=action.payload; 
            },
            signData(state,action){
                state.signData.push(action.payload);
            },
            login(state){
              
                state.isLoggedin=true
               
         },
         logout(state) {
             state.vehiclecomplaints=[]
             state.signData=[]
            state.isLoggedin = false
           
          }
        }
})
export default userSlice.reducer;
export const {login,logout,vehiclecomplaints,objId,policeStationId,signData}=userSlice.actions;
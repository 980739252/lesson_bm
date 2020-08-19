import React from 'react';

export default function(props){
   const{path,component:Com}=props;
   return (windows.location.pathname ===path
   ?<Com/>:null)
}
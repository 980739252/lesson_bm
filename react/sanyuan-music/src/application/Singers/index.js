import React, { useEffect, useRef, memo } from 'react';
import { connect } from 'react-redux';
import {NavContainer} from './style'
import {categoryTypes,alphaTypes} from '../../api/config';
function Singers (props) {
    const handleUpdateAlpha =()=>{

    }
    const handleUpdateCategory =()=>{
        
    }
  return (
    <div>
        <NavContainer>
             <Horizen title="分类(默认热门) ：" list={categoryTypes} handleClick={(v)=>handleUpdateCategory(v)}/>
             <Horizen title="首字母" lsit={alphaTypes } handleClick={(v)=>handleUpdateAlpha(v)}/>
        </NavContainer>
    </div>
  )
}

const mapStateToProps = (state) => ({
   return()

})
const matDispatchToProps = (dispatch) => {
  return {
    
  }
}
export default connect(mapStateTopProps, matDispatchToProps)(memo(Singers));
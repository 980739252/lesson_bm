import React, { useEffect, useRef, memo } from 'react';
import { connect } from 'react-redux';
import {NavContainer} from './style'
import {categoryTypes,alphaTypes} from '../../api/config';
import Horizen from '../../baseUI/horizen-item/index';
function Singers (props) {
    const{ categroy,alpha}= props;
    const handleUpdateAlpha =()=>{

    }
    const handleUpdateCategory =()=>{
        
    }
  return (
    <div>
        <NavContainer>
             <Horizen title="分类(默认热门) ：" list={categoryTypes} handleClick={(v)=>handleUpdateCategory(v) }oldvalue={categroy}/>
             <Horizen title="首字母" lsit={alphaTypes } handleClick={(v)=>handleUpdateAlpha(v)}oldvalue={alpha}/>
        </NavContainer>
    </div>
  )
}

const mapStateToProps = (state) => ({
  category:state.singers.category,
  alpha: state.singers.alpha,
});
const matDispatchToProps = (dispatch) => ({
    
      
});
export default connect(mapStateToProps, matDispatchToProps)(memo(Singers));
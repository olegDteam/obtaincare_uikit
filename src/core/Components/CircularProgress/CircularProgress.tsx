import React from "react";
import {
  CircularProgress as CircularProgressBase,
  styled,
  CircularProgressProps as CircularProgressPropsBase,
  Typography
} from '@mui/material'
import {colors} from "../../Theme";

export type CircularProgressProps = Pick<CircularProgressPropsBase, 'value' | 'size'>

const CircularProgressWrapper = styled('div')`
  position: absolute;
  display: inline-flex;
`

const FrontCircle = styled((props: CircularProgressPropsBase) => <CircularProgressBase
  value={props.value}
  size={props.size}
  variant={"determinate"}
  thickness={5}
  {...props}
/>)`
  && {
    z-index: 2;
  }

  .MuiCircularProgress-circle {
    color: ${colors.secondary.main};
    stroke-linecap: round;
  }
`

const Value = styled((props) => <Typography variant={'h5'} {...props}/>)`
  && {
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

const BackCircle = styled((props: CircularProgressPropsBase) => {
  return <CircularProgressBase
    value={100}
    size={props.size}
    variant={"determinate"}
    thickness={5}
    {...props}
  />
})`
  && {
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
  }

  .MuiCircularProgress-circle {
    color: ${colors.additional.main};
  }
`

const CircularProgress: React.FC<CircularProgressProps> = ({value, size}) => {
  return <CircularProgressWrapper>

    <FrontCircle value={value} size={size}/>
    <BackCircle size={size}/>
    <Value>
      {value}%
    </Value>
  </CircularProgressWrapper>
}

export default CircularProgress
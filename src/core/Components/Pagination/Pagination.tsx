import {styled,Pagination as PaginationBase, PaginationProps as PaginationPropsBase} from "@mui/material";
import React from "react";
import {colors} from "../../Theme/theme";

export type PaginationProps = Omit<PaginationPropsBase, 'shape' | 'variant'>

const PaginationStyled = styled((props: PaginationProps) => (
  <PaginationBase shape={"rounded"} color={props.color??'secondary'} variant={"outlined"} {...props}/>))`
  .MuiPaginationItem-outlinedPrimary {
    width: 50px;
    height: 50px;
    border: 2px solid ${colors.paginationBorder};
    color: ${colors.text.green};
    font-size: 16px;
    line-height: 19.2px;
    font-weight: 700;
  }

  .MuiPaginationItem-outlinedSecondary {
    width: 50px;
    height: 50px;
    border: 2px solid ${colors.paginationBorder};
    color: ${colors.text.blue};
    font-size: 16px;
    line-height: 19.2px;
    font-weight: 700;
  }

  .MuiPaginationItem-previousNext {
    background-color: ${colors.paginationPrevNextBG};
    border: none;
  }

  .MuiPaginationItem-root {
    &.MuiPaginationItem-ellipsis {
      padding-top: 16px;
    }
    &.MuiPaginationItem-outlinedPrimary {
      &.Mui-selected {
        border: none;
        background-color: ${colors.primary.main};
        color: ${colors.white}
      }
    }

    &.MuiPaginationItem-outlinedSecondary {
      &.Mui-selected {
        border: none;
        background-color: ${colors.secondary.main};
        color: ${colors.white}
      }
    }
  }
`;

const Pagination: React.FC<PaginationProps> = (props) => {
  return <PaginationStyled {...props}/>
}

export default Pagination
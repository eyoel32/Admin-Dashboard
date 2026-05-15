import styled,{css}from "styled-components"
const Row=styled.div`
display: flex;
background-color: var(--color-grey-0);

${props => props.type === 'horizontal' && 
    css ` 
        justify-content: space-between;
        align-items: center
      
  `}
  ${props => props.type === 'vertical' && 
    css ` 
        flex-direction: column;
        align-items: stretch;
        gap: 1.6rem;
        width: 100%;
      
  `}
 
`
export default Row

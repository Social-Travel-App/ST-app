import styled from '@emotion/styled'
import { Button } from '@mui/material'

const CustomMuiButton = styled(Button)`
  background-color: ${(props: any) => props.theme.colors.black_700};
  color: white;
`

export default CustomMuiButton

import React from 'react'
import { Stack } from '@mui/system'
import { catagories } from '../utils/constants';

const SideBar = ({selectedCatagory, selectedCatagory}) => {
  return (
    <Stack direction="row" sx={{
        overflowY:"auto",
        height:{sx:"auto", md:"95%"},
        flexDirection:{md:"column"}
    }}>
        {
            catagories.map((catagory)=>{
                return (
                    <Botton className='catagory-btn' style={{
                        background:'#fc1503'
                    }}key={catagory.name}
                    >
                        <span style={{color:catagory.name == selectedCatagory}}>

                        </span>

                    </Botton>
                )
            })
        }
    </Stack>
  )
}

export default SideBar

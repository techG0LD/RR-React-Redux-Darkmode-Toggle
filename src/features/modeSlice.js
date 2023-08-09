import { createSlice} from '@reduxjs/toolkit'



const mode1 = {
    darkMode: true,
    color1: '#293132',
    color2: '#474044',
    color3: '#4F5165',
    color4: '#547AA5',
    color5: '#50D8D7',
    photo: 'https://www.wweek.com/resizer/86tt-U3ytIrtb7bBYXAIg7XWz7A=/1200x0/filters:quality(100)/s3.amazonaws.com/arc-wordpress-client-uploads/wweek/wp-content/uploads/2019/08/30145212/Nicolas-Cage.jpg'
}

const mode2 = {
    darkMode: false,
    color1: '#6E44FF',
    color2: '#B892FF',
    color3: '#FFC2E2',
    color4: '#FF90B3',
    color5: '#EF7A85',
    photo: 'https://placekitten.com/200/200'
}
const initialState = mode2

export const modeSlice= createSlice({
    name:'mode',
    initialState,
    reducers: {
        darkMode: () => {
            return mode1
        },
        lightMode: ()=> {
            return mode2
        }
    }
})

export const {darkMode,lightMode} = modeSlice.actions

export default modeSlice.reducer